import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년도약계좌 vs 청년미래적금, 뭐가 더 유리할까?',
  description:
    '청년도약계좌를 3년 유지하다 청년미래적금으로 갈아탄 실제 경험. 정부기여금, 수익률, 만기금액을 비교하고 나에게 맞는 선택을 알려드립니다.',
};

export default function FinanceGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '청년도약계좌와 청년미래적금 중 뭐가 유리한가요?',
            a: '2026년 기준 청년미래적금이 정부기여금과 우대금리 면에서 더 유리합니다. 다만 기존 도약계좌를 오래 유지했다면 해지 시 불이익을 따져봐야 합니다.',
          },
          {
            q: '청년도약계좌에서 청년미래적금으로 갈아탈 수 있나요?',
            a: '2026년 8월 6일부로 도약계좌→미래적금 갈아타기 특례가 종료되었습니다. 현재는 갈아타기가 불가능하며, 신규로 청년미래적금에 가입하거나 도약계좌를 만기까지 유지하는 방법 중 선택해야 합니다.',
          },
          {
            q: '청년도약계좌 정부기여금은 얼마인가요?',
            a: '소득 구간에 따라 월 최대 3.3만 원이며, 개인소득 2,400만 원 이하일 때 최대 지급됩니다.',
          },
        ]}
      />

      <Link
        href="/"
        className="text-sm text-primary no-underline hover:underline mb-4 inline-block"
      >
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        청년도약계좌 vs 청년미래적금
      </h1>
      <p className="text-[13px] text-muted mb-5">
        3년 유지하다 갈아탄 실제 경험 · 2026년 8월 기준
      </p>

      {/* 핵심 요약 */}
      <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[13px] font-bold mb-2">결론부터 말하면</p>
        <p className="text-[15px] font-extrabold leading-snug">
          지금 새로 시작한다면 청년미래적금이 유리합니다.
        </p>
        <p className="text-[12px] opacity-80 mt-1">
          단, 도약계좌를 이미 3년 이상 유지했다면 만기까지 가는 게 나을 수도 있어요.
        </p>
      </div>

      {/* 비교표 */}
      <Card>
        <h2 className="text-base font-bold mb-3">한눈에 비교</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-2 text-muted font-bold">항목</th>
                <th className="text-left py-2 px-2 font-bold text-text">청년도약계좌</th>
                <th className="text-left py-2 pl-2 font-bold text-primary">청년미래적금</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">월 납입 한도</td>
                <td className="py-2.5 px-2">최대 70만 원</td>
                <td className="py-2.5 pl-2 font-semibold">최대 50만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">만기</td>
                <td className="py-2.5 px-2">5년</td>
                <td className="py-2.5 pl-2 font-semibold">5년</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">정부 기여금</td>
                <td className="py-2.5 px-2">월 최대 3.3만 원</td>
                <td className="py-2.5 pl-2 font-semibold text-primary">월 최대 4만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">금리</td>
                <td className="py-2.5 px-2">기본 4.5%</td>
                <td className="py-2.5 pl-2 font-semibold text-primary">기본 5.0% + 우대</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">비과세</td>
                <td className="py-2.5 px-2">이자소득 비과세</td>
                <td className="py-2.5 pl-2 font-semibold">이자소득 비과세</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">연령</td>
                <td className="py-2.5 px-2">만 19~34세</td>
                <td className="py-2.5 pl-2">만 19~34세</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-2 text-muted">소득 요건</td>
                <td className="py-2.5 px-2">개인소득 7,500만 원 이하</td>
                <td className="py-2.5 pl-2">개인소득 7,500만 원 이하</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* 5년 만기 시뮬레이션 */}
      <Card>
        <h2 className="text-base font-bold mb-3">5년 만기 예상 금액 비교</h2>
        <p className="text-[12px] text-muted mb-3">정부기여금 최대 수령 기준 (도약계좌 월 70만 원 / 미래적금 월 50만 원)</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#f3f5f9] rounded-xl p-3 text-center">
            <p className="text-[11px] text-muted mb-1">청년도약계좌</p>
            <p className="text-[20px] font-extrabold text-text">약 5,000만 원</p>
            <p className="text-[11px] text-muted mt-1">원금 4,200만 + 기여금 198만 + 이자</p>
          </div>
          <div className="bg-primary-bg rounded-xl p-3 text-center">
            <p className="text-[11px] text-primary font-semibold mb-1">청년미래적금</p>
            <p className="text-[20px] font-extrabold text-primary">약 4,000만 원</p>
            <p className="text-[11px] text-muted mt-1">원금 3,000만 + 기여금 240만 + 이자</p>
          </div>
        </div>
        <p className="text-[10px] text-muted mt-2">
          * 단순 추정치이며 실제 금리 변동에 따라 달라집니다.
          정확한 계산은{' '}
          <a
            href="https://moduncalc.com/savings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            적금 이자 계산기
          </a>
          를 이용하세요.
        </p>
      </Card>

      {/* 실제 경험 */}
      <Card>
        <h2 className="text-base font-bold mb-3">내가 갈아탄 이유 (실제 경험)</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3 text-[12px] text-red-700 leading-relaxed">
          <strong>공지 (2026.8.6 기준):</strong> 도약계좌→미래적금 갈아타기 특례는 2026년 8월 6일부로 종료되었습니다. 아래 내용은 종료 전에 갈아탄 실제 경험이며, 현재는 갈아타기가 불가능합니다.
        </div>
        <div className="space-y-3 text-[13px] text-text leading-relaxed">
          <p>
            저는 청년도약계좌를 매월 70만 원씩 <strong>3년간 유지</strong>했습니다.
            정부기여금은 월 약 2만 5천 원 정도 받았고, 3년간 약 90만 원 정도 쌓였습니다.
          </p>
          <p>
            그런데 2026년에 청년미래적금이 나오면서 계산해보니,
            <strong>기여금이 월 4만 원으로 올라가고 금리도 더 높아서</strong> 남은 2년을
            미래적금으로 가는 게 총 수령액이 더 컸습니다.
          </p>
          <p>
            물론 도약계좌를 해지하면 기존 기여금을 포기해야 해서 고민했지만,
            남은 만기(2년)의 추가 기여금 + 금리 차이를 따져보니
            <strong>갈아타는 게 약 50만 원 이상 이득</strong>이었습니다. 마감 전에 결정할 수
            있어서 다행이었습니다.
          </p>
          <div className="bg-amber-bg rounded-lg p-3 text-[12px] text-amber">
            <strong>참고:</strong> 갈아타기 특례는 종료됐지만, 도약계좌를 새로 가입할지 미래적금을 선택할지는 여전히 중요한 선택입니다. 아래 비교를 참고하세요.
          </div>
        </div>
      </Card>

      {/* 어떤 사람에게 뭐가 유리? */}
      <Card>
        <h2 className="text-base font-bold mb-3">나한테는 뭐가 맞을까?</h2>
        <p className="text-[12px] text-muted mb-2">갈아타기는 종료됐으니, 새로 시작한다면 어떤 걸 선택할지 기준을 정리했습니다.</p>
        <div className="space-y-2">
          <div className="bg-primary-bg rounded-lg p-3">
            <p className="text-[12px] font-bold text-primary mb-1">청년미래적금을 선택할 경우</p>
            <ul className="text-[12px] text-text space-y-1 list-disc pl-4">
              <li>지금 새로 적금을 시작하는 경우</li>
              <li>월 50만 원 이하로 납입할 계획인 경우</li>
              <li>소득이 낮아서 기여금을 최대로 받을 수 있는 경우</li>
              <li>금리가 더 높은 상품을 원하는 경우</li>
            </ul>
          </div>
          <div className="bg-[#f3f5f9] rounded-lg p-3">
            <p className="text-[12px] font-bold text-text mb-1">청년도약계좌를 선택할 경우</p>
            <ul className="text-[12px] text-text space-y-1 list-disc pl-4">
              <li>월 50만 원 초과 ~ 70만 원까지 납입하고 싶은 경우</li>
              <li>이미 도약계좌를 보유 중이고 만기가 얼마 안 남은 경우</li>
              <li>은행·상품 변경 없이 기존 계좌를 유지하고 싶은 경우</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 신청 방법 */}
      <Card>
        <h2 className="text-base font-bold mb-3">신청 방법</h2>
        <div className="space-y-2 text-[13px] text-text">
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">1</span>
            <span>시중 은행 앱에서 &ldquo;청년미래적금&rdquo; 검색</span>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">2</span>
            <span>본인 소득 요건 확인 (개인소득 7,500만 원 이하)</span>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">3</span>
            <span>비대면 가입 (영업점 방문도 가능)</span>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">4</span>
            <span>자동이체 설정 → 매월 납입 시작</span>
          </div>
        </div>
        <div className="mt-3 text-[12px] text-muted">
          <strong>팁:</strong> 저는 급여일 다음 날로 자동이체를 걸어두니까 빠뜨린 적이 없었어요.
        </div>
      </Card>

      <div className="mt-3 space-y-2">
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            🏠 청년 주거정책 가이드 — 월세 200만 원 받은 후기
          </span>
        </Link>
        <a
          href="https://moduncalc.com/savings"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            🧮 적금 이자 계산기로 직접 비교해보기
          </span>
        </a>
      </div>

      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 정보는 참고용이며, 정확한 상품 조건은 각 은행 및 공식 사이트에서 확인하세요.
        <br />작성자: 김태양 · 청년도약계좌 3년 유지 후 청년미래적금 전환 경험
      </div>
    </>
  );
}
