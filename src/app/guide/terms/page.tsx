import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년정책 용어 사전 — 중위소득, 무주택자, 기준 중위소득 쉽게 이해하기',
  description:
    '청년정책 신청할 때 헷갈리는 용어들을 쉽게 풀어드립니다. 중위소득 150%가 얼마인지, 무주택자 기준은 뭔지, 1인 가구 소득 기준까지.',
};

const TERMS = [
  {
    term: '기준 중위소득',
    simple: '전 국민을 소득 순으로 줄 세웠을 때 정확히 가운데 사람의 소득',
    detail:
      '2026년 기준 1인 가구 중위소득은 월 약 239만 원입니다. 정책마다 "중위소득 100%", "150%" 등으로 자격을 정하는데, 이 금액에 해당 비율을 곱하면 됩니다.',
    example: '1인 가구 기준: 중위소득 100% = 월 239만 원, 150% = 월 359만 원',
  },
  {
    term: '무주택자',
    simple: '본인 명의 주택(아파트, 빌라 등)이 없는 사람',
    detail:
      '부모님 명의 집에 살더라도 본인 명의가 아니면 무주택자입니다. 전세·월세로 사는 사람은 대부분 해당됩니다.',
    example: '부모님 집에 거주 + 본인 명의 부동산 없음 → 무주택자 O',
  },
  {
    term: '1인 가구',
    simple: '주민등록상 혼자 세대를 구성한 사람',
    detail:
      '부모님과 같은 주소에 등록돼 있으면 1인 가구가 아닙니다. 독립해서 전입신고를 해야 1인 가구로 인정됩니다. 많은 청년정책이 1인 가구 기준으로 소득을 봅니다.',
    example: '원룸에서 살면서 전입신고 완료 → 1인 가구 O',
  },
  {
    term: '전입신고',
    simple: '이사한 집 주소를 주민센터에 등록하는 것',
    detail:
      '이사 후 14일 이내에 해야 합니다. 전입신고를 해야 월세 지원, 전세 보호 등의 혜택을 받을 수 있습니다. 정부24 앱에서 온라인으로도 가능합니다.',
    example: '전입신고 안 하면 → 거주 증명 불가 → 주거 정책 신청 불가',
  },
  {
    term: '확정일자',
    simple: '전입신고한 날짜에 도장을 받아 전세보증금을 보호받는 것',
    detail:
      '전입신고 시 주민센터에서 임대차계약서에 확정일자 도장을 받으면, 집이 경매로 넘어가도 보증금을 우선 돌려받을 수 있습니다. 전세사기 예방의 기본입니다.',
    example: null,
  },
  {
    term: '정부기여금',
    simple: '정부가 내 적금에 추가로 넣어주는 돈',
    detail:
      '청년도약계좌, 청년미래적금 등에서 내가 매월 납입하면 정부가 추가 금액을 넣어줍니다. 소득이 낮을수록 기여금이 많아집니다.',
    example: '도약계좌 월 70만 원 납입 시 정부기여금 지급. 금액은 소득 구간에 따라 다름. 서민금융진흥원(kinfa.or.kr)에서 확인',
  },
  {
    term: '선착순 모집',
    simple: '예산이 정해져 있어서 먼저 신청한 사람부터 선정',
    detail:
      '많은 지자체 정책이 선착순입니다. 모집 시작일에 바로 신청하는 것이 중요합니다. 보통 오전 10시에 접수가 시작됩니다.',
    example: '이사비 지원 = 대부분 선착순 → 모집 첫날 신청 권장',
  },
  {
    term: '수시 모집 / 상시 모집',
    simple: '기간 제한 없이 언제든 신청 가능',
    detail:
      '예산 소진 시까지 신청 가능합니다. 급하지는 않지만, 예산이 다 되면 조기 마감될 수 있으니 여유 있을 때 신청하세요.',
    example: null,
  },
  {
    term: '공공임대 / 행복주택',
    simple: '정부·LH가 시세보다 싸게 빌려주는 주택',
    detail:
      '시세 대비 60~80% 수준의 저렴한 임대료로 거주할 수 있습니다. 청년, 신혼부부, 고령자 등 대상별 유형이 있습니다. 모집 공고는 LH 마이홈(myhome.go.kr)에서 확인할 수 있어요.',
    example: null,
  },
];

export default function TermsGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={TERMS.slice(0, 5).map((t) => ({
          q: `${t.term}이(가) 뭔가요?`,
          a: `${t.simple}. ${t.detail}`,
        }))}
      />

      <Link href="/" className="text-sm text-primary no-underline hover:underline mb-4 inline-block">
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        청년정책 용어 사전
      </h1>
      <p className="text-[13px] text-muted mb-5">
        헷갈리는 용어, 쉽게 풀어드립니다
      </p>

      {/* 2026 중위소득 빠른 참조표 */}
      <Card>
        <h2 className="text-base font-bold mb-3">2026년 기준 중위소득표 (1인 가구)</h2>
        <p className="text-[11px] text-primary-d bg-primary-bg rounded-lg p-2.5 mb-3">
          아래 금액은 보건복지부 고시 기준입니다. 매년 변경되므로 최신 금액은 복지로(bokjiro.go.kr)에서 확인하세요.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 text-muted font-bold">비율</th>
                <th className="text-right py-2 font-bold text-text">월 소득 기준</th>
                <th className="text-right py-2 font-bold text-text">연 소득 기준</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2">50%</td>
                <td className="text-right py-2">약 120만 원</td>
                <td className="text-right py-2">약 1,434만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2">60%</td>
                <td className="text-right py-2">약 143만 원</td>
                <td className="text-right py-2">약 1,721만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2 font-semibold">100%</td>
                <td className="text-right py-2 font-semibold">약 239만 원</td>
                <td className="text-right py-2 font-semibold">약 2,868만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2">120%</td>
                <td className="text-right py-2">약 287만 원</td>
                <td className="text-right py-2">약 3,442만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2 font-semibold text-primary">150%</td>
                <td className="text-right py-2 font-semibold text-primary">약 359만 원</td>
                <td className="text-right py-2 font-semibold text-primary">약 4,302만 원</td>
              </tr>
              <tr>
                <td className="py-2">200%</td>
                <td className="text-right py-2">약 478만 원</td>
                <td className="text-right py-2">약 5,736만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-muted mt-2">
          * 위 금액은 1인 가구 기준입니다. 가구원 수가 많을수록 기준이 높아집니다. 정확한 금액은{' '}
          <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="underline">
            복지로
          </a>
          에서 확인하세요.
        </p>
      </Card>

      {/* 용어 목록 */}
      {TERMS.map((t) => (
        <Card key={t.term}>
          <h2 className="text-base font-bold mb-1">{t.term}</h2>
          <p className="text-[13px] font-semibold text-primary mb-2">{t.simple}</p>
          <p className="text-[12px] text-text leading-relaxed">{t.detail}</p>
          {t.example && (
            <div className="mt-2 bg-primary-bg rounded-lg p-2.5 text-[11px] text-primary-d">
              <strong>예시:</strong> {t.example}
            </div>
          )}
        </Card>
      ))}

      <div className="mt-3 space-y-2">
        <Link
          href="/guide/seoul"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            🏙️ 서울 청년 정책 조합 가이드
          </span>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            💰 청년도약계좌 vs 청년미래적금 비교
          </span>
        </Link>
      </div>

      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        <p>본 정보는 참고용이며, 정확한 기준은 각 정책의 공식 안내를 확인하세요.</p>
        <ul className="mt-2 space-y-0.5 list-none p-0">
          <li>
            · 복지로:{' '}
            <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="underline">
              bokjiro.go.kr
            </a>
          </li>
          <li>
            · 온통청년:{' '}
            <a href="https://www.youthcenter.go.kr" target="_blank" rel="noopener noreferrer" className="underline">
              youthcenter.go.kr
            </a>
          </li>
          <li>
            · LH 마이홈:{' '}
            <a href="https://www.myhome.go.kr" target="_blank" rel="noopener noreferrer" className="underline">
              myhome.go.kr
            </a>
          </li>
          <li>
            · 정부24:{' '}
            <a href="https://www.gov.kr" target="_blank" rel="noopener noreferrer" className="underline">
              gov.kr
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
