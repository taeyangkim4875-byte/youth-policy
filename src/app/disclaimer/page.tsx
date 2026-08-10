import type { Metadata } from 'next';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: '면책조항',
  description: '청년정책 매칭 서비스의 정보 정확성 및 책임 한계에 관한 안내입니다.',
};

export default function DisclaimerPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold mb-1">면책조항</h1>
      <p className="text-sm text-muted mb-5">Disclaimer · 최종 수정: 2026년 8월 5일</p>

      <Card>
        <h2 className="text-lg font-bold mb-3">정보의 정확성</h2>
        <p className="text-sm text-text leading-relaxed">
          본 서비스에서 제공하는 청년 정책 매칭 결과 및 정책 상세 정보는{' '}
          <strong>참고 목적</strong>으로만 제공됩니다. 정책 데이터는
          한국고용정보원 온통청년 Open API를 기반으로 수집·가공되며, 수집
          시점과 실제 정책 사이에 차이가 있을 수 있습니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">비공식 서비스</h2>
        <p className="text-sm text-text leading-relaxed">
          본 서비스는 대한민국 정부, 지방자치단체, 한국고용정보원 등
          어떠한 공공기관과도 제휴·위탁 관계에 있지 않은{' '}
          <strong>비공식 민간 서비스</strong>입니다. 정부 서비스로
          오인하지 않도록 주의해주세요.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">최종 확인 의무</h2>
        <p className="text-sm text-text leading-relaxed mb-3">
          매칭 결과에 표시된 정책이라도, 실제 신청 자격·서류·기간 등은
          반드시 해당 정책의 <strong>공식 사이트 또는 주관 기관</strong>에서
          최종 확인하신 후 신청하시기 바랍니다.
        </p>
        <p className="text-sm text-text leading-relaxed">
          매칭 결과를 신뢰하여 발생하는 불이익(신청 자격 미달, 마감 경과,
          서류 미비 등)에 대해 운영자는 책임을 지지 않습니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">AI 가공 안내</h2>
        <p className="text-sm text-text leading-relaxed">
          정책의 자격요건은 자연어 형태로 제공되어, AI(대규모 언어 모델)를
          활용하여 구조화된 매칭 조건으로 변환합니다. 이 과정에서 해석
          오류가 발생할 수 있으며, 변환 결과가 불확실한 항목에는 별도
          표시를 합니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">출처 표기</h2>
        <p className="text-sm text-text leading-relaxed">
          정책 데이터 출처:{' '}
          <a
            href="https://www.youthcenter.go.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            한국고용정보원 온통청년(youthcenter.go.kr)
          </a>
        </p>
      </Card>
    </>
  );
}
