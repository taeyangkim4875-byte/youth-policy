import type { Metadata } from 'next';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '청년정책 매칭 서비스의 개인정보 수집·이용·보관 및 쿠키 정책 안내입니다.',
};

export default function PrivacyPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold mb-1">개인정보처리방침</h1>
      <p className="text-sm text-muted mb-5">Privacy Policy · 최종 수정: 2026년 8월 5일</p>

      <Card>
        <h2 className="text-lg font-bold mb-3">1. 개인정보 수집 항목 및 이용 목적</h2>
        <p className="text-sm text-text leading-relaxed mb-3">
          청년정책 매칭(이하 &ldquo;서비스&rdquo;)은 사용자가 입력한 조건(출생연도, 거주
          지역, 취업 상태, 소득 구간 등)을 <strong>정책 매칭 목적으로만</strong>{' '}
          사용하며, 서버에 저장하지 않습니다. 모든 매칭은 클라이언트(브라우저)
          에서 처리됩니다.
        </p>
        <p className="text-sm text-text leading-relaxed">
          별도의 회원가입이나 로그인 절차가 없으므로 이름, 연락처 등 개인
          식별정보를 수집하지 않습니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">2. 쿠키 및 제3자 서비스</h2>
        <p className="text-sm text-text leading-relaxed mb-3">
          본 서비스는 다음의 제3자 서비스를 이용하며, 해당 서비스에서 쿠키를
          설정할 수 있습니다.
        </p>
        <ul className="text-sm text-text leading-relaxed space-y-2 list-disc pl-4 mb-3">
          <li>
            <strong>Google 애드센스(AdSense)</strong>: 맞춤 광고 제공을 위해
            DoubleClick 쿠키 등 제3자 쿠키를 사용합니다. 사용자는{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary no-underline hover:underline"
            >
              Google 광고 설정
            </a>
            에서 맞춤 광고를 해제할 수 있습니다.
          </li>
          <li>
            <strong>Google 애널리틱스(GA4)</strong>: 방문자 통계 분석을 위해
            사용되며, IP 주소가 익명 처리됩니다.
          </li>
        </ul>
        <p className="text-sm text-text leading-relaxed">
          사용자는 브라우저 설정에서 언제든지 쿠키 저장을 거부할 수 있으나,
          이 경우 서비스 이용에 일부 제한이 있을 수 있습니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">3. 개인정보 보관 및 파기</h2>
        <p className="text-sm text-text leading-relaxed">
          서비스는 사용자의 매칭 조건 입력값을 서버에 전송하거나 저장하지
          않으므로, 별도의 보관·파기 절차가 필요하지 않습니다. 쿠키 동의
          여부는 사용자 브라우저의 localStorage에 저장되며, 브라우저 데이터
          삭제 시 함께 제거됩니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">4. 사용자 권리</h2>
        <ul className="text-sm text-text leading-relaxed space-y-2 list-disc pl-4">
          <li>쿠키 동의 철회: 브라우저 설정에서 쿠키를 삭제하면 동의가 철회됩니다.</li>
          <li>Google 맞춤 광고 해제: 위 Google 광고 설정 링크에서 설정 가능합니다.</li>
          <li>기타 문의: <a href="mailto:zxcv0888@naver.com" className="text-primary no-underline hover:underline">zxcv0888@naver.com</a></li>
        </ul>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">5. 개인정보 보호 책임자</h2>
        <p className="text-sm text-text leading-relaxed">
          성명: 김태양<br />
          이메일: <a href="mailto:zxcv0888@naver.com" className="text-primary no-underline hover:underline">zxcv0888@naver.com</a>
        </p>
      </Card>
    </>
  );
}
