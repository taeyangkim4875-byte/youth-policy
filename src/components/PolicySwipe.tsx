'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { Policy } from '@/lib/types';

const CAT_COLORS: Record<string, string> = {
  '주거': 'bg-primary-bg text-primary',
  '취업': 'bg-[#e0f2fe] text-[#0369a1]',
  '금융·자산': 'bg-green-bg text-green',
  '교육': 'bg-[#f3e8ff] text-[#7c3aed]',
  '복지·문화': 'bg-[#fce7f3] text-[#be185d]',
};

export default function PolicySwipe({ policies }: { policies: Policy[] }) {
  const [current, setCurrent] = useState(0);
  const [saved, setSaved] = useState<Policy[]>([]);
  const [swipeDir, setSwipeDir] = useState<'left' | 'right' | null>(null);
  const [showSaved, setShowSaved] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [dragX, setDragX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const p = policies[current];
  const isFinished = current >= policies.length;

  const next = useCallback((dir: 'left' | 'right') => {
    if (isFinished) return;
    if (dir === 'right') {
      setSaved((prev) => [...prev, policies[current]]);
    }
    setSwipeDir(dir);
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
      setSwipeDir(null);
      setDragX(0);
    }, 250);
  }, [current, isFinished, policies]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const dx = e.touches[0].clientX - touchStart.x;
    setDragX(dx);
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragX) > 80) {
      next(dragX > 0 ? 'right' : 'left');
    } else {
      setDragX(0);
    }
    setTouchStart(null);
  };

  const dd = p?.apply_end
    ? Math.ceil((new Date(p.apply_end).getTime() - Date.now()) / 86400000)
    : null;

  if (isFinished) {
    return (
      <div className="bg-surface border border-line rounded-2xl p-5 text-center">
        <p className="text-[15px] font-extrabold text-text mb-1">
          다 봤어요!
        </p>
        <p className="text-[12px] text-muted mb-3">
          {saved.length > 0
            ? `${saved.length}건의 정책을 저장했어요`
            : '저장한 정책이 없어요'}
        </p>

        {saved.length > 0 && (
          <div className="space-y-2 text-left mb-3">
            {saved.map((s) => (
              <Link
                key={s.id}
                href={`/policy/${s.id}`}
                className="block bg-white border border-line rounded-xl p-3 hover:border-primary/40 transition-colors no-underline"
              >
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${CAT_COLORS[s.category] || 'bg-primary-bg text-primary'}`}>
                  {s.category}
                </span>
                <p className="text-[13px] font-bold text-text mt-1">{s.name}</p>
                <p className="text-[11px] text-green font-semibold mt-0.5">{s.benefit}</p>
              </Link>
            ))}
          </div>
        )}

        <button
          onClick={() => { setCurrent(0); setSaved([]); }}
          className="text-[12px] text-primary font-semibold hover:underline"
        >
          처음부터 다시 보기
        </button>
      </div>
    );
  }

  const catColor = CAT_COLORS[p.category] || 'bg-primary-bg text-primary';
  const rotation = dragX * 0.05;
  const opacity = Math.max(0.3, 1 - Math.abs(dragX) / 300);

  return (
    <div>
      {/* 진행 바 */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex-1 h-1 bg-line rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / policies.length) * 100}%` }}
          />
        </div>
        <span className="text-[10px] text-muted shrink-0">
          {current + 1}/{policies.length}
        </span>
        {saved.length > 0 && (
          <button
            onClick={() => setShowSaved(!showSaved)}
            className="text-[10px] font-bold text-primary shrink-0"
          >
            저장 {saved.length}
          </button>
        )}
      </div>

      {/* 스와이프 카드 */}
      <div className="relative overflow-hidden">
        {/* 스와이프 힌트 */}
        <div className="absolute inset-0 z-0 flex items-center justify-between px-4 pointer-events-none">
          <span className={`text-[12px] font-bold px-2 py-1 rounded-lg transition-opacity ${
            dragX < -30 ? 'opacity-100 bg-line text-muted' : 'opacity-0'
          }`}>
            넘기기
          </span>
          <span className={`text-[12px] font-bold px-2 py-1 rounded-lg transition-opacity ${
            dragX > 30 ? 'opacity-100 bg-primary/10 text-primary' : 'opacity-0'
          }`}>
            관심 있음
          </span>
        </div>

        <div
          ref={cardRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`relative z-10 bg-white border-2 rounded-2xl p-4 transition-all select-none ${
            swipeDir === 'right'
              ? 'translate-x-[120%] rotate-12 opacity-0 duration-250'
              : swipeDir === 'left'
              ? '-translate-x-[120%] -rotate-12 opacity-0 duration-250'
              : 'duration-150'
          } ${dragX > 30 ? 'border-primary' : dragX < -30 ? 'border-line2' : 'border-line'}`}
          style={
            !swipeDir
              ? { transform: `translateX(${dragX}px) rotate(${rotation}deg)`, opacity }
              : undefined
          }
        >
          {/* 카테고리 + D-day */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${catColor}`}>
              {p.category}
            </span>
            {p.regions && p.regions.length > 0 && (
              <span className="text-[10px] font-medium text-muted px-1.5 py-0.5 rounded-md bg-[#f3f5f9]">
                {p.regions.includes('전국') ? '전국' : p.regions[0]}
              </span>
            )}
            {dd !== null && dd >= 0 && dd <= 30 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-bg text-amber ml-auto">
                D-{dd}
              </span>
            )}
          </div>

          {/* 정책명 */}
          <h3 className="text-[16px] font-extrabold text-text leading-snug mb-2">
            {p.name}
          </h3>

          {/* 요약 */}
          <p className="text-[12px] text-muted leading-relaxed mb-3">
            {p.summary}
          </p>

          {/* 혜택 */}
          <div className="bg-green-bg/60 rounded-lg px-3 py-2 mb-3">
            <p className="text-[12px] font-semibold text-green leading-relaxed">
              {p.benefit}
            </p>
          </div>

          {/* 메타 */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted mb-3">
            {p.org_name && <span>{p.org_name}</span>}
            {p.min_age != null && p.max_age != null && (
              <span>만 {p.min_age}~{p.max_age}세</span>
            )}
            {p.apply_end && <span>마감 {p.apply_end.replace(/-/g, '.')}</span>}
          </div>

          {/* 상세보기 링크 */}
          <Link
            href={`/policy/${p.id}`}
            className="text-[11px] font-bold text-primary no-underline hover:underline"
          >
            자세히 보기 &rarr;
          </Link>
        </div>
      </div>

      {/* 버튼 컨트롤 (데스크톱용 + 모바일 보조) */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => next('left')}
          className="flex-1 py-2.5 border border-line rounded-xl text-[13px] font-semibold text-muted hover:text-text hover:border-line2 transition-colors"
        >
          넘기기
        </button>
        <button
          onClick={() => next('right')}
          className="flex-1 py-2.5 bg-primary text-white rounded-xl text-[13px] font-bold hover:bg-primary-d transition-colors"
        >
          관심 있음
        </button>
      </div>

      {/* 저장 목록 (토글) */}
      {showSaved && saved.length > 0 && (
        <div className="mt-3 space-y-1.5">
          <p className="text-[11px] font-bold text-muted">저장한 정책</p>
          {saved.map((s) => (
            <Link
              key={s.id}
              href={`/policy/${s.id}`}
              className="flex items-center gap-2 bg-surface border border-line rounded-lg p-2.5 no-underline hover:border-primary/40 transition-colors"
            >
              <span className={`text-[9px] font-bold px-1 py-0.5 rounded ${CAT_COLORS[s.category] || 'bg-primary-bg text-primary'}`}>
                {s.category}
              </span>
              <span className="text-[12px] font-semibold text-text truncate">{s.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
