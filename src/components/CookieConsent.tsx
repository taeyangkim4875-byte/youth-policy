'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[300] bg-surface border-t border-line lg:ml-[var(--sb-w)]">
      <div className="max-w-[680px] mx-auto px-5 py-3 flex items-center justify-between gap-3">
        <p className="text-[11px] text-muted flex-1">
          이 사이트는 Google 애드센스 등 제3자 쿠키를 사용합니다.{' '}
          <Link href="/privacy" className="text-primary no-underline hover:underline">
            개인정보처리방침
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-3 py-1.5 bg-primary text-white text-[11px] font-bold rounded-lg hover:bg-primary-d transition-colors"
        >
          동의
        </button>
      </div>
    </div>
  );
}
