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

function truncate(str: string, max: number) {
  if (str.length <= max) return str;
  return str.slice(0, max) + '…';
}

export default function PolicyCard({ policy: p }: { policy: Policy }) {
  const colorClass = CATEGORY_COLORS[p.category] || 'bg-primary-bg text-primary';
  const dd = dDay(p.apply_end);

  return (
    <Link
      href={`/policy/${p.id}`}
      className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 hover:shadow-sm transition-all no-underline group"
    >
      {/* 상단: 카테고리 + 마감임박 + 지역 */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${colorClass}`}>
          {p.category}
        </span>
        {p.regions && p.regions.length > 0 && (
          <span className="text-[10px] font-medium text-muted px-1.5 py-0.5 rounded-md bg-[#f3f5f9]">
            {p.regions.includes('전국') ? '전국' : p.regions[0]}
          </span>
        )}
        {dd && (
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-bg text-amber ml-auto">
            {dd}
          </span>
        )}
      </div>

      {/* 정책명 */}
      <h3 className="text-[14px] font-extrabold text-text leading-snug mb-1 group-hover:text-primary transition-colors">
        {p.name}
      </h3>

      {/* 요약 */}
      <p className="text-[12px] text-muted leading-relaxed mb-2 line-clamp-2">
        {p.summary}
      </p>

      {/* 하단: 혜택 + 메타 */}
      <div className="flex items-end justify-between gap-2">
        {p.benefit && (
          <span className="text-[11px] font-bold text-green leading-tight">
            {truncate(p.benefit, 40)}
          </span>
        )}
        <div className="flex items-center gap-2 text-[10px] text-muted shrink-0">
          {p.org_name && <span>{p.org_name}</span>}
          {p.min_age != null && p.max_age != null && (
            <span>{p.min_age}~{p.max_age}세</span>
          )}
        </div>
      </div>
    </Link>
  );
}
