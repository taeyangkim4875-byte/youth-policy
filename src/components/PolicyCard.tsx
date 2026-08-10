import Link from 'next/link';
import type { Policy } from '@/lib/types';

const CATEGORY_COLORS: Record<string, string> = {
  '주거': 'bg-primary-bg text-primary',
  '취업': 'bg-[#e0f2fe] text-[#0369a1]',
  '금융·자산': 'bg-green-bg text-green',
  '교육': 'bg-[#f3e8ff] text-[#7c3aed]',
  '복지·문화': 'bg-[#fce7f3] text-[#be185d]',
};

function dDay(dateStr: string | null) {
  if (!dateStr) return null;
  const diff = Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86400000);
  if (diff < 0) return null;
  if (diff <= 14) return `D-${diff}`;
  return null;
}

export default function PolicyCard({ policy: p }: { policy: Policy }) {
  const colorClass = CATEGORY_COLORS[p.category] || 'bg-primary-bg text-primary';
  const dd = dDay(p.apply_end);

  return (
    <Link
      href={`/policy/${p.id}`}
      className="block bg-surface border border-line rounded-[var(--radius)] p-4 hover:border-primary/40 transition-colors no-underline"
    >
      <div className="flex items-center gap-1.5 mb-2">
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${colorClass}`}>
          {p.category}
        </span>
        {dd && (
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-bg text-amber">
            {dd} 마감임박
          </span>
        )}
      </div>

      <h3 className="text-[15px] font-extrabold text-text leading-snug mb-1">{p.name}</h3>

      {p.benefit && (
        <div className="inline-flex items-center gap-1 bg-green-bg text-green text-[12px] font-bold px-2 py-1 rounded-lg mt-1.5 mb-2">
          💰 {p.benefit}
        </div>
      )}

      <div className="flex flex-wrap gap-x-3 text-[11px] text-muted font-medium">
        {p.org_name && <span>{p.org_name}</span>}
        {p.regions && p.regions.length > 0 && (
          <span>{p.regions.includes('전국') ? '전국' : p.regions[0]}</span>
        )}
        {p.min_age != null && p.max_age != null && (
          <span>만 {p.min_age}~{p.max_age}세</span>
        )}
      </div>
    </Link>
  );
}
