import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import { getSupabase } from '@/lib/supabase';
import type { Policy } from '@/lib/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 샘플 데이터 (Supabase 연동 전)
const SAMPLE_POLICIES: Record<string, Policy> = {
  'sample-1': {
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
  'sample-2': {
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
  'sample-3': {
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
  'sample-4': {
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
  'sample-5': {
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
};

async function getPolicy(id: string): Promise<Policy | null> {
  // Supabase 연동 전 샘플
  if (SAMPLE_POLICIES[id]) return SAMPLE_POLICIES[id];

  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('policies')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;
  return data as Policy;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = await getPolicy(id);
  if (!p) return { title: '정책을 찾을 수 없습니다' };

  return {
    title: p.name,
    description: p.summary,
    openGraph: {
      title: `${p.name} | 청년정책 매칭`,
      description: p.summary,
      url: `https://youth.moduncalc.com/policy/${id}`,
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  '주거': 'bg-[#FFF3E0] text-[#E65100]',
  '취업': 'bg-[#E3F2FD] text-[#1565C0]',
  '금융·자산': 'bg-green-bg text-[#2E7D32]',
  '교육': 'bg-violet-weak text-violet',
  '복지·문화': 'bg-[#FCE4EC] text-[#C62828]',
};

const CALC_LINKS: Record<string, { label: string; href: string }[]> = {
  '주거': [
    { label: '취득세 계산기', href: 'https://moduncalc.com/realestate/acqtax' },
    { label: '전세 vs 월세 비교', href: 'https://moduncalc.com/realestate/jeonse-vs-wolse' },
  ],
  '금융·자산': [
    { label: '적금 이자 계산기', href: 'https://moduncalc.com/savings' },
    { label: '도약계좌 수익 계산기', href: 'https://moduncalc.com/savings/doyak' },
  ],
};

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = await getPolicy(id);
  if (!p) notFound();

  const colorClass = CATEGORY_COLORS[p.category] || 'bg-primary-bg text-primary';
  const relatedCalcs = CALC_LINKS[p.category] || [];

  return (
    <>
      <FaqJsonLd
        items={[
          { q: `${p.name}의 지원 대상은?`, a: p.raw_eligibility || p.summary },
          { q: `${p.name}의 지원 내용은?`, a: p.benefit },
          { q: `${p.name}은 어떻게 신청하나요?`, a: p.how_to_apply || '공식 사이트에서 확인하세요.' },
        ]}
      />

      <Link href="/" className="text-sm text-primary no-underline hover:underline mb-4 inline-block">
        ← 매칭으로 돌아가기
      </Link>

      <div className="mb-4">
        <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold mb-2 ${colorClass}`}>
          {p.category}{p.subcategory ? ` · ${p.subcategory}` : ''}
        </span>
        <h1 className="text-2xl font-extrabold leading-tight">{p.name}</h1>
        {p.org_name && <p className="text-sm text-muted mt-1">{p.org_name}</p>}
      </div>

      <Card>
        <h2 className="text-base font-bold mb-2">정책 요약</h2>
        <p className="text-sm text-text leading-relaxed">{p.summary}</p>
      </Card>

      <Card>
        <h2 className="text-base font-bold mb-3">지원 내용</h2>
        <div className="bg-primary-bg rounded-xl p-4 mb-3">
          <p className="text-sm font-semibold text-primary-d">{p.benefit}</p>
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-bold mb-3">지원 대상</h2>
        <div className="space-y-2 text-sm">
          {p.min_age != null && p.max_age != null && (
            <div className="flex gap-2">
              <span className="text-muted shrink-0 w-16">연령</span>
              <span className="text-text">만 {p.min_age}세 ~ {p.max_age}세</span>
            </div>
          )}
          {p.regions && p.regions.length > 0 && (
            <div className="flex gap-2">
              <span className="text-muted shrink-0 w-16">지역</span>
              <span className="text-text">{p.regions.join(', ')}</span>
            </div>
          )}
          {p.income_pct != null && (
            <div className="flex gap-2">
              <span className="text-muted shrink-0 w-16">소득</span>
              <span className="text-text">중위소득 {p.income_pct}% 이하</span>
            </div>
          )}
          {p.employment && p.employment.length > 0 && (
            <div className="flex gap-2">
              <span className="text-muted shrink-0 w-16">취업상태</span>
              <span className="text-text">{p.employment.join(', ')}</span>
            </div>
          )}
          {p.housing_req && (
            <div className="flex gap-2">
              <span className="text-muted shrink-0 w-16">주거</span>
              <span className="text-text">{p.housing_req}</span>
            </div>
          )}
        </div>
        {p.raw_eligibility && (
          <div className="mt-3 p-3 bg-[#F7F8FA] rounded-lg text-xs text-muted">
            원문: {p.raw_eligibility}
          </div>
        )}
      </Card>

      <Card>
        <h2 className="text-base font-bold mb-3">신청 방법</h2>
        {p.how_to_apply && (
          <p className="text-sm text-text mb-3">{p.how_to_apply}</p>
        )}
        {(p.apply_start || p.apply_end) && (
          <p className="text-sm text-muted mb-3">
            신청 기간: {p.apply_start?.replace(/-/g, '.') || '미정'} ~{' '}
            {p.apply_end?.replace(/-/g, '.') || '미정'}
          </p>
        )}
        {p.apply_url && (
          <a
            href={p.apply_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-d transition-colors no-underline"
          >
            공식 사이트에서 신청 →
          </a>
        )}
      </Card>

      {relatedCalcs.length > 0 && (
        <Card>
          <h2 className="text-base font-bold mb-3">관련 계산기</h2>
          <div className="space-y-2">
            {relatedCalcs.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-[#F7F8FA] rounded-xl text-sm text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
              >
                🧮 {c.label}
              </a>
            ))}
          </div>
        </Card>
      )}

      <div className="mt-4 p-3 bg-green-bg rounded-xl text-xs text-muted leading-relaxed">
        본 정보는 참고용이며, 최종 자격·신청은{' '}
        <strong className="text-text">공식 사이트</strong>에서 확인하세요.
        <br />
        출처:{' '}
        <a
          href="https://www.youthcenter.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          한국고용정보원 온통청년
        </a>
        {' '}· 최종 갱신: {p.updated_at?.slice(0, 10).replace(/-/g, '.')}
      </div>
    </>
  );
}
