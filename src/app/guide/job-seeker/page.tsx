import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '취준생이 받을 수 있는 지원금 총정리 (2026년 최신) | 청년정책 매칭',
  description:
    '취업 준비 중에도 월 50만원 구직촉진수당, 청년월세 지원, 취업활동비까지 받을 수 있어요. 취준생이 놓치기 쉬운 정부 지원금을 신청 순서와 함께 정리했습니다.',
  openGraph: {
    title: '취준생이 받을 수 있는 지원금 총정리 (2026년 최신)',
    description:
      '취업 준비 중에도 월 50만원 구직촉진수당, 청년월세 지원, 취업활동비까지 받을 수 있어요.',
    url: 'https://youth.moduncalc.com/guide/job-seeker',
  },
};

const faqs = [
  {
    q: '취준생도 국민취업지원제도를 신청할 수 있나요?',
    a: '네, 가능합니다. 국민취업지원제도는 취업을 준비 중인 미취업자를 위한 제도로, 재직자가 아니어도 신청할 수 있습니다. 1유형 기준으로 월 50만원씩 최대 6개월, 총 300만원의 구직촉진수당을 받을 수 있습니다.',
  },
  {
    q: '서울시 청년월세 지원은 취준생도 되나요?',
    a: '됩니다. 서울시 청년월세 지원은 소득이 없어도 신청 가능합니다. 기준 중위소득 150% 이하이고 서울에 거주하는 만 19~39세 1인 가구라면 신청할 수 있습니다. 단, 부모님 가구 소득도 심사에 포함되니 미리 확인해보세요.',
  },
  {
    q: '취준 중에 건강보험료를 따로 내야 하나요?',
    a: '부모님 피부양자로 등록되어 있다면 별도로 내지 않아도 됩니다. 직장을 그만두고 지역가입자가 된 경우라면 소득·재산 기준에 따라 보험료가 부과되는데, 소득이 없다면 가족 피부양자 등록을 먼저 시도해보는 게 좋습니다.',
  },
];

export default function JobSeekerGuidePage() {
  return (
    <>
      <FaqJsonLd items={faqs} />

      <main className="max-w-2xl mx-auto px-4 py-6 text-text">
        {/* 뒤로가기 */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-[12px] text-muted mb-5 hover:text-primary transition-colors"
        >
          ← 홈으로
        </Link>

        {/* 히어로 */}
        <section className="mb-8">
          <p className="text-[13px] text-muted mb-1">가이드 · 취준생 지원금</p>
          <h1 className="text-[22px] font-extrabold text-text leading-snug mb-3">
            취준생이 받을 수 있는 지원금 총정리
          </h1>
          <p className="text-[12px] text-muted">최종 업데이트: 2026년 기준 · 작성자: 김태양</p>

          <div className="mt-4 p-4 bg-primary-bg rounded-[var(--radius)] border border-line">
            <p className="text-[12px] text-text leading-relaxed">
              취준 중에 월 50만원씩 나오는 지원금이 있다는 거 알고 계셨나요? 저도 처음엔 몰랐어요.
              관악구 학원에서 공부하면서 생활비 걱정이 컸는데, 나중에서야 이런 제도들을 알게 돼서
              솔직히 좀 억울했습니다. 이 글에서는 취준생 신분으로 실제로 신청 가능한 정책들을
              순서대로 정리해드릴게요.
            </p>
          </div>
        </section>

        {/* 취준생이 놓치는 이유 */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-3">
            왜 취준생들은 이런 지원금을 모를까요?
          </h2>
          <p className="text-[12px] text-text leading-relaxed mb-3">
            가장 흔한 오해가 &ldquo;직장인이나 되는 거 아닌가요?&rdquo; 입니다. 저도 처음에 딱
            그렇게 생각했어요. 고용보험 가입자 대상이라거나, 소득이 있어야 한다거나 하는 선입견이
            있는 거죠.
          </p>
          <p className="text-[12px] text-text leading-relaxed mb-3">
            실제로는 반대입니다. 소득이 없는 구직자, 즉 취준생을 위해 만들어진 제도가 꽤 많아요.
            문제는 홍보가 잘 안 되고, 각 부처마다 따로 운영하다 보니 한눈에 파악하기가 어렵다는
            거예요. 취업 성공한 뒤에 알게 되는 경우가 정말 많습니다.
          </p>
          <ul className="text-[12px] text-muted space-y-1 pl-4 list-disc">
            <li>&ldquo;알바라도 하면 안 되는 줄 알았어요&rdquo; → 일부 가능, 조건 확인 필요</li>
            <li>&ldquo;부모님 소득 있으면 안 된다고 해서&rdquo; → 제도마다 기준이 다름</li>
            <li>&ldquo;신청 기간 지난 줄 알았어요&rdquo; → 상시 접수인 제도가 대부분</li>
          </ul>
        </section>

        {/* 정책 목록 */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-4">
            지금 바로 신청 가능한 정책들
          </h2>

          {/* 1. 국민취업지원제도 1유형 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text">
                국민취업지원제도 1유형
              </h3>
              <span className="text-[11px] bg-primary-bg text-primary px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ml-2">
                최대 300만원
              </span>
            </div>
            <p className="text-[12px] text-text leading-relaxed mb-3">
              핵심은 <strong>구직촉진수당</strong>입니다. 월 50만원 × 6개월, 총 300만원을 받을 수
              있어요. 취준생 입장에서 가장 금액이 크고 실질적인 제도입니다. 고용24 사이트에서
              신청하고, 취업활동계획을 짜서 성실하게 이행하면 됩니다.
            </p>
            <div className="text-[11px] text-muted space-y-1">
              <p>
                <span className="font-semibold text-text">대상:</span> 만 15~69세, 가구소득 중위
                60% 이하, 재산 4억 원 이하
              </p>
              <p>
                <span className="font-semibold text-text">신청:</span>{' '}
                <a
                  href="https://www.work24.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  고용24 (work24.go.kr)
                </a>
              </p>
              <p>
                <span className="font-semibold text-text">주의:</span> 취업지원서비스 참여 의무가
                있고, 중도 취업 시 수당이 중단될 수 있어요
              </p>
            </div>
          </Card>

          {/* 2. 국민취업지원제도 2유형 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text">
                국민취업지원제도 2유형
              </h3>
              <span className="text-[11px] bg-amber-bg text-amber px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ml-2">
                최대 195만원
              </span>
            </div>
            <p className="text-[12px] text-text leading-relaxed mb-3">
              1유형 소득 기준을 넘어서 탈락했다면 2유형을 확인해보세요. 취업활동비용으로 최대
              195만원을 지원받을 수 있습니다. 훈련참여지원금(월 최대 28.4만원), 구직활동지원금 등
              여러 항목으로 구성돼 있어요.
            </p>
            <div className="text-[11px] text-muted space-y-1">
              <p>
                <span className="font-semibold text-text">대상:</span> 만 15~69세 구직자, 소득
                기준 완화 (중위 100% 이하 등 유형별 상이)
              </p>
              <p>
                <span className="font-semibold text-text">포인트:</span> 1유형과 2유형은 동시에
                신청할 수 없어요. 본인 상황에 맞는 유형을 골라야 해요
              </p>
            </div>
          </Card>

          {/* 3. 청년구직활동지원금 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text">
                청년구직활동지원금
              </h3>
              <span className="text-[11px] bg-primary-bg text-primary px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ml-2">
                월 50만원 × 6개월
              </span>
            </div>
            <p className="text-[12px] text-text leading-relaxed mb-3">
              국민취업지원제도와 비슷해 보이지만 별개의 제도입니다. 졸업(예정) 후 2년 이내인
              미취업 청년이 대상이에요. 청년 기준에 딱 맞는다면 우선 검토해볼 만합니다. 다만 지자체
              예산 상황에 따라 모집 시기가 달라지니 공고를 자주 확인하세요.
            </p>
            <div className="text-[11px] text-muted space-y-1">
              <p>
                <span className="font-semibold text-text">대상:</span> 만 18~34세, 졸업(예정) 후
                2년 이내, 중위소득 120% 이하
              </p>
              <p>
                <span className="font-semibold text-text">신청:</span> 청년센터 또는 복지로
              </p>
            </div>
          </Card>

          {/* 4. 서울시 청년월세 지원 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text">
                서울시 청년월세 지원
              </h3>
              <span className="text-[11px] bg-green-bg text-green px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ml-2">
                취준생 가능
              </span>
            </div>
            <p className="text-[12px] text-text leading-relaxed mb-3">
              서울에 혼자 살면서 취준 중이라면 반드시 확인하세요. 소득이 없는 취준생도 신청 가능하고,
              월세 일부를 현금으로 지원해줍니다. 금액은 실제 월세와 지원 기준 중 낮은 금액으로
              결정돼요.
            </p>

            {/* 내 경험 박스 */}
            <div className="mt-3 p-3 bg-green-bg rounded-[var(--radius)] border border-line2">
              <p className="text-[11px] font-semibold text-green mb-1">내 경험</p>
              <p className="text-[12px] text-text leading-relaxed">
                저는 관악구에서 혼자 살면서 학원 다닐 때 이 지원을 받았어요. 당시 월세가 부담이
                컸는데 매달 일정 금액이 나오니까 심리적으로 정말 많이 안정됐습니다. 신청 자체는
                복잡하지 않았는데, 서류 챙기는 게 좀 번거로웠어요. 주민등록등본, 임대차계약서,
                통장 사본 정도는 미리 준비해두면 금방 끝납니다.
              </p>
            </div>

            <div className="text-[11px] text-muted space-y-1 mt-3">
              <p>
                <span className="font-semibold text-text">대상:</span> 만 19~39세, 서울 거주 1인
                가구, 중위소득 150% 이하 (청년 본인 + 부모 가구 합산)
              </p>
              <p>
                <span className="font-semibold text-text">신청:</span> 서울주거포털 (housing.seoul.go.kr)
              </p>
            </div>
          </Card>

          {/* 5. 청년미래적금 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text">
                청년미래적금 / 청년도약계좌
              </h3>
              <span className="text-[11px] bg-amber-bg text-amber px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ml-2">
                조건 확인 필수
              </span>
            </div>
            <p className="text-[12px] text-text leading-relaxed mb-3">
              솔직히 말씀드리면, <strong>청년도약계좌는 취준생은 가입이 안 됩니다.</strong> 개인
              소득이 있어야 가입 가능하거든요. 취업 후에 바로 가입하는 걸 목표로 두시고, 지금은
              다른 제도부터 챙기세요. 단, 취업 직후라면 최우선으로 신청할 것을 추천드립니다.
              도약계좌는 월 70만원, 미래적금은 월 50만원까지 납입 가능하고, 정부가 기여금을 추가로 얹어주는 구조예요.
            </p>
            <div className="text-[11px] text-muted">
              <p>
                <span className="font-semibold text-text">가입 조건:</span> 개인소득 연 7,500만원
                이하 + 가구소득 중위 180% 이하 (소득 없으면 해당 없음)
              </p>
            </div>
          </Card>

          {/* 6. 국민연금 납부예외 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text">
                국민연금 납부예외 신청
              </h3>
              <span className="text-[11px] bg-primary-bg text-primary px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ml-2">
                지출 절감
              </span>
            </div>
            <p className="text-[12px] text-text leading-relaxed mb-3">
              국민연금 고지서가 날아오는데 소득이 없다면, <strong>납부예외 신청</strong>을 할 수
              있습니다. 소득이 없는 기간 동안 납부를 유예해주는 제도예요. 나중에 추후납부(추납)로
              채울 수 있어서 연금 수령에는 영향이 없습니다.
            </p>
            <div className="text-[11px] text-muted">
              <p>
                <span className="font-semibold text-text">신청:</span> 국민연금공단 지사 방문 또는
                내연금 앱
              </p>
            </div>
          </Card>

          {/* 7. 건강보험 피부양자 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text">
                건강보험 피부양자 등록
              </h3>
              <span className="text-[11px] bg-primary-bg text-primary px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ml-2">
                보험료 0원 가능
              </span>
            </div>
            <p className="text-[12px] text-text leading-relaxed mb-3">
              퇴직하거나 학교를 졸업한 뒤 지역가입자로 전환되면 건강보험료가 청구됩니다. 부모님이
              직장가입자라면 <strong>피부양자로 등록</strong>하면 보험료를 내지 않아도 돼요. 소득이
              없고 재산 기준을 충족하면 대부분 가능합니다. 직접 건강보험공단에 전화해서 확인해보는
              게 제일 빠릅니다.
            </p>
            <div className="text-[11px] text-muted">
              <p>
                <span className="font-semibold text-text">신청:</span> 부모님 직장 측에 요청하거나
                건강보험공단 (1577-1000)
              </p>
            </div>
          </Card>
        </section>

        {/* 신청 순서 추천 */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-3">
            이 순서로 신청하세요 (우선순위별)
          </h2>
          <p className="text-[12px] text-text leading-relaxed mb-4">
            한꺼번에 다 하려고 하면 지칩니다. 아래 순서대로 하나씩 처리하는 게 현실적이에요.
          </p>

          <ol className="space-y-3">
            {[
              {
                step: 1,
                title: '건강보험 피부양자 등록 (즉시)',
                desc: '취업 공백이 생겼다면 가장 먼저 처리하세요. 보험료가 소급 청구되기 전에 등록해두면 지출을 아낄 수 있어요.',
              },
              {
                step: 2,
                title: '국민취업지원제도 1유형 신청 (소득 기준 확인 후)',
                desc: '고용24에서 가구소득 기준을 먼저 확인하세요. 1유형 조건이 맞으면 가장 큰 금액(300만원)을 받을 수 있어요.',
              },
              {
                step: 3,
                title: '서울시 청년월세 지원 신청 (서울 거주자)',
                desc: '1유형 신청과 병행 가능합니다. 공고 시기를 놓치면 다음 모집을 기다려야 하니 열려 있을 때 바로 신청하세요.',
              },
              {
                step: 4,
                title: '국민연금 납부예외 신청',
                desc: '지역가입자로 국민연금이 고지되고 있다면 납부예외 신청으로 당장의 지출을 줄이세요.',
              },
              {
                step: 5,
                title: '취업 직후 청년도약계좌 신청',
                desc: '취업하자마자 신청하는 게 이득입니다. 시간이 지날수록 혜택 기간이 줄어들어요.',
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-bg text-primary text-[11px] font-bold flex items-center justify-center">
                  {step}
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-text mb-0.5">{title}</p>
                  <p className="text-[12px] text-muted leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 월 지출 줄이는 팁 */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-3">
            정책 활용해서 취준 기간 지출 줄이는 법
          </h2>
          <p className="text-[12px] text-text leading-relaxed mb-4">
            받을 수 있는 금액도 중요하지만, 지출을 줄이는 것도 똑같이 중요합니다. 실제로
            활용해볼 수 있는 방법들이에요.
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-surface rounded-[var(--radius)] border border-line2">
              <p className="text-[12px] font-semibold text-text mb-1">청년 내일배움카드</p>
              <p className="text-[12px] text-muted leading-relaxed">
                직업훈련 수강료를 최대 500만원까지 지원해줍니다. 학원비 부담이 있다면 수강 과목이
                해당되는지 확인해보세요. 국민취업지원제도와 연계하면 훈련비 + 수당을 동시에 받을
                수도 있어요.
              </p>
            </div>

            <div className="p-3 bg-surface rounded-[var(--radius)] border border-line2">
              <p className="text-[12px] font-semibold text-text mb-1">주민센터 긴급복지지원</p>
              <p className="text-[12px] text-muted leading-relaxed">
                갑자기 소득이 없어진 상황이라면 주민센터에 긴급복지지원을 문의해볼 수 있습니다.
                식비, 주거비 등 단기 지원이 가능한 경우도 있어요.
              </p>
            </div>

            <div className="p-3 bg-surface rounded-[var(--radius)] border border-line2">
              <p className="text-[12px] font-semibold text-text mb-1">청년 교통비 지원 (지자체별)</p>
              <p className="text-[12px] text-muted leading-relaxed">
                서울시 청년 교통비 지원, 경기도 청년기본소득 등 지자체마다 별도로 운영하는 지원이
                있습니다. 본인이 거주하는 지자체 청년포털을 한 번은 꼭 들여다보세요.
              </p>
            </div>

            <div className="p-3 bg-green-bg rounded-[var(--radius)] border border-line2">
              <p className="text-[11px] font-semibold text-green mb-1">내 경험</p>
              <p className="text-[12px] text-text leading-relaxed">
                저는 관악구에서 취준할 때 청년 내일배움카드로 학원비 부담을 줄이고, 월세 지원까지
                받으니까 생활이 훨씬 버틸 만해졌어요. 두 가지만 챙겨도 매달 수십만원 차이가
                났습니다. 진작에 알았으면 더 일찍 신청했을 텐데 하는 아쉬움이 있어요.
              </p>
            </div>
          </div>
        </section>

        {/* 흔한 실수 & 주의사항 */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-3">
            흔한 실수 & 꼭 챙겨야 할 주의사항
          </h2>

          <div className="space-y-3">
            {[
              {
                tag: '중복 수급 주의',
                color: 'text-amber',
                bg: 'bg-amber-bg',
                desc: '국민취업지원제도 1유형과 청년구직활동지원금은 동시에 받을 수 없어요. 어느 쪽이 더 유리한지 먼저 비교하세요.',
              },
              {
                tag: '소득 발생 신고',
                color: 'text-amber',
                bg: 'bg-amber-bg',
                desc: '지원을 받는 도중에 알바나 프리랜서 소득이 생기면 반드시 신고해야 합니다. 신고 안 하면 나중에 환수 처리될 수 있어요.',
              },
              {
                tag: '모집 공고 기간',
                color: 'text-primary',
                bg: 'bg-primary-bg',
                desc: '청년월세 지원처럼 특정 기간에만 모집하는 사업이 있어요. 신청 시기를 놓치면 다음 회차를 기다려야 하니 주기적으로 확인하세요.',
              },
              {
                tag: '부모 소득 합산',
                color: 'text-primary',
                bg: 'bg-primary-bg',
                desc: '일부 제도는 청년 본인 소득만이 아니라 부모님 가구 소득까지 함께 봅니다. 부모님 건강보험료로 대략적인 소득 수준을 가늠해볼 수 있어요.',
              },
              {
                tag: '서류 유효기간',
                color: 'text-muted',
                bg: 'bg-surface',
                desc: '주민등록등본, 가족관계증명서 등은 발급일로부터 3개월 이내인 것을 요구하는 경우가 많아요. 미리 발급해두되 너무 일찍 받으면 다시 뽑아야 할 수도 있어요.',
              },
            ].map(({ tag, color, bg, desc }) => (
              <div
                key={tag}
                className={`flex gap-3 p-3 ${bg} rounded-[var(--radius)] border border-line2`}
              >
                <span
                  className={`text-[11px] font-bold ${color} flex-shrink-0 mt-0.5`}
                >
                  [{tag}]
                </span>
                <p className="text-[12px] text-text leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-3">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-line rounded-[var(--radius)] p-4">
                <p className="text-[12px] font-semibold text-text mb-2">Q. {faq.q}</p>
                <p className="text-[12px] text-muted leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 관련 링크 */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-3">관련 정책 바로가기</h2>
          <div className="grid grid-cols-1 gap-2">
            {[
              {
                label: '국민취업지원제도 신청',
                href: 'https://www.work24.go.kr',
                desc: '고용24 공식 사이트',
              },
              {
                label: '서울주거포털 (청년월세)',
                href: 'https://housing.seoul.go.kr',
                desc: '서울시 주거 지원 공식 포털',
              },
              {
                label: '청년도약계좌 안내',
                href: 'https://www.kinfa.or.kr',
                desc: '서민금융진흥원',
              },
              {
                label: '내연금 (국민연금 납부예외)',
                href: 'https://www.nps.or.kr',
                desc: '국민연금공단 공식 사이트',
              },
            ].map(({ label, href, desc }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-line rounded-[var(--radius)] hover:bg-surface transition-colors"
              >
                <div>
                  <p className="text-[12px] font-semibold text-primary">{label}</p>
                  <p className="text-[11px] text-muted">{desc}</p>
                </div>
                <span className="text-muted text-[12px] ml-2">→</span>
              </a>
            ))}
          </div>
        </section>

        {/* 내부 링크 */}
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-text mb-3">함께 읽으면 좋은 글</h2>
          <div className="grid grid-cols-1 gap-2">
            <Link
              href="/guide/youth-monthly-rent"
              className="flex items-center justify-between p-3 border border-line rounded-[var(--radius)] hover:bg-surface transition-colors"
            >
              <p className="text-[12px] font-semibold text-text">청년 월세 지원 완전 정복 가이드</p>
              <span className="text-muted text-[12px] ml-2">→</span>
            </Link>
            <Link
              href="/guide/national-employment-support"
              className="flex items-center justify-between p-3 border border-line rounded-[var(--radius)] hover:bg-surface transition-colors"
            >
              <p className="text-[12px] font-semibold text-text">국민취업지원제도 1유형 vs 2유형 차이점</p>
              <span className="text-muted text-[12px] ml-2">→</span>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-between p-3 border border-line rounded-[var(--radius)] hover:bg-surface transition-colors"
            >
              <p className="text-[12px] font-semibold text-text">내 조건에 맞는 청년정책 찾기</p>
              <span className="text-muted text-[12px] ml-2">→</span>
            </Link>
          </div>
        </section>

        {/* 면책 고지 */}
        <footer className="border-t border-line pt-5">
          <p className="text-[11px] text-muted leading-relaxed">
            본 콘텐츠는 공식 발표 자료 및 운영자의 실제 경험을 바탕으로 작성되었습니다. 정책
            내용은 예산 상황, 정부 방침 등에 따라 변경될 수 있으며, 최종 신청 전 반드시 공식
            기관(고용24, 서울주거포털, 국민연금공단 등)에서 최신 내용을 확인하시기 바랍니다. 본
            사이트는 특정 금융 상품 판매를 권유하지 않으며, 작성된 정보에 대한 법적 책임을 지지
            않습니다.
          </p>
          <p className="text-[11px] text-muted mt-2">
            문의:{' '}
            <a href="mailto:zxcv0888@naver.com" className="text-primary underline">
              zxcv0888@naver.com
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
