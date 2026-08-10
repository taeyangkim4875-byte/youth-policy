import type { Metadata } from 'next';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: '이용약관',
  description: '청년정책 매칭 서비스 이용약관입니다.',
};

export default function TermsPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold mb-1">이용약관</h1>
      <p className="text-sm text-muted mb-5">Terms of Service · 시행일: 2026년 8월 5일</p>

      <Card>
        <h2 className="text-lg font-bold mb-3">제1조 (목적)</h2>
        <p className="text-sm text-text leading-relaxed">
          이 약관은 김태양(이하 &ldquo;운영자&rdquo;)이 제공하는 청년정책
          매칭 서비스(이하 &ldquo;서비스&rdquo;)의 이용 조건 및 절차에 관한
          사항을 규정함을 목적으로 합니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">제2조 (서비스의 내용)</h2>
        <ul className="text-sm text-text leading-relaxed space-y-2 list-disc pl-4">
          <li>사용자 조건 입력에 기반한 청년 정책 매칭 정보 제공</li>
          <li>정책별 상세 정보 및 공식 사이트 링크 안내</li>
          <li>청년 정책 관련 가이드 콘텐츠 제공</li>
        </ul>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">제3조 (서비스의 성격)</h2>
        <p className="text-sm text-text leading-relaxed mb-3">
          본 서비스는 정부·공공기관의 공식 서비스가 아닌{' '}
          <strong>비공식 민간 정보 서비스</strong>입니다. 정책 데이터는
          한국고용정보원 온통청년 Open API를 통해 수집되며, 가공·매칭 과정에서
          오류가 발생할 수 있습니다.
        </p>
        <p className="text-sm text-text leading-relaxed">
          따라서 매칭 결과는 <strong>참고 목적</strong>으로만 활용해야 하며,
          최종 자격 확인과 신청은 각 정책의 공식 사이트에서 진행해야 합니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">제4조 (면책)</h2>
        <ul className="text-sm text-text leading-relaxed space-y-2 list-disc pl-4">
          <li>
            서비스 이용으로 발생하는 직·간접적 손해에 대해 운영자는 책임을
            지지 않습니다.
          </li>
          <li>
            정책 정보의 정확성, 완전성, 최신성을 보장하지 않습니다.
          </li>
          <li>
            서비스는 예고 없이 변경·중단될 수 있습니다.
          </li>
        </ul>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">제5조 (지적 재산권)</h2>
        <p className="text-sm text-text leading-relaxed">
          서비스의 디자인, 코드, 가이드 콘텐츠 등 독자적 저작물에 대한
          권리는 운영자에게 있습니다. 정책 원본 데이터의 저작권은 각
          출처 기관에 있습니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">제6조 (개인정보)</h2>
        <p className="text-sm text-text leading-relaxed">
          개인정보 처리에 관한 사항은{' '}
          <a href="/privacy" className="text-primary no-underline hover:underline">
            개인정보처리방침
          </a>
          을 따릅니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">제7조 (약관 변경)</h2>
        <p className="text-sm text-text leading-relaxed">
          운영자는 필요 시 약관을 변경할 수 있으며, 변경된 약관은 서비스
          내 공지를 통해 효력이 발생합니다.
        </p>
      </Card>
    </>
  );
}
