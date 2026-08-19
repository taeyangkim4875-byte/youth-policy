import type { Policy, UserCondition } from './types';
import { annualBenefit } from './matching';

interface Pick {
  idx: number;
  reason: string;
  priority: '높음' | '보통';
}

export interface SmartResult {
  picks: Pick[];
  tip: string;
}

const SIDO_NAMES = [
  '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
  '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
];

/** 사용자 시도의 짧은 이름 (경기도→경기, 서울특별시→서울) */
function sidoShort(sido: string): string {
  return sido.replace(/특별시|광역시|특별자치시|특별자치도|도$/g, '').slice(0, 2);
}

/** 정책이 사용자 지역과 얼마나 관련 있는지 판별 */
function regionRelevance(p: Policy, cond: UserCondition): 'my_city' | 'my_sido' | 'national' | 'other_region' {
  const orgName = p.org_name || '';
  const pName = p.name || '';
  const combined = orgName + ' ' + pName;
  const regions = p.regions || [];
  const userSido = sidoShort(cond.sido);

  // 1) org_name/정책명에 다른 시도가 명시되어 있으면 other_region
  for (const s of SIDO_NAMES) {
    if (s === userSido) continue;
    if (combined.includes(s)) {
      // 해당 시도가 regions에도 있으면 확실히 다른 지역
      // 또는 org_name에 포함되면 다른 지역
      if (orgName.includes(s)) return 'other_region';
      // 정책명에만 있는 경우 (예: "부산형 ~~") 도 다른 지역
      if (pName.startsWith(s) || pName.includes(s + ' ') || pName.includes(s + '시') || pName.includes(s + '도')) {
        return 'other_region';
      }
    }
  }

  // 2) org_name에서 시군구 추출 → 다른 시군구면 other_region
  if (cond.sigungu) {
    const cityMatch = orgName.match(/([\uAC00-\uD7A3]+[시군구])/g);
    if (cityMatch) {
      const cities = cityMatch.filter(m =>
        !m.endsWith('특별시') && !m.endsWith('광역시') && !m.endsWith('특별자치시')
      );
      if (cities.length > 0) {
        const userCity = cond.sigungu.replace(/[시군구]$/, '');
        const isMyCity = cities.some(c => c.includes(userCity) || userCity.includes(c.replace(/[시군구]$/, '')));
        if (isMyCity) return 'my_city';
        return 'other_region'; // 다른 시군구 특화 정책
      }
    }
  }

  // 3) regions 체크
  if (regions.length === 0 || regions.includes('전국')) return 'national';
  const sidoMatched = regions.some(r => r === cond.sido || r.startsWith(userSido));
  if (sidoMatched) return 'my_sido';

  return 'other_region';
}

/** 규칙 기반 TOP 5 스마트 추천 */
export function smartRecommend(policies: Policy[], cond: UserCondition): SmartResult {
  if (policies.length === 0) return { picks: [], tip: '' };

  const scored = policies.map((p, idx) => {
    let score = 0;
    const reasons: string[] = [];

    // ★ 지역 (최우선 — 다른 지역은 절대 추천 안 함)
    const region = regionRelevance(p, cond);
    if (region === 'other_region') {
      return { idx, score: -999, reason: '', priority: '보통' as const };
    }
    if (region === 'my_city') {
      score += 50;
      reasons.push(`${cond.sigungu} 지역 정책`);
    } else if (region === 'my_sido') {
      score += 30;
      reasons.push(`${sidoShort(cond.sido)} 지역 정책`);
    } else {
      score += 5; // 전국
    }

    // 관심 분야
    if (cond.interests?.includes(p.category)) {
      score += 25;
      reasons.push(`관심 분야(${p.category})`);
    }

    // 실질 혜택 금액
    const benefit = annualBenefit(p);
    if (benefit >= 2400000) {
      score += 20;
      reasons.push(`연 ${Math.round(benefit / 10000)}만원 혜택`);
    } else if (benefit >= 1000000) {
      score += 12;
      reasons.push(`연 ${Math.round(benefit / 10000)}만원 혜택`);
    } else if (benefit > 0) {
      score += 3;
    }

    // 마감 임박
    if (p.apply_end) {
      const daysLeft = Math.ceil((new Date(p.apply_end).getTime() - Date.now()) / 86400000);
      if (daysLeft >= 0 && daysLeft <= 30) {
        score += 15;
        reasons.push(`마감 ${daysLeft}일 남음`);
      } else if (daysLeft >= 0 && daysLeft <= 60) {
        score += 5;
      }
    }

    // 무주택 + 주거
    if (cond.homeless === true && p.category === '주거') {
      score += 10;
      if (!reasons.some(r => r.includes('관심') || r.includes('지역'))) {
        reasons.push('무주택자 주거 지원');
      }
    }

    // 취업 상태
    if (p.employment?.includes(cond.employment)) {
      score += 5;
    }

    // 대출 감점
    if (p.benefit_type === 'loan') {
      score -= 10;
    }

    const reason = reasons.length > 0 ? reasons.slice(0, 2).join(' · ') : p.category + ' 분야 정책';
    const priority: '높음' | '보통' = score >= 40 ? '높음' : '보통';

    return { idx, score, reason, priority };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter(s => s.score > 0).slice(0, 5);

  // 조언 생성
  const tips: string[] = [];
  const localCount = top.filter(t => {
    const rel = regionRelevance(policies[t.idx], cond);
    return rel === 'my_city' || rel === 'my_sido';
  }).length;
  if (localCount > 0) {
    tips.push(`${cond.sigungu || sidoShort(cond.sido)} 관련 정책 ${localCount}건 포함`);
  }
  const deadlineSoon = top.filter(t => {
    const p = policies[t.idx];
    if (!p.apply_end) return false;
    const d = Math.ceil((new Date(p.apply_end).getTime() - Date.now()) / 86400000);
    return d >= 0 && d <= 30;
  });
  if (deadlineSoon.length > 0) {
    tips.push(`${deadlineSoon.length}건은 곧 마감이니 서둘러 신청하세요`);
  }
  if (tips.length === 0) {
    tips.push('조건에 맞는 정책을 우선순위로 정리했어요');
  }

  return {
    picks: top.map(t => ({ idx: t.idx, reason: t.reason, priority: t.priority })),
    tip: tips.join('. ') + '.',
  };
}
