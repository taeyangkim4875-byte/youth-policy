import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '부산 청년 정책 조합 가이드 — 연 최대 약 570만 원 챙기는 법',
  description:
    '부산 거주 청년이 동시에 받을 수 있는 정책 조합을 정리했습니다. 월세 지원, 창업지원금, 면접교통비, 역량강화, 청년미래적금, 행복주택까지 실제로 신청 가능한 것만 모았습니다.',
};

export default function BusanGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '부산 청년 정책 중 중복으로 받을 수 있는 게 있나요?',
            a: '네. 부산 월세 지원, 면접교통비, 역량강화 지원, 청년미래적금 기여금은 조건만 맞으면 중복 수혜가 가능합니다. 창업지원금은 창업 요건이 별도로 있어서 해당자에 한해 추가됩니다.',
          },
          {
            q: '부산이 서울보다 청년 정책 혜택이 적지 않나요?',
            a: '지원금 총액만 보면 서울이 많아 보이지만, 부산은 주거비가 서울의 절반 수준이라 실질 생활비 절감 효과는 부산이 더 클 수 있습니다. 특히 행복주택 경쟁률도 서울보다 낮아서 실제로 받을 확률이 높습니다.',
          },
          {
            q: '부산 청년 월세 지원 신청은 어디서 하나요?',
            a: '부산시 온라인 민원포털 또는 주소지 관할 구청·주민센터에서 신청할 수 있습니다. 모집 시기는 매년 상반기에 공고가 나오므로 부산시 청년정책 홈페이지를 미리 즐겨찾기 해두는 걸 추천합니다.',
          },
        ]}
      />

      <Link href="/" className="text-sm text-primary no-underline hover:underline mb-4 inline-block">
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        부산 청년이면 이 정책들 놓치지 마세요
      </h1>
      <p className="text-[13px] text-muted mb-5">
        동시에 받을 수 있는 정책 조합 · 부산 거주 청년 대상 자료 기반
      </p>

      {/* 총액 요약 */}
      <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[12px] font-semibold opacity-80 mb-1">부산 거주 무주택 청년 기준</p>
        <p className="text-[28px] font-extrabold leading-tight">연 최대 약 570만 원</p>
        <p className="text-[12px] opacity-80 mt-1">월세 + 창업지원금 + 면접교통비 + 적금 기여금 합산 (조건별 차이 있음)</p>
        <p className="text-[10px] opacity-60 mt-2">
          * 개인 조건·신청 시기에 따라 실제 수령액은 달라질 수 있습니다. 창업지원금은 창업자 한정.
        </p>
      </div>

      {/* 정책 조합 목록 */}
      <Card>
        <h2 className="text-base font-bold mb-3">부산 청년 정책 조합</h2>
        <div className="space-y-3">

          {/* 정책 1: 월세 지원 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">주거</span>
              <span className="text-[12px] font-extrabold text-green">월 10만 원 × 12개월</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">부산 청년 월세 지원</h3>
            <p className="text-[12px] text-muted mt-1">
              총 120만 원 · 만 19~39세 · 무주택 · 중위소득 150% 이하 · 보증금 5천만 원 이하 월세 거주자
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>실용 팁:</strong> 부산시 전체 구·군 거주자라면 신청 가능합니다.
              서울 월세 지원(월 20만 원)보다 금액은 적지만, 부산 평균 월세 자체가 서울의 절반 수준이라
              실질 부담 경감 효과는 비슷합니다.
            </div>
          </div>

          {/* 정책 2: 창업지원금 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-bg text-amber">창업</span>
              <span className="text-[12px] font-extrabold text-green">최대 300만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">부산 청년 창업지원금</h3>
            <p className="text-[12px] text-muted mt-1">
              만 18~39세 · 부산 소재 창업자 또는 예비창업자 · 사업화 자금 지원
            </p>
            <div className="bg-amber-bg rounded-lg p-2 mt-2 text-[11px] text-amber">
              <strong>주의:</strong> 창업자 또는 예비창업자 요건이 있습니다. 소상공인 창업 교육을 먼저 이수하면
              가산점을 받을 수 있어서, 창업 계획이 있다면 교육부터 챙기는 게 유리합니다.
            </div>
          </div>

          {/* 정책 3: 면접교통비 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1]">취업</span>
              <span className="text-[12px] font-extrabold text-green">최대 30만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">부산 청년 면접교통비 지원</h3>
            <p className="text-[12px] text-muted mt-1">
              미취업 청년 대상 · 면접 참여 증빙 제출 · 1인 최대 30만 원 (교통비 영수증 기반)
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>실용 팁:</strong> 교통비 영수증을 그때그때 모아두는 게 핵심입니다.
              신청 시 증빙이 부족하면 금액이 깎일 수 있으니, 면접 갈 때마다 교통카드 내역을 저장해두세요.
            </div>
          </div>

          {/* 정책 4: 역량강화 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">자기계발</span>
              <span className="text-[12px] font-extrabold text-green">교육비 일부 지원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">부산 청년 역량강화 지원</h3>
            <p className="text-[12px] text-muted mt-1">
              자격증 취득비·직업훈련비·온라인 강의비 일부 지원 · 만 19~34세 미취업 청년
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>실용 팁:</strong> 자격증 응시료, 학원비 등을 사후 정산 방식으로 지원받을 수 있습니다.
              국비 내일배움카드와 중복 가능 여부를 먼저 확인하세요. 두 개 모두 활용하면 교육비 부담이 거의 없어집니다.
            </div>
          </div>

          {/* 정책 5: 청년미래적금 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-green-bg text-green">금융</span>
              <span className="text-[12px] font-extrabold text-green">월 최대 4만 원 기여금</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">청년미래적금 (전국 공통)</h3>
            <p className="text-[12px] text-muted mt-1">
              5년 만기 · 연 최대 48만 원 기여금 · 만 19~34세 · 근로·사업소득자
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>실용 팁:</strong> 부산 거주자도 전국 공통 혜택을 그대로 받습니다.
              은행 앱에서 5분이면 가입되고, 다른 정책들과 중복 적용 가능합니다.{' '}
              <Link href="/guide/finance" className="text-primary no-underline hover:underline">
                적금 비교 상세 →
              </Link>
            </div>
          </div>

          {/* 정책 6: 행복주택 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">주거</span>
              <span className="text-[12px] font-extrabold text-green">시세 60~80% 임대료</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">부산 행복주택 / 공공임대</h3>
            <p className="text-[12px] text-muted mt-1">
              LH·부산도시공사 운영 · 청년·신혼부부 우선 공급 · 시세 대비 20~40% 저렴
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>실용 팁:</strong> 부산은 서울보다 행복주택 경쟁률이 낮습니다.
              해운대·서면 등 주요 지역 물량도 꾸준히 나오니 LH 청약플러스 앱 알림을 켜두면 좋습니다.
              월세 지원과 행복주택은 중복 신청 불가 경우가 있으니 확인 필수.
            </div>
          </div>

        </div>
      </Card>

      {/* 부산만의 특화 정책 */}
      <Card>
        <h2 className="text-base font-bold mb-1">부산만의 특화 정책</h2>
        <p className="text-[12px] text-muted mb-3">타 지역에 없거나 부산이 특히 잘 되어 있는 것들</p>
        <div className="space-y-2 text-[12px] text-text">
          <div className="bg-primary-bg rounded-lg p-2.5">
            <strong className="text-primary">부산청년희망지원금</strong>
            <p className="text-muted mt-0.5">
              부산시 자체 예산으로 운영하는 생활비 지원 사업입니다. 저소득 미취업 청년을 대상으로
              일정 기간 생활비를 지원합니다. 매년 예산 규모와 조건이 바뀌므로 부산시 청년정책 홈페이지에서 최신 공고를 확인하세요.
            </p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2.5">
            <strong className="text-primary">부산 청년 문화패스</strong>
            <p className="text-muted mt-0.5">
              공연·전시·영화 관람비 일부를 지원하는 부산시 고유 사업입니다.
              금액 자체는 크지 않지만, 문화생활비로 쏠쏠하게 활용할 수 있습니다.
            </p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2.5">
            <strong className="text-primary">부산 창업허브 / 청년창업사관학교 연계</strong>
            <p className="text-muted mt-0.5">
              부산에는 스타트업파크, 센텀혁신파크 등 창업 인프라가 집중되어 있어서,
              창업지원금 외에도 공간·멘토링·투자 연계까지 받을 수 있습니다.
              창업에 관심 있다면 부산이 서울 못지않게 유리합니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 연간 합산 시뮬레이션 */}
      <Card>
        <h2 className="text-base font-bold mb-3">연간 합산 시뮬레이션</h2>
        <p className="text-[12px] text-muted mb-3">취업 준비 중인 부산 무주택 청년 기준 (창업지원금 제외)</p>
        <div className="space-y-2 text-[13px]">
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">월세 지원 (12개월)</span>
            <span className="font-extrabold text-text">120만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">면접교통비 (1회)</span>
            <span className="font-extrabold text-text">최대 30만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">역량강화 지원 (교육비)</span>
            <span className="font-extrabold text-text">최대 50만 원 (추정)</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">청년미래적금 기여금 (12개월)</span>
            <span className="font-extrabold text-text">최대 48만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">창업지원금 (창업자 해당 시)</span>
            <span className="font-extrabold text-text">최대 300만 원</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-extrabold text-primary">합계 (창업자 비해당)</span>
            <span className="text-[16px] font-extrabold text-primary">약 248만 원~</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-line2 pt-2">
            <span className="font-extrabold text-primary">합계 (창업자 포함)</span>
            <span className="text-[16px] font-extrabold text-primary">약 548만 원~</span>
          </div>
        </div>
        <p className="text-[10px] text-muted mt-2">
          * 역량강화 지원 금액은 사업 회차별로 다릅니다. 최대 금액 기준이며 실제 수령액은 다를 수 있습니다.
        </p>
      </Card>

      {/* 부산 vs 서울 비교 */}
      <Card>
        <h2 className="text-base font-bold mb-1">부산 vs 서울, 실질 혜택 비교</h2>
        <p className="text-[12px] text-muted mb-3">지원금 숫자만 보면 서울이 크지만, 진짜 비교는 다릅니다</p>
        <div className="space-y-2 text-[12px] text-text">
          <div className="grid grid-cols-3 gap-1 text-center text-[11px] font-bold pb-2 border-b border-line2">
            <span className="text-muted">항목</span>
            <span className="text-primary">서울</span>
            <span className="text-[#e85c0d]">부산</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center text-[11px] py-1 border-b border-line2">
            <span className="text-muted">월세 지원</span>
            <span>월 20만 원</span>
            <span>월 10만 원</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center text-[11px] py-1 border-b border-line2">
            <span className="text-muted">평균 원룸 월세</span>
            <span>55~80만 원</span>
            <span>30~45만 원</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center text-[11px] py-1 border-b border-line2">
            <span className="text-muted">지원 후 실부담</span>
            <span>35~60만 원</span>
            <span className="text-green font-bold">20~35만 원</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center text-[11px] py-1 border-b border-line2">
            <span className="text-muted">행복주택 경쟁</span>
            <span>매우 치열</span>
            <span className="text-green font-bold">상대적으로 낮음</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center text-[11px] py-1">
            <span className="text-muted">교통비</span>
            <span>월 7~12만 원</span>
            <span className="text-green font-bold">월 4~7만 원</span>
          </div>
        </div>
        <div className="bg-green-bg rounded-lg p-2.5 mt-3 text-[11px] text-green">
          <strong>결론:</strong> 지원금 총액만 보면 서울이 크지만, 부산은 기본 생활비 자체가 낮아서
          실제 생활 여유는 부산이 더 클 수 있습니다. 특히 주거비 부담이 핵심인 청년이라면
          부산 행복주택 + 월세 지원 조합이 현실적으로 강력합니다.
        </div>
      </Card>

      {/* 신청 순서 추천 */}
      <Card>
        <h2 className="text-base font-bold mb-3">추천 신청 순서</h2>
        <div className="space-y-2 text-[13px] text-text">
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">1</span>
            <div>
              <strong>청년미래적금</strong> — 은행 앱에서 바로 가입 (5분). 수시 모집이라 언제든 가능.
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">2</span>
            <div>
              <strong>부산 청년 월세 지원</strong> — 매년 상반기 공고. 부산시 청년정책 홈페이지 알림 설정 필수.
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">3</span>
            <div>
              <strong>역량강화 지원</strong> — 자격증·교육 계획 세우고 사전 승인 받은 뒤 수강.
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">4</span>
            <div>
              <strong>면접교통비</strong> — 구직 활동 중 교통비 영수증 모아뒀다가 신청.
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">5</span>
            <div>
              <strong>행복주택</strong> — LH 청약플러스 앱 알림 켜두고 부산 물량 나오면 바로 지원.
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-amber-bg text-amber text-[11px] font-bold shrink-0">+</span>
            <div>
              <strong>창업지원금</strong> — 창업 예정이라면 소상공인 교육 먼저, 그 다음 부산시 공고 확인.
            </div>
          </div>
        </div>
      </Card>

      {/* 주의사항 */}
      <Card>
        <h2 className="text-base font-bold mb-3">꼭 알아야 할 주의사항</h2>
        <div className="space-y-2 text-[12px] text-text">
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">월세 지원 + 행복주택 중복 불가</strong>
            <p className="text-muted mt-0.5">
              공공임대에 입주한 경우 월세 지원 대상에서 제외될 수 있습니다.
              두 가지를 동시에 신청하면 나중에 환수 요청이 올 수 있으니, 반드시 담당 부서에 먼저 확인하세요.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">소득 기준은 &ldquo;신청 시점&rdquo; 기준</strong>
            <p className="text-muted mt-0.5">
              취업 후 소득이 오르면 일부 정책 자격이 박탈될 수 있습니다.
              취업 준비 기간에 먼저 신청하고, 취업 후에는 청년미래적금·행복주택 쪽으로 전환하는 게 좋습니다.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">창업지원금은 사후 관리가 있습니다</strong>
            <p className="text-muted mt-0.5">
              지원금을 받으면 사용 내역을 증빙해야 합니다. 지출 영수증을 분류해서 보관해두지 않으면
              정산 단계에서 꽤 번거롭습니다. 지원금 받는 날부터 증빙 관리를 시작하세요.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">예산 소진 시 조기 마감</strong>
            <p className="text-muted mt-0.5">
              부산 청년 정책은 선착순 또는 예산 소진 시 조기 마감되는 경우가 많습니다.
              공고가 뜨면 바로 신청하는 습관이 가장 중요합니다.
              부산시 공식 SNS와 청년정책 홈페이지를 구독해두세요.
            </p>
          </div>
        </div>
      </Card>

      {/* 관련 링크 */}
      <div className="mt-3 space-y-2">
        <Link
          href="/guide/seoul"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            서울 청년 정책 조합 가이드 (서울과 비교해보기)
          </span>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년도약계좌 vs 청년미래적금 비교
          </span>
        </Link>
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년 주거정책 상세 가이드 (행복주택·전세대출)
          </span>
        </Link>
        <Link
          href="/guide/terms"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            중위소득? 무주택? 정책 용어 쉽게 풀기
          </span>
        </Link>
      </div>

      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 정보는 공개된 자료를 바탕으로 정리한 참고용 가이드입니다. 정책 조건·금액·일정은 변경될 수 있으므로
        최종 자격 확인 및 신청은 부산시 청년정책 공식 홈페이지 또는 관할 구청에서 반드시 확인하세요.
        <br />작성자: 김태양 · 부산 거주 청년을 위한 공개 자료 기반 연구 가이드
      </div>
    </>
  );
}
