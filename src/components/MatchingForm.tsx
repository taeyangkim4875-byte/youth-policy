'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Card, { SectionTitle } from '@/components/Card';
import PolicyCard from '@/components/PolicyCard';
import { SIDO, SIGUNGU } from '@/lib/regions';
import { matchPolicies, annualBenefit } from '@/lib/matching';
import { smartRecommend } from '@/lib/recommend';
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

const CAT_COLORS: Record<string, string> = {
  '주거': 'bg-primary-bg text-primary',
  '취업': 'bg-[#e0f2fe] text-[#0369a1]',
  '금융·자산': 'bg-green-bg text-green',
  '교육': 'bg-[#f3e8ff] text-[#7c3aed]',
  '복지·문화': 'bg-[#fce7f3] text-[#be185d]',
};

const INTEREST_OPTIONS = [
  { value: '주거', label: '주거' },
  { value: '취업', label: '취업' },
  { value: '금융·자산', label: '금융·자산' },
  { value: '교육', label: '교육' },
  { value: '복지·문화', label: '복지·문화' },
];

const inputCls =
  'w-full py-2.5 px-3 border border-line rounded-[var(--radius-sm)] text-[13px] bg-white font-semibold text-text outline-none focus:border-primary';
const chipCls = (on: boolean) =>
  `px-3 py-2 border rounded-lg text-[12px] font-medium cursor-pointer transition-all ${
    on
      ? 'bg-primary/10 border-primary text-primary'
      : 'border-line bg-white text-muted hover:border-line2 hover:text-text'
  }`;
const sectionLabel = 'block text-[12px] font-bold text-text mb-1.5';

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
  const recommend = useMemo(() => smartRecommend(matchResults, condition), [matchResults]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleInterest = (v: string) => {
    setInterests(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
    setSubmitted(false);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <>
      <Card>
        <SectionTitle>조건 입력</SectionTitle>

        {/* 기본 정보 */}
        <div className="space-y-3">
          <div>
            <label className={sectionLabel}>출생연도</label>
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

          <div>
            <label className={sectionLabel}>거주 지역</label>
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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={sectionLabel}>현재 상태</label>
              <select
                value={employment}
                onChange={(e) => { setEmployment(e.target.value); resetForm(); }}
                className={inputCls + ' appearance-none'}
              >
                <option value="">선택</option>
                {EMPLOYMENT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={sectionLabel}>최종 학력</label>
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
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-line my-3" />

        {/* 소득·주거·결혼 */}
        <div className="space-y-3">
          <div>
            <label className={sectionLabel}>가구 소득 수준</label>
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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={sectionLabel}>결혼 여부</label>
              <div className="flex gap-1.5">
                {[
                  { value: false, label: '미혼' },
                  { value: true, label: '기혼' },
                ].map((o) => (
                  <button
                    key={String(o.value)}
                    onClick={() => { setMarried(o.value as boolean); resetForm(); }}
                    className={chipCls(married === o.value) + ' flex-1'}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className={sectionLabel}>주택 소유</label>
              <div className="flex gap-1.5">
                {[
                  { value: true, label: '무주택' },
                  { value: false, label: '유주택' },
                ].map((o) => (
                  <button
                    key={String(o.value)}
                    onClick={() => { setHomeless(o.value as boolean); resetForm(); }}
                    className={chipCls(homeless === o.value) + ' flex-1'}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-line my-3" />

        {/* 관심 분야 */}
        <div>
          <label className={sectionLabel}>관심 분야 (복수 선택)</label>
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

          {/* 맞춤 추천 TOP 5 */}
          {recommend.picks.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[14px] font-extrabold text-text">
                  맞춤 추천 TOP {recommend.picks.length}
                </p>
                <p className="text-[11px] text-muted">{recommend.tip}</p>
              </div>

              <div className="space-y-2.5">
                {recommend.picks.map((pick, i) => {
                  const p = matchResults[pick.idx];
                  if (!p) return null;
                  const catColor = CAT_COLORS[p.category] || 'bg-primary-bg text-primary';
                  const dd = p.apply_end ? Math.ceil((new Date(p.apply_end).getTime() - Date.now()) / 86400000) : null;

                  return (
                    <div key={pick.idx} className="bg-surface border border-line rounded-[var(--radius)] p-4">
                      {/* 헤더: 순위 + 카테고리 + 추천 이유 */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                          pick.priority === '높음' ? 'bg-primary text-white' : 'bg-line text-muted'
                        }`}>
                          {i + 1}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${catColor}`}>
                          {p.category}
                        </span>
                        <span className="text-[10px] font-semibold text-primary bg-primary-bg px-1.5 py-0.5 rounded-md">
                          {pick.reason}
                        </span>
                        {dd !== null && dd >= 0 && dd <= 30 && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-bg text-amber ml-auto">
                            D-{dd}
                          </span>
                        )}
                      </div>

                      {/* 정책명 */}
                      <h3 className="text-[14px] font-extrabold text-text leading-snug mb-1.5">
                        {p.name}
                      </h3>

                      {/* 요약 */}
                      <p className="text-[12px] text-muted leading-relaxed mb-2">
                        {p.summary}
                      </p>

                      {/* 혜택 */}
                      <div className="bg-green-bg/60 rounded-lg px-3 py-2 mb-3">
                        <p className="text-[12px] font-semibold text-green leading-relaxed">
                          {p.benefit}
                        </p>
                      </div>

                      {/* 메타 정보 */}
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted mb-3">
                        {p.org_name && <span>{p.org_name}</span>}
                        {p.min_age != null && p.max_age != null && (
                          <span>만 {p.min_age}~{p.max_age}세</span>
                        )}
                        {p.regions && p.regions.length > 0 && (
                          <span>{p.regions.includes('전국') ? '전국' : p.regions[0]}</span>
                        )}
                        {p.apply_end && (
                          <span>마감 {p.apply_end.replace(/-/g, '.')}</span>
                        )}
                      </div>

                      {/* 신청 방법 + 링크 */}
                      <div className="flex gap-2">
                        <Link
                          href={`/policy/${p.id}`}
                          className="flex-1 py-2.5 text-center bg-primary text-white text-[12px] font-bold rounded-lg hover:bg-primary-d transition-colors no-underline"
                        >
                          자세히 보기
                        </Link>
                        {p.apply_url && (
                          <a
                            href={p.apply_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 text-center border border-primary text-primary text-[12px] font-bold rounded-lg hover:bg-primary-bg transition-colors no-underline"
                          >
                            바로 신청하기
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
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
