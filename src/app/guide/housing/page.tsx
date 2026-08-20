import type { Metadata } from 'next';
import Card from '@/components/Card';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년 주거정책, 직접 받아본 후기와 신청 팁',
  description:
    '서울시 월세 지원 200만 원, 이사비 20만 원을 직접 수령한 경험담과 신청 팁을 공유합니다. 청년 전세임대, 행복주택, 월세지원 자격요건과 신청 방법을 정리했습니다.',
  openGraph: {
    title: '청년 주거정책, 직접 받아본 후기와 신청 팁 | 청년정책 매칭',
    description: '월세 지원 200만 원, 이사비 20만 원 실제 수령 경험담',
    url: 'https://youth.moduncalc.com/guide/housing',
  },
};

export default function HousingGuidePage() {
  return (
    <>
      <ArticleJsonLd
        title="청년 주거정책, 직접 받아본 후기와 신청 팁"
        description="서울시 월세 지원 200만 원, 이사비 20만 원을 직접 수령한 경험담"
        url="https://youth.moduncalc.com/guide/housing"
        datePublished="2026-08-05"
        dateModified="2026-08-05"
      />
      <FaqJsonLd
        items={[
          {
            q: '서울시 청년 월세 지원은 얼마를 받나요?',
            a: '월 최대 20만 원을 최대 12개월간 받을 수 있습니다. 저는 관악구 거주 당시 20만 원씩 10개월, 총 200만 원을 수령했습니다.',
          },
          {
            q: '직장인이 아니어도 월세 지원을 받을 수 있나요?',
            a: '네, 가능합니다. 저는 학원에서 취업 준비를 하는 학생 신분이었는데 소득 기준만 충족하면 신청할 수 있었습니다.',
          },
          {
            q: '이사비 지원 금액은 얼마인가요?',
            a: '서울시 이사비 지원은 1회 최대 40만 원입니다. 저는 20만 원을 수령했으며 선착순이므로 신청 시기를 놓치지 않는 것이 중요합니다.',
          },
          {
            q: '청년도약계좌에서 청년미래적금으로 갈아타도 되나요?',
            a: '저는 종료 전에 갈아탔지만, 2026년 8월 6일부로 갈아타기는 종료되었습니다. 이제는 도약계좌 유지 또는 미래적금 새로 가입만 가능합니다.',
          },
        ]}
      />

      <div className="mb-6">
        <Link href="/" className="text-sm text-primary no-underline hover:underline mb-3 inline-block">
          ← 정책 매칭으로 돌아가기
        </Link>
        <p className="text-xs text-primary font-semibold mb-1">주거 가이드</p>
        <h1 className="text-2xl font-extrabold leading-tight mb-2">
          청년 주거정책, 직접 받아본 후기와 신청 팁
        </h1>
        <p className="text-xs text-muted">
          작성: 김태양 · 2026.08.05 · 읽는 데 5분
        </p>
      </div>

      <Card>
        <h2 className="text-lg font-bold mb-3">들어가며</h2>
        <p className="text-sm text-text leading-relaxed mb-3">
          서울 관악구에 살면서 취업 준비하던 시기에 주거정책 덕을 많이 봤어요. 수입 없이 월세 내는 게 진짜 빠듯했는데, 정책 알고 나서 한결 나아졌거든요.
        </p>
        <p className="text-sm text-text leading-relaxed">
          근데 주변을 보면 &ldquo;이런 게 있는 줄 몰랐다&rdquo;는 사람이 너무 많아요. 자격 되는데 그냥 넘기는 분들이 많아서, 직접 받아본 정책이랑 신청 팁을 정리해봤어요.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">
          서울시 청년 월세 지원 — 총 200만 원 수령
        </h2>
        <div className="bg-primary-bg rounded-xl p-4 mb-4">
          <div className="text-xl font-extrabold text-primary-d">
            월 20만 원 × 10개월 = 200만 원
          </div>
          <div className="text-xs text-muted mt-1">관악구 서울대입구 거주 당시 수령</div>
        </div>

        <h3 className="text-sm font-bold mb-2">제가 신청했을 때 조건</h3>
        <ul className="text-sm text-text leading-relaxed space-y-1.5 list-disc pl-4 mb-4">
          <li>학생 신분으로 학원에서 취업 준비 중 (직장인 아님)</li>
          <li>서울시 관악구 거주</li>
          <li>무주택, 중위소득 기준 충족</li>
          <li>주민센터 방문 신청</li>
        </ul>

        <h3 className="text-sm font-bold mb-2">솔직한 후기</h3>
        <p className="text-sm text-text leading-relaxed mb-3">
          월 20만 원이 별거 아닌 것 같지만, 10개월이면 200만 원이에요. 수입 없이 월세 내던 시기라 이게 진짜 컸거든요. 심리적으로도 &ldquo;나라에서 이렇게라도 도와주는구나&rdquo; 싶어서 힘이 됐어요.
        </p>
        <p className="text-sm text-text leading-relaxed">
          경쟁이 생각보다 심하진 않았는데, 예산 소진되면 조기 마감되니까 신청 기간 열리면 바로 준비하는 게 좋아요.
        </p>
        <div className="mt-2 text-[11px] text-muted">
          최신 모집 공고:{' '}
          <a href="https://housing.seoul.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline">
            서울주거포털
          </a>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">서울시 이사비 지원 — 20만 원</h2>
        <div className="bg-[#FFF3E0] rounded-xl p-4 mb-4">
          <div className="text-xl font-extrabold text-[#E65100]">
            1회 20만 원 지급
          </div>
          <div className="text-xs text-muted mt-1">서울시 사업, 선착순</div>
        </div>

        <p className="text-sm text-text leading-relaxed mb-3">
          이사하면 이삿짐 비용, 중개수수료가 한꺼번에 나가는데, 20만 원이라도 받으면 좀 낫거든요. 핵심은 선착순이라 접수 시작일을 미리 체크해두는 거예요.
        </p>
        <p className="text-sm text-text leading-relaxed">
          직장인 아닌 상태에서도 받았어요. 소득 낮을수록 오히려 자격 되는 경우가 많으니까, &ldquo;나는 안 될 거야&rdquo; 하고 넘기지 마세요.
        </p>
        <div className="mt-2 text-[11px] text-muted">
          신청:{' '}
          <a href="https://housing.seoul.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline">
            서울주거포털
          </a>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">
          청년도약계좌 → 청년미래적금 갈아탄 경험
        </h2>
        <p className="text-sm text-text leading-relaxed mb-3">
          주거정책은 아닌데, 목돈 마련이랑 직결되는 거라 같이 정리해요. 청년도약계좌에 월 70만 원씩 3년 넣었고, 정부 기여금은 소득 구간에 따라 월 2~3만 원 정도 받았어요.
        </p>
        <p className="text-sm text-text leading-relaxed mb-3">
          나중에 청년미래적금 나왔을 때 만기 수령액 계산해보니 미래적금이 더 유리해서 갈아탔거든요.
        </p>
        <div className="bg-amber-bg rounded-xl p-3 text-xs text-text">
          <strong>참고:</strong> 도약계좌 → 미래적금 갈아타기는 <strong>2026년 8월 6일부로 종료</strong>되었습니다.
          이제는 도약계좌를 유지하거나 미래적금에 새로 가입하는 것만 가능합니다.
          미래적금 월 납입 한도는 50만 원(도약계좌는 70만 원)입니다.
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">
          제가 느낀 신청 팁 5가지
        </h2>
        <ol className="text-sm text-text leading-relaxed space-y-3 list-decimal pl-4">
          <li>
            <strong>&ldquo;나는 안 될 거야&rdquo; 하고 넘기지 마세요.</strong>{' '}
            직장인 아니라서 안 될 줄 알았는데, 소득 낮으면 오히려 더 많은 정책에 해당돼요.
          </li>
          <li>
            <strong>선착순은 시작일에 바로.</strong>{' '}
            이사비처럼 선착순 마감되는 정책은 공지 나오면 바로 서류 준비해두세요.
          </li>
          <li>
            <strong>주민등록등본은 미리.</strong>{' '}
            거의 모든 정책에서 요구해요.{' '}
            <a href="https://www.gov.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline">정부24</a>에서 무료 발급 가능.
          </li>
          <li>
            <strong>소득 기준이 &lsquo;가구&rsquo;인 경우가 많아요.</strong>{' '}
            본인만 보는 게 아니라 세대원 전체 소득을 보는 정책도 있어요. 건강보험료 납부확인서 확인해보세요.
          </li>
          <li>
            <strong>여러 정책 동시에 받을 수 있어요.</strong>{' '}
            월세 지원이랑 이사비는 별개 사업이라 중복 수령 가능했어요. 하나만 된다고 오해하지 마세요.
          </li>
        </ol>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">
          주변에서 가장 많이 하는 착각
        </h2>
        <div className="space-y-3">
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-sm font-semibold text-text mb-1">
              &ldquo;직장인만 받을 수 있는 거 아니야?&rdquo;
            </p>
            <p className="text-xs text-muted">
              아닙니다. 미취업자, 학생, 구직자도 받을 수 있는 정책이
              오히려 더 많습니다. 저도 학생 신분으로 월세 지원을
              받았습니다.
            </p>
          </div>
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-sm font-semibold text-text mb-1">
              &ldquo;소득 기준을 내 월급만 보는 거 아니야?&rdquo;
            </p>
            <p className="text-xs text-muted">
              많은 정책이 &lsquo;가구 중위소득&rsquo; 기준입니다.
              1인 가구면 본인 소득만, 부모와 같은 세대면 가구 합산
              소득을 봅니다. 독립 세대 분리가 유리한 경우도 있습니다.
            </p>
          </div>
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-sm font-semibold text-text mb-1">
              &ldquo;한 가지만 받을 수 있는 거 아니야?&rdquo;
            </p>
            <p className="text-xs text-muted">
              중복 수령이 가능한 정책이 많습니다. 월세 지원 + 이사비
              지원 + 청년도약계좌를 동시에 이용할 수 있었습니다.
              다만 일부 정책은 중복 제한이 있으니 공지를 확인하세요.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">주거 관련 계산기</h2>
        <div className="space-y-2">
          <a
            href="https://moduncalc.com/realestate/acqtax"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-[#F7F8FA] rounded-xl text-sm text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            🧮 부동산 취득세 계산기
          </a>
          <a
            href="https://moduncalc.com/realestate/jeonse-vs-wolse"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-[#F7F8FA] rounded-xl text-sm text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            🧮 전세 vs 월세 비교 계산기
          </a>
          <a
            href="https://moduncalc.com/savings/doyak"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-[#F7F8FA] rounded-xl text-sm text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            🧮 청년도약계좌 수익 계산기
          </a>
        </div>
      </Card>

      <div className="mt-4 p-3 bg-green-bg rounded-xl text-xs text-muted leading-relaxed">
        정책 세부 조건은 연도·지자체마다 달라요. 여기 적힌 금액도 바뀔 수 있으니 신청 전에 공식 사이트에서 꼭 확인하세요.
        <div className="mt-2 space-y-0.5">
          <span className="font-semibold block">공식 출처</span>
          <a href="https://housing.seoul.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline block">서울주거포털</a>
          <a href="https://www.youthcenter.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline block">온통청년</a>
          <a href="https://www.myhome.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline block">LH 마이홈</a>
          <a href="https://www.gov.kr" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline block">정부24 (서류 발급)</a>
        </div>
      </div>

      <div className="mt-4">
        <Link
          href="/"
          className="block w-full py-3 bg-primary text-white text-center rounded-[var(--radius)] font-bold text-sm hover:bg-primary-d transition-colors no-underline"
        >
          나에게 맞는 정책 찾기 →
        </Link>
      </div>
    </>
  );
}
