import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '서울 청년이면 이거 다 받아 — 동시에 받을 수 있는 정책 조합 정리',
  description:
    '서울 거주 청년이 동시에 받을 수 있는 정책 조합을 정리했습니다. 월세 지원, 이사비, 교통비, 적금 기여금까지 실제 수령 경험 기반.',
};

export default function SeoulGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '서울 청년이 동시에 받을 수 있는 정책이 있나요?',
            a: '네. 월세 지원, 이사비, 교통비, 청년미래적금 등은 중복 수혜가 가능합니다. 개인 조건에 따라 연 약 300~400만 원대 혜택을 받을 수 있습니다.',
          },
          {
            q: '서울 월세 지원 경쟁률이 높나요?',
            a: '시기에 따라 다르지만, 직접 신청해본 경험상 생각보다 경쟁이 심하지 않았습니다. 자격 요건만 맞으면 받을 확률이 높습니다.',
          },
        ]}
      />

      <Link href="/" className="text-sm text-primary no-underline hover:underline mb-4 inline-block">
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        서울 청년이면 이거 다 받아
      </h1>
      <p className="text-[13px] text-muted mb-5">
        동시에 받을 수 있는 정책 조합 · 실제 수령 경험 기반
      </p>

      {/* 총액 요약 */}
      <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[12px] font-semibold opacity-80 mb-1">서울 거주 무주택 청년 기준</p>
        <p className="text-[28px] font-extrabold leading-tight">연 약 300~400만 원대</p>
        <p className="text-[12px] opacity-80 mt-1">월세 + 이사비 + 적금 기여금 + 교통비 합산 (중복 수혜 가능)</p>
        <p className="text-[10px] opacity-60 mt-2">
          * 개인 조건에 따라 다름 — 아래 시뮬레이션은 최대치 기준입니다.
        </p>
      </div>

      {/* 조합 목록 */}
      <Card>
        <h2 className="text-base font-bold mb-3">동시에 받을 수 있는 정책 조합</h2>
        <div className="space-y-3">
          {/* 정책 1 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">주거</span>
              <span className="text-[12px] font-extrabold text-green">월 20만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">서울시 청년월세 특별지원</h3>
            <p className="text-[12px] text-muted mt-1">
              최대 12개월, 총 240만 원 · 무주택 · 중위소득 150% 이하
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>내 경험:</strong> 관악구 살 때 10개월간 받았어요 (총 200만 원).
              취업 준비 중이었는데 경쟁은 생각보다 심하지 않았거든요.
              주민센터에서 신청했어요.
            </div>
            <p className="text-[11px] text-muted mt-1.5">
              <a href="https://housing.seoul.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">서울주거포털</a>에서 모집 일정 확인
            </p>
          </div>

          {/* 정책 2 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">주거</span>
              <span className="text-[12px] font-extrabold text-green">1회 20~40만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">서울시 이사비 지원</h3>
            <p className="text-[12px] text-muted mt-1">
              1회 지원 · 무주택 · 중위소득 150% 이하
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>내 경험:</strong> 20만 원 받았어요. 선착순이라 빨리 신청하는 게 좋거든요.
              직장인 아닐 때 소득 기준이 넉넉해서 쉽게 통과했어요.
            </div>
            <p className="text-[11px] text-muted mt-1.5">
              <a href="https://housing.seoul.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">서울주거포털</a>에서 모집 일정 확인
            </p>
          </div>

          {/* 정책 3 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-green-bg text-green">금융</span>
              <span className="text-[12px] font-extrabold text-green">정부기여금 지급</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">청년미래적금 (정부기여금)</h3>
            <p className="text-[12px] text-muted mt-1">
              5년 만기 · 정부기여금 지급 (금액은 소득에 따라 다름) · 전국
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>내 경험:</strong> 도약계좌 3년 하다가 갈아탔어요 (갈아타기는 8/6 종료됨).
              기여금이 더 커서 갈아탄 거예요.{' '}
              <Link href="/guide/finance" className="text-primary no-underline hover:underline">
                자세한 비교 →
              </Link>
            </div>
            <p className="text-[11px] text-muted mt-1.5">
              <a href="https://www.kinfa.or.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">서민금융진흥원</a>에서 기여금 상세 확인
            </p>
          </div>

          {/* 정책 4 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1]">교통</span>
              <span className="text-[12px] font-extrabold text-green">대중교통비 환급</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">서울시 청년 교통비 지원 (K-패스)</h3>
            <p className="text-[12px] text-muted mt-1">
              대중교통비 환급 (이용 금액에 따라 다름)
            </p>
            <p className="text-[11px] text-muted mt-1.5">
              <a href="https://www.k-pass.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">K-패스 공식 사이트</a>에서 환급률 확인
            </p>
          </div>
        </div>
      </Card>

      {/* 합산 시뮬레이션 */}
      <Card>
        <h2 className="text-base font-bold mb-3">연간 합산 시뮬레이션</h2>
        <p className="text-[11px] text-muted mb-3 leading-relaxed">
          아래 금액은 최대치 기준이며, 실제 수령액은 개인 자격·소득에 따라 크게 다릅니다. 정확한 금액은 각 정책의 공식 사이트에서 확인하세요.
        </p>
        <div className="space-y-2 text-[13px]">
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">월세 지원 (12개월)</span>
            <span className="font-extrabold text-text">240만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">이사비 지원 (1회)</span>
            <span className="font-extrabold text-text">20~40만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">미래적금 기여금 (12개월)</span>
            <span className="font-extrabold text-text">최대 48만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">교통비 환급 (12개월)</span>
            <span className="font-extrabold text-text">최대 78만 원</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-extrabold text-primary">합계</span>
            <span className="text-[16px] font-extrabold text-primary">약 386~406만 원</span>
          </div>
        </div>
        <p className="text-[10px] text-muted mt-2">
          * 최대 금액 기준이며, 소득·자격 조건에 따라 달라집니다. 중복 수혜 가능 여부는 각 정책의 공식 안내를 확인하세요.
        </p>
      </Card>

      {/* 신청 순서 추천 */}
      <Card>
        <h2 className="text-base font-bold mb-3">추천 신청 순서</h2>
        <div className="space-y-2 text-[13px] text-text">
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">1</span>
            <div>
              <strong>청년미래적금</strong> — 은행 앱에서 바로 가입 (5분)
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">2</span>
            <div>
              <strong>월세 지원</strong> — 모집 기간 확인 후 주민센터 or 온라인 신청
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">3</span>
            <div>
              <strong>이사비</strong> — 이사 후 선착순 신청 (빨리!)
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">4</span>
            <div>
              <strong>K-패스</strong> — 카드 발급 후 자동 적용
            </div>
          </div>
        </div>
      </Card>

      {/* 흔한 실수 */}
      <Card>
        <h2 className="text-base font-bold mb-3">흔한 실수 & 놓치는 포인트</h2>
        <div className="space-y-2 text-[12px] text-text">
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">&ldquo;직장인은 안 되는 줄 알았어요&rdquo;</strong>
            <p className="text-muted mt-0.5">
              월세 지원은 재직자도 소득 기준만 맞으면 돼요. 저도 직장인은 안 되는 줄 알고 놓칠 뻔했거든요.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">&ldquo;선착순이라 못 받을 줄 알았어요&rdquo;</strong>
            <p className="text-muted mt-0.5">
              이사비는 선착순인데, 모집 첫날 신청하면 거의 돼요. 알림 설정 해두는 게 좋아요.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">&ldquo;서류가 복잡할 줄 알았어요&rdquo;</strong>
            <p className="text-muted mt-0.5">
              주민등록등본, 소득증빙만 있으면 대부분 신청 가능해요.
              정부24에서 온라인 발급하면 10분이면 끝나거든요.
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-3 space-y-2">
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            💰 청년도약계좌 vs 청년미래적금 비교
          </span>
        </Link>
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            🏠 청년 주거정책 상세 가이드
          </span>
        </Link>
        <Link
          href="/guide/terms"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            📖 중위소득? 무주택? 정책 용어 쉽게 풀기
          </span>
        </Link>
      </div>

      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 정보는 참고용이며, 최종 자격·신청은 공식 사이트에서 확인하세요.
        <br />작성자: 김태양 · 서울 거주 당시 월세 지원·이사비·도약계좌 실제 수령 경험
      </div>

      {/* 출처 */}
      <div className="mt-3 p-3 bg-surface border border-line rounded-[var(--radius)] text-[11px] text-muted leading-relaxed">
        <p className="font-bold mb-1.5">출처 및 참고 사이트</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>
            서울주거포털:{' '}
            <a href="https://housing.seoul.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://housing.seoul.go.kr</a>
          </li>
          <li>
            온통청년:{' '}
            <a href="https://www.youthcenter.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.youthcenter.go.kr</a>
          </li>
          <li>
            서민금융진흥원:{' '}
            <a href="https://www.kinfa.or.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.kinfa.or.kr</a>
          </li>
        </ul>
      </div>
    </>
  );
}
