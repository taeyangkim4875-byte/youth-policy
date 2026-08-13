'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GUIDES = [
  { label: '서울 정책 조합', href: '/guide/seoul' },
  { label: '경기도 정책 조합', href: '/guide/gyeonggi' },
  { label: '부산 정책 조합', href: '/guide/busan' },
  { label: '주거정책 가이드', href: '/guide/housing' },
  { label: '전세대출 비교', href: '/guide/housing-loan' },
  { label: '적금 비교', href: '/guide/finance' },
  { label: '적금 총정리', href: '/guide/savings-compare' },
  { label: '취준생 지원금', href: '/guide/job-seeker' },
  { label: '첫 취업 체크리스트', href: '/guide/first-job' },
  { label: '자취 시작 가이드', href: '/guide/first-independence' },
  { label: '신혼부부 정책', href: '/guide/newlywed' },
  { label: '중위소득 확인법', href: '/guide/income-check' },
  { label: '용어 사전', href: '/guide/terms' },
  { label: '신청 체크리스트', href: '/guide/checklist' },
  { label: '정책 캘린더', href: '/guide/timeline' },
  { label: '흔한 실수 7가지', href: '/guide/common-mistakes' },
  { label: '탈락 사유 TOP 5', href: '/guide/rejection-reasons' },
  { label: '5개 정책 신청 후기', href: '/guide/apply-experience' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const pathname = usePathname();
  const guideRef = useRef<HTMLDivElement>(null);

  // 가이드 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (guideRef.current && !guideRef.current.contains(e.target as Node)) {
        setGuideOpen(false);
      }
    }
    if (guideOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [guideOpen]);

  const isGuidePage = pathname.startsWith('/guide');

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
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg text-[13px] no-underline transition-colors ${
              pathname === '/'
                ? 'bg-primary-bg text-primary font-semibold'
                : 'text-muted hover:text-text hover:bg-[#f3f5f9]'
            }`}
          >
            정책 매칭
          </Link>
          <Link
            href="/policies"
            className={`px-3 py-1.5 rounded-lg text-[13px] no-underline transition-colors ${
              pathname === '/policies'
                ? 'bg-primary-bg text-primary font-semibold'
                : 'text-muted hover:text-text hover:bg-[#f3f5f9]'
            }`}
          >
            정책 목록
          </Link>

          {/* 가이드 드롭다운 */}
          <div ref={guideRef} className="relative">
            <button
              onClick={() => setGuideOpen(!guideOpen)}
              className={`px-3 py-1.5 rounded-lg text-[13px] transition-colors flex items-center gap-1 ${
                isGuidePage
                  ? 'bg-primary-bg text-primary font-semibold'
                  : 'text-muted hover:text-text hover:bg-[#f3f5f9]'
              }`}
            >
              가이드
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${guideOpen ? 'rotate-180' : ''}`}>
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {guideOpen && (
              <div className="absolute right-0 top-full mt-1 w-52 bg-surface border border-line rounded-xl shadow-lg py-1 max-h-80 overflow-y-auto">
                {GUIDES.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    onClick={() => setGuideOpen(false)}
                    className={`block px-3 py-2 text-[12px] no-underline transition-colors ${
                      pathname === g.href
                        ? 'bg-primary-bg text-primary font-semibold'
                        : 'text-text hover:bg-[#f3f5f9]'
                    }`}
                  >
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#f3f5f9] transition-colors"
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {mobileOpen ? (
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
      {mobileOpen && (
        <nav className="sm:hidden border-t border-line bg-surface px-5 py-2 max-h-[70vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-[13px] no-underline transition-colors ${
              pathname === '/' ? 'bg-primary-bg text-primary font-semibold' : 'text-text hover:bg-[#f3f5f9]'
            }`}
          >
            정책 매칭
          </Link>
          <Link
            href="/policies"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-[13px] no-underline transition-colors ${
              pathname === '/policies' ? 'bg-primary-bg text-primary font-semibold' : 'text-text hover:bg-[#f3f5f9]'
            }`}
          >
            정책 목록
          </Link>

          <div className="mt-2 mb-1 px-3">
            <span className="text-[11px] font-bold text-muted">가이드</span>
          </div>
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-lg text-[12px] no-underline transition-colors ${
                pathname === g.href
                  ? 'bg-primary-bg text-primary font-semibold'
                  : 'text-text hover:bg-[#f3f5f9]'
              }`}
            >
              {g.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
