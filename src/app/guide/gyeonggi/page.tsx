import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '경기도 청년 정책 조합 가이드 — 연 최대 약 462만 원 받는 법',
  description:
    '경기도에 사는 청년이라면 기본소득, 면접수당, 교통비, 월세 지원까지 동시에 받을 수 있습니다. 서울과의 비교, 지역화폐 활용 팁, 신청 순서까지 한 번에 정리했습니다.',
};

export default function GyeonggiGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '경기도 청년 기본소득은 누구나 받을 수 있나요?',
            a: '경기도에 3년 이상 거주하거나, 합산 10년 이상 거주한 만 24세 청년이 대상입니다. 소득·재산 기준 없이 거주 요건만 충족하면 신청 가능합니다.',
          },
          {
            q: '경기도 청년 정책과 전국 정책을 동시에 받을 수 있나요?',
            a: '네, 가능합니다. 경기도 기본소득, 면접수당, 교통비 지원은 청년미래적금이나 국민취업지원제도 같은 전국 정책과 중복 수혜가 됩니다. 조건만 맞으면 동시에 신청하세요.',
          },
          {
            q: '경기도 지역화폐는 어디서 사용할 수 있나요?',
            a: '경기도 기본소득과 면접수당은 경기지역화폐로 지급됩니다. 거주 시·군 내 연 매출 10억 원 이하 소상공인 가맹점에서 사용 가능합니다. 대형마트, 백화점, 온라인 쇼핑몰은 사용 불가입니다.',
          },
        ]}
      />

      <Link href="/" className="text-sm text-primary no-underline hover:underline mb-4 inline-block">
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        경기도 청년이면 이것도 받을 수 있어
      </h1>
      <p className="text-[13px] text-muted mb-5">
        동시에 받을 수 있는 정책 조합 · 경기도 거주 청년을 위해 공식 자료 기반으로 정리
      </p>

      {/* 총액 요약 카드 */}
      <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[12px] font-semibold opacity-80 mb-1">경기도 거주 무주택 청년 기준 (풀 조합)</p>
        <p className="text-[28px] font-extrabold leading-tight">연 최대 약 462만 원</p>
        <p className="text-[12px] opacity-80 mt-1">기본소득 + 면접수당 + 교통비 + 월세 지원 + 적금 기여금 합산</p>
        <p className="text-[10px] opacity-60 mt-2">
          * 개인 조건에 따라 실제 수령액은 달라집니다. 모든 정책을 동시에 받을 수 없을 수도 있습니다.
        </p>
      </div>

      {/* 정책 조합 목록 */}
      <Card>
        <h2 className="text-base font-bold mb-3">동시에 받을 수 있는 정책 조합</h2>
        <div className="space-y-3">

          {/* 경기도 청년 기본소득 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">경기도</span>
              <span className="text-[12px] font-extrabold text-green">연 100만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">경기도 청년 기본소득</h3>
            <p className="text-[12px] text-muted mt-1">
              만 24세 · 경기도 3년 이상 거주 or 합산 10년 이상 · 분기별 25만 원 지역화폐 지급
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>포인트:</strong> 소득·재산 기준이 없어서 취업자, 대학생, 구직자 모두 신청 가능합니다.
              분기마다 경기도 일자리재단 홈페이지(ggcounty.or.kr)에서 신청하고, 경기지역화폐로 받아요.
            </div>
          </div>

          {/* 면접수당 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">경기도</span>
              <span className="text-[12px] font-extrabold text-green">최대 50만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">경기도 청년 면접수당</h3>
            <p className="text-[12px] text-muted mt-1">
              만 18~34세 · 경기도 거주 · 면접 1회당 5만 원 · 최대 10회(50만 원) · 지역화폐 지급
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>포인트:</strong> 면접 확인서(합격·불합격 무관)만 있으면 됩니다.
              취업 준비 중이라면 면접 볼 때마다 신청해두는 게 이득이에요.
              경기도 일자리 포털에서 온라인 신청 가능합니다.
            </div>
          </div>

          {/* 교통비 지원 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1]">교통</span>
              <span className="text-[12px] font-extrabold text-green">연 12만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">경기도 청년 교통비 지원</h3>
            <p className="text-[12px] text-muted mt-1">
              만 19~39세 · 경기도 거주 · 연 12만 원 교통카드 포인트 지급
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>포인트:</strong> K-패스와 별개로 신청 가능합니다.
              경기도 교통비 지원 사업은 대중교통 이용 여부와 무관하게 일괄 지급되는 방식이에요.
              신청 후 교통카드에 포인트로 충전됩니다.
            </div>
          </div>

          {/* 청년미래적금 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-green-bg text-green">금융</span>
              <span className="text-[12px] font-extrabold text-green">월 최대 4만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">청년미래적금 (정부기여금)</h3>
            <p className="text-[12px] text-muted mt-1">
              전국 · 5년 만기 · 연 최대 48만 원 정부기여금 · 소득 기준 충족 시
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>포인트:</strong> 경기도 지역 정책과 중복 가능한 전국 정책입니다.
              은행 앱에서 5분이면 가입할 수 있고, 가입 후 매달 자동으로 기여금이 쌓입니다.{' '}
              <Link href="/guide/finance" className="text-primary no-underline hover:underline">
                적금 비교 상세 →
              </Link>
            </div>
          </div>

          {/* 국민취업지원제도 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-green-bg text-green">고용</span>
              <span className="text-[12px] font-extrabold text-green">월 최대 50만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">국민취업지원제도 (1유형)</h3>
            <p className="text-[12px] text-muted mt-1">
              전국 · 구직촉진수당 월 50만 원 × 최대 6개월 (300만 원) · 소득·재산 기준
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>포인트:</strong> 경기도 기본소득, 면접수당과 중복 수혜 가능합니다.
              1유형 기준은 중위소득 60% 이하지만, 2유형은 기준이 더 넓으니 확인해보세요.
              고용24(work24.go.kr)에서 신청합니다.
            </div>
          </div>

          {/* 경기도 무주택 청년 월세 지원 */}
          <div className="border border-line rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-bg text-primary">주거</span>
              <span className="text-[12px] font-extrabold text-green">월 20만 원</span>
            </div>
            <h3 className="text-[14px] font-extrabold text-text">경기도 무주택 청년 월세 지원</h3>
            <p className="text-[12px] text-muted mt-1">
              만 19~39세 · 경기도 무주택 청년 · 월 20만 원 × 최대 10개월 (총 200만 원) · 중위소득 기준
            </p>
            <div className="bg-green-bg rounded-lg p-2 mt-2 text-[11px] text-green">
              <strong>포인트:</strong> 서울시 월세 지원(12개월)보다 지원 기간이 짧지만,
              경기도 기본소득과 동시에 받을 수 있어서 합산하면 꽤 됩니다.
              모집 기간에 맞춰 경기도 복지포털(gg.go.kr)에서 신청하세요.
            </div>
          </div>

        </div>
      </Card>

      {/* 연간 합산 시뮬레이션 */}
      <Card>
        <h2 className="text-base font-bold mb-3">연간 합산 시뮬레이션</h2>
        <div className="space-y-2 text-[13px]">
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">경기도 청년 기본소득</span>
            <span className="font-extrabold text-text">100만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">경기도 청년 면접수당 (10회)</span>
            <span className="font-extrabold text-text">최대 50만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">경기도 청년 교통비 지원</span>
            <span className="font-extrabold text-text">12만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">청년미래적금 기여금 (12개월)</span>
            <span className="font-extrabold text-text">최대 48만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-text">경기도 무주택 월세 지원 (10개월)</span>
            <span className="font-extrabold text-text">최대 200만 원</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-line2">
            <span className="text-muted text-[12px]">국민취업지원제도 (별도 조건)</span>
            <span className="text-muted text-[12px]">별도 산정</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-extrabold text-primary">합계 (월세 포함)</span>
            <span className="text-[16px] font-extrabold text-primary">약 410~462만 원</span>
          </div>
        </div>
        <p className="text-[10px] text-muted mt-2">
          * 면접수당은 실제 면접 횟수에 따라 달라집니다. 국민취업지원제도는 별도 소득 조건이 있어 포함하지 않았습니다.
          최대 금액 기준이며, 개인 자격 조건에 따라 수령액이 달라집니다.
        </p>
      </Card>

      {/* 서울 vs 경기 비교 */}
      <Card>
        <h2 className="text-base font-bold mb-3">서울 vs 경기도 — 어느 쪽이 더 유리할까?</h2>
        <p className="text-[12px] text-muted mb-3">
          거주지에 따라 받을 수 있는 정책이 다릅니다. 단순 이사로 수혜 조건이 달라질 수 있으니 비교해보세요.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px] border-collapse">
            <thead>
              <tr className="bg-primary-bg">
                <th className="text-left p-2 text-text font-bold border border-line rounded-tl-lg">정책</th>
                <th className="text-center p-2 text-primary font-bold border border-line">서울</th>
                <th className="text-center p-2 text-green font-bold border border-line rounded-tr-lg">경기도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-line text-text">청년 기본소득</td>
                <td className="p-2 border border-line text-center text-muted">없음</td>
                <td className="p-2 border border-line text-center text-green font-bold">연 100만 원</td>
              </tr>
              <tr className="bg-surface">
                <td className="p-2 border border-line text-text">면접수당</td>
                <td className="p-2 border border-line text-center text-muted">없음</td>
                <td className="p-2 border border-line text-center text-green font-bold">최대 50만 원</td>
              </tr>
              <tr>
                <td className="p-2 border border-line text-text">청년 교통비</td>
                <td className="p-2 border border-line text-center text-primary font-bold">K-패스 환급</td>
                <td className="p-2 border border-line text-center text-green font-bold">연 12만 원 + K-패스</td>
              </tr>
              <tr className="bg-surface">
                <td className="p-2 border border-line text-text">무주택 월세 지원</td>
                <td className="p-2 border border-line text-center text-primary font-bold">월 20만 원 × 12개월</td>
                <td className="p-2 border border-line text-center text-green font-bold">월 20만 원 × 10개월</td>
              </tr>
              <tr>
                <td className="p-2 border border-line text-text">이사비 지원</td>
                <td className="p-2 border border-line text-center text-primary font-bold">20~40만 원</td>
                <td className="p-2 border border-line text-center text-muted">별도 확인 필요</td>
              </tr>
              <tr className="bg-surface">
                <td className="p-2 border border-line text-text">청년미래적금</td>
                <td className="p-2 border border-line text-center text-muted">공통 (전국)</td>
                <td className="p-2 border border-line text-center text-muted">공통 (전국)</td>
              </tr>
              <tr>
                <td className="p-2 border border-line text-text font-bold">연 최대 합산</td>
                <td className="p-2 border border-line text-center text-primary font-bold">약 386~500만 원</td>
                <td className="p-2 border border-line text-center text-green font-bold">약 410~462만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 space-y-2">
          <div className="bg-amber-bg rounded-lg p-2.5 text-[12px]">
            <strong className="text-amber">경기도가 유리한 경우:</strong>
            <span className="text-text"> 취업 준비 중이라면 기본소득(100만 원) + 면접수당(최대 50만 원)만으로 서울 대비 경쟁력이 있습니다.
            특히 면접 준비에 집중하는 시기라면 경기도 조합이 실질적으로 더 많이 나올 수 있어요.</span>
          </div>
          <div className="bg-primary-bg rounded-lg p-2.5 text-[12px]">
            <strong className="text-primary">서울이 유리한 경우:</strong>
            <span className="text-text"> 무주택이고 월세가 높다면 서울 월세 지원(12개월, 최대 240만 원)이 경기도(10개월, 200만 원)보다 유리합니다.
            이사비 지원도 서울에서만 받을 수 있어요.</span>
          </div>
        </div>
      </Card>

      {/* 경기지역화폐 활용 팁 */}
      <Card>
        <h2 className="text-base font-bold mb-3">경기지역화폐 — 이렇게 쓰면 됩니다</h2>
        <p className="text-[12px] text-muted mb-3">
          경기도 기본소득과 면접수당은 현금이 아닌 <strong className="text-text">경기지역화폐</strong>로 지급됩니다.
          처음엔 낯설 수 있어도, 쓰는 범위를 알면 일상에서 자연스럽게 사용할 수 있어요.
        </p>
        <div className="space-y-2 text-[12px] text-text">
          <div className="flex gap-2 items-start">
            <span className="text-green font-bold shrink-0">사용 가능</span>
            <span className="text-muted">거주 시·군 내 연 매출 10억 원 이하 소상공인 가맹점 (편의점·마트 일부, 음식점, 카페, 병원, 약국 등)</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-amber font-bold shrink-0">사용 불가</span>
            <span className="text-muted">이마트·롯데마트 등 대형마트, 백화점, 쿠팡·네이버 등 온라인 쇼핑몰, 유흥업소, 상품권 구매</span>
          </div>
          <div className="bg-green-bg rounded-lg p-2.5 mt-2 text-[11px] text-green">
            <strong>활용 팁:</strong> 마트·편의점 대신 동네 슈퍼마켓이나 단골 식당에서 쓰면 됩니다.
            경기페이 앱에서 잔액·가맹점 검색이 가능하고, 카드형과 모바일형 중 편한 걸 선택하면 돼요.
            매월 지역화폐를 충전하면 추가 할인(6~10%)도 받을 수 있습니다.
          </div>
        </div>
      </Card>

      {/* 신청 순서 추천 */}
      <Card>
        <h2 className="text-base font-bold mb-3">추천 신청 순서</h2>
        <div className="space-y-2 text-[13px] text-text">
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">1</span>
            <div>
              <strong>청년미래적금</strong> — 은행 앱에서 바로 가입 (5분, 상시)
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">2</span>
            <div>
              <strong>경기도 청년 기본소득</strong> — 분기 모집 시작하면 경기도 일자리재단 홈페이지에서 신청
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">3</span>
            <div>
              <strong>경기도 청년 교통비 지원</strong> — 모집 기간 확인 후 온라인 신청
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">4</span>
            <div>
              <strong>경기도 무주택 월세 지원</strong> — 무주택자라면 모집 기간 즉시 신청 (선착순)
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">5</span>
            <div>
              <strong>경기도 청년 면접수당</strong> — 면접 볼 때마다 사후 신청 (면접확인서 지참)
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">6</span>
            <div>
              <strong>국민취업지원제도</strong> — 구직 상태라면 고용24에서 별도 신청 검토
            </div>
          </div>
        </div>
        <p className="text-[11px] text-muted mt-3">
          기본소득은 분기마다 모집 기간이 있어서 놓치면 다음 분기까지 기다려야 합니다.
          경기도 일자리재단 SNS 또는 알림 설정을 해두면 편해요.
        </p>
      </Card>

      {/* 주의사항 */}
      <Card>
        <h2 className="text-base font-bold mb-3">꼭 알아야 할 주의사항</h2>
        <div className="space-y-2 text-[12px] text-text">
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">전입신고 필수</strong>
            <p className="text-muted mt-0.5">
              경기도 내 주민등록이 있어야 합니다. 실거주하더라도 전입신고가 되어 있지 않으면 신청 자격이 없습니다.
              이사 후 14일 이내에 주민센터에서 전입신고를 꼭 완료하세요.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">기본소득: 3년 또는 합산 10년 거주 조건</strong>
            <p className="text-muted mt-0.5">
              경기도 청년 기본소득은 만 24세에 지원하되, 경기도에 3년 연속 거주 or 생애 합산 10년 이상 거주해야 합니다.
              최근에 경기도로 이사 온 경우 거주 기간을 먼저 확인하세요.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">지역화폐 유효기간</strong>
            <p className="text-muted mt-0.5">
              경기지역화폐는 충전 후 5년 이내에 사용해야 합니다. 잔액이 소멸되지 않도록 주기적으로 잔액을 확인하세요.
            </p>
          </div>
          <div className="bg-amber-bg rounded-lg p-2.5">
            <strong className="text-amber">시·군별 세부 조건 상이</strong>
            <p className="text-muted mt-0.5">
              경기도 내에서도 수원, 성남, 화성, 용인 등 시·군별로 자체 청년 정책을 추가로 운영하는 경우가 있습니다.
              내가 사는 시·군청 홈페이지도 별도로 확인하면 더 많은 혜택을 찾을 수 있어요.
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
            서울 청년 정책 조합 가이드 (서울 거주자용)
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
            청년 주거정책 상세 가이드
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

      {/* 면책 고지 */}
      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 가이드는 공식 자료(경기도 일자리재단, 경기도 복지포털, 고용24) 기반으로 경기도 거주 청년을 위해 정리한 참고 정보입니다.
        정책 조건·모집 일정은 변경될 수 있으니 신청 전 공식 사이트에서 반드시 확인하세요.
        <br />작성자: 김태양 · 경기도 거주 청년을 위해 공식 자료 기반으로 직접 정리
      </div>
    </>
  );
}
