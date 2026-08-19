'use client';

import { useState, useMemo } from 'react';
import { annualBenefit } from '@/lib/matching';
import type { Policy } from '@/lib/types';

const CAT_COLORS: Record<string, string> = {
  '주거': 'bg-primary-bg text-primary',
  '취업': 'bg-[#e0f2fe] text-[#0369a1]',
  '금융·자산': 'bg-green-bg text-green',
  '교육': 'bg-[#f3e8ff] text-[#7c3aed]',
  '복지·문화': 'bg-[#fce7f3] text-[#be185d]',
};

function formatMoneyFull(amount: number): string {
  if (amount >= 100000000) {
    const uk = Math.floor(amount / 100000000);
    const man = Math.round((amount % 100000000) / 10000);
    return man > 0 ? `${uk}억 ${man.toLocaleString()}만` : `${uk}억`;
  }
  if (amount >= 10000) return `${Math.round(amount / 10000).toLocaleString()}만`;
  return amount.toLocaleString();
}

const MAX_SELECTABLE = 10;

export default function PolicySimulator({ policies }: { policies: Policy[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (next.size >= MAX_SELECTABLE) return prev;
        next.add(id);
      }
      return next;
    });
  };

  const selectedPolicies = useMemo(
    () => policies.filter(p => selected.has(p.id)),
    [policies, selected]
  );

  const { totalBenefit, loanCount, warnings } = useMemo(() => {
    let total = 0;
    let loans = 0;

    // Check for incompatible pairs: same category AND same subcategory
    const subcatGroups: Record<string, Policy[]> = {};

    for (const p of selectedPolicies) {
      const amt = annualBenefit(p);
      if (p.benefit_type === 'loan') {
        loans++;
      } else if (amt > 0) {
        total += amt;
      }

      if (p.subcategory) {
        const key = `${p.category}||${p.subcategory}`;
        if (!subcatGroups[key]) subcatGroups[key] = [];
        subcatGroups[key].push(p);
      }
    }

    const warns: string[] = [];
    for (const group of Object.values(subcatGroups)) {
      if (group.length >= 2) {
        warns.push('같은 유형의 정책은 중복 수혜가 제한될 수 있습니다');
        break;
      }
    }

    return { totalBenefit: total, loanCount: loans, warnings: warns };
  }, [selectedPolicies]);

  const n = selected.size;

  return (
    <div className="bg-surface border border-line rounded-[var(--radius)] overflow-hidden">
      {/* Summary card */}
      <div className={`px-4 py-3 ${n > 0 ? 'bg-primary-bg border-b border-line' : 'border-b border-line'}`}>
        {n === 0 ? (
          <p className="text-[13px] text-muted font-medium">
            아래에서 정책을 선택하면 합산 혜택을 계산합니다
          </p>
        ) : (
          <>
            <p className="text-[13px] font-extrabold text-primary">
              선택한 {n}건&nbsp;·&nbsp;연 최대 약&nbsp;
              <span className="text-[15px]">{formatMoneyFull(totalBenefit)}원</span>
            </p>
            {loanCount > 0 && (
              <p className="text-[11px] text-muted mt-0.5">
                대출/보증 {loanCount}건은 금액에 미포함
              </p>
            )}
          </>
        )}
      </div>

      {/* Warning */}
      {warnings.length > 0 && (
        <div className="flex items-start gap-2 px-4 py-2.5 bg-amber-bg border-b border-line">
          <span className="text-amber text-[13px] mt-px">⚠</span>
          <p className="text-[12px] text-amber font-semibold leading-snug">
            {warnings[0]}
          </p>
        </div>
      )}

      {/* Policy list */}
      <ul className="divide-y divide-line">
        {policies.map(p => {
          const isSelected = selected.has(p.id);
          const amt = annualBenefit(p);
          const isLoan = p.benefit_type === 'loan';
          const catColor = CAT_COLORS[p.category] || 'bg-primary-bg text-primary';
          const truncatedName =
            p.name.length > 25 ? p.name.slice(0, 24) + '…' : p.name;
          const atMax = selected.size >= MAX_SELECTABLE && !isSelected;

          return (
            <li key={p.id}>
              <label
                className={`flex items-center gap-2.5 px-3 py-2.5 cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-primary-bg'
                    : atMax
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-[var(--color-bg)]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  disabled={atMax}
                  onChange={() => toggle(p.id)}
                  className="w-4 h-4 accent-[var(--color-primary)] shrink-0"
                />
                <span className="flex-1 text-[12px] font-semibold text-text leading-snug truncate">
                  {truncatedName}
                </span>
                <span
                  className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-[var(--radius-sm)] ${catColor}`}
                >
                  {p.category}
                </span>
                <span className="shrink-0 text-[11px] font-semibold text-muted w-[64px] text-right">
                  {isLoan
                    ? '대출'
                    : amt > 0
                    ? `연 ${formatMoneyFull(amt)}원`
                    : '금액 미정'}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {policies.length === 0 && (
        <p className="text-center text-[12px] text-muted py-6">
          매칭된 정책이 없습니다.
        </p>
      )}

      <div className="px-4 py-2 border-t border-line">
        <p className="text-[10px] text-muted">
          최대 {MAX_SELECTABLE}개 선택 · 정책별 최대 금액 단순 합산 기준이며, 실제 수혜 여부는 각 정책 조건을 확인하세요
        </p>
      </div>
    </div>
  );
}
