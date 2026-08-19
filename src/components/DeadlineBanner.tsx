'use client';

import Link from 'next/link';
import type { Policy } from '@/lib/types';

interface DeadlineBannerProps {
  policies: Policy[];
}

export default function DeadlineBanner({ policies }: DeadlineBannerProps) {
  const now = new Date();
  const sevenDaysLater = new Date(now);
  sevenDaysLater.setDate(now.getDate() + 7);

  const urgent = policies
    .filter((p) => {
      if (p.status !== 'active' || !p.apply_end) return false;
      const end = new Date(p.apply_end);
      return end >= now && end <= sevenDaysLater;
    })
    .sort((a, b) => {
      const aEnd = new Date(a.apply_end!).getTime();
      const bEnd = new Date(b.apply_end!).getTime();
      return aEnd - bEnd;
    })
    .slice(0, 5);

  if (urgent.length === 0) return null;

  function getDDay(apply_end: string): string {
    const end = new Date(apply_end);
    const diff = Math.ceil(
      (end.setHours(23, 59, 59, 999) - Date.now()) / (1000 * 60 * 60 * 24)
    );
    if (diff <= 0) return 'D-day';
    return `D-${diff}`;
  }

  return (
    <div className="mb-5 rounded-[var(--radius)] border border-amber-300 bg-amber-50 px-3.5 py-3">
      <p className="text-[12px] font-bold text-amber-700 mb-2">
        이번 주 마감 정책{' '}
        <span className="text-amber-900">{urgent.length}건</span>
      </p>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {urgent.map((policy) => (
          <Link
            key={policy.id}
            href={`/policy/${policy.id}`}
            className="no-underline flex-shrink-0 flex flex-col justify-between bg-surface border border-line rounded-[var(--radius)] p-2.5 w-[160px] hover:border-amber-400 transition-colors"
          >
            <p className="text-[12px] font-semibold text-text leading-tight line-clamp-2 mb-1.5">
              {policy.name}
            </p>
            <div className="flex items-center gap-1 flex-wrap">
              <span className="inline-block text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-300 rounded px-1 py-0.5">
                {getDDay(policy.apply_end!)}
              </span>
              <span className="inline-block text-[10px] text-muted bg-surface border border-line rounded px-1 py-0.5 truncate max-w-[80px]">
                {policy.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
