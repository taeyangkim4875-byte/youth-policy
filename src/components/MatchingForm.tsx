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

function formatMoney(amount: number): string {
  if (amount >= 10000) return `${Math.round(amount / 10000)}만`;
  return `${amount.toLocaleString()}`;
}

// 정책의 연간 실질 혜택 금액 추정 (만원 단위)
function annualBenefit(p: Policy): number {
  // 대출은 혜택금이 아님
  if (p.benefit_type === 'loan') return 0;

  // benefit_total이 연 1,200만원(월 100만) 초과면 대출/보증금일 가능성 높음 → 제외
  if (p.benefit_total && p.benefit_total > 12000000) return 0;

  if (p.benefit_monthly) {
    const months = p.benefit_duration || 12;
    const annual = p.benefit_monthly * Math.min(months, 12);
    // 월 100만원 초과는 비현실적 → 제외
    if (p.benefit_monthly > 1000000) return 0;
    return annual;
  }

  if (p.benefit_total) {
    // 1회성 지원금은 그대로 (연간 기준)
    return p.benefit_total;
  }

  return 0;
}

// 정책 정렬: 실질 혜택 큰 순 → 마감 임박 우선
function sortPolicies(policies: Policy[]): Policy[] {
  const now = Date.now();
  return [...policies].sort((a, b) => {
    // 1) 실질 혜택 금액 큰 순
    const aAmt = annualBenefit(a);
    const bAmt = annualBenefit(b);
    if (bAmt !== aAmt) return bAmt - aAmt;

    // 2) 마감 임박 우선
    const aEnd = a.apply_end ? new Date(a.apply_end).getTime() - now : Infinity;
    const bEnd = b.apply_end ? new Date(b.apply_end).getTime() - now : Infinity;
    return aEnd - bEnd;
  });
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
  const [submitted, setSubmitted] = useState(false);

  const age = currentYear - birthYear;
  const canSubmit = birthYear > 0 && sido !== '' && employment !== '' && incomePct > 0;

  const matchResults = useMemo(() => {
    if (!submitted || !canSubmit) return [];
    const cond: UserCondition = {
      birthYear, sido, sigungu, employment, incomePct,
    };
    return sortPolicies(matchPolicies(policies, cond));
  }, [submitted, birthYear, sido, sigungu, employment, incomePct, policies, canSubmit]);

  const summary = useMemo(() => calcBenefitSummary(matchResults), [matchResults]);

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
