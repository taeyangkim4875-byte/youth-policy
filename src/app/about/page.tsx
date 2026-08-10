import type { Metadata } from 'next';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: '서비스 소개',
  description: '청년정책 매칭 서비스를 만든 이유와 운영자 소개입니다.',
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold mb-1">서비스 소개</h1>
      <p className="text-sm text-muted mb-5">About</p>

      <Card>
        <h2 className="text-lg font-bold mb-3">왜 만들었나요?</h2>
        <p className="text-sm text-text leading-relaxed mb-4">
          청년 정책은 해마다 새롭게 쏟아지지만, 정작 &ldquo;내가 받을 수 있는
          건지&rdquo; 확인하려면 여러 사이트를 뒤져야 합니다. 저 역시 월세
          지원, 이사비 지원, 청년도약계좌 등 여러 정책을 직접 신청하면서
          &ldquo;이걸 왜 진작 몰랐지?&rdquo; 하는 순간이 많았습니다.
        </p>
        <p className="text-sm text-text leading-relaxed mb-4">
          자격이 되는데도 존재 자체를 모르거나, 선착순 마감을 놓쳐서 혜택을
          못 받는 분들이 너무 많습니다. 그래서 출생연도·지역·취업 상태만
          입력하면 바로 &ldquo;나에게 해당되는 정책&rdquo;을 보여주는
          서비스를 만들었습니다.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">운영자</h2>
        <p className="text-sm text-text leading-relaxed mb-2">
          <strong>김태양</strong>
        </p>
        <p className="text-sm text-text leading-relaxed mb-4">
          청년도약계좌(70만 원 × 3년), 서울시 월세 지원(월 20만 원 × 10개월),
          이사비 지원(20만 원) 등을 직접 신청·수령한 경험을 바탕으로 이
          서비스를 운영하고 있습니다.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          문의:{' '}
          <a href="mailto:zxcv0888@naver.com" className="text-primary no-underline hover:underline">
            zxcv0888@naver.com
          </a>
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">데이터 출처</h2>
        <p className="text-sm text-text leading-relaxed mb-2">
          정책 데이터는{' '}
          <a
            href="https://www.youthcenter.go.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            한국고용정보원 온통청년
          </a>
          의 Open API를 통해 수집하며, 매일 자동 갱신됩니다.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          본 서비스는 정부·공공기관의 공식 서비스가 아닌{' '}
          <strong className="text-text">비공식 민간 서비스</strong>입니다.
          최종 자격 확인과 신청은 반드시 각 정책의 공식 사이트에서 해주세요.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">관련 서비스</h2>
        <p className="text-sm text-text leading-relaxed">
          이 서비스는{' '}
          <a
            href="https://moduncalc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            모든 계산기(moduncalc.com)
          </a>
          의 서브도메인으로 운영됩니다. 연봉 실수령액, 적금 이자, 대출 이자
          계산이 필요하시다면 본 사이트를 방문해주세요.
        </p>
      </Card>
    </>
  );
}
