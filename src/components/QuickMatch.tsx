'use client';

import { useState, useEffect } from 'react';
import { SIDO } from '@/lib/regions';
import type { Policy } from '@/lib/types';
import PolicySwipe from '@/components/PolicySwipe';

interface Situation {
  id: string;
  label: string;
  sub: string;
  keywords: string[];
  categories: string[];
}

const SITUATIONS: Situation[] = [
  {
    id: 'moving',
    label: '이사 예정이에요',
    sub: '월세·전세·이사비 지원',
    keywords: ['월세', '전세', '이사', '임대', '주거', '보증금'],
    categories: ['주거'],
  },
  {
    id: 'job-seeking',
    label: '취업 준비 중이에요',
    sub: '구직활동·훈련·수당',
    keywords: ['구직', '취업', '훈련', '인턴', '채용', '일경험', '직업'],
    categories: ['취업'],
  },
  {
    id: 'saving',
    label: '돈을 모으고 싶어요',
    sub: '적금·기여금·자산형성',
    keywords: ['적금', '저축', '자산', '기여금', '도약', '미래', '금융'],
    categories: ['금융·자산'],
  },
  {
    id: 'first-job',
    label: '첫 직장 다니는 중이에요',
    sub: '사회초년생 지원',
    keywords: ['초년', '재직', '근로', '고용', '복지', '건강'],
    categories: ['복지·문화', '금융·자산'],
  },
  {
    id: 'studying',
    label: '공부하고 있어요',
    sub: '학자금·교육·훈련',
    keywords: ['학자금', '교육', '훈련', '장학', '학비', '등록금'],
    categories: ['교육'],
  },
  {
    id: 'marriage',
    label: '결혼 준비해요',
    sub: '신혼부부·주택·출산',
    keywords: ['신혼', '결혼', '혼인', '출산', '육아', '부부'],
    categories: ['주거', '복지·문화'],
  },
];

const SIDO_NAMES = [
  '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
  '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
];

function sidoShort(sido: string): string {
  return sido.replace(/특별시|광역시|특별자치시|특별자치도|도$/g, '').slice(0, 2);
}

/** 정책이 사용자 지역과 관련 있는지 확인 */
function isRegionMatch(p: Policy, sido: string): boolean {
  if (!sido) return true; // 지역 미선택이면 전부 보여줌
  const regions = p.regions || [];
  if (regions.includes('전국')) return true;

  const myShort = sidoShort(sido);
  const combined = `${p.org_name || ''} ${p.name}`;

  // 내 지역 매칭
  if (combined.includes(myShort)) return true;
  if (regions.some((r) => r.includes(myShort))) return true;

  // 다른 지역이 명시된 경우 제외
  for (const name of SIDO_NAMES) {
    if (name === myShort) continue;
    if (combined.includes(name)) return false;
  }

  // 지역 특정 안 된 전국 정책
  return true;
}

function filterBySituation(policies: Policy[], sit: Situation, sido: string): Policy[] {
  const now = Date.now();

  return policies
    .filter((p) => {
      if (p.status !== 'active') return false;
      if (p.apply_end && new Date(p.apply_end).getTime() < now) return false;
      if (!isRegionMatch(p, sido)) return false;
      return true;
    })
    .map((p) => {
      let score = 0;
      const text = `${p.name} ${p.summary} ${p.benefit} ${p.raw_eligibility || ''}`.toLowerCase();

      // 카테고리 매칭
      if (sit.categories.includes(p.category)) score += 10;

      // 키워드 매칭
      for (const kw of sit.keywords) {
        if (text.includes(kw)) score += 3;
      }

      // 내 지역 정책이면 가산점
      const myShort = sidoShort(sido);
      const combined = `${p.org_name || ''} ${p.name}`;
      if (sido && combined.includes(myShort)) score += 5;

      return { policy: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.policy);
}

export default function QuickMatch({ policies }: { policies: Policy[] }) {
  const [sido, setSido] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState<Policy[]>([]);

  // localStorage에서 저장된 지역 불러오기
  useEffect(() => {
    try {
      const raw = localStorage.getItem('youth-policy-condition');
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.sido) setSido(saved.sido);
      }
    } catch {}
  }, []);

  const handleSelect = (sit: Situation) => {
    if (selected === sit.id) {
      setSelected(null);
      setMatched([]);
      return;
    }
    setSelected(sit.id);
    setMatched(filterBySituation(policies, sit, sido));
  };

  const handleSidoChange = (newSido: string) => {
    setSido(newSido);
    // 이미 상황이 선택된 상태면 결과 갱신
    if (selected) {
      const sit = SITUATIONS.find((s) => s.id === selected);
      if (sit) setMatched(filterBySituation(policies, sit, newSido));
    }
  };

  return (
    <div className="mb-4">
      {/* 지역 선택 */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[13px] font-extrabold text-text shrink-0">어디 살아요?</span>
        <select
          value={sido}
          onChange={(e) => handleSidoChange(e.target.value)}
          className="flex-1 py-2 px-3 border border-line rounded-lg text-[13px] font-semibold text-text bg-white outline-none focus:border-primary appearance-none"
        >
          <option value="">전국</option>
          {SIDO.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <p className="text-[13px] font-extrabold text-text mb-2">
        지금 어떤 상황이에요?
      </p>

      <div className="grid grid-cols-2 gap-2">
        {SITUATIONS.map((sit) => (
          <button
            key={sit.id}
            onClick={() => handleSelect(sit)}
            className={`text-left p-3 rounded-xl border-2 transition-all ${
              selected === sit.id
                ? 'border-primary bg-primary/5'
                : 'border-line bg-surface hover:border-primary/30'
            }`}
          >
            <span className={`text-[13px] font-bold block leading-snug ${
              selected === sit.id ? 'text-primary' : 'text-text'
            }`}>
              {sit.label}
            </span>
            <span className="text-[10px] text-muted mt-0.5 block">
              {sit.sub}
            </span>
          </button>
        ))}
      </div>

      {/* 결과: 스와이프 모드 */}
      {selected && (
        <div className="mt-3">
          {matched.length > 0 ? (
            <>
              <p className="text-[12px] text-muted mb-2">
                <span className="font-bold text-primary">{matched.length}건</span>의 관련 정책을 찾았어요. 넘기면서 확인해보세요.
              </p>
              <PolicySwipe policies={matched} />
            </>
          ) : (
            <div className="text-center py-6 bg-surface rounded-xl border border-line">
              <p className="text-[13px] text-muted">
                해당 상황에 맞는 정책이 없어요.
              </p>
              <p className="text-[11px] text-muted mt-1">
                아래에서 조건을 직접 입력해보세요.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
