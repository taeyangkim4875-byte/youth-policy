'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PolicyCard from '@/components/PolicyCard';
import type { Policy } from '@/lib/types';

const CATEGORIES = ['전체', '주거', '취업', '금융·자산', '교육', '복지·문화'];

const REGIONS = [
  '전체', '서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시',
  '광주광역시', '대전광역시', '울산광역시', '세종특별자치시',
  '강원특별자치도', '충청북도', '충청남도', '전북특별자치도',
  '전라남도', '경상북도', '경상남도', '제주특별자치도',
  '전남광주통합특별시',
];

// 중앙부처/정부기관은 "전국"으로 간주
const CENTRAL_ORGS = [
  '고용노동부', '중소벤처기업부', '교육부', '외교부', '보건복지부', '국토교통부',
  '여성가족부', '농림축산식품부', '과학기술정보통신부', '국가보훈부', '문화체육관광부',
  '산업통상자원부', '행정안전부', '환경부', '법무부', '국방부', '통일부',
  '정부산하기관및위원회', '해양수산부', '산림청', '병무청', '특허청', '지식재산처',
  '국가유산청', '식품의약품안전처', '재외동포청', '기상청', '농촌진흥청',
  '방위사업청', '통계청', '조달청', '해양경찰청', '공정거래위원회',
  '새만금개발청', '행정중심복합도시건설청',
];

function isNationalPolicy(regions: string[]): boolean {
  return regions.some(r => r === '전국' || CENTRAL_ORGS.includes(r));
}

function matchesRegion(policy: Policy, region: string): boolean {
  if (region === '전체') return true;
  const pRegions = policy.regions || [];
  if (isNationalPolicy(pRegions)) return true;
  return pRegions.some(r => r.includes(region.replace(/특별시|광역시|특별자치시|특별자치도|도$/g, '').slice(0, 2)));
}

export default function PolicyList({ policies }: { policies: Policy[] }) {
  const searchParams = useSearchParams();
  const catFromUrl = searchParams.get('cat') || '전체';
  const regionFromUrl = searchParams.get('region') || '전체';
  const [activeCat, setActiveCat] = useState(catFromUrl);
  const [activeRegion, setActiveRegion] = useState(regionFromUrl);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let result = policies.filter((p) => p.status === 'active');
    if (activeCat !== '전체') result = result.filter((p) => p.category === activeCat);
    if (activeRegion !== '전체') result = result.filter((p) => matchesRegion(p, activeRegion));
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.benefit.toLowerCase().includes(q)
      );
    }
    return result;
  }, [policies, activeCat, activeRegion, searchQuery]);

  const catCounts = useMemo(() => {
    const counts: Record<string, number> = { '전체': 0 };
    policies.forEach((p) => {
      if (p.status !== 'active') return;
      counts['전체']++;
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [policies]);

  return (
    <>
      {/* 검색 */}
      <div className="mb-3">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="정책명, 키워드로 검색..."
          className="w-full py-2.5 px-3 border border-line rounded-[var(--radius-sm)] text-[13px] bg-[#fbfcfe] text-text outline-none focus:border-primary"
        />
      </div>

      {/* 카테고리 필터 */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCat(c)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-colors ${
              activeCat === c
                ? 'bg-primary-bg border-primary/30 text-primary'
                : 'border-line text-muted hover:border-primary/30'
            }`}
          >
            {c} {catCounts[c] ? `${catCounts[c]}` : ''}
          </button>
        ))}
      </div>

      {/* 지역 필터 */}
      <div className="mb-3">
        <select
          value={activeRegion}
          onChange={(e) => setActiveRegion(e.target.value)}
          className="w-full py-2.5 px-3 border border-line rounded-[var(--radius-sm)] text-[13px] bg-[#fbfcfe] font-semibold text-text outline-none focus:border-primary appearance-none"
        >
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r === '전체' ? '전체 지역' : r}
            </option>
          ))}
        </select>
      </div>

      {/* 정책 목록 */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[16px] font-extrabold">
          {activeCat === '전체' ? '' : activeCat + ' '}
          {activeRegion !== '전체' ? activeRegion + ' ' : ''}
          정책 <span className="text-primary">{filtered.length}건</span>
        </h2>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-[13px] text-muted">조건에 맞는 정책이 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((p) => (
            <PolicyCard key={p.id} policy={p} />
          ))}
        </div>
      )}

      <div className="mt-4 p-3 bg-surface border border-line rounded-[var(--radius-sm)] text-[11px] text-muted leading-relaxed">
        본 정보는 참고용이며 최종 자격·신청은 공식 사이트에서 확인하세요.
        <br />출처: 한국고용정보원 온통청년 · 비공식 민간 서비스
      </div>
    </>
  );
}
