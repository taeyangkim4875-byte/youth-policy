import type { Metadata } from 'next';
import { fetchAllPolicies } from '@/lib/supabase';
import PolicyCard from '@/components/PolicyCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '마감 임박 정책 | 청년정책 매칭',
  description: '곧 마감되는 청년 정책을 확인하세요. 놓치면 다음 모집까지 기다려야 합니다.',
};

export default async function DeadlinePage() {
  const policies = await fetchAllPolicies();
  // KST 기준 오늘 0시
  const now = new Date();
  const kstOffset = 9 * 60 * 60 * 1000;
  const kstToday = new Date(Math.floor((now.getTime() + kstOffset) / 86400000) * 86400000 - kstOffset);

  const urgent = policies
    .filter((p) => {
      if (p.status !== 'active' || !p.apply_end) return false;
      const end = new Date(p.apply_end + 'T23:59:59+09:00');
      return end >= now;
    })
    .map((p) => {
      const diff = Math.ceil((new Date(p.apply_end! + 'T23:59:59+09:00').getTime() - now.getTime()) / 86400000);
      return { policy: p, daysLeft: diff };
    })
    .filter((x) => x.daysLeft <= 30)
    .sort((a, b) => a.daysLeft - b.daysLeft);

  const within7 = urgent.filter((x) => x.daysLeft <= 7);
  const within30 = urgent.filter((x) => x.daysLeft > 7);

  return (
    <>
      <Link href="/" className="text-sm text-primary no-underline hover:underline mb-4 inline-block">
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        마감 임박 정책
      </h1>
      <p className="text-[13px] text-muted mb-4">
        놓치면 다음 모집까지 기다려야 합니다. 서둘러 확인하세요.
      </p>

      {within7.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[13px] font-extrabold text-text">7일 이내 마감</span>
            <span className="text-[11px] font-bold text-white bg-primary px-1.5 py-0.5 rounded">{within7.length}건</span>
          </div>
          <div className="space-y-2 mb-5">
            {within7.map(({ policy, daysLeft }) => (
              <div key={policy.id} className="relative">
                <div className="absolute top-3 right-3 z-10 text-[10px] font-bold text-white bg-amber px-1.5 py-0.5 rounded">
                  {daysLeft <= 0 ? 'D-day' : `D-${daysLeft}`}
                </div>
                <PolicyCard policy={policy} />
              </div>
            ))}
          </div>
        </>
      )}

      {within30.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[13px] font-extrabold text-text">30일 이내 마감</span>
            <span className="text-[11px] font-bold text-white bg-muted px-1.5 py-0.5 rounded">{within30.length}건</span>
          </div>
          <div className="space-y-2 mb-4">
            {within30.map(({ policy, daysLeft }) => (
              <div key={policy.id} className="relative">
                <div className="absolute top-3 right-3 z-10 text-[10px] font-bold text-primary bg-primary-bg px-1.5 py-0.5 rounded">
                  D-{daysLeft}
                </div>
                <PolicyCard policy={policy} />
              </div>
            ))}
          </div>
        </>
      )}

      {urgent.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[14px] font-semibold text-text mb-1">30일 내 마감 정책이 없습니다</p>
          <p className="text-[12px] text-muted">정책이 새로 등록되면 여기에 표시됩니다.</p>
        </div>
      )}
    </>
  );
}
