import type { Policy, UserCondition } from './types';

export function matchPolicies(policies: Policy[], cond: UserCondition): Policy[] {
  const currentYear = new Date().getFullYear();
  const age = currentYear - cond.birthYear;

  return policies.filter((p) => {
    if (p.status !== 'active') return false;

    // Age check
    if (p.min_age != null && age < p.min_age) return false;
    if (p.max_age != null && age > p.max_age) return false;

    // Region check
    if (p.regions && p.regions.length > 0) {
      const hasAll = p.regions.includes('전국');
      const hasSido = p.regions.some(
        (r) => cond.sido.startsWith(r) || r.startsWith(cond.sido.slice(0, 2))
      );
      const hasSigungu = p.regions.some((r) => r.includes(cond.sigungu));
      if (!hasAll && !hasSido && !hasSigungu) return false;
    }

    // Employment check
    if (p.employment && p.employment.length > 0) {
      if (!p.employment.includes(cond.employment) && !p.employment.includes('무관')) {
        return false;
      }
    }

    // Income check
    if (p.income_pct != null && cond.incomePct > p.income_pct) {
      return false;
    }

    // Optional: housing
    if (cond.homeless === true && p.housing_req === '무주택') {
      // pass — user qualifies
    } else if (cond.homeless === false && p.housing_req === '무주택') {
      return false;
    }

    // Optional: category
    if (cond.category && cond.category !== '전체') {
      if (p.category !== cond.category) return false;
    }

    return true;
  });
}
