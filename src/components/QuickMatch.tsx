'use client';

import { useState } from 'react';
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

function filterBySituation(policies: Policy[], sit: Situation): Policy[] {
  const now = Date.now();

  return policies
    .filter((p) => {
      if (p.status !== 'active') return false;
      // 마감 지난 건 제외
      if (p.apply_end && new Date(p.apply_end).getTime() < now) return false;
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

      return { policy: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.policy);
}

export default function QuickMatch({ policies }: { policies: Policy[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState<Policy[]>([]);

  const handleSelect = (sit: Situation) => {
    if (selected === sit.id) {
      setSelected(null);
      setMatched([]);
      return;
    }
    setSelected(sit.id);
    setMatched(filterBySituation(policies, sit));
  };

  return (
    <div className="mb-4">
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
