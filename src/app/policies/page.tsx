import type { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchAllPolicies } from '@/lib/supabase';
import type { Policy } from '@/lib/types';
import PolicyList from './PolicyList';

export const metadata: Metadata = {
  title: '전체 정책 목록',
  description:
    '주거, 취업, 금융, 교육, 복지 등 분야별 청년 지원정책을 한눈에 확인하세요.',
};

function getSamplePolicies(): Policy[] {
  return [
    {
      id: 'sample-1', api_id: 'R2024010100001',
      name: '서울시 청년월세 특별지원',
      summary: '서울 거주 청년에게 월세를 지원하여 주거비 부담을 경감합니다.',
      category: '주거', subcategory: '월세지원',
      min_age: 19, max_age: 39, regions: ['서울특별시'], income_pct: 150,
      employment: ['미취업', '재직', '재학', '창업'], housing_req: '무주택',
      education: null, marriage: null,
      benefit: '월 최대 20만 원, 최대 12개월 지원',
      how_to_apply: '서울주거포털 온라인 신청 또는 주민센터 방문',
      apply_start: '2026-03-01', apply_end: '2026-12-31',
      apply_url: 'https://housing.seoul.go.kr', org_name: '서울특별시',
      status: 'active', needs_review: false,
      raw_eligibility: '만 19~39세, 서울 거주, 무주택, 중위소득 150% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z', updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-2', api_id: 'R2024010100002',
      name: '청년도약계좌',
      summary: '매월 70만 원 한도 내 자유 적립, 정부 기여금과 비과세 혜택으로 목돈 마련을 지원합니다.',
      category: '금융·자산', subcategory: '저축지원',
      min_age: 19, max_age: 34, regions: ['전국'], income_pct: 200,
      employment: ['재직', '미취업', '재학', '창업'], housing_req: null,
      education: null, marriage: null,
      benefit: '정부 기여금 월 최대 3.3만 원 + 이자소득 비과세',
      how_to_apply: '시중 은행 앱 또는 영업점 방문 가입',
      apply_start: '2026-01-01', apply_end: '2026-12-31',
      apply_url: 'https://www.kinfa.or.kr', org_name: '서민금융진흥원',
      status: 'active', needs_review: false,
      raw_eligibility: '만 19~34세, 개인소득 7,500만 원 이하, 가구소득 중위 180% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z', updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-3', api_id: 'R2024010100003',
      name: '청년 전세임대주택',
      summary: '무주택 청년에게 전세 보증금을 저렴하게 지원하여 안정적인 주거를 돕습니다.',
      category: '주거', subcategory: '전세지원',
      min_age: 19, max_age: 39, regions: ['전국'], income_pct: 100,
      employment: ['미취업', '재직', '재학', '창업'], housing_req: '무주택',
      education: null, marriage: null,
      benefit: '전세 보증금 수도권 1.2억 원, 지방 8천만 원 한도 지원 (저리 대출)',
      how_to_apply: 'LH 마이홈 온라인 신청',
      apply_start: '2026-02-01', apply_end: '2026-11-30',
      apply_url: 'https://www.myhome.go.kr', org_name: '한국토지주택공사(LH)',
      status: 'active', needs_review: false,
      raw_eligibility: '만 19~39세, 무주택, 중위소득 100% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z', updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-4', api_id: 'R2024010100004',
      name: '서울시 이사비 지원',
      summary: '서울 거주 청년의 이사 비용을 지원합니다.',
      category: '주거', subcategory: '이사비',
      min_age: 19, max_age: 39, regions: ['서울특별시'], income_pct: 150,
      employment: ['미취업', '재직', '재학', '창업'], housing_req: '무주택',
      education: null, marriage: null,
      benefit: '이사비 최대 40만 원 1회 지원',
      how_to_apply: '서울주거포털 온라인 신청',
      apply_start: '2026-04-01', apply_end: '2026-10-31',
      apply_url: 'https://housing.seoul.go.kr', org_name: '서울특별시',
      status: 'active', needs_review: false,
      raw_eligibility: '만 19~39세, 서울 거주, 무주택, 중위소득 150% 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z', updated_at: '2026-08-05T00:00:00Z',
    },
    {
      id: 'sample-5', api_id: 'R2024010100005',
      name: '청년미래적금',
      summary: '청년도약계좌를 대체하는 새로운 정책형 적금으로 더 높은 수익률을 제공합니다.',
      category: '금융·자산', subcategory: '저축지원',
      min_age: 19, max_age: 34, regions: ['전국'], income_pct: 200,
      employment: ['재직', '미취업', '재학', '창업'], housing_req: null,
      education: null, marriage: null,
      benefit: '정부 기여금 + 우대금리, 5년 만기 시 목돈 마련',
      how_to_apply: '시중 은행 앱 가입',
      apply_start: '2026-06-01', apply_end: '2026-12-31',
      apply_url: 'https://www.kinfa.or.kr', org_name: '서민금융진흥원',
      status: 'active', needs_review: false,
      raw_eligibility: '만 19~34세, 개인소득 7,500만 원 이하',
      source_url: 'https://www.youthcenter.go.kr',
      fetched_at: '2026-08-05T00:00:00Z',
      created_at: '2026-08-05T00:00:00Z', updated_at: '2026-08-05T00:00:00Z',
    },
  ];
}

async function getPolicies(): Promise<Policy[]> {
  const policies = await fetchAllPolicies();
  if (policies.length > 0) return policies;
  return getSamplePolicies();
}

export default async function PoliciesPage() {
  const policies = await getPolicies();

  return (
    <>
      <div className="mb-5">
        <h1 className="text-[22px] font-extrabold leading-tight">
          청년정책 <span className="text-primary">전체 목록</span>
        </h1>
        <p className="text-[13px] text-muted mt-1.5">
          분야별로 현재 신청 가능한 청년 정책을 확인하세요.
        </p>
      </div>

      <Suspense fallback={<div className="text-sm text-muted">불러오는 중...</div>}>
        <PolicyList policies={policies} />
      </Suspense>
    </>
  );
}
