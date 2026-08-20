import type { Metadata } from 'next';
import Card from '@/components/Card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년정책 가이드 모음',
  description:
    '주거, 금융, 지역별, 상황별 청년정책 가이드를 한곳에서 찾아보세요. 신청 팁, 서류 준비, 정책 비교까지 실전 정보를 정리했습니다.',
  openGraph: {
    title: '청년정책 가이드 모음 | 청년정책 매칭',
    description:
      '주거, 금융, 지역별, 상황별 청년정책 가이드를 한곳에서 찾아보세요.',
    url: 'https://youth.moduncalc.com/guide',
  },
};

interface GuideItem {
  href: string;
  title: string;
  desc: string;
}

interface GuideCategory {
  name: string;
  items: GuideItem[];
}

const categories: GuideCategory[] = [
  {
    name: '주거',
    items: [
      {
        href: '/guide/housing',
        title: '청년 주거정책 후기와 신청 팁',
        desc: '월세 지원, 전세임대, 행복주택 등 주거정책 경험담과 실전 팁',
      },
      {
        href: '/guide/housing-loan',
        title: '청년 전세·주거 대출 비교',
        desc: '버팀목, 중소기업 전세대출 등 청년 대출 상품 조건과 금리 비교',
      },
      {
        href: '/guide/first-independence',
        title: '처음 독립하는 청년을 위한 가이드',
        desc: '첫 독립 준비부터 활용 가능한 정책까지 단계별 안내',
      },
    ],
  },
  {
    name: '금융·자산',
    items: [
      {
        href: '/guide/finance',
        title: '청년도약계좌 vs 청년미래적금',
        desc: '정부기여금, 수익률, 만기금액 비교로 나에게 맞는 선택 찾기',
      },
      {
        href: '/guide/savings-compare',
        title: '청년 적금 상품 비교',
        desc: '시중은행·인터넷은행 청년 우대 적금 금리와 조건 한눈에 비교',
      },
    ],
  },
  {
    name: '지역별',
    items: [
      {
        href: '/guide/seoul',
        title: '서울 청년 정책 총정리',
        desc: '서울시 청년 월세, 취업, 창업 등 주요 정책 모아보기',
      },
      {
        href: '/guide/gyeonggi',
        title: '경기도 청년 정책 총정리',
        desc: '경기도 청년 기본소득, 주거, 취업 지원 정책 안내',
      },
      {
        href: '/guide/busan',
        title: '부산 청년 정책 총정리',
        desc: '부산시 청년 지원금, 주거, 일자리 정책 핵심 정리',
      },
    ],
  },
  {
    name: '상황별',
    items: [
      {
        href: '/guide/job-seeker',
        title: '취준생이 꼭 챙겨야 할 정책',
        desc: '취업 준비 중 받을 수 있는 수당, 교육, 주거 지원 총정리',
      },
      {
        href: '/guide/first-job',
        title: '사회초년생 정책 체크리스트',
        desc: '첫 직장인이 놓치기 쉬운 재정·주거·세금 관련 정책 안내',
      },
      {
        href: '/guide/newlywed',
        title: '신혼부부 정책 총정리',
        desc: '신혼부부 전세대출, 주거지원, 출산 관련 정책 한눈에 보기',
      },
    ],
  },
  {
    name: '신청 실전',
    items: [
      {
        href: '/guide/checklist',
        title: '정책 신청 서류 준비 가이드',
        desc: '소득확인서, 주민등록등본 등 공통 서류 발급 방법과 준비 팁',
      },
      {
        href: '/guide/timeline',
        title: '2026년 하반기 정책 신청 캘린더',
        desc: '월별 주요 정책 신청 일정과 마감 기한 정리',
      },
      {
        href: '/guide/apply-experience',
        title: '실제 정책 신청 경험담',
        desc: '정책 발견부터 신청, 수령까지 실제 과정을 공유합니다',
      },
      {
        href: '/guide/common-mistakes',
        title: '청년정책 신청 시 흔한 실수',
        desc: '서류 누락, 기간 착각 등 자주 발생하는 실수와 예방법',
      },
      {
        href: '/guide/rejection-reasons',
        title: '정책 탈락 사유와 대처법',
        desc: '탈락 통보를 받았을 때 확인할 사항과 이의신청 방법',
      },
    ],
  },
  {
    name: '기초 지식',
    items: [
      {
        href: '/guide/terms',
        title: '청년정책 용어 사전',
        desc: '중위소득, 기준소득, 자산 기준 등 자주 나오는 용어 해설',
      },
      {
        href: '/guide/income-check',
        title: '내 소득 기준 확인하는 법',
        desc: '건강보험료, 홈택스 등으로 내 소득분위를 확인하는 방법',
      },
    ],
  },
];

export default function GuidePage() {
  return (
    <>
      <Link
        href="/"
        className="inline-block text-[12px] text-muted mb-4 hover:text-primary"
      >
        &larr; 홈으로
      </Link>

      <h1 className="text-[16px] font-extrabold mb-1 text-text">
        청년정책 가이드
      </h1>
      <p className="text-[12px] text-muted mb-6">
        상황에 맞는 가이드를 찾아보세요
      </p>

      {categories.map((cat) => (
        <section key={cat.name} className="mb-6">
          <h2 className="text-[13px] font-extrabold text-text mb-3">
            {cat.name}
          </h2>
          <div className="flex flex-col gap-2">
            {cat.items.map((item) => (
              <Link key={item.href} href={item.href} className="block">
                <Card className="hover:border-primary transition-colors cursor-pointer">
                  <h3 className="text-[13px] font-bold text-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <Card className="text-center mt-8">
        <p className="text-[12px] text-muted mb-2">
          조건을 입력하면 나에게 맞는 정책을 바로 확인할 수 있어요
        </p>
        <Link
          href="/"
          className="inline-block text-[13px] font-bold text-primary hover:underline"
        >
          나에게 맞는 정책 찾기 &rarr;
        </Link>
      </Card>
    </>
  );
}
