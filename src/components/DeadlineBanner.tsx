'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Policy } from '@/lib/types';

export default function DeadlineBanner({ policies }: { policies: Policy[] }) {
  const now = new Date();
  const sevenDaysLater = new Date(now);
  sevenDaysLater.setDate(now.getDate() + 7);

  const urgent = policies
    .filter((p) => {
      if (p.status !== 'active' || !p.apply_end) return false;
      const end = new Date(p.apply_end);
      return end >= now && end <= sevenDaysLater;
    })
    .sort((a, b) => new Date(a.apply_end!).getTime() - new Date(b.apply_end!).getTime())
    .slice(0, 8);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (urgent.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % urgent.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [urgent.length]);

  if (urgent.length === 0) return null;

  const items = urgent.map((p) => {
    const diff = Math.ceil((new Date(p.apply_end!).setHours(23, 59, 59, 999) - Date.now()) / 86400000);
    const dday = diff <= 0 ? 'D-day' : `D-${diff}`;
    return { id: p.id, name: p.name, dday };
  });

  const item = items[current];

  return (
    <div className="mb-4 rounded-[var(--radius-sm)] bg-surface border border-line overflow-hidden">
      <div className="flex items-center">
        <Link href="/deadline" className="shrink-0 bg-primary text-white text-[11px] font-extrabold px-2.5 py-2 no-underline hover:bg-primary-d transition-colors">
          마감임박
        </Link>
        <div className="flex-1 overflow-hidden relative h-[36px]">
          {items.map((it, i) => (
            <Link
              key={it.id}
              href={`/policy/${it.id}`}
              className={`absolute inset-0 flex items-center gap-1.5 px-3 no-underline transition-all duration-500 ${
                i === current
                  ? 'translate-y-0 opacity-100'
                  : i === (current - 1 + items.length) % items.length
                    ? '-translate-y-full opacity-0'
                    : 'translate-y-full opacity-0'
              }`}
            >
              <span className="text-primary text-[11px] font-extrabold shrink-0">{it.dday}</span>
              <span className="text-text text-[12px] font-medium truncate hover:text-primary transition-colors">{it.name}</span>
            </Link>
          ))}
        </div>
        <Link href="/deadline" className="shrink-0 text-[10px] text-muted pr-3 no-underline hover:text-primary transition-colors">
          {urgent.length > 1 ? `${current + 1}/${items.length}` : '전체보기'}
        </Link>
      </div>
    </div>
  );
}
