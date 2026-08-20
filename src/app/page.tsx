import MatchingForm from '@/components/MatchingForm';
import QuickMatch from '@/components/QuickMatch';
import DeadlineBanner from '@/components/DeadlineBanner';
import { WebAppJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { fetchAllPolicies } from '@/lib/supabase';
import type { Policy } from '@/lib/types';
import Link from 'next/link';

async function getPolicies(): Promise<Policy[]> {
  const policies = await fetchAllPolicies();
  if (policies.length > 0) return policies;
  return getSamplePolicies();
}

function getSamplePolicies(): Policy[] {
  return [
    {
      id: 'sample-1',
      api_id: 'R2024010100001',
      name: '서울시 청년월세 특별지원',
      summary: '서울 거주 청년에게 월세를 지원하여 주거비 부담을 경감합니다.',
      category: '주거',
      subcategory: '월세지원',
      min_age: 19,
      max_age: 39,
      regions: ['서울특별시'],
      income_pct: 150,
      employment: ['미취업', '재직', '재학', '창업'],
      housing_req: '무주택',
      education: null,
      marriage: null,
      benefit: '월 최대 20만 원, 최대 12개월 지원',
      how_to_apply: '서울주거포털 온라인 신청 또는 주민센터 방문',
      apply_start: '2026-03-01',
      apply_end: '2026-12-31',
      apply_url: 'https://housing.seoul.go.kr',
      org_name: '서울특별시',
      status: 'active',
      needs_review: false,
      raw_eligibility: '만 19~39세, 서울 거주, 무주택, 중위소득 150% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z',
      updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-2',
      api_id: 'R2024010100002',
      name: '청년도약계좌',
      summary: '매월 70만 원 한도 내 자유 적립, 정부 기여금과 비과세 혜택으로 목돈 마련을 지원합니다.',
      category: '금융·자산',
      subcategory: '저축지원',
      min_age: 19,
      max_age: 34,
      regions: ['전국'],
      income_pct: 200,
      employment: ['재직', '미취업', '재학', '창업'],
      housing_req: null,
      education: null,
      marriage: null,
      benefit: '정부 기여금 월 최대 3.3만 원 + 이자소득 비과세',
      how_to_apply: '시중 은행 앱 또는 영업점 방문 가입',
      apply_start: '2026-01-01',
      apply_end: '2026-12-31',
      apply_url: 'https://www.kinfa.or.kr',
      org_name: '서민금융진흥원',
      status: 'active',
      needs_review: false,
      raw_eligibility: '만 19~34세, 개인소득 7,500만 원 이하, 가구소득 중위 180% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z',
      updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-3',
      api_id: 'R2024010100003',
      name: '청년 전세임대주택',
      summary: '무주택 청년에게 전세 보증금을 저렴하게 지원하여 안정적인 주거를 돕습니다.',
      category: '주거',
      subcategory: '전세지원',
      min_age: 19,
      max_age: 39,
      regions: ['전국'],
      income_pct: 100,
      employment: ['미취업', '재직', '재학', '창업'],
      housing_req: '무주택',
      education: null,
      marriage: null,
      benefit: '전세 보증금 수도권 1.2억 원, 지방 8천만 원 한도 지원 (저리 대출)',
      how_to_apply: 'LH 마이홈 온라인 신청',
      apply_start: '2026-02-01',
      apply_end: '2026-11-30',
      apply_url: 'https://www.myhome.go.kr',
      org_name: '한국토지주택공사(LH)',
      status: 'active',
      needs_review: false,
      raw_eligibility: '만 19~39세, 무주택, 중위소득 100% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z',
      updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-4',
      api_id: 'R2024010100004',
      name: '서울시 이사비 지원',
      summary: '서울 거주 청년의 이사 비용을 지원합니다.',
      category: '주거',
      subcategory: '이사비',
      min_age: 19,
      max_age: 39,
      regions: ['서울특별시'],
      income_pct: 150,
      employment: ['미취업', '재직', '재학', '창업'],
      housing_req: '무주택',
      education: null,
      marriage: null,
      benefit: '이사비 최대 40만 원 1회 지원',
      how_to_apply: '서울주거포털 온라인 신청',
      apply_start: '2026-04-01',
      apply_end: '2026-10-31',
      apply_url: 'https://housing.seoul.go.kr',
      org_name: '서울특별시',
      status: 'active',
      needs_review: false,
      raw_eligibility: '만 19~39세, 서울 거주, 무주택, 중위소득 150% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z',
      updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-5',
      api_id: 'R2024010100005',
      name: '청년미래적금',
      summary: '청년도약계좌를 대체하는 새로운 정책형 적금으로 더 높은 수익률을 제공합니다.',
      category: '금융·자산',
      subcategory: '저축지원',
      min_age: 19,
      max_age: 34,
      regions: ['전국'],
      income_pct: 200,
      employment: ['재직', '미취업', '재학', '창업'],
      housing_req: null,
      education: null,
      marriage: null,
      benefit: '정부 기여금 + 우대금리, 5년 만기 시 목돈 마련',
      how_to_apply: '시중 은행 앱 가입',
      apply_start: '2026-06-01',
      apply_end: '2026-12-31',
      apply_url: 'https://www.kinfa.or.kr',
      org_name: '서민금융진흥원',
      status: 'active',
      needs_review: false,
      raw_eligibility: '만 19~34세, 개인소득 7,500만 원 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z',
      updated_at: '2026-08-05T00:00:00Z',
    },
  ];
}

export default async function HomePage() {
  const policies = await getPolicies();

  return (
    <>
      <WebAppJsonLd />
      <FaqJsonLd
        items={[
          {
            q: '청년정책 매칭은 무료인가요?',
            a: '네, 완전히 무료입니다. 회원가입 없이 조건만 입력하면 바로 결과를 확인할 수 있습니다.',
          },
          {
            q: '입력한 개인정보는 저장되나요?',
            a: '아닙니다. 모든 매칭은 브라우저에서 처리되며, 입력한 조건은 서버에 전송되거나 저장되지 않습니다.',
          },
          {
            q: '매칭 결과가 곧 신청 자격을 보장하나요?',
            a: '아닙니다. 매칭 결과는 참고용이며, 최종 자격 확인과 신청은 각 정책의 공식 사이트에서 해야 합니다.',
          },
        ]}
      />

      <div className="mb-5">
        <h1 className="text-[22px] font-extrabold leading-tight">
          네가 놓치고 있는 <span className="text-primary">정책</span>,<br />찾아줄게
        </h1>
        <p className="text-[13px] text-muted mt-1.5">
          조건만 입력하면 받을 수 있는 청년 정책을 바로 알려드려요.
        </p>
      </div>

      <DeadlineBanner policies={policies} />

      <QuickMatch policies={policies} />

      {/* 구분선 */}
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-line" />
        <span className="text-[11px] text-muted font-semibold">또는 조건을 직접 입력</span>
        <div className="flex-1 h-px bg-line" />
      </div>

      <MatchingForm policies={policies} />

      {/* 가이드 섹션 */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-[15px] font-extrabold text-text">정책 가이드</h2>
          <Link href="/guide" className="text-[11px] text-primary font-semibold no-underline hover:underline">
            전체보기
          </Link>
        </div>

        {/* 인기 가이드 */}
        <div className="space-y-2 mb-3">
          <Link
            href="/guide/seoul"
            className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
          >
            <span className="text-[13px] font-bold text-text">
              서울 청년이면 이거 다 받아 — 동시 수혜 가능 정책 조합
            </span>
            <p className="text-[11px] text-muted mt-0.5">
              월세·이사비·적금·교통비 중복 수령 가이드
            </p>
          </Link>

          <Link
            href="/guide/housing"
            className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
          >
            <span className="text-[13px] font-bold text-text">
              청년 주거정책 신청 가이드 — 월세 지원부터 전세임대까지
            </span>
            <p className="text-[11px] text-muted mt-0.5">
              자격 요건·서류·신청 방법 한 번에 정리
            </p>
          </Link>

          <Link
            href="/guide/finance"
            className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
          >
            <span className="text-[13px] font-bold text-text">
              청년도약계좌 vs 청년미래적금, 뭐가 유리할까?
            </span>
            <p className="text-[11px] text-muted mt-0.5">
              기여금·금리·만기 금액 비교 정리
            </p>
          </Link>
        </div>

        {/* 상황별 */}
        <p className="text-[11px] font-bold text-muted mb-1.5">상황별 가이드</p>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          <Link href="/guide/first-independence" className="bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text block">처음 독립할 때</span>
            <span className="text-[10px] text-muted">전입신고부터 정책까지</span>
          </Link>
          <Link href="/guide/job-seeker" className="bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text block">취준생이라면</span>
            <span className="text-[10px] text-muted">구직 중 받을 수 있는 정책</span>
          </Link>
          <Link href="/guide/first-job" className="bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text block">사회초년생이라면</span>
            <span className="text-[10px] text-muted">첫 직장에서 챙길 정책</span>
          </Link>
          <Link href="/guide/newlywed" className="bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text block">결혼 준비 중이라면</span>
            <span className="text-[10px] text-muted">신혼부부 정책 총정리</span>
          </Link>
        </div>

        {/* 신청 실전 */}
        <p className="text-[11px] font-bold text-muted mb-1.5">신청할 때 꼭 보세요</p>
        <div className="space-y-1.5 mb-3">
          <Link href="/guide/terms" className="flex items-center gap-2 bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text">중위소득? 무주택? 정책 용어 쉽게 풀기</span>
          </Link>
          <Link href="/guide/checklist" className="flex items-center gap-2 bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text">정책 신청 서류 준비 가이드</span>
          </Link>
          <Link href="/guide/common-mistakes" className="flex items-center gap-2 bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text">신청할 때 흔히 하는 실수 7가지</span>
          </Link>
          <Link href="/guide/income-check" className="flex items-center gap-2 bg-surface border border-line rounded-lg p-2.5 hover:border-primary/40 transition-colors no-underline">
            <span className="text-[12px] font-bold text-text">내 소득이 중위소득 몇 %인지 확인하는 법</span>
          </Link>
        </div>

        {/* 외부 도구 */}
        <a
          href="https://moduncalc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[12px] font-bold text-text">
            연봉 실수령액·적금 이자·대출 이자 계산기
          </span>
          <span className="text-[10px] text-muted ml-1.5">moduncalc.com</span>
        </a>
      </div>
    </>
  );
}
