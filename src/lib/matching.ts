import type { Policy, UserCondition } from './types';

/** 신청 마감일이 지났는지 확인 */
function isExpired(p: Policy): boolean {
  if (!p.apply_end) return false;
  const end = new Date(p.apply_end);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return end < today;
}

/** 정책이 사용자 지역과 매칭되는지 (정확 매칭) */
function matchesRegion(p: Policy, sido: string, sigungu: string): 'local' | 'national' | false {
  const regions = p.regions || [];
  if (regions.length === 0) return 'national'; // 지역 정보 없으면 전국으로 간주

  // 전국 정책
  if (regions.includes('전국')) return 'national';

  // 시도 매칭
  const sidoShort = sido.replace(/특별시|광역시|특별자치시|특별자치도|도$/g, '').slice(0, 2);
  const matched = regions.some(r => {
    if (r === sido) return true;
    if (r.startsWith(sidoShort)) return true;
    // 시군구 매칭
    if (sigungu && r.includes(sigungu)) return true;
    return false;
  });

  return matched ? 'local' : false;
}

export function matchPolicies(policies: Policy[], cond: UserCondition): Policy[] {
  const currentYear = new Date().getFullYear();
  const age = currentYear - cond.birthYear;

  const results: { policy: Policy; regionType: 'local' | 'national' }[] = [];

  for (const p of policies) {
    if (p.status !== 'active') continue;

    // 마감된 정책 제외
    if (isExpired(p)) continue;

    // Age check
    if (p.min_age != null && age < p.min_age) continue;
    if (p.max_age != null && age > p.max_age) continue;

    // Region check
    const regionMatch = matchesRegion(p, cond.sido, cond.sigungu);
    if (regionMatch === false) continue;

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

    // Optional: housing
    if (cond.homeless === false && p.housing_req === '무주택') {
      continue;
    }

    // Optional: category
    if (cond.category && cond.category !== '전체') {
      if (p.category !== cond.category) continue;
    }

    results.push({ policy: p, regionType: regionMatch });
  }

  // 정렬: 지역 정책 먼저 → 실질 혜택 금액순 → 마감 임박 우선
  const now = Date.now();
  results.sort((a, b) => {
    // 1) 지역 정책 우선
    if (a.regionType !== b.regionType) {
      return a.regionType === 'local' ? -1 : 1;
    }

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
  if (p.benefit_type === 'loan') return 0;

  // 연 1,200만원 초과 총액은 대출/보증금일 가능성 높음
  if (p.benefit_total && p.benefit_total > 12000000) return 0;

  if (p.benefit_monthly) {
    if (p.benefit_monthly > 1000000) return 0; // 월 100만 초과 비현실적
    const months = p.benefit_duration || 12;
    return p.benefit_monthly * Math.min(months, 12);
  }

  if (p.benefit_total) {
    return p.benefit_total;
  }

  return 0;
}
