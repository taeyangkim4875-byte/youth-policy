'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Card, { SectionTitle } from '@/components/Card';
import PolicyCard from '@/components/PolicyCard';
import { SIDO, SIGUNGU } from '@/lib/regions';
import { matchPolicies, annualBenefit } from '@/lib/matching';
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

const EDUCATION_OPTIONS = [
  { value: '', label: '선택 안함' },
  { value: '고졸 이하', label: '고졸 이하' },
  { value: '대학 재학', label: '대학 재학' },
  { value: '대졸', label: '대졸' },
  { value: '석박사', label: '석박사' },
];

const INTEREST_OPTIONS = [
  { value: '주거', label: '주거' },
  { value: '취업', label: '취업' },
  { value: '금융·자산', label: '금융·자산' },
  { value: '교육', label: '교육' },
  { value: '복지·문화', label: '복지·문화' },
];

const inputCls =
  'w-full py-2.5 px-3 border border-line rounded-[var(--radius-sm)] text-[13px] bg-[#fbfcfe] font-semibold text-text outline-none focus:border-primary';
const chipCls = (on: boolean) =>
  `px-3 py-2 border rounded-full text-[12px] font-semibold cursor-pointer transition-all ${
    on
      ? 'bg-primary border-primary text-white'
      : 'border-line bg-[#fbfcfe] text-muted hover:border-primary/40'
  }`;

function formatMoney(amount: number): string {
  if (amount >= 10000) return `${Math.round(amount / 10000)}만`;
  return `${amount.toLocaleString()}`;
}

function calcBenefitSummary(policies: Policy[]) {
  let totalMax = 0;
  let countWithAmount = 0;
  let countLoan = 0;
  let countUnknown = 0;
  let deadlineSoonTotal = 0;
  let deadlineSoonCount = 0;
  const now = Date.now();
  const thirtyDays = 30 * 86400000;

  for (const p of policies) {
    const amount = annualBenefit(p);

    if (p.benefit_type === 'loan') {
      countLoan++;
      continue;
    }

    if (amount > 0) {
      totalMax += amount;
      countWithAmount++;

      if (p.apply_end) {
        const diff = new Date(p.apply_end).getTime() - now;
        if (diff >= 0 && diff <= thirtyDays) {
          deadlineSoonTotal += amount;
          deadlineSoonCount++;
        }
      }
    } else {
      countUnknown++;
    }
  }

  return { totalMax, countWithAmount, countLoan, countUnknown, deadlineSoonTotal, deadlineSoonCount };
}

interface AiPick {
  idx: number;
  reason: string;
  priority: string;
}

interface AiResult {
  picks: AiPick[];
  tip: string;
}

export default function MatchingForm({ policies }: { policies: Policy[] }) {
  const currentYear = new Date().getFullYear();

  const [birthYear, setBirthYear] = useState<number>(2000);
  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [employment, setEmployment] = useState('');
  const [incomePct, setIncomePct] = useState<number>(0);
  const [education, setEducation] = useState('');
  const [married, setMarried] = useState<boolean | undefined>(undefined);
  const [homeless, setHomeless] = useState<boolean | undefined>(undefined);
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // AI state
  const [aiResult, setAiResult] = useState<AiResult | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  const age = currentYear - birthYear;
  const canSubmit = birthYear > 0 && sido !== '' && employment !== '' && incomePct > 0;

  const condition: UserCondition = {
    birthYear, sido, sigungu, employment, incomePct,
    education: education || undefined,
    married,
    homeless,
    interests: interests.length > 0 ? interests : undefined,
  };

  const matchResults = useMemo(() => {
    if (!submitted || !canSubmit) return [];
    return matchPolicies(policies, condition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, birthYear, sido, sigungu, employment, incomePct, education, married, homeless, interests, policies, canSubmit]);

  const summary = useMemo(() => calcBenefitSummary(matchResults), [matchResults]);

  const fetchAiRecommend = useCallback(async (results: Policy[], cond: UserCondition) => {
    if (results.length === 0) return;
    setAiLoading(true);
    setAiError('');
    setAiResult(null);
    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ policies: results, condition: cond }),
      });
      if (!res.ok) throw new Error('AI 추천 요청 실패');
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setAiResult(data);
    } catch (e: any) {
      setAiError(e.message || 'AI 추천을 불러올 수 없습니다');
    } finally {
      setAiLoading(false);
    }
  }, []);

  // 매칭 결과 나오면 자동으로 AI 추천 호출
  useEffect(() => {
    if (matchResults.length > 0) {
      fetchAiRecommend(matchResults, condition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchResults]);

  const toggleInterest = (v: string) => {
    setInterests(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
    setSubmitted(false);
  };

  const resetForm = () => {
    setSubmitted(false);
    setAiResult(null);
    setAiError('');
  };

  return (
    <>
      <Card>
        <SectionTitle>조건 입력</SectionTitle>

        <div className="space-y-3">
          {/* 출생연도 */}
          <div>
            <label className="block text-[12px] font-bold text-muted mb-1">출생연도</label>
            <input
              type="number"
              value={birthYear || ''}
              onChange={(e) => { setBirthYear(+e.target.value); resetForm(); }}
              placeholder="예: 2000"
              min={1970}
              max={currentYear}
              className={inputCls}
            />
            {birthYear > 1970 && (
              <span className="text-[11px] text-muted mt-1 block">만 {age}세</span>
            )}
          </div>

          {/* 거주 지역 */}
          <div>
            <label className="block text-[12px] font-bold text-muted mb-1">거주 지역</label>
            <div className="flex gap-1.5">
              <select
                value={sido}
                onChange={(e) => { setSido(e.target.value); setSigungu(''); resetForm(); }}
                className={inputCls + ' flex-1 appearance-none'}
              >
                <option value="">시/도</option>
                {SIDO.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <select
                value={sigungu}
                onChange={(e) => { setSigungu(e.target.value); resetForm(); }}
                disabled={!sido}
                className={inputCls + ' flex-1 appearance-none'}
              >
                <option value="">시/군/구</option>
                {sido && SIGUNGU[sido]?.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          {/* 현재 상태 */}
          <div>
            <label className="block text-[12px] font-bold text-muted mb-1.5">현재 상태</label>
            <div className="flex flex-wrap gap-1.5">
              {EMPLOYMENT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => { setEmployment(o.value); resetForm(); }}
                  className={chipCls(employment === o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* 가구 소득 */}
          <div>
            <label className="block text-[12px] font-bold text-muted mb-1.5">가구 소득 수준</label>
            <div className="flex flex-wrap gap-1.5">
              {INCOME_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => { setIncomePct(o.value); resetForm(); }}
                  className={chipCls(incomePct === o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* 추가 조건 토글 */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full text-[12px] font-semibold text-primary py-1.5 flex items-center justify-center gap-1"
          >
            {showMore ? '추가 조건 접기' : '추가 조건 펼치기 (더 정확한 매칭)'}
            <svg className={`w-3 h-3 transition-transform ${showMore ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {showMore && (
            <div className="space-y-3 pt-1 border-t border-line">
              {/* 학력 */}
              <div>
                <label className="block text-[12px] font-bold text-muted mb-1">최종 학력</label>
                <select
                  value={education}
                  onChange={(e) => { setEducation(e.target.value); resetForm(); }}
                  className={inputCls + ' appearance-none'}
                >
                  {EDUCATION_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* 결혼 여부 */}
              <div>
                <label className="block text-[12px] font-bold text-muted mb-1.5">결혼 여부</label>
                <div className="flex gap-1.5">
                  {[
                    { value: undefined, label: '선택 안함' },
                    { value: false, label: '미혼' },
                    { value: true, label: '기혼' },
                  ].map((o) => (
                    <button
                      key={String(o.value)}
                      onClick={() => { setMarried(o.value as boolean | undefined); resetForm(); }}
                      className={chipCls(married === o.value)}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 주택 소유 */}
              <div>
                <label className="block text-[12px] font-bold text-muted mb-1.5">주택 소유</label>
                <div className="flex gap-1.5">
                  {[
                    { value: undefined, label: '선택 안함' },
                    { value: true, label: '무주택' },
                    { value: false, label: '유주택' },
                  ].map((o) => (
                    <button
                      key={String(o.value)}
                      onClick={() => { setHomeless(o.value as boolean | undefined); resetForm(); }}
                      className={chipCls(homeless === o.value)}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 관심 분야 */}
              <div>
                <label className="block text-[12px] font-bold text-muted mb-1.5">관심 분야 (복수 선택)</label>
                <div className="flex flex-wrap gap-1.5">
                  {INTEREST_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => toggleInterest(o.value)}
                      className={chipCls(interests.includes(o.value))}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => { if (canSubmit) { setSubmitted(true); setAiResult(null); } }}
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
          {/* 결과 요약 카드 */}
          {matchResults.length > 0 && (
            <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
              <p className="text-[12px] font-semibold opacity-80 mb-1">
                매칭된 정책 <span className="font-extrabold">{matchResults.length}건</span>
              </p>

              {summary.countWithAmount > 0 ? (
                <>
                  <p className="text-[12px] opacity-80 mt-1">
                    금액 확인된 {summary.countWithAmount}건 기준
                  </p>
                  <p className="text-[28px] font-extrabold leading-tight">
                    연 최대 약 {formatMoney(summary.totalMax)}원
                  </p>
                </>
              ) : (
                <p className="text-[16px] font-extrabold leading-tight mt-1">
                  상세 금액은 각 정책을 확인하세요
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-[11px] font-medium opacity-80">
                {summary.countUnknown > 0 && <span>금액 미정 {summary.countUnknown}건</span>}
                {summary.countLoan > 0 && <span>대출/보증 {summary.countLoan}건 (금액 미포함)</span>}
              </div>

              {summary.deadlineSoonCount > 0 && (
                <div className="mt-3 bg-white/15 rounded-lg p-2.5">
                  <p className="text-[12px] font-bold">
                    30일 내 마감 {summary.deadlineSoonCount}건 · {formatMoney(summary.deadlineSoonTotal)}원
                  </p>
                  <p className="text-[11px] opacity-80 mt-0.5">놓치면 다음 모집까지 기다려야 해요</p>
                </div>
              )}

              <p className="text-[10px] opacity-50 mt-2">
                * 대출·보증 상품은 금액에서 제외했습니다. 정책별 최대 금액 기준 단순 합산이며, 중복 수혜 제한·개인 조건에 따라 실제 수령액은 다릅니다.
              </p>
            </div>
          )}

          {/* AI 추천 결과 */}
          {matchResults.length > 0 && (
            <div className="mb-3">
              {aiLoading && (
                <div className="w-full py-4 text-center bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200 rounded-[var(--radius)]">
                  <div className="inline-block w-5 h-5 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-[12px] text-violet-600 font-semibold mt-2">AI가 맞춤 정책을 분석하고 있어요...</p>
                </div>
              )}

              {aiError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-[var(--radius-sm)] text-[12px] text-red-600">
                  {aiError}
                  <button onClick={() => fetchAiRecommend(matchResults, condition)} className="ml-2 underline">재시도</button>
                </div>
              )}

              {aiResult && (
                <div className="bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200 rounded-[var(--radius)] p-4">
                  <p className="text-[13px] font-extrabold text-violet-700 mb-2">
                    AI 맞춤 추천 TOP {aiResult.picks?.length || 0}
                  </p>

                  {aiResult.tip && (
                    <p className="text-[12px] text-violet-600 mb-3 leading-relaxed">
                      {aiResult.tip}
                    </p>
                  )}

                  <div className="space-y-2">
                    {aiResult.picks?.map((pick, i) => {
                      const policy = matchResults[pick.idx];
                      if (!policy) return null;
                      return (
                        <div key={pick.idx} className="bg-white rounded-lg p-3 border border-violet-100">
                          <div className="flex items-start gap-2">
                            <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white ${
                              pick.priority === '높음' ? 'bg-violet-500' : 'bg-violet-300'
                            }`}>
                              {i + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-bold text-text truncate">{policy.name}</p>
                              <p className="text-[11px] text-violet-600 mt-0.5">{pick.reason}</p>
                              <p className="text-[11px] text-muted mt-0.5">{policy.benefit.slice(0, 50)}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

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
