import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="max-w-[680px] mx-auto px-5 py-6 text-[11px] text-muted leading-relaxed">
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
          <Link href="/about" className="hover:text-text no-underline text-muted">소개</Link>
          <Link href="/terms" className="hover:text-text no-underline text-muted">이용약관</Link>
          <Link href="/privacy" className="hover:text-text no-underline text-muted">개인정보처리방침</Link>
          <Link href="/disclaimer" className="hover:text-text no-underline text-muted">면책조항</Link>
          <Link href="/contact" className="hover:text-text no-underline text-muted">문의</Link>
        </div>
        <p className="mb-0.5">
          출처:{' '}
          <a href="https://www.youthcenter.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline">
            한국고용정보원 온통청년
          </a>
          {' · '}비공식 민간 서비스
        </p>
        <p>
          &copy; 2026 김태양 ·{' '}
          <a href="https://moduncalc.com" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline">
            moduncalc.com
          </a>
        </p>
      </div>
    </footer>
  );
}
