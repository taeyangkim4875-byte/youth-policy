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

const REGION_SHORT: Record<string, string> = {
  '서울특별시': '서울', '경기도': '경기', '인천광역시': '인천',
  '부산광역시': '부산', '대구광역시': '대구', '광주광역시': '광주',
  '대전광역시': '대전', '울산광역시': '울산', '세종특별자치시': '세종',
  '강원특별자치도': '강원', '충청북도': '충북', '충청남도': '충남',
  '전북특별자치도': '전북', '전라남도': '전남', '경상북도': '경북',
  '경상남도': '경남', '제주특별자치도': '제주', '전남광주통합특별시': '전남광주',
};

const CENTRAL_ORGS = [
  '고용노동부', '중소벤처기업부', '교육부', '외교부', '보건복지부', '국토교통부',
  '여성가족부', '농림축산식품부', '과학기술정보통신부', '국가보훈부', '문화체육관광부',
  '산업통상자원부', '행정안전부', '환경부', '법무부', '국방부', '통일부',
  '정부산하기관및위원회', '해양수산부', '산림청', '병무청', '특허청', '지식재산처',
  '국가유산청', '식품의약품안전처', '재외동포청', '기상청', '농촌진흥청',
  '방위사업청', '통계청', '조달청', '해양경찰청', '공정거래위원회',
  '새만금개발청', '행정중심복합도시건설청',
];

const PAGE_SIZE = 30;

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
  const [page, setPage] = useState(1);

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

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice(0, page * PAGE_SIZE);

  const catCounts = useMemo(() => {
    const counts: Record<string, number> = { '전체': 0 };
    policies.forEach((p) => {
      if (p.status !== 'active') return;
      counts['전체']++;
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [policies]);

  // 필터 변경 시 페이지 리셋
  const handleCat = (c: string) => { setActiveCat(c); setPage(1); };
  const handleRegion = (r: string) => { setActiveRegion(r); setPage(1); };
  const handleSearch = (q: string) => { setSearchQuery(q); setPage(1); };

  return (
    <>
      {/* 검색 */}
      <div className="relative mb-3">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="정책명, 키워드로 검색..."
          className="w-full py-2.5 pl-9 pr-3 border border-line rounded-xl text-[13px] bg-surface text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text text-[18px] leading-none"
          >
            &times;
          </button>
        )}
      </div>

      {/* 필터 행: 카테고리 + 지역 */}
      <div className="flex items-center gap-2 mb-3">
        {/* 카테고리 칩 */}
        <div className="flex-1 flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => handleCat(c)}
              className={`shrink-0 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border transition-colors ${
                activeCat === c
                  ? 'bg-primary text-white border-primary'
                  : 'border-line text-muted hover:border-primary/30 hover:text-text'
              }`}
            >
              {c}
              <span className={`ml-0.5 ${activeCat === c ? 'opacity-80' : 'opacity-50'}`}>
                {catCounts[c] || 0}
              </span>
            </button>
          ))}
        </div>

        {/* 지역 드롭다운 */}
        <div className="relative shrink-0">
          <select
            value={activeRegion}
            onChange={(e) => handleRegion(e.target.value)}
            className="py-1.5 pl-2.5 pr-7 border border-line rounded-lg text-[11px] font-semibold bg-surface text-text outline-none focus:border-primary appearance-none cursor-pointer"
          >
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r === '전체' ? '전국' : REGION_SHORT[r] || r}
              </option>
            ))}
          </select>
          <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 결과 헤더 */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-[13px] text-muted">
          {activeCat !== '전체' && <span className="font-semibold text-text">{activeCat}</span>}
          {activeCat !== '전체' && activeRegion !== '전체' && ' · '}
          {activeRegion !== '전체' && <span className="font-semibold text-text">{REGION_SHORT[activeRegion] || activeRegion}</span>}
          {(activeCat !== '전체' || activeRegion !== '전체') && ' '}
          <span className="font-extrabold text-primary">{filtered.length}</span>건
        </p>
        {(activeCat !== '전체' || activeRegion !== '전체' || searchQuery) && (
          <button
            onClick={() => { handleCat('전체'); handleRegion('전체'); handleSearch(''); }}
            className="text-[11px] text-muted hover:text-primary transition-colors"
          >
            필터 초기화
          </button>
        )}
      </div>

      {/* 정책 목록 */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[14px] font-semibold text-text mb-1">조건에 맞는 정책이 없습니다</p>
          <p className="text-[12px] text-muted">다른 카테고리나 지역을 선택해보세요.</p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {paged.map((p) => (
              <PolicyCard key={p.id} policy={p} />
            ))}
          </div>

          {/* 더보기 / 페이지 정보 */}
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="w-full mt-3 py-3 border border-line rounded-xl text-[13px] font-semibold text-muted hover:text-primary hover:border-primary/30 transition-colors"
            >
              더보기 ({paged.length} / {filtered.length})
            </button>
          )}
          {page >= totalPages && filtered.length > PAGE_SIZE && (
            <p className="text-center text-[11px] text-muted mt-3">
              전체 {filtered.length}개 정책을 모두 표시했습니다.
            </p>
          )}
        </>
      )}

      <div className="mt-4 p-3 bg-surface border border-line rounded-xl text-[11px] text-muted leading-relaxed">
        본 정보는 참고용이며 최종 자격·신청은 공식 사이트에서 확인하세요.
        <br />출처: 한국고용정보원 온통청년 · 비공식 민간 서비스
      </div>
    </>
  );
}
