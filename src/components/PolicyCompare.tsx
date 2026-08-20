'use client';

import Link from 'next/link';
import type { Policy } from '@/lib/types';

const FIELDS: { key: string; label: string; render: (p: Policy) => string }[] = [
  { key: 'category', label: '분야', render: (p) => p.category },
  { key: 'age', label: '연령', render: (p) => p.min_age != null && p.max_age != null ? `만 ${p.min_age}~${p.max_age}세` : '제한 없음' },
  { key: 'region', label: '지역', render: (p) => p.regions?.join(', ') || '전국' },
  { key: 'income', label: '소득 조건', render: (p) => p.income_pct ? `중위 ${p.income_pct}% 이하` : '제한 없음' },
  { key: 'benefit', label: '지원 내용', render: (p) => p.benefit || '-' },
  { key: 'housing', label: '주거 요건', render: (p) => p.housing_req || '없음' },
  { key: 'how', label: '신청 방법', render: (p) => p.how_to_apply || '-' },
  { key: 'deadline', label: '마감일', render: (p) => p.apply_end?.replace(/-/g, '.') || '상시' },
  { key: 'org', label: '운영 기관', render: (p) => p.org_name || '-' },
];

export default function PolicyCompare({
  policies,
  onRemove,
  onClose,
}: {
  policies: Policy[];
  onRemove: (id: string) => void;
  onClose: () => void;
}) {
  if (policies.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-line">
          <h2 className="text-[15px] font-extrabold text-text">
            정책 비교 <span className="text-primary">{policies.length}건</span>
          </h2>
          <button
            onClick={onClose}
            className="text-[13px] text-muted hover:text-text transition-colors"
          >
            닫기
          </button>
        </div>

        {/* 비교 테이블 */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="w-[72px] shrink-0" />
                {policies.map((p) => (
                  <th key={p.id} className="px-3 py-3 text-left align-top">
                    <div className="flex items-start justify-between gap-1">
                      <Link
                        href={`/policy/${p.id}`}
                        className="text-[13px] font-extrabold text-text leading-snug hover:text-primary transition-colors no-underline"
                      >
                        {p.name}
                      </Link>
                      <button
                        onClick={() => onRemove(p.id)}
                        className="shrink-0 text-[10px] text-muted hover:text-red-500 transition-colors mt-0.5"
                      >
                        제거
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FIELDS.map((f, i) => (
                <tr key={f.key} className={i % 2 === 0 ? 'bg-[#f8f9fb]' : ''}>
                  <td className="px-3 py-2.5 text-[11px] font-bold text-muted whitespace-nowrap align-top">
                    {f.label}
                  </td>
                  {policies.map((p) => (
                    <td key={p.id} className="px-3 py-2.5 text-[12px] text-text leading-relaxed align-top">
                      {f.render(p)}
                    </td>
                  ))}
                </tr>
              ))}
              {/* 신청 링크 */}
              <tr>
                <td className="px-3 py-2.5 text-[11px] font-bold text-muted whitespace-nowrap align-top">
                  바로가기
                </td>
                {policies.map((p) => (
                  <td key={p.id} className="px-3 py-2.5 align-top">
                    <div className="flex gap-1.5">
                      <Link
                        href={`/policy/${p.id}`}
                        className="text-[11px] font-bold text-primary hover:underline no-underline"
                      >
                        상세보기
                      </Link>
                      {p.apply_url && (
                        <a
                          href={p.apply_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-green hover:underline no-underline"
                        >
                          신청하기
                        </a>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
