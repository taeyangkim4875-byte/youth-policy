import type { Policy, UserCondition } from './types';

/** 신청 마감일이 지났는지 확인 */
function isExpired(p: Policy): boolean {
  if (!p.apply_end) return false;
  const end = new Date(p.apply_end);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return end < today;
}

/**
 * org_name에서 시군구 추출
 * 예: "경기도 평택시 기획항만경제실" → "평택시"
 *     "서울특별시 관악구" → "관악구"
 */
function extractCityFromOrg(orgName: string | null): string | null {
  if (!orgName) return null;
  // "시", "군", "구"로 끝나는 단어 찾기
  const match = orgName.match(/([\uAC00-\uD7A3]+[시군구])\b/g);
  if (!match) return null;
  // 광역시/특별시 자체는 제외 (서울특별시, 부산광역시 등)
  const cities = match.filter(m =>
    !m.endsWith('특별시') &&
    !m.endsWith('광역시') &&
    !m.endsWith('특별자치시')
  );
  return cities.length > 0 ? cities[0] : null;
}

/**
 * 정책이 사용자 지역과 매칭되는지 판단
 * 반환: 'exact' (시군구 일치) | 'sido' (시도 일치) | 'national' (전국) | false
 */
function matchesRegion(
  p: Policy,
  sido: string,
  sigungu: string
): 'exact' | 'sido' | 'national' | false {
  const regions = p.regions || [];

  // 지역 정보 없으면 전국으로 간주
  if (regions.length === 0) return 'national';

  // 전국 정책
  if (regions.includes('전국')) return 'national';

  // 시도 매칭
  const sidoShort = sido.replace(/특별시|광역시|특별자치시|특별자치도|도$/g, '').slice(0, 2);
  const sidoMatched = regions.some(r => {
    if (r === sido) return true;
    if (r.startsWith(sidoShort)) return true;
    return false;
  });

  if (!sidoMatched) return false;

  // 시도는 매칭됨 → 시군구 세부 확인
  // org_name에서 시군구 추출하여 비교
  if (sigungu) {
    const orgCity = extractCityFromOrg(p.org_name);
    if (orgCity) {
      // org에 특정 시군구가 명시되어 있으면 사용자 시군구와 비교
      if (orgCity === sigungu || sigungu.includes(orgCity.replace(/[시군구]$/, ''))) {
        return 'exact';
      }
      // org의 시군구가 사용자와 다르면 → 시도 레벨 매칭만
      return 'sido';
    }
  }

  // org에 시군구 정보 없으면 시도 전체 정책으로 간주
  return 'sido';
}

export function matchPolicies(policies: Policy[], cond: UserCondition): Policy[] {
  const currentYear = new Date().getFullYear();
  const age = currentYear - cond.birthYear;

  const results: { policy: Policy; regionScore: number }[] = [];

  for (const p of policies) {
    if (p.status !== 'active') continue;
    if (isExpired(p)) continue;

    // Age check
    if (p.min_age != null && age < p.min_age) continue;
    if (p.max_age != null && age > p.max_age) continue;

    // Region check
    const regionMatch = matchesRegion(p, cond.sido, cond.sigungu);
    if (regionMatch === false) continue;

    // 다른 시군구 특화 정책은 제외 (org에 다른 시군구가 명시된 경우)
    if (regionMatch === 'sido' && cond.sigungu) {
      const orgCity = extractCityFromOrg(p.org_name);
      if (orgCity && orgCity !== cond.sigungu) {
        // 시도 전체 정책(org에 시군구 없는)은 통과, 다른 시군구 정책은 제외
        const orgCityClean = orgCity.replace(/[시군구]$/, '');
        const userCityClean = cond.sigungu.replace(/[시군구]$/, '');
        if (orgCityClean !== userCityClean) continue;
      }
    }

    // Employment check
    if (p.employment && p.employment.length > 0) {
      if (!p.employment.includes(cond.employment) && !p.employment.includes('무관')) {
        continue;
      }
    }

    // Income check
    if (p.income_pct != null && cond.incomePct > p.income_pct) {
      continue;
    }

    // Education check
    if (p.education && cond.education) {
      const eduRank: Record<string, number> = {
        '고졸 이하': 1, '고졸': 1, '대학 재학': 2, '대졸': 3, '석박사': 4,
      };
      const userRank = eduRank[cond.education] || 0;
      const policyEdu = p.education;
      // "대졸 이상" 같은 조건이면 사용자 학력이 미달이면 제외
      if (policyEdu.includes('대졸') && !policyEdu.includes('이하') && userRank < 3) continue;
      if (policyEdu.includes('석박사') && userRank < 4) continue;
    }

    // Marriage check
    if (p.marriage && cond.married !== undefined) {
      if (p.marriage === '미혼' && cond.married === true) continue;
      if (p.marriage === '기혼' && cond.married === false) continue;
    }

    // Housing check
    if (cond.homeless === false && p.housing_req === '무주택') {
      continue;
    }

    // Category / interests check
    if (cond.interests && cond.interests.length > 0) {
      // interests가 있으면 해당 카테고리 우선 (but don't filter out)
    } else if (cond.category && cond.category !== '전체') {
      if (p.category !== cond.category) continue;
    }

    // 정렬 점수: exact(시군구 일치)=3, sido(시도)=2, national(전국)=1
    const regionScore = regionMatch === 'exact' ? 3 : regionMatch === 'sido' ? 2 : 1;
    results.push({ policy: p, regionScore });
  }

  // 정렬: 지역 근접도 → 실질 혜택 금액 → 마감 임박
  const now = Date.now();
  results.sort((a, b) => {
    // 1) 지역 근접도 (내 시군구 > 내 시도 > 전국)
    if (b.regionScore !== a.regionScore) return b.regionScore - a.regionScore;

    // 2) 실질 혜택 금액
    const aAmt = annualBenefit(a.policy);
    const bAmt = annualBenefit(b.policy);
    if (bAmt !== aAmt) return bAmt - aAmt;

    // 3) 마감 임박 우선
    const aEnd = a.policy.apply_end ? new Date(a.policy.apply_end).getTime() - now : Infinity;
    const bEnd = b.policy.apply_end ? new Date(b.policy.apply_end).getTime() - now : Infinity;
    return aEnd - bEnd;
  });

  return results.map(r => r.policy);
}

/** 정책의 연간 실질 혜택 금액 추정 (원 단위) */
export function annualBenefit(p: Policy): number {
  // 대출 제외
  if (p.benefit_type === 'loan') return 0;

  // 창업지원금 등 고액 1회성은 일반인 기준 비현실적이므로 합산에서 제외
  if (p.benefit_total && p.benefit_total > 6000000) return 0;

  if (p.benefit_monthly) {
    // 월 50만원 초과는 특수 정책 (자립준비청년 등)
    if (p.benefit_monthly > 500000) return 0;
    const months = p.benefit_duration || 12;
    return p.benefit_monthly * Math.min(months, 12);
  }

  if (p.benefit_total) {
    return p.benefit_total;
  }

  return 0;
}
