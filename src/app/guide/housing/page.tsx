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
          저는 서울 관악구 서울대입구역 근처에 살면서 취업 준비를 하던
          시기에 여러 청년 주거정책의 도움을 받았습니다. 직장인이 아닌
          상태에서 서울 월세를 감당하는 건 쉽지 않았는데, 정책을 알고
          나서 한결 숨통이 트였습니다.
        </p>
        <p className="text-sm text-text leading-relaxed">
          문제는 &ldquo;이런 정책이 있는지 자체를 모르는&rdquo;
          사람이 너무 많다는 겁니다. 자격이 되는데도 놓치는 분들을
          위해, 제가 직접 받아본 정책들과 신청 팁을 정리합니다.
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
          직장인이 아닐 때 서울 월세는 정말 부담이 큽니다. 월 20만 원이
          적어 보일 수 있지만, 10개월이면 200만 원이고 당시 제 월세의
          상당 부분을 커버해줬습니다. 특히 취업 준비 기간처럼 수입이
          없을 때 이런 지원은 심리적으로도 큰 힘이 됩니다.
        </p>
        <p className="text-sm text-text leading-relaxed">
          경쟁이 심하지는 않았지만, 예산이 소진되면 조기 마감되므로
          신청 기간이 열리면 바로 준비하는 게 좋습니다.
        </p>
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
          이사할 때 이삿짐 비용, 중개수수료 등이 한꺼번에 나가는데,
          이사비 20만 원이라도 받으면 부담이 줄어듭니다. 선착순이라
          접수 기간 시작일을 미리 체크해두는 게 포인트입니다.
        </p>
        <p className="text-sm text-text leading-relaxed">
          당시 저도 직장인이 아닌 상태에서 지원을 받았는데, 소득이
          낮을수록 오히려 자격이 되는 경우가 많으니 &ldquo;나는
          안 될 거야&rdquo;라고 미리 포기하지 마세요.
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-3">
          청년도약계좌 → 청년미래적금 갈아탄 경험
        </h2>
        <p className="text-sm text-text leading-relaxed mb-3">
          주거정책은 아니지만 목돈 마련과 직결되는 금융 정책도
          함께 정리합니다. 저는 청년도약계좌에 <strong>월 70만 원씩
          3년간</strong> 납입했고, 정부 기여금은 월 약 2만 5천 원을
          받았습니다.
        </p>
        <p className="text-sm text-text leading-relaxed mb-3">
          이후 청년미래적금이 출시됐을 때 만기까지의 총 수령액을
          계산해보니 미래적금 쪽이 더 유리해서 갈아탔습니다.
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
            <strong>&ldquo;나는 해당 안 될 거야&rdquo;라고 넘기지 마세요.</strong>{' '}
            저도 직장인이 아니라서 안 될 줄 알았는데, 오히려 소득이 낮으면
            더 많은 정책에 해당됩니다.
          </li>
          <li>
            <strong>선착순 정책은 시작일에 바로 신청하세요.</strong>{' '}
            이사비 지원처럼 선착순 마감되는 정책은 신청 기간이
            공지되면 바로 서류를 준비해두는 게 좋습니다.
          </li>
          <li>
            <strong>주민등록등본은 미리 발급해두세요.</strong>{' '}
            거의 모든 정책에서 주민등록등본을 요구합니다. 정부24에서
            무료로 발급받을 수 있으니 미리 준비하면 시간을 아낍니다.
          </li>
          <li>
            <strong>소득 기준은 &lsquo;가구&rsquo; 기준인 경우가 많습니다.</strong>{' '}
            본인 소득만 보는 게 아니라 세대원 전체 소득을 보는
            정책이 있으니, 건강보험료 납부확인서를 확인해보세요.
          </li>
          <li>
            <strong>여러 정책을 동시에 받을 수 있습니다.</strong>{' '}
            월세 지원과 이사비 지원은 별개 사업이므로 중복 수령이
            가능했습니다. 하나만 받을 수 있다고 오해하지 마세요.
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
        본 가이드는 개인 경험을 바탕으로 작성되었으며, 정책의 세부
        조건은 연도·지자체에 따라 달라질 수 있습니다. 최종 확인은
        각 정책의 공식 사이트에서 해주세요.
        <br />
        출처:{' '}
        <a
          href="https://www.youthcenter.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          한국고용정보원 온통청년
        </a>
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
