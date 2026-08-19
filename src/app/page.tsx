import MatchingForm from '@/components/MatchingForm';
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

      <MatchingForm policies={policies} />

      <div className="mt-5 space-y-2">
        <Link
          href="/guide/seoul"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            🏙️ 서울 청년이면 이거 다 받아 — 연 최대 500만 원
          </span>
          <p className="text-[11px] text-muted mt-0.5">
            동시에 받을 수 있는 정책 조합 · 실제 수령 경험 기반
          </p>
        </Link>

        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            🏠 청년 주거정책, 직접 받아본 후기와 신청 팁
          </span>
          <p className="text-[11px] text-muted mt-0.5">
            월세 지원 200만 원, 이사비 20만 원 — 실제 수령 경험담
          </p>
        </Link>

        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            💰 청년도약계좌 vs 청년미래적금 — 뭐가 유리할까?
          </span>
          <p className="text-[11px] text-muted mt-0.5">
            3년 유지하다 갈아탄 실제 경험 · 만기 시뮬레이션
          </p>
        </Link>

        <Link
          href="/guide/terms"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            📖 중위소득? 무주택? 정책 용어 쉽게 풀기
          </span>
          <p className="text-[11px] text-muted mt-0.5">
            2026년 중위소득표 포함 · 헷갈리는 용어 9개 정리
          </p>
        </Link>

        <a
          href="https://moduncalc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            🧮 연봉 실수령액, 적금 이자, 대출 이자 계산기
          </span>
          <p className="text-[11px] text-muted mt-0.5">
            moduncalc.com — 82종 무료 계산기 모음
          </p>
        </a>
      </div>
    </>
  );
}
