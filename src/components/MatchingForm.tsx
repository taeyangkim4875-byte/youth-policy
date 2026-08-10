'use client';

import { useState, useMemo } from 'react';
import Card, { SectionTitle } from '@/components/Card';
import PolicyCard from '@/components/PolicyCard';
import { SIDO, SIGUNGU } from '@/lib/regions';
import { matchPolicies } from '@/lib/matching';
import type { Policy, UserCondition } from '@/lib/types';

const EMPLOYMENT_OPTIONS = [
  { value: '미취업', label: '미취업·구직중' },
  { value: '재직', label: '재직중' },
  { value: '재학', label: '재학중' },
  { value: '창업', label: '창업' },
];

const INCOME_OPTIONS = [
  { value: 60, label: '중위 60% 이하' },
  { value: 100, label: '중위 100% 이하' },
  { value: 150, label: '중위 150% 이하' },
  { value: 999, label: '해당 없음' },
];

const inputCls =
  'w-full py-2.5 px-3 border border-line rounded-[var(--radius-sm)] text-[13px] bg-[#fbfcfe] font-semibold text-text outline-none focus:border-primary';
const chipCls = (on: boolean) =>
  `px-3 py-2 border rounded-full text-[12px] font-semibold cursor-pointer transition-all ${
    on
      ? 'bg-primary border-primary text-white'
      : 'border-line bg-[#fbfcfe] text-muted hover:border-primary/40'
  }`;

export default function MatchingForm({ policies }: { policies: Policy[] }) {
  const currentYear = new Date().getFullYear();

  const [birthYear, setBirthYear] = useState<number>(2000);
  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [employment, setEmployment] = useState('');
  const [incomePct, setIncomePct] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const age = currentYear - birthYear;
  const canSubmit = birthYear > 0 && sido !== '' && employment !== '' && incomePct > 0;

  const matchResults = useMemo(() => {
    if (!submitted || !canSubmit) return [];
    const cond: UserCondition = {
      birthYear, sido, sigungu, employment, incomePct,
    };
    return matchPolicies(policies, cond);
  }, [submitted, birthYear, sido, sigungu, employment, incomePct, policies, canSubmit]);

  return (
    <>
      <Card>
        <SectionTitle>조건 입력</SectionTitle>

        <div className="space-y-3">
          <div>
            <label className="block text-[12px] font-bold text-muted mb-1">출생연도</label>
            <input
              type="number"
              value={birthYear || ''}
              onChange={(e) => { setBirthYear(+e.target.value); setSubmitted(false); }}
              placeholder="예: 2000"
              min={1970}
              max={currentYear}
              className={inputCls}
            />
            {birthYear > 1970 && (
              <span className="text-[11px] text-muted mt-1 block">만 {age}세</span>
            )}
          </div>

          <div>
            <label className="block text-[12px] font-bold text-muted mb-1">거주 지역</label>
            <div className="flex gap-1.5">
              <select
                value={sido}
                onChange={(e) => { setSido(e.target.value); setSigungu(''); setSubmitted(false); }}
                className={inputCls + ' flex-1 appearance-none'}
              >
                <option value="">시/도</option>
                {SIDO.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <select
                value={sigungu}
                onChange={(e) => { setSigungu(e.target.value); setSubmitted(false); }}
                disabled={!sido}
                className={inputCls + ' flex-1 appearance-none'}
              >
                <option value="">시/군/구</option>
                {sido && SIGUNGU[sido]?.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-muted mb-1.5">현재 상태</label>
            <div className="flex flex-wrap gap-1.5">
              {EMPLOYMENT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => { setEmployment(o.value); setSubmitted(false); }}
                  className={chipCls(employment === o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-muted mb-1.5">가구 소득 수준</label>
            <div className="flex flex-wrap gap-1.5">
              {INCOME_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => { setIncomePct(o.value); setSubmitted(false); }}
                  className={chipCls(incomePct === o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => { if (canSubmit) setSubmitted(true); }}
          disabled={!canSubmit}
          className={`w-full py-3 rounded-[var(--radius-sm)] text-white font-bold text-[14px] mt-4 transition-colors ${
            canSubmit ? 'bg-primary hover:bg-primary-d' : 'bg-line text-muted cursor-not-allowed'
          }`}
        >
          내 정책 찾기
        </button>

        <p className="text-[11px] text-muted text-center mt-2">
          입력한 정보는 저장하지 않고 조회에만 사용해요
        </p>
      </Card>

      {/* 매칭 결과 */}
      {submitted && (
        <div className="mt-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[16px] font-extrabold">
              맞춤 정책 <span className="text-primary">{matchResults.length}건</span>
            </h2>
            <span className="text-[11px] text-muted">만 {age}세 · {sido}</span>
          </div>
          {matchResults.length === 0 ? (
            <Card>
              <div className="text-center py-4">
                <p className="text-[13px] text-muted">
                  조건에 맞는 정책이 없습니다. 조건을 변경해보세요.
                </p>
              </div>
            </Card>
          ) : (
            <div className="space-y-2">
              {matchResults.map((p) => <PolicyCard key={p.id} policy={p} />)}
            </div>
          )}
        </div>
      )}
    </>
  );
}
