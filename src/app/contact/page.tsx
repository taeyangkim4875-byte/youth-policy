import type { Metadata } from 'next';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: '문의',
  description: '청년정책 매칭 서비스에 대한 문의, 피드백, 오류 제보 안내입니다.',
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold mb-1">문의</h1>
      <p className="text-sm text-muted mb-5">Contact</p>

      <Card>
        <h2 className="text-lg font-bold mb-3">연락처</h2>
        <p className="text-sm text-text leading-relaxed mb-4">
          서비스 이용 중 궁금한 점, 정책 정보 오류 제보, 기능 제안 등은 아래
          이메일로 보내주세요.
        </p>
        <div className="bg-primary-bg rounded-xl p-4 text-center">
          <a
            href="mailto:zxcv0888@naver.com"
            className="text-lg font-bold text-primary-d no-underline hover:underline"
          >
            zxcv0888@naver.com
          </a>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">참고 사항</h2>
        <ul className="text-sm text-text leading-relaxed space-y-2 list-disc pl-4">
          <li>
            정책의 세부 자격요건이나 신청 절차는 각 정책의 공식 사이트 또는
            주관 기관에 직접 문의해주세요.
          </li>
          <li>
            정보 오류가 발견되면 정책명과 함께 알려주시면 빠르게
            수정하겠습니다.
          </li>
          <li>
            운영자: <strong>김태양</strong>
          </li>
        </ul>
      </Card>
    </>
  );
}
