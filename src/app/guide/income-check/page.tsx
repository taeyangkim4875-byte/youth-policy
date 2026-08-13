import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '내 중위소득 몇 %인지 확인하는 법 — 2026년 기준 가구원수별 표 포함',
  description:
    '내 소득이 중위소득 몇 %인지 1분 안에 확인하는 방법. 2026년 가구원수별 중위소득표, 건강보험료·홈택스·급여명세서로 확인하는 법, 실전 계산 예시까지 정리했습니다.',
};

const FAQ_ITEMS = [
  {
    q: '중위소득 계산할 때 세전 기준인가요, 세후 기준인가요?',
    a: '세전 총급여 기준입니다. 4대 보험료나 소득세를 떼기 전의 금액으로 계산합니다. 급여명세서의 "기본급 + 수당" 합계(공제 전)가 기준이 됩니다.',
  },
  {
    q: '부모님과 함께 살면 부모님 소득도 중위소득 계산에 포함되나요?',
    a: '가구원수는 주민등록등본을 기준으로 합니다. 부모님과 같은 주소에 등록되어 있으면 부모님 소득도 합산됩니다. 독립해서 전입신고를 하면 1인 가구로 인정되어 본인 소득만 봅니다.',
  },
  {
    q: '아르바이트나 프리랜서 소득도 중위소득 계산에 포함되나요?',
    a: '네, 포함됩니다. 근로소득(아르바이트 포함), 사업소득(프리랜서), 금융소득 등 모든 소득이 합산됩니다. 소득이 없는 취업준비생은 소득 0원으로 인정되어 중위소득 50% 이하 정책도 신청할 수 있습니다.',
  },
];

// 2026년 기준 중위소득 (단위: 만 원/월)
const BASE = { 1: 239, 2: 393, 3: 497, 4: 597, 5: 690, 6: 776 };
const RATIOS = [50, 100, 150, 200] as const;

function calcIncome(base: number, ratio: number) {
  return Math.round((base * ratio) / 100);
}

export default function IncomeCheckGuidePage() {
  return (
    <>
      <FaqJsonLd items={FAQ_ITEMS} />

      <Link
        href="/"
        className="text-sm text-primary no-underline hover:underline mb-4 inline-block"
      >
        ← 홈으로
      </Link>

      {/* Hero */}
      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        나는 중위소득 몇 %일까?
      </h1>
      <p className="text-[13px] text-muted mb-5">
        1분만에 확인하는 법 — 2026년 가구원수별 표 + 실전 계산 예시
      </p>

      {/* 도입 */}
      <Card>
        <p className="text-[12px] text-text leading-relaxed">
          청년정책 자격 요건에 "중위소득 150% 이하"처럼 적혀 있는데, 막상 내가 여기에 해당하는지
          모르겠는 경우가 많습니다. 저도 취업준비 시절에 처음 확인해보고 깜짝 놀랐는데,
          생각보다 훨씬 많은 정책에 해당됐거든요. 이 글에서는 내 소득이 중위소득 몇 %인지
          빠르게 계산하는 방법을 단계별로 정리했습니다.
        </p>
      </Card>

      {/* 중위소득이란? */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">중위소득이 뭔가요?</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          전 국민을 소득 순서대로 줄 세웠을 때 딱 가운데에 있는 사람의 소득입니다.
          평균 소득과 다릅니다. 평균은 고소득자 몇 명 때문에 올라가지만,
          중위소득은 진짜 한국인 절반이 이보다 적게 벌고 절반이 많이 번다는 뜻입니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          정부는 매년 이 수치를 발표하고, 복지·청년 정책마다 "이 금액의 몇 %까지만 지원"이라고
          자격 기준을 정합니다. 그래서 내 소득이 중위소득의 몇 %인지 아는 게 정책 신청의 첫걸음입니다.
        </p>
        <div className="bg-primary-bg rounded-[var(--radius)] p-3 text-[11px] text-primary">
          용어 정의가 더 궁금하다면{' '}
          <Link href="/guide/terms" className="underline font-semibold">
            청년정책 용어 사전
          </Link>
          도 참고해 보세요.
        </div>
      </Card>

      {/* 2026년 중위소득 표 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text">
          2026년 가구원수별 기준 중위소득표
        </h2>
        <p className="text-[12px] text-muted mb-3">단위: 만 원 / 월 (세전 기준)</p>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-[11px] border-collapse min-w-[480px]">
            <thead>
              <tr className="border-b border-line bg-primary-bg">
                <th className="text-left py-2 px-2 font-bold text-muted whitespace-nowrap">
                  가구원수
                </th>
                {RATIOS.map((r) => (
                  <th
                    key={r}
                    className={`text-right py-2 px-2 font-bold whitespace-nowrap ${
                      r === 150 ? 'text-primary' : 'text-text'
                    }`}
                  >
                    {r}%
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-text">
              {(Object.entries(BASE) as [string, number][]).map(([n, base]) => (
                <tr key={n} className="border-b border-line2">
                  <td className="py-2 px-2 font-semibold whitespace-nowrap">{n}인 가구</td>
                  {RATIOS.map((r) => (
                    <td
                      key={r}
                      className={`text-right py-2 px-2 whitespace-nowrap ${
                        r === 150 ? 'font-semibold text-primary' : ''
                      }`}
                    >
                      약 {calcIncome(base, r).toLocaleString()}만 원
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-muted mt-2">
          * 2026년 보건복지부 고시 기준. 100% 기준값: 1인 239만·2인 393만·3인 497만·4인 597만·5인 690만·6인 776만 원.
        </p>
      </Card>

      {/* 150%가 왜 중요한가 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-2 text-text">
          어떤 비율이 중요한가요?
        </h2>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-2.5 bg-amber-bg rounded-[var(--radius)]">
            <span className="text-[11px] font-bold text-amber mt-0.5 shrink-0">50% 이하</span>
            <p className="text-[11px] text-text leading-relaxed">
              최저 생계 수준. 기초생활수급자 근처. 청년 대상 정책 중 가장 지원이 두텁습니다.
              취업준비 중 소득이 없다면 여기 해당할 수 있어요.
            </p>
          </div>
          <div className="flex items-start gap-2 p-2.5 bg-primary-bg rounded-[var(--radius)]">
            <span className="text-[11px] font-bold text-primary mt-0.5 shrink-0">100% 이하</span>
            <p className="text-[11px] text-text leading-relaxed">
              청년 주거 지원, 취업 지원 등 상당수 정책의 기준선입니다.
            </p>
          </div>
          <div className="flex items-start gap-2 p-2.5 bg-green-bg rounded-[var(--radius)]">
            <span className="text-[11px] font-bold text-green mt-0.5 shrink-0">150% 이하</span>
            <p className="text-[11px] text-text leading-relaxed">
              청년도약계좌, 청년 전세대출 등 금융·자산 형성 정책의 핵심 기준.
              직장인 상당수가 여기에 해당합니다.
            </p>
          </div>
          <div className="flex items-start gap-2 p-2.5 bg-surface border border-line rounded-[var(--radius)]">
            <span className="text-[11px] font-bold text-text mt-0.5 shrink-0">200% 이하</span>
            <p className="text-[11px] text-text leading-relaxed">
              일부 지자체 청년 정책이나 공공 임대 신청 시 적용되는 완화 기준.
            </p>
          </div>
        </div>
      </Card>

      {/* 3가지 확인 방법 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">
          내 소득 확인하는 3가지 방법
        </h2>

        {/* 방법 1 */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">
              1
            </span>
            <h3 className="text-[12px] font-bold text-text">건강보험료로 역산하기</h3>
          </div>
          <p className="text-[12px] text-text leading-relaxed mb-2">
            가장 많이 쓰이는 방법입니다. 많은 정책이 아예 "건강보험료 얼마 이하"로 자격을 끊거든요.
          </p>
          <ol className="text-[12px] text-text space-y-1 pl-4 list-decimal">
            <li>
              <span className="font-semibold">건강보험 홈페이지</span> (nhis.or.kr) 접속 → 로그인
            </li>
            <li>마이페이지 → 보험료 납부확인서 or 보험료 조회</li>
            <li>최근 납부한 건강보험료 확인 → 공단에서 운영하는 소득 분위 조회 서비스 이용</li>
          </ol>
          <div className="mt-2 bg-amber-bg rounded-[var(--radius)] p-2.5 text-[11px] text-text">
            <strong>팁:</strong> 실제 정책 신청 시에는 복지로(bokjiro.go.kr)나 각 주관기관에서
            건강보험료 기준표를 제공합니다. 내 건강보험료가 그 표의 어느 줄에 해당하는지만 보면 됩니다.
          </div>
        </div>

        {/* 방법 2 */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">
              2
            </span>
            <h3 className="text-[12px] font-bold text-text">홈택스 소득금액증명원 확인</h3>
          </div>
          <p className="text-[12px] text-text leading-relaxed mb-2">
            전년도 확정 소득을 확인할 때 사용합니다. 연말정산이 끝난 후 4~5월부터 조회됩니다.
          </p>
          <ol className="text-[12px] text-text space-y-1 pl-4 list-decimal">
            <li>홈택스(hometax.go.kr) 접속 → 공동인증서 or 간편인증 로그인</li>
            <li>민원증명 → 소득금액증명 → 조회/발급</li>
            <li>근로소득금액 확인 → ÷ 12 = 월 평균 소득</li>
          </ol>
          <div className="mt-2 bg-amber-bg rounded-[var(--radius)] p-2.5 text-[11px] text-text">
            <strong>주의:</strong> 소득금액증명원의 소득은 필요경비가 공제된 금액이라
            총급여보다 낮게 나옵니다. 정책에 따라 총급여 기준인지 소득금액 기준인지 확인하세요.
          </div>
        </div>

        {/* 방법 3 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0">
              3
            </span>
            <h3 className="text-[12px] font-bold text-text">급여명세서로 바로 계산하기</h3>
          </div>
          <p className="text-[12px] text-text leading-relaxed mb-2">
            가장 빠른 방법. 매달 받는 급여명세서의 <strong>세전 총급여(공제 전 합계)</strong>가 기준입니다.
          </p>
          <div className="bg-surface border border-line rounded-[var(--radius)] p-3 text-[12px] text-text">
            <p className="font-semibold mb-1">계산 공식</p>
            <p className="font-mono text-[11px] bg-primary-bg text-primary rounded p-2">
              내 중위소득 % = (월 세전 총급여 ÷ 해당 가구원수 중위소득 100%) × 100
            </p>
          </div>
          <p className="text-[11px] text-muted mt-2">
            연봉으로 알고 있다면 ÷ 12 해서 월 단위로 변환한 뒤 계산하세요.
            세전·세후 변환이 필요하면{' '}
            <a
              href="https://moduncalc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              moduncalc.com 연봉 계산기
            </a>
            를 활용할 수 있습니다.
          </p>
        </div>
      </Card>

      {/* 자주 헷갈리는 것들 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">자주 헷갈리는 것들</h2>
        <div className="space-y-3">

          <div className="border-b border-line2 pb-3">
            <p className="text-[12px] font-semibold text-text mb-1">세전인가요, 세후인가요?</p>
            <p className="text-[12px] text-text leading-relaxed">
              <span className="text-primary font-bold">세전 총급여 기준</span>입니다.
              소득세, 4대보험 공제 전 금액. 급여명세서에서 공제 항목을 빼기 전 합계 금액을 보면 됩니다.
            </p>
          </div>

          <div className="border-b border-line2 pb-3">
            <p className="text-[12px] font-semibold text-text mb-1">부모님 소득도 합산되나요?</p>
            <p className="text-[12px] text-text leading-relaxed">
              주민등록등본 기준입니다. 부모님과 같은 주소에 등록돼 있으면 가구원에 포함됩니다.
              하지만 독립해서 <span className="font-semibold">전입신고</span>를 하면 1인 가구로
              인정되어 본인 소득만 봅니다. 많은 청년이 전입신고 하나로 더 많은 정책에 해당되기도 합니다.
            </p>
          </div>

          <div className="border-b border-line2 pb-3">
            <p className="text-[12px] font-semibold text-text mb-1">아르바이트 소득도 포함되나요?</p>
            <p className="text-[12px] text-text leading-relaxed">
              네, 포함됩니다. 근로소득은 종류에 관계없이 합산합니다. 다만 신고되지 않은 현금 수입은
              공식 확인이 어렵습니다. 프리랜서 3.3% 원천징수 소득도 사업소득으로 잡힙니다.
            </p>
          </div>

          <div className="border-b border-line2 pb-3">
            <p className="text-[12px] font-semibold text-text mb-1">가구원수는 어떻게 정해지나요?</p>
            <p className="text-[12px] text-text leading-relaxed">
              <span className="font-semibold">주민등록등본에 올라온 사람 수</span>가 기준입니다.
              실제로 함께 살아도 주소가 다르면 같은 가구가 아닙니다. 반대로 실제로 떨어져 살아도
              주소가 같으면 같은 가구로 봅니다. 신청 전 등본을 먼저 확인하세요.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-text mb-1">소득이 0원이면 어떻게 되나요?</p>
            <p className="text-[12px] text-text leading-relaxed">
              소득 0원은 중위소득 0%로 계산됩니다. 그러면 50% 이하, 100% 이하 등 모든 소득 기준에
              해당합니다. 취업준비생이나 구직급여 수급 중인 분들이 더 많은 정책을 신청할 수 있는
              이유가 여기 있습니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 실전 예시 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">실전 계산 예시</h2>
        <div className="space-y-3">

          {/* 예시 1 */}
          <div className="bg-surface border border-line rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-1">
              예시 1. 월급 200만 원 직장인, 1인 가구
            </p>
            <div className="font-mono text-[11px] bg-primary-bg text-primary rounded p-2 mb-2">
              200만 ÷ 239만 × 100 = 약 84%
            </div>
            <p className="text-[11px] text-text leading-relaxed">
              중위소득 84%로, <strong>100% 이하</strong> 기준 정책에 해당됩니다.
              청년 월세 지원, 취업 지원 프로그램 등 신청 가능. 150% 이하 정책도 당연히 됩니다.
            </p>
          </div>

          {/* 예시 2 */}
          <div className="bg-surface border border-line rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-1">
              예시 2. 월급 280만 원 직장인, 1인 가구
            </p>
            <div className="font-mono text-[11px] bg-primary-bg text-primary rounded p-2 mb-2">
              280만 ÷ 239만 × 100 = 약 117%
            </div>
            <p className="text-[11px] text-text leading-relaxed">
              중위소득 117%로, <strong>100% 이하 정책은 해당 안 됩니다.</strong>{' '}
              하지만 <strong>150% 이하</strong> 정책은 여전히 가능합니다.
              청년도약계좌(중위소득 180% 이하), 청년 전세자금 대출 등 신청 가능.
            </p>
          </div>

          {/* 예시 3 */}
          <div className="bg-surface border border-line rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-1">
              예시 3. 맞벌이 부부 합산 월 500만 원, 2인 가구
            </p>
            <div className="font-mono text-[11px] bg-primary-bg text-primary rounded p-2 mb-2">
              500만 ÷ 393만 × 100 = 약 127%
            </div>
            <p className="text-[11px] text-text leading-relaxed">
              중위소득 127%로, 부부 합산이지만 2인 가구 기준 중위소득도 올라가기 때문에
              <strong> 150% 이하 정책은 신청 가능</strong>합니다.
              신혼부부 전세 대출, 행복주택 등이 여기에 해당합니다.
            </p>
          </div>

          {/* 예시 4 - 작가 경험 */}
          <div className="bg-green-bg rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-1">
              내 경험 — 취준 시절 소득 0원이었을 때
            </p>
            <p className="text-[11px] text-text leading-relaxed">
              저는 취업준비 시절에 아르바이트도 안 하고 공부에만 집중했던 기간이 있었는데,
              그때 소득이 문자 그대로 0원이었습니다. 중위소득 0%니까 모든 소득 기준에 해당하더군요.
              중위소득 50% 이하 정책까지 신청할 수 있었고, 덕분에 서울시 청년 수당이나
              고용노동부 구직활동 지원금 같은 정책을 받을 수 있었습니다.
              "나는 소득이 없으니 지원이 안 되겠지"라고 포기하지 마세요.
              오히려 소득이 없을수록 더 많은 정책에 해당됩니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 연봉 계산기 링크 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-2 text-text">세전/세후 변환이 필요하다면</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          연봉 계약서에는 연봉이 적혀 있고, 급여명세서에는 세후 실수령액이 적힌 경우가 많습니다.
          중위소득 계산에는 세전 월 급여가 필요하니, 모르면 변환이 필요합니다.
        </p>
        <a
          href="https://moduncalc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-primary-bg border border-primary/30 rounded-[var(--radius)] p-3.5 no-underline hover:border-primary/60 transition-colors"
        >
          <p className="text-[13px] font-bold text-primary mb-0.5">moduncalc.com 연봉 계산기</p>
          <p className="text-[11px] text-muted">연봉 입력 → 월 세전/세후 실수령액 바로 확인</p>
        </a>
      </Card>

      {/* 관련 가이드 */}
      <div className="mt-3 space-y-2">
        <p className="text-[11px] text-muted font-semibold px-1">관련 가이드</p>
        <Link
          href="/guide/terms"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">청년정책 용어 사전</span>
          <p className="text-[11px] text-muted mt-0.5">무주택자, 1인 가구, 전입신고 등 기본 용어 정리</p>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">청년도약계좌 vs 청년미래적금 비교</span>
          <p className="text-[11px] text-muted mt-0.5">중위소득 기준이 적용되는 대표 금융 정책 비교</p>
        </Link>
        <Link
          href="/guide/job-seeker"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">취업준비생 청년정책 가이드</span>
          <p className="text-[11px] text-muted mt-0.5">소득 0원인 취준생이 받을 수 있는 정책 모음</p>
        </Link>
      </div>

      {/* 면책 고지 */}
      <div className="mt-4 p-3 bg-green-bg rounded-[var(--radius)] text-[11px] text-muted leading-relaxed">
        본 정보는 참고용입니다. 중위소득 기준은 매년 변경되며, 정책마다 적용 기준이 다를 수 있습니다.
        실제 신청 시에는 각 정책의 공식 안내문과 주관기관(복지로, 고용노동부, 지자체 등)을 반드시 확인하세요.
        작성자: 김태양 (zxcv0888@naver.com)
      </div>
    </>
  );
}
