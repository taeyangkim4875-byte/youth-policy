'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { label: '정책 매칭', href: '/' },
  { label: '정책 목록', href: '/policies' },
  { label: '주거 가이드', href: '/guide/housing' },
  { label: '소개', href: '/about' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-line">
      <div className="max-w-[680px] mx-auto px-5 h-12 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-extrabold text-text no-underline"
        >
          <span className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-black">
            Y
          </span>
          청년정책 매칭
        </Link>

        {/* 데스크톱 네비 */}
        <nav className="hidden sm:flex items-center gap-1">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-[13px] no-underline transition-colors ${
                  isActive
                    ? 'bg-primary-bg text-primary font-semibold'
                    : 'text-muted hover:text-text hover:bg-[#f3f5f9]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#f3f5f9] transition-colors"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 4.5h12M3 9h12M3 13.5h12" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <nav className="sm:hidden border-t border-line bg-surface px-5 py-2">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-[13px] no-underline transition-colors ${
                  isActive
                    ? 'bg-primary-bg text-primary font-semibold'
                    : 'text-text hover:bg-[#f3f5f9]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
