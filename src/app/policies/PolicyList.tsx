'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PolicyCard from '@/components/PolicyCard';
import type { Policy } from '@/lib/types';

const CATEGORIES = ['전체', '주거', '취업', '금융·자산', '교육', '복지·문화'];

export default function PolicyList({ policies }: { policies: Policy[] }) {
  const searchParams = useSearchParams();
  const catFromUrl = searchParams.get('cat') || '전체';
  const [activeCat, setActiveCat] = useState(catFromUrl);

  const filtered = useMemo(() => {
    const active = policies.filter((p) => p.status === 'active');
    if (activeCat === '전체') return active;
    return active.filter((p) => p.category === activeCat);
  }, [policies, activeCat]);

  const catCounts = useMemo(() => {
    const counts: Record<string, number> = { '전체': 0 };
    policies.forEach((p) => {
      if (p.status !== 'active') return;
      counts['전체']++;
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [policies]);

  return (
    <>
      {/* 카테고리 필터 */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-none">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCat(c)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-colors ${
              activeCat === c
                ? 'bg-primary-bg border-primary/30 text-primary'
                : 'border-line text-muted hover:border-primary/30'
            }`}
          >
            {c} {catCounts[c] ? `${catCounts[c]}` : ''}
          </button>
        ))}
      </div>

      {/* 정책 목록 */}
      <div className="flex items-center justify-between mb-2 mt-1">
        <h2 className="text-[16px] font-extrabold">
          {activeCat === '전체' ? '전체' : activeCat} 정책{' '}
          <span className="text-primary">{filtered.length}건</span>
        </h2>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-[13px] text-muted">해당 분야의 정책이 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((p) => (
            <PolicyCard key={p.id} policy={p} />
          ))}
        </div>
      )}

      <div className="mt-4 p-3 bg-surface border border-line rounded-[var(--radius-sm)] text-[11px] text-muted leading-relaxed">
        본 정보는 참고용이며 최종 자격·신청은 공식 사이트에서 확인하세요.
        <br />출처: 한국고용정보원 온통청년 · 비공식 민간 서비스
      </div>
    </>
  );
}
