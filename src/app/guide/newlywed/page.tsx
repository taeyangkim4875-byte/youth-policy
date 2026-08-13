import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '신혼부부 청년 정책 조합 가이드 — 결혼 전후로 챙겨야 할 혜택 총정리',
  description:
    '신혼부부 전세대출, 특별공급, LH 전세임대, 신혼희망타운, 출산 축하금까지. 결혼 전에 신청해야 할 것과 결혼 후에 신청해야 할 것을 단계별로 정리했습니다. 2026년 기준 2인 가구 중위소득 포함.',
  openGraph: {
    title: '신혼부부 청년 정책 조합 가이드 | 청년정책 매칭',
    description:
      '버팀목 신혼부부 전세대출, LH 전세임대, 신혼희망타운, 출산 축하금까지 — 결혼 준비 중이라면 이 정책들 꼭 확인하세요.',
    url: 'https://youth.moduncalc.com/guide/newlywed',
  },
};

export default function NewlywedGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '신혼부부 전세대출은 금리가 얼마인가요?',
            a: '버팀목 신혼부부 전용 전세대출은 소득에 따라 연 1.5~2.7% 금리가 적용됩니다. 부부 합산 연소득 6,000만 원 이하이면서 무주택 세대주이어야 합니다.',
          },
          {
            q: '신혼부부 청년 정책은 혼인신고 전에도 신청할 수 있나요?',
            a: '대부분의 신혼부부 정책은 혼인신고 후 신청 가능합니다. 다만 신청일 기준 혼인 7년 이내인 경우가 많으므로, 혼인신고 후 최대한 빨리 확인하는 것이 좋습니다.',
          },
          {
            q: '맞벌이와 외벌이 중 어느 쪽이 소득 기준을 맞추기 쉬운가요?',
            a: '신혼부부 정책은 보통 2인 가구 중위소득을 기준으로 합니다. 2026년 기준 2인 가구 중위소득 100%는 월 약 390만 원입니다. 맞벌이는 부부 합산 소득으로 판단하므로, 외벌이인 경우 기준 충족이 더 수월합니다.',
          },
        ]}
      />

      <Link href="/" className="text-sm text-primary no-underline hover:underline mb-4 inline-block">
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        결혼 준비 중이라면, 이 정책들 꼭 확인하세요
      </h1>
      <p className="text-[13px] text-muted mb-5">
        신혼부부 청년 정책 조합 가이드 · 2026년 8월 기준 · 작성: 김태양
      </p>

      {/* 인트로 */}
      <Card>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          결혼을 앞두고 주변에서 가장 많이 물어보는 게 바로 &ldquo;신혼부부용 지원 뭐 있어?&rdquo;입니다.
          주거 대출, 아파트 청약, 출산 지원까지 종류가 많다 보니 어디서부터 시작해야 할지 막막한 분들이
          많더라고요. 직접 경험한 건 아니지만, 주변 문의가 많아서 공식 정보를 기반으로 한번 정리해봤습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed">
          한 가지 미리 말씀드리면, 신혼부부 정책은 <strong>신청 시점</strong>이 굉장히 중요합니다.
          혼인신고 기준으로 기간이 카운트되는 경우가 많아서, 결혼 직후에 바로 챙기는 게 유리합니다.
        </p>
      </Card>

      {/* 정책 총정리 */}
      <Card>
        <h2 className="text-base font-bold mb-4">신혼부부 대상 정책 총정리</h2>

        {/* 버팀목 전세대출 */}
        <div className="mb-4 pb-4 border-b border-line2">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[13px] font-bold text-text">버팀목 신혼부부 전용 전세대출</h3>
            <span className="shrink-0 text-[11px] font-bold bg-primary-bg text-primary rounded-md px-2 py-0.5">
              주거
            </span>
          </div>
          <div className="bg-primary-bg rounded-xl p-3 mb-2">
            <span className="text-[20px] font-extrabold text-primary">연 1.5~2.7%</span>
            <span className="text-[12px] text-muted ml-2">금리 (소득에 따라 차등)</span>
          </div>
          <ul className="text-[12px] text-text leading-relaxed space-y-1 list-disc pl-4">
            <li>대상: 무주택 신혼부부, 부부 합산 연소득 6,000만 원 이하</li>
            <li>한도: 수도권 3억 원, 지방 2억 원</li>
            <li>기간: 최초 2년, 4회 연장 최대 10년</li>
            <li>자녀 출산 시 금리 추가 우대 적용</li>
            <li>신청처: 주택도시기금 기금e든든 (hf.go.kr)</li>
          </ul>
          <div className="mt-2 p-2 bg-amber-bg rounded-lg text-[11px] text-amber">
            소득이 2,000만 원 이하면 1.5%, 6,000만 원에 가까울수록 2.7%에 가깝게 책정됩니다.
          </div>
        </div>

        {/* 신혼부부 특별공급 */}
        <div className="mb-4 pb-4 border-b border-line2">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[13px] font-bold text-text">신혼부부 특별공급 (아파트 청약)</h3>
            <span className="shrink-0 text-[11px] font-bold bg-green-bg text-green rounded-md px-2 py-0.5">
              청약
            </span>
          </div>
          <ul className="text-[12px] text-text leading-relaxed space-y-1 list-disc pl-4">
            <li>공공분양: 신혼부부에게 전체 물량의 30% 우선 배정</li>
            <li>민영분양: 전체 물량의 20% 범위 내 특별공급</li>
            <li>자격: 혼인 7년 이내, 무주택 세대구성원</li>
            <li>자녀가 있을수록 가점 우대 (공공분양 기준)</li>
            <li>부부 합산 소득 기준: 공공 도시근로자 월평균 소득 130% 이하</li>
          </ul>
          <div className="mt-2 p-2 bg-amber-bg rounded-lg text-[11px] text-amber">
            청약통장 가입 기간이 짧아도 신청 가능하다는 게 장점입니다. 미혼일 때보다 당첨 확률이 높습니다.
          </div>
        </div>

        {/* LH 신혼부부 전세임대 */}
        <div className="mb-4 pb-4 border-b border-line2">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[13px] font-bold text-text">LH 신혼부부 전세임대</h3>
            <span className="shrink-0 text-[11px] font-bold bg-primary-bg text-primary rounded-md px-2 py-0.5">
              주거
            </span>
          </div>
          <div className="bg-primary-bg rounded-xl p-3 mb-2">
            <span className="text-[20px] font-extrabold text-primary">수도권 1.5억 한도</span>
            <span className="text-[12px] text-muted ml-2">LH가 집주인과 계약 후 재임대</span>
          </div>
          <ul className="text-[12px] text-text leading-relaxed space-y-1 list-disc pl-4">
            <li>LH가 직접 집주인과 전세 계약을 맺고 신청자에게 저렴하게 재임대</li>
            <li>수도권 1.5억, 광역시 1.2억, 기타 지역 1억 한도</li>
            <li>본인이 직접 원하는 집을 구해서 LH에 신청하는 방식</li>
            <li>임대료: LH 대출 이자(1~2% 수준)만 부담</li>
            <li>신청처: LH 청약센터 (apply.lh.or.kr)</li>
          </ul>
        </div>

        {/* 신혼희망타운 */}
        <div className="mb-4 pb-4 border-b border-line2">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[13px] font-bold text-text">신혼희망타운</h3>
            <span className="shrink-0 text-[11px] font-bold bg-green-bg text-green rounded-md px-2 py-0.5">
              분양
            </span>
          </div>
          <ul className="text-[12px] text-text leading-relaxed space-y-1 list-disc pl-4">
            <li>신혼부부 전용 공공분양 주택, 시세의 약 80% 수준 분양가</li>
            <li>전용면적 60㎡ 이하 소형 위주로 공급</li>
            <li>자격: 혼인 7년 이내 또는 예비 신혼부부, 6세 이하 자녀 있는 경우 우선</li>
            <li>신청처: LH 또는 SH 청약 공고 확인</li>
          </ul>
          <div className="mt-2 p-2 bg-green-bg rounded-lg text-[11px] text-green">
            시세 대비 80% 수준이라 입지 좋은 곳에 당첨되면 상당한 시세 차익을 기대할 수 있습니다.
          </div>
        </div>

        {/* 출산 축하금 */}
        <div className="mb-4 pb-4 border-b border-line2">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[13px] font-bold text-text">출산 축하금 (지자체별 상이)</h3>
            <span className="shrink-0 text-[11px] font-bold bg-amber-bg text-amber rounded-md px-2 py-0.5">
              출산
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-surface border border-line rounded-xl p-2 text-center">
              <p className="text-[11px] text-muted mb-0.5">서울시</p>
              <p className="text-[14px] font-extrabold text-text">100만 원~</p>
              <p className="text-[10px] text-muted">1자녀 기준</p>
            </div>
            <div className="bg-surface border border-line rounded-xl p-2 text-center">
              <p className="text-[11px] text-muted mb-0.5">경기도</p>
              <p className="text-[14px] font-extrabold text-text">100만 원~</p>
              <p className="text-[10px] text-muted">첫째 기준</p>
            </div>
            <div className="bg-surface border border-line rounded-xl p-2 text-center">
              <p className="text-[11px] text-muted mb-0.5">지방 일부</p>
              <p className="text-[14px] font-extrabold text-text">수백만 원</p>
              <p className="text-[10px] text-muted">인구감소지역</p>
            </div>
          </div>
          <p className="text-[12px] text-text leading-relaxed">
            지자체마다 금액이 크게 다릅니다. 거주지 주민센터 또는 복지로(bokjiro.go.kr)에서 확인하세요.
            인구감소지역일수록 지원금이 큰 편입니다.
          </p>
        </div>

        {/* 육아휴직 급여 */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[13px] font-bold text-text">육아휴직 급여</h3>
            <span className="shrink-0 text-[11px] font-bold bg-green-bg text-green rounded-md px-2 py-0.5">
              육아
            </span>
          </div>
          <div className="bg-green-bg rounded-xl p-3 mb-2">
            <span className="text-[18px] font-extrabold text-green">통상임금 80%</span>
            <span className="text-[12px] text-muted ml-2">상한 월 150만 원</span>
          </div>
          <ul className="text-[12px] text-text leading-relaxed space-y-1 list-disc pl-4">
            <li>고용보험 가입자라면 직장인 모두 해당 (중소기업도 동일)</li>
            <li>부부 모두 육아휴직 사용 시 두 번째 육아휴직자 급여 상향 (3+3 부모 육아휴직제)</li>
            <li>신청처: 고용24 (work24.go.kr)</li>
          </ul>
        </div>
      </Card>

      {/* 결혼 전 vs 후 구분 */}
      <Card>
        <h2 className="text-base font-bold mb-3">결혼 전 vs 결혼 후 — 언제 신청해야 하나?</h2>
        <p className="text-[12px] text-muted mb-3">
          신혼부부 정책 중에는 시점을 놓치면 자격이 사라지는 것들이 있습니다.
        </p>
        <div className="space-y-3">
          <div className="bg-primary-bg rounded-xl p-3">
            <p className="text-[12px] font-bold text-primary mb-2">결혼 전 / 예비 신혼부부 단계</p>
            <ul className="text-[12px] text-text space-y-1.5 list-disc pl-4">
              <li>
                <strong>청약통장 납입 이력 확보</strong> — 가입 기간과 납입 횟수가 청약 당첨 가점에 영향
              </li>
              <li>
                <strong>신혼희망타운 예비 신청 확인</strong> — 예비 신혼부부도 신청 가능한 공고 있음
              </li>
              <li>
                <strong>주민등록 세대 분리 여부 확인</strong> — 부모 세대에 등록돼 있으면 무주택 판단에 영향
              </li>
            </ul>
          </div>
          <div className="bg-green-bg rounded-xl p-3">
            <p className="text-[12px] font-bold text-green mb-2">혼인신고 직후 (최우선 체크)</p>
            <ul className="text-[12px] text-text space-y-1.5 list-disc pl-4">
              <li>
                <strong>버팀목 신혼부부 전세대출</strong> — 혼인 후 언제든 신청 가능, 7년 이내 유효
              </li>
              <li>
                <strong>신혼부부 특별공급 청약</strong> — 혼인 7년 이내 적용, 기간 카운트 시작
              </li>
              <li>
                <strong>LH 신혼부부 전세임대</strong> — 혼인 후 신청, 모집 공고 상시 확인
              </li>
            </ul>
          </div>
          <div className="bg-amber-bg rounded-xl p-3">
            <p className="text-[12px] font-bold text-amber mb-2">출산 후 챙겨야 할 것</p>
            <ul className="text-[12px] text-text space-y-1.5 list-disc pl-4">
              <li>
                <strong>출산 축하금</strong> — 출생신고 후 주민센터 또는 복지로에서 신청
              </li>
              <li>
                <strong>육아휴직 급여</strong> — 고용24에서 신청, 출산 후 1년 이내
              </li>
              <li>
                <strong>아이행복카드(국민행복카드)</strong> — 임신·출산 진료비 지원
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 맞벌이 vs 외벌이 소득 기준 */}
      <Card>
        <h2 className="text-base font-bold mb-3">맞벌이 vs 외벌이 — 소득 기준 차이</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          신혼부부 정책에서 &lsquo;소득 기준&rsquo;은 대부분 <strong>2인 가구 중위소득</strong>을 기준으로 합니다.
          맞벌이이면 두 사람의 소득을 합산해서 판단하는 경우가 많아, 외벌이보다 기준을 초과하기 쉽습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-2 text-muted font-bold">항목</th>
                <th className="text-left py-2 px-2 font-bold text-text">맞벌이</th>
                <th className="text-left py-2 pl-2 font-bold text-primary">외벌이</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">소득 합산 방식</td>
                <td className="py-2.5 px-2">부부 합산 적용</td>
                <td className="py-2.5 pl-2 font-semibold text-primary">1인 소득만 적용</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">버팀목 전세대출</td>
                <td className="py-2.5 px-2">합산 6,000만 원 이하</td>
                <td className="py-2.5 pl-2 font-semibold text-primary">1인 6,000만 원 이하</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">특별공급 (공공)</td>
                <td className="py-2.5 px-2">합산 소득 심사</td>
                <td className="py-2.5 pl-2 font-semibold text-primary">기준 충족 유리</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-2 text-muted">맞벌이 우대</td>
                <td className="py-2.5 px-2 font-semibold text-green">일부 정책 맞벌이 상한 완화</td>
                <td className="py-2.5 pl-2">해당 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 p-2 bg-amber-bg rounded-lg text-[11px] text-amber">
          버팀목 전세대출은 맞벌이의 경우 부부 합산 6,000만 원 이하를 봅니다. 단 일부 정책은 맞벌이
          상한을 7,000만 원으로 완화하기도 하니 공고문을 꼭 확인하세요.
        </div>
      </Card>

      {/* 2026 중위소득표 */}
      <Card>
        <h2 className="text-base font-bold mb-1">2026년 기준 2인 가구 중위소득</h2>
        <p className="text-[12px] text-muted mb-3">건강보험료 기준으로 자격을 판단하는 경우가 많습니다.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line bg-[#f7f8fa]">
                <th className="text-left py-2 px-2 text-muted font-bold rounded-tl-lg">기준</th>
                <th className="text-right py-2 px-2 font-bold text-text">월 소득 (세전)</th>
                <th className="text-right py-2 px-2 font-bold text-text rounded-tr-lg">연 소득</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2.5 px-2 text-muted">중위소득 50%</td>
                <td className="py-2.5 px-2 text-right">약 195만 원</td>
                <td className="py-2.5 px-2 text-right">약 2,340만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 px-2 text-muted">중위소득 60%</td>
                <td className="py-2.5 px-2 text-right">약 234만 원</td>
                <td className="py-2.5 px-2 text-right">약 2,808만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 px-2 text-muted font-semibold">중위소득 100%</td>
                <td className="py-2.5 px-2 text-right font-bold text-primary">약 390만 원</td>
                <td className="py-2.5 px-2 text-right font-bold text-primary">약 4,680만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 px-2 text-muted">중위소득 120%</td>
                <td className="py-2.5 px-2 text-right">약 468만 원</td>
                <td className="py-2.5 px-2 text-right">약 5,616만 원</td>
              </tr>
              <tr>
                <td className="py-2.5 px-2 text-muted">중위소득 150%</td>
                <td className="py-2.5 px-2 text-right">약 585만 원</td>
                <td className="py-2.5 px-2 text-right">약 7,020만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-muted mt-2">
          * 2026년 기준 추정치로, 정확한 수치는 보건복지부 공시 자료를 확인하세요.
        </p>
      </Card>

      {/* 신청 순서 추천 */}
      <Card>
        <h2 className="text-base font-bold mb-3">신청 순서 추천</h2>
        <p className="text-[12px] text-muted mb-3">
          모든 걸 한꺼번에 하려면 지칩니다. 우선순위대로 챙기는 게 현실적입니다.
        </p>
        <div className="space-y-2">
          <div className="flex gap-3 items-start">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">
              1
            </span>
            <div>
              <p className="text-[12px] font-bold text-text">혼인신고 직후 — 전세대출 확인</p>
              <p className="text-[11px] text-muted mt-0.5">
                지금 전월세에 살고 있다면 버팀목 신혼부부 전세대출부터. 기존 대출 금리보다 낮으면 갈아타는 게 이득.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">
              2
            </span>
            <div>
              <p className="text-[12px] font-bold text-text">청약 전략 수립 — 특별공급 vs 일반공급</p>
              <p className="text-[11px] text-muted mt-0.5">
                신혼부부 특별공급은 혼인 7년 이내에만 쓸 수 있습니다. 이 기간 안에 적극적으로 청약에 도전하는 게 좋습니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">
              3
            </span>
            <div>
              <p className="text-[12px] font-bold text-text">LH 전세임대 모집 공고 모니터링</p>
              <p className="text-[11px] text-muted mt-0.5">
                상시 공고가 아니므로 LH 청약센터 알림 설정을 해두는 게 편합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">
              4
            </span>
            <div>
              <p className="text-[12px] font-bold text-text">출산 계획 있다면 — 출산 축하금 사전 확인</p>
              <p className="text-[11px] text-muted mt-0.5">
                거주 지역의 출산 지원 금액을 미리 파악해두면 계획 세우는 데 도움이 됩니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">
              5
            </span>
            <div>
              <p className="text-[12px] font-bold text-text">출산 후 — 축하금·육아휴직 즉시 신청</p>
              <p className="text-[11px] text-muted mt-0.5">
                출생신고와 동시에 출산 축하금 신청 가능. 육아휴직 급여는 고용24에서 휴직 시작 후 신청.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 주의사항 */}
      <Card>
        <h2 className="text-base font-bold mb-3">꼭 알아둬야 할 주의사항</h2>
        <div className="space-y-3">
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-[12px] font-bold text-text mb-1">혼인신고 시점이 기준점</p>
            <p className="text-[12px] text-muted leading-relaxed">
              거의 모든 신혼부부 정책은 &lsquo;혼인신고일&rsquo;부터 기간을 카운트합니다.
              결혼식은 먼저 올리고 혼인신고를 늦게 하는 경우, 혼인신고일을 기준으로 7년이 적용되므로
              너무 늦추는 것은 불리할 수 있습니다.
            </p>
          </div>
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-[12px] font-bold text-text mb-1">소득은 부부 합산으로 판단</p>
            <p className="text-[12px] text-muted leading-relaxed">
              전세대출, 청약 특별공급 모두 본인 소득만이 아닌 배우자 소득을 합산해서 판단합니다.
              맞벌이이면 합산 소득이 기준을 초과하는 경우가 생길 수 있으니 미리 계산해보는 게 좋습니다.
            </p>
          </div>
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-[12px] font-bold text-text mb-1">무주택 세대구성원 조건</p>
            <p className="text-[12px] text-muted leading-relaxed">
              배우자가 주택을 보유하고 있거나, 배우자의 세대원 중 주택 소유자가 있으면 무주택 요건에서
              탈락할 수 있습니다. 결혼 전 양쪽 가족의 주택 보유 여부를 먼저 확인하는 것이 좋습니다.
            </p>
          </div>
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-[12px] font-bold text-text mb-1">지자체 정책은 별도로 확인</p>
            <p className="text-[12px] text-muted leading-relaxed">
              출산 축하금, 신혼부부 임차보증금 이자 지원 등 지자체별 추가 혜택이 있습니다.
              서울, 경기도 등 각 지자체 공식 사이트에서 추가 지원을 꼭 확인해보세요.
            </p>
          </div>
        </div>
      </Card>

      {/* 관련 계산기 및 링크 */}
      <div className="mt-3 space-y-2">
        <p className="text-[12px] font-bold text-muted px-1">관련 가이드 및 계산기</p>
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">청년 주거정책 가이드 — 전세임대·월세 지원 총정리</span>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">청년 금융 정책 가이드 — 도약계좌 vs 미래적금 비교</span>
        </Link>
        <a
          href="https://moduncalc.com/realestate/jeonse-vs-wolse"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">전세 vs 월세 비교 계산기 (moduncalc.com)</span>
        </a>
        <a
          href="https://hf.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">주택도시기금 기금e든든 — 버팀목 전세대출 신청</span>
        </a>
        <a
          href="https://apply.lh.or.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">LH 청약센터 — 신혼부부 전세임대·신혼희망타운 공고</span>
        </a>
      </div>

      {/* 면책 고지 */}
      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 가이드는 공식 정책 정보를 바탕으로 정리한 참고 자료입니다. 정책 조건은 연도·지자체·소득 기준에
        따라 달라질 수 있으므로, 신청 전 반드시 각 정책의 공식 사이트에서 최신 공고를 확인하세요.
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
        {' '}·{' '}
        <a
          href="https://hf.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          주택도시기금
        </a>
        {' '}·{' '}
        <a
          href="https://apply.lh.or.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          LH 청약센터
        </a>
        <br />
        작성자: 김태양 · 2026.08.13
      </div>

      <div className="mt-4">
        <Link
          href="/"
          className="block w-full py-3 bg-primary text-white text-center rounded-[var(--radius)] font-bold text-sm hover:opacity-90 transition-opacity no-underline"
        >
          나에게 맞는 정책 찾기 →
        </Link>
      </div>
    </>
  );
}
