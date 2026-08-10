'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CATEGORIES = [
  { label: '전체 정책', href: '/', icon: '📋' },
  { label: '주거', href: '/?cat=주거', icon: '🏠' },
  { label: '취업', href: '/?cat=취업', icon: '💼' },
  { label: '금융·자산', href: '/?cat=금융·자산', icon: '💰' },
  { label: '교육', href: '/?cat=교육', icon: '📚' },
  { label: '복지·문화', href: '/?cat=복지·문화', icon: '🎭' },
];

const PAGES = [
  { label: '주거 가이드', href: '/guide/housing' },
  { label: '소개', href: '/about' },
  { label: '문의', href: '/contact' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* 모바일 햄버거 */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-3 left-3 z-[201] flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] bg-surface border border-line lg:hidden"
        aria-label="메뉴 열기"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 4.5h12M3 9h12M3 13.5h12" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-[199] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[var(--sb-w)] bg-surface z-[200] border-r border-line flex flex-col transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* 로고 */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 px-4 h-12 border-b border-line text-sm font-extrabold text-text no-underline"
        >
          <span className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-black">Y</span>
          청년정책 매칭
        </Link>

        <nav className="flex-1 py-2 overflow-y-auto">
          {/* 정책 카테고리 */}
          <p className="px-4 pt-3 pb-1.5 text-[11px] font-bold text-muted uppercase tracking-wider">정책 분야</p>
          {CATEGORIES.map((m) => {
            const isActive = pathname === '/' && m.href === '/'
              ? true
              : m.href !== '/' && pathname + (typeof window !== 'undefined' ? window.location.search : '') === m.href;
            return (
              <Link
                key={m.href + m.label}
                href={m.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2 text-[13px] no-underline transition-colors ${
                  isActive
                    ? 'bg-primary-bg text-primary font-semibold'
                    : 'text-text hover:bg-[#f3f5f9]'
                }`}
              >
                <span className="text-sm w-5 text-center">{m.icon}</span>
                {m.label}
              </Link>
            );
          })}

          {/* 페이지 */}
          <p className="px-4 pt-5 pb-1.5 text-[11px] font-bold text-muted uppercase tracking-wider">가이드 & 정보</p>
          {PAGES.map((m) => {
            const isActive = pathname === m.href;
            return (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2 text-[13px] no-underline transition-colors ${
                  isActive
                    ? 'bg-primary-bg text-primary font-semibold'
                    : 'text-text hover:bg-[#f3f5f9]'
                }`}
              >
                {m.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-3 border-t border-line text-[11px] text-muted leading-relaxed">
          <a href="https://moduncalc.com" className="text-primary no-underline hover:underline" target="_blank">
            moduncalc.com
          </a>
          {' '}계산기 모음
          <br />비공식 민간 서비스
        </div>
      </aside>
    </>
  );
}
