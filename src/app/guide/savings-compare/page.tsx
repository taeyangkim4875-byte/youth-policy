import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026 청년 적금 총정리 — 어떤 순서로 가입해야 할까',
  description:
    '청년미래적금, 청년도약계좌, 청년 주택드림 청약통장을 한 번에 비교. 월 소득별 납입 전략과 5년 후 예상 자산, 가입 우선순위를 실제 경험 기반으로 정리했습니다.',
};

const faqItems = [
  {
    q: '청년 적금 중에 제일 먼저 가입해야 하는 게 뭔가요?',
    a: '2026년 기준으로는 청년미래적금이 1순위입니다. 정부기여금이 월 최대 4만 원으로 가장 높고, 금리도 5.0% 이상이라 수익성이 제일 좋습니다. 내 집 마련 계획이 있다면 청년 주택드림 청약통장을 병행하세요.',
  },
  {
    q: '청년미래적금과 청년도약계좌를 동시에 가입할 수 있나요?',
    a: '원칙적으로 중복 가입은 불가합니다. 청년도약계좌를 해지하고 청년미래적금에 가입하거나, 둘 중 하나를 선택해야 합니다. 다만 청약통장은 별도 상품이므로 어느 적금과도 동시에 유지할 수 있습니다.',
  },
  {
    q: '월 소득이 200만 원이면 적금을 얼마씩 넣는 게 좋을까요?',
    a: '청년미래적금에 월 40만 원, 청년 주택드림 청약통장에 월 10만 원을 넣는 걸 추천합니다. 생활비와 비상금을 확보한 후 남는 돈은 CMA나 파킹통장에 두세요.',
  },
];

export default function SavingsComparePage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />

      <Link
        href="/"
        className="text-sm text-primary no-underline hover:underline mb-4 inline-block"
      >
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        2026 청년 적금 총정리
      </h1>
      <p className="text-[13px] text-muted mb-5">
        어떤 순서로 가입해야 할까 · 2026년 8월 기준 · 김태양
      </p>

      {/* 핵심 한 줄 요약 */}
      <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[13px] font-bold mb-1">적금 뭐부터 들어야 해? 순서가 중요합니다</p>
        <p className="text-[15px] font-extrabold leading-snug">
          1순위 청년미래적금 → 2순위 청약통장 → 3순위 특판 적금
        </p>
        <p className="text-[12px] opacity-80 mt-1">
          기여금 + 금리 + 목적을 동시에 따져야 손해 없이 굴릴 수 있어요.
        </p>
      </div>

      {/* 상품 총정리 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">2026년 청년 적금 상품 한눈에 보기</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-2 text-muted font-bold">상품명</th>
                <th className="text-left py-2 px-2 font-bold text-text">금리</th>
                <th className="text-left py-2 px-2 font-bold text-text">기여금</th>
                <th className="text-left py-2 pl-2 font-bold text-text">만기</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 font-semibold text-primary">청년미래적금</td>
                <td className="py-2.5 px-2 font-semibold text-primary">5.0%+</td>
                <td className="py-2.5 px-2 font-semibold text-primary">월 최대 4만 원</td>
                <td className="py-2.5 pl-2">5년</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">청년도약계좌 *</td>
                <td className="py-2.5 px-2">4.5%</td>
                <td className="py-2.5 px-2">월 최대 3.3만 원</td>
                <td className="py-2.5 pl-2">5년</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2">청년 주택드림 청약통장</td>
                <td className="py-2.5 px-2">4.5%</td>
                <td className="py-2.5 px-2">기여금 없음</td>
                <td className="py-2.5 pl-2">무기한</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-2 text-muted">시중은행 특판 적금</td>
                <td className="py-2.5 px-2 text-muted">3~4%</td>
                <td className="py-2.5 px-2 text-muted">없음</td>
                <td className="py-2.5 pl-2 text-muted">1~3년</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-muted mt-2">
          * 청년도약계좌는 2026년 현재 신규 가입이 제한될 수 있습니다. 가입 전 공식 채널 확인 필수.
        </p>
      </Card>

      {/* 상품별 상세 설명 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">상품별 특징 정리</h2>
        <div className="space-y-4">

          <div className="border-l-2 border-primary pl-3">
            <p className="text-[12px] font-bold text-primary mb-1">청년미래적금 — 지금 새로 시작한다면 이걸로</p>
            <p className="text-[12px] text-text leading-relaxed">
              2026년 기준 청년 적금 중 정부기여금이 가장 높습니다. 월 최대 4만 원씩 5년이면 기여금만 <strong>240만 원</strong>. 기본 금리 5.0%에 우대금리까지 얹으면 시중 적금과 비교 자체가 안 됩니다. 이자소득 비과세 혜택도 있어서 실수령액이 더 커요. 만 19~34세, 개인소득 7,500만 원 이하라면 1순위로 가입해야 합니다.
            </p>
          </div>

          <div className="border-l-2 border-line pl-3">
            <p className="text-[12px] font-bold text-muted mb-1">청년도약계좌 — 기존 가입자는 유지, 신규는 어려울 수 있음</p>
            <p className="text-[12px] text-text leading-relaxed">
              한때 가장 인기 있던 상품이지만, 2026년 들어 신규 가입 창구가 줄어드는 추세입니다. 기여금이 월 최대 3.3만 원으로 미래적금보다 낮고, 금리도 4.5%로 낮습니다. 이미 유지 중인 분들은 남은 만기와 기여금 누적분을 계산해서 갈아탈지 결정하세요. 계산법은 <Link href="/guide/finance" className="text-primary no-underline hover:underline">여기서 확인</Link>할 수 있어요.
            </p>
          </div>

          <div className="border-l-2 border-amber pl-3">
            <p className="text-[12px] font-bold text-amber mb-1">청년 주택드림 청약통장 — 집 살 계획 있다면 반드시</p>
            <p className="text-[12px] text-text leading-relaxed">
              금리 4.5%도 좋지만 진짜 가치는 <strong>청약가점 + 대출 연계</strong>에 있습니다. 청년 주택드림 대출과 연계하면 저금리로 내 집 마련이 가능해요. 월 2만 원만 넣어도 청약 가입 기간이 쌓이니, 집 살 생각이 1%라도 있으면 지금 바로 만들어두는 게 맞습니다. 적금과 병행 가능합니다.
            </p>
          </div>

          <div className="border-l-2 border-line pl-3">
            <p className="text-[12px] font-bold text-muted mb-1">일반 특판 적금 — 여유자금 굴릴 때만</p>
            <p className="text-[12px] text-text leading-relaxed">
              금리 3~4%, 기여금 없음. 정부 지원 상품을 모두 활용하고 남은 돈이 있을 때만 고려하세요. 단기(6개월~1년) 특판을 노리는 게 요령입니다. 주거래 은행 우대 혜택이나 첫 거래 이벤트를 챙기면 4% 후반도 나옵니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 가입 우선순위 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">가입 우선순위 추천</h2>
        <div className="space-y-2">
          <div className="flex gap-3 items-start bg-primary-bg rounded-lg p-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[12px] font-bold shrink-0">1</span>
            <div>
              <p className="text-[12px] font-bold text-primary">청년미래적금</p>
              <p className="text-[12px] text-text mt-0.5">기여금 월 4만 원 + 금리 5.0%+. 정부 지원 중 수익성 최고. 월 최대 70만 원까지.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-amber-bg rounded-lg p-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber text-white text-[12px] font-bold shrink-0">2</span>
            <div>
              <p className="text-[12px] font-bold text-amber">청년 주택드림 청약통장</p>
              <p className="text-[12px] text-text mt-0.5">내 집 마련 계획이 있다면 반드시. 월 10만 원 이상 넣으면 청약가점 + 대출 연계 가능.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-surface border border-line rounded-lg p-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-line text-muted text-[12px] font-bold shrink-0">3</span>
            <div>
              <p className="text-[12px] font-bold text-text">시중은행 특판 적금</p>
              <p className="text-[12px] text-text mt-0.5">위 두 가지 다 챙긴 뒤 남는 여유자금만. 단기 특판으로 회전율 높이는 전략.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 월 소득별 배분 전략 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text">월 소득별 적금 배분 전략</h2>
        <p className="text-[12px] text-muted mb-3">생활비 50%, 저축 30~40% 기준 추정</p>
        <div className="space-y-3">

          <div className="rounded-lg border border-line2 overflow-hidden">
            <div className="bg-surface px-3 py-2 border-b border-line2">
              <p className="text-[12px] font-bold text-text">월 소득 200만 원</p>
            </div>
            <div className="px-3 py-2.5 space-y-1.5 text-[12px] text-text">
              <div className="flex justify-between">
                <span className="text-muted">청년미래적금</span>
                <span className="font-semibold text-primary">40만 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">청약통장</span>
                <span className="font-semibold text-amber">10만 원</span>
              </div>
              <div className="flex justify-between border-t border-line2 pt-1.5 mt-1">
                <span className="text-muted">월 저축 합계</span>
                <span className="font-extrabold">50만 원</span>
              </div>
              <p className="text-[11px] text-muted">특판 적금은 비상금 3개월치 확보 후 여유 있을 때.</p>
            </div>
          </div>

          <div className="rounded-lg border border-line2 overflow-hidden">
            <div className="bg-surface px-3 py-2 border-b border-line2">
              <p className="text-[12px] font-bold text-text">월 소득 250만 원</p>
            </div>
            <div className="px-3 py-2.5 space-y-1.5 text-[12px] text-text">
              <div className="flex justify-between">
                <span className="text-muted">청년미래적금</span>
                <span className="font-semibold text-primary">50만 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">청약통장</span>
                <span className="font-semibold text-amber">10만 원</span>
              </div>
              <div className="flex justify-between border-t border-line2 pt-1.5 mt-1">
                <span className="text-muted">월 저축 합계</span>
                <span className="font-extrabold">60만 원</span>
              </div>
              <p className="text-[11px] text-muted">남는 금액은 CMA 파킹통장으로 유동성 확보.</p>
            </div>
          </div>

          <div className="rounded-lg border border-primary/30 overflow-hidden">
            <div className="bg-primary-bg px-3 py-2 border-b border-primary/20">
              <p className="text-[12px] font-bold text-primary">월 소득 300만 원+</p>
            </div>
            <div className="px-3 py-2.5 space-y-1.5 text-[12px] text-text">
              <div className="flex justify-between">
                <span className="text-muted">청년미래적금</span>
                <span className="font-semibold text-primary">70만 원 (한도 최대)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">청약통장</span>
                <span className="font-semibold text-amber">10만 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">특판 적금</span>
                <span className="font-semibold">20만 원</span>
              </div>
              <div className="flex justify-between border-t border-line2 pt-1.5 mt-1">
                <span className="text-muted">월 저축 합계</span>
                <span className="font-extrabold">100만 원</span>
              </div>
              <p className="text-[11px] text-muted">미래적금을 한도 꽉 채우는 게 기여금 극대화 전략.</p>
            </div>
          </div>

        </div>
      </Card>

      {/* 5년 후 자산 시뮬레이션 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text">5년 후 예상 자산 시뮬레이션</h2>
        <p className="text-[12px] text-muted mb-3">청년미래적금 월 70만 원, 금리 5.0%, 기여금 최대 수령 기준</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-surface border border-line rounded-lg p-2.5 text-center">
            <p className="text-[11px] text-muted mb-1">원금</p>
            <p className="text-[16px] font-extrabold text-text">4,200만</p>
            <p className="text-[10px] text-muted mt-0.5">70만 × 60개월</p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-2.5 text-center">
            <p className="text-[11px] text-muted mb-1">정부기여금</p>
            <p className="text-[16px] font-extrabold text-amber">+240만</p>
            <p className="text-[10px] text-muted mt-0.5">4만 × 60개월</p>
          </div>
          <div className="bg-primary-bg border border-primary/20 rounded-lg p-2.5 text-center">
            <p className="text-[11px] text-primary mb-1">이자 (세전)</p>
            <p className="text-[16px] font-extrabold text-primary">+약 840만</p>
            <p className="text-[10px] text-muted mt-0.5">5.0% 복리 추정</p>
          </div>
        </div>
        <div className="bg-primary rounded-lg p-3 text-center text-white">
          <p className="text-[12px] opacity-80 mb-0.5">5년 후 예상 수령액 (비과세 혜택 포함)</p>
          <p className="text-[24px] font-extrabold">약 5,280만 원</p>
          <p className="text-[11px] opacity-70 mt-0.5">실제 금리 변동에 따라 달라집니다</p>
        </div>
        <p className="text-[11px] text-muted mt-2">
          더 정확한 계산은{' '}
          <a
            href="https://moduncalc.com/savings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            적금 이자 계산기
          </a>
          에서 직접 해보세요.
        </p>
      </Card>

      {/* 내 경험 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">내 경험 — 도약계좌에서 미래적금으로 갈아탄 이유</h2>
        <div className="bg-green-bg rounded-lg p-3 text-[12px] text-text leading-relaxed space-y-2">
          <p>
            저는 청년도약계좌를 <strong>3년간 월 70만 원씩 유지</strong>했습니다. 그동안 받은 정부기여금은 월 약 2만 5천 원, 3년 합산 약 90만 원이었어요.
          </p>
          <p>
            2026년에 청년미래적금이 출시되면서 계산을 해봤는데, 남은 2년치 기여금 차이가 꽤 컸습니다. 도약계좌를 유지하면 남은 2년 기여금이 약 60만 원인데, 미래적금으로 갈아타면 같은 기간 기여금이 96만 원이고 금리도 0.5%p 높았거든요.
          </p>
          <p>
            결국 기존 기여금 90만 원을 반환하더라도, <strong>남은 2년간의 차액 + 금리 차이로 약 50만 원 이상 이득</strong>이 나왔습니다. 그래서 갈아탔고, 지금까지 후회 없어요.
          </p>
          <p className="text-[11px] text-muted">
            계산 방법과 갈아타기 전 체크리스트는{' '}
            <Link href="/guide/finance" className="text-primary no-underline hover:underline">
              청년도약계좌 vs 청년미래적금 상세 비교
            </Link>
            에서 확인하세요.
          </p>
        </div>
      </Card>

      {/* 주의사항 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">가입 전 꼭 알아야 할 주의사항</h2>
        <div className="space-y-2">
          <div className="flex gap-2.5 items-start">
            <span className="text-amber text-[14px] mt-0.5 shrink-0">!</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">중도 해지 시 기여금 전액 반환</p>
              <p className="text-[12px] text-muted leading-relaxed">만기 전에 해지하면 그동안 받은 정부기여금을 모두 돌려줘야 합니다. 이자도 일반 금리로 재계산되어 손해가 큽니다. 5년 유지가 어려운 상황이라면 납입금액을 줄여서 지속하는 게 낫습니다.</p>
            </div>
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="text-amber text-[14px] mt-0.5 shrink-0">!</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">소득 요건 매년 재확인</p>
              <p className="text-[12px] text-text leading-relaxed">가입 당시에는 요건을 충족했더라도, 매년 소득 심사를 통해 기여금 지급 여부가 달라질 수 있습니다. 연봉이 올라서 소득 구간이 바뀌면 기여금이 줄거나 지급이 중단될 수 있어요.</p>
            </div>
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="text-amber text-[14px] mt-0.5 shrink-0">!</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">청년도약계좌 신규 가입 확인 필수</p>
              <p className="text-[12px] text-text leading-relaxed">2026년 현재 청년도약계좌 신규 가입 모집이 중단된 은행이 늘고 있습니다. 가입 의향이 있다면 공식 채널(서민금융진흥원)에서 모집 일정을 꼭 확인하세요.</p>
            </div>
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="text-amber text-[14px] mt-0.5 shrink-0">!</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">청약통장 납입 금액 전략적으로</p>
              <p className="text-[12px] text-text leading-relaxed">청년 주택드림 청약통장은 월 최대 100만 원까지 납입 가능하지만, 청약가점에는 납입 횟수가 더 중요합니다. 적은 금액이라도 꾸준히 납입하는 게 가점에는 유리합니다.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 관련 링크 */}
      <div className="mt-3 space-y-2">
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">청년도약계좌 vs 청년미래적금 — 갈아타기 전 계산법</span>
          <p className="text-[12px] text-muted mt-0.5">실제 갈아탄 경험과 손익 계산 방법 상세 정리</p>
        </Link>
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">청년 주거정책 가이드 — 청약부터 월세지원까지</span>
          <p className="text-[12px] text-muted mt-0.5">청년 주택드림 청약통장 연계 대출 정보 포함</p>
        </Link>
        <a
          href="https://moduncalc.com/savings"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">적금 이자 계산기로 직접 비교해보기</span>
          <p className="text-[12px] text-muted mt-0.5">moduncalc.com — 금리와 납입금액 바꿔가며 시뮬레이션</p>
        </a>
      </div>

      {/* 면책 고지 */}
      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 내용은 2026년 8월 기준 공개된 정보를 바탕으로 작성된 참고용 자료입니다. 정확한 상품 조건(금리, 기여금, 가입 자격)은 각 은행 및 서민금융진흥원 공식 채널에서 확인하세요. 본 글은 금융상품 추천이나 투자 권유가 아닙니다.
        <br />작성자: 김태양 · 청년도약계좌 3년 유지 후 청년미래적금 전환 경험자
      </div>
    </>
  );
}
