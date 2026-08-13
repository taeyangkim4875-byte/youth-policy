import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년 전세대출 비교 — 버팀목 vs 카카오뱅크 vs 중기청 | 청년정책 매칭',
  description:
    '청년 전세대출 3가지를 비교 정리했습니다. 버팀목 전세대출(1.8~2.7%), 중소기업 청년 전세대출(1.0%), 카카오뱅크 전세대출 — 각 장단점과 나에게 맞는 선택 기준을 알려드립니다.',
  openGraph: {
    title: '청년 전세대출 비교 — 버팀목 vs 카카오뱅크 vs 중기청 | 청년정책 매칭',
    description:
      '버팀목 1.8%, 중기청 1.0%, 카카오뱅크 시중금리 — 내 상황에 맞는 전세대출은 어떤 건지 비교해보세요.',
    url: 'https://youth.moduncalc.com/guide/housing-loan',
  },
};

export default function HousingLoanGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '청년 전세대출 중 가장 금리가 낮은 건 어떤 건가요?',
            a: '중소기업에 재직 중인 청년이라면 중소기업 청년 전세대출(중기청)이 연 1.0%로 가장 낮습니다. 중소기업 재직자가 아닌 경우 청년전용 버팀목 전세대출이 1.8~2.7%로 그 다음으로 낮습니다.',
          },
          {
            q: '버팀목 전세대출 신청 자격이 어떻게 되나요?',
            a: '만 19~34세 무주택 청년으로, 부부합산 연소득 중위소득 150% 이하이고 순자산이 일정 기준 이하여야 합니다. 임차보증금은 수도권 3억 원, 지방 2억 원 이하인 주택이어야 하며 대출 한도는 수도권 1억 5천만 원, 지방 1억 원입니다.',
          },
          {
            q: '전세 계약을 먼저 하고 대출을 알아봐도 되나요?',
            a: '계약 전에 대출 가능 여부를 꼭 먼저 확인하세요. 계약을 먼저 해버리면 대출 조건이 안 맞아도 계약금을 잃을 수 있습니다. 특히 버팀목이나 중기청은 심사 기간이 2~3주 걸리므로 잔금일을 여유 있게 잡아야 합니다.',
          },
        ]}
      />

      <Link
        href="/"
        className="text-sm text-primary no-underline hover:underline mb-4 inline-block"
      >
        ← 홈으로
      </Link>

      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        전세대출, 어디서 받는 게 유리할까?
      </h1>
      <p className="text-[13px] text-muted mb-5">
        전세대출 알아보면서 정리한 내용 · 김태양 · 2026년 8월 기준
      </p>

      {/* 도입부 */}
      <Card>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          전세 계약을 앞두고 대출을 알아보다 보면 선택지가 생각보다 많아서 처음엔 꽤
          헷갈렸습니다. 같은 청년이라도 취업 상태, 소득, 필요 한도에 따라 유리한
          상품이 전혀 다르거든요.
        </p>
        <p className="text-[12px] text-text leading-relaxed">
          정부 지원 상품은 금리가 낮은 대신 한도와 자격 제한이 있고, 시중은행은
          자격이 넉넉한 대신 금리가 높습니다. 이 글에서는 청년들이 많이 쓰는
          전세대출 3가지를 조건별로 비교하고, 내 상황에 맞는 걸 고를 수 있도록
          정리했습니다.
        </p>
      </Card>

      {/* 비교표 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">3가지 전세대출 한눈에 비교</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-2 text-muted font-bold w-[28%]">항목</th>
                <th className="text-left py-2 px-2 font-bold text-text w-[24%]">버팀목</th>
                <th className="text-left py-2 px-2 font-bold text-primary w-[24%]">중기청</th>
                <th className="text-left py-2 pl-2 font-bold text-text w-[24%]">카카오뱅크</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">금리</td>
                <td className="py-2.5 px-2 font-semibold">1.8~2.7%</td>
                <td className="py-2.5 px-2 font-extrabold text-primary">연 1.0%</td>
                <td className="py-2.5 pl-2">3.5~4.5%</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">한도</td>
                <td className="py-2.5 px-2">수도권 1.5억<br />지방 1억</td>
                <td className="py-2.5 px-2 font-semibold">1억</td>
                <td className="py-2.5 pl-2 font-semibold">최대 5억</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">연령</td>
                <td className="py-2.5 px-2">만 19~34세</td>
                <td className="py-2.5 px-2">만 19~34세<br />(중소기업 재직)</td>
                <td className="py-2.5 pl-2">제한 적음</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">소득 제한</td>
                <td className="py-2.5 px-2">중위소득<br />150% 이하</td>
                <td className="py-2.5 px-2">중소기업<br />재직자</td>
                <td className="py-2.5 pl-2">심사 기준<br />(제한 낮음)</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-2 text-muted">임차보증금</td>
                <td className="py-2.5 px-2">수도권 3억↓<br />지방 2억↓</td>
                <td className="py-2.5 px-2">1억 이하</td>
                <td className="py-2.5 pl-2">제한 없음</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-2 text-muted">신청처</td>
                <td className="py-2.5 px-2">우리·KB 등<br />협약 은행</td>
                <td className="py-2.5 px-2">우리·기업 등<br />협약 은행</td>
                <td className="py-2.5 pl-2">카카오뱅크<br />앱</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-muted mt-2">
          * 금리는 2026년 기준 대략적인 범위이며, 소득·보증기관에 따라 달라질 수 있습니다.
          최신 금리는 주택도시기금 홈페이지(nhuf.molit.go.kr)에서 확인하세요.
        </p>
      </Card>

      {/* 내 상황별 추천 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">나한테 어떤 게 맞을까?</h2>
        <div className="space-y-2.5">
          <div className="bg-primary-bg rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-primary mb-1">소득이 낮은 취준생·저소득 청년</p>
            <p className="text-[12px] text-text leading-relaxed">
              버팀목이 최선입니다. 중위소득 150% 이하라면 1.8~2.7% 금리로 빌릴 수 있는데,
              이건 시중은행 대비 연 1~2%p 이상 낮습니다. 전세금이 수도권 3억 이하,
              지방 2억 이하인 집이라면 꼭 버팀목부터 알아보세요.
            </p>
          </div>
          <div className="bg-primary-bg rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-primary mb-1">중소기업 다니는 직장인</p>
            <p className="text-[12px] text-text leading-relaxed">
              중기청(중소기업 청년 전세대출)이 압도적으로 유리합니다. 연 1.0%는 현재 시장에서
              거의 없는 금리예요. 전세금이 1억 이하라면 반드시 중기청을 1순위로 고려하세요.
              재직 중인 회사가 중소기업인지 확인은 중소벤처기업부 홈페이지에서 할 수 있습니다.
            </p>
          </div>
          <div className="bg-[#f3f5f9] rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-1">소득이 높거나 한도가 부족한 경우</p>
            <p className="text-[12px] text-text leading-relaxed">
              버팀목 한도(수도권 1.5억)로는 턱없이 부족한 서울 고가 전세라면 카카오뱅크나
              시중은행 전세대출로 가야 합니다. 금리가 3~4%대로 높지만 한도가 최대 5억까지
              가능하고 심사도 상대적으로 빠릅니다. 소득이 높아서 정부 지원 자격이 안 되는
              경우도 여기가 현실적입니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 각 상품 상세 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">버팀목 전세대출 — 저소득 청년의 기본</h2>
        <div className="space-y-3 text-[12px] text-text leading-relaxed">
          <p>
            주택도시기금에서 운영하는 정책 대출입니다. 정부가 이자를 보전해주기 때문에
            시중금리보다 훨씬 낮은 1.8~2.7%로 빌릴 수 있습니다. 금리는 소득 구간에 따라
            달라지는데, 소득이 낮을수록 더 낮은 금리를 받습니다.
          </p>
          <div className="bg-amber-bg rounded-lg p-3 text-[11px] text-amber">
            <strong>놓치기 쉬운 조건:</strong> 임차보증금 자체가 수도권 3억, 지방 2억을
            넘으면 아예 신청이 안 됩니다. 이미 더 비싼 집을 계약했다면 버팀목은
            선택지에서 제외됩니다.
          </div>
          <p>
            우리은행, 국민은행, 신한은행 등 협약 은행에서 신청합니다. 신청 전에
            주택도시기금 홈페이지에서 자격 확인과 대출 한도 시뮬레이션을 해볼 수 있습니다.
          </p>
        </div>
      </Card>

      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">중기청 전세대출 — 중소기업 재직자라면 무조건</h2>
        <div className="bg-primary-bg rounded-[var(--radius)] p-3 mb-3 text-center">
          <p className="text-[22px] font-extrabold text-primary">연 1.0%</p>
          <p className="text-[11px] text-muted mt-1">중소기업 재직 청년 전세대출 금리</p>
        </div>
        <div className="space-y-3 text-[12px] text-text leading-relaxed">
          <p>
            중소기업진흥공단에서 운영하는 상품으로, 중소기업에 재직 중인 청년에게만
            적용되는 금리입니다. 연 1.0%는 지금 시중금리(4% 내외) 대비 3%p 이상
            낮은 수준이라, 한도 1억 기준으로 연 이자 차이가 200만~300만 원에 달합니다.
          </p>
          <p>
            다만 한도가 1억이고 전세보증금이 1억 이하인 주택이어야 한다는 게 제약입니다.
            서울·수도권의 웬만한 원룸이나 투룸은 전세금이 1억을 넘기 때문에, 이
            상품으로 전부 커버하기 어려운 경우가 많습니다.
          </p>
          <div className="bg-green-bg rounded-lg p-3 text-[11px] text-text">
            <strong>활용 팁:</strong> 전세금이 1억 5천만 원짜리 집이라면 중기청으로
            1억을 빌리고, 나머지 5천은 자기 자금으로 채우는 방식도 많이 씁니다.
            전부 대출로 해결하려 하지 말고, 중기청 한도를 최대한 쓰고 나머지를
            따로 충당하는 구조를 먼저 생각해보세요.
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">카카오뱅크 전세대출 — 편리하지만 금리는 시중 수준</h2>
        <div className="space-y-3 text-[12px] text-text leading-relaxed">
          <p>
            자격 요건이 복잡하지 않고 앱으로 빠르게 신청할 수 있다는 게 가장 큰 장점입니다.
            한도도 최대 5억까지 가능해서 서울 중고가 전세도 커버됩니다. 급하게 잔금 날짜가
            다가왔을 때 실행 속도 면에서도 상대적으로 빠른 편입니다.
          </p>
          <p>
            단점은 금리입니다. 3.5~4.5%는 버팀목(1.8%)과 비교하면 두 배 이상 차이가
            납니다. 1억을 빌린다면 연 이자로만 170만~270만 원을 더 내는 셈이니,
            정부 지원 자격이 된다면 굳이 카카오뱅크를 선택할 이유가 없습니다.
          </p>
          <div className="bg-amber-bg rounded-lg p-3 text-[11px] text-amber">
            <strong>이런 분께 추천:</strong> 소득이 중위소득 150%를 넘어서 버팀목
            자격이 안 되거나, 전세금이 수도권 3억 초과라 버팀목 대상 주택이 아닌 경우,
            또는 대기업·공기업 재직으로 중기청 자격이 안 되는 경우.
          </div>
        </div>
      </Card>

      {/* 신청 절차 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">전세대출 신청 절차 (공통)</h2>
        <div className="space-y-2">
          {[
            { step: '1', label: '집 계약 전에 대출 가능 여부 확인', desc: '계약금 내기 전에 은행 상담을 받아야 합니다. 이게 제일 중요합니다.' },
            { step: '2', label: '전세 계약서 작성', desc: '확정일자 도장을 받아두세요. 계약금은 보통 보증금의 5~10%.' },
            { step: '3', label: '대출 신청 및 서류 제출', desc: '계약서, 신분증, 소득 증빙서류, 건강보험료 납부 확인서 등.' },
            { step: '4', label: '심사 (2~3주 소요)', desc: '버팀목·중기청은 보증 심사 시간이 걸립니다. 잔금일을 여유 있게 잡으세요.' },
            { step: '5', label: '대출 실행 및 잔금 납부', desc: '대출금이 임대인 계좌로 직접 송금되는 방식이 일반적입니다.' },
          ].map(({ step, label, desc }) => (
            <div key={step} className="flex gap-2.5">
              <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0 mt-0.5">
                {step}
              </span>
              <div>
                <p className="text-[12px] font-semibold text-text">{label}</p>
                <p className="text-[11px] text-muted mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 전세사기 예방 체크리스트 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text">전세사기 예방 체크리스트</h2>
        <p className="text-[11px] text-muted mb-3">
          요즘 전세사기 뉴스가 많아서, 전세 계약 전에 이 체크리스트는 꼭 확인하세요.
        </p>
        <div className="space-y-2">
          {[
            {
              label: '등기부등본 확인',
              desc: '계약 전날과 잔금 당일, 두 번 확인하세요. 근저당, 가압류, 전세권 설정 여부를 봐야 합니다. 대법원 인터넷등기소에서 700원에 뗄 수 있습니다.',
              highlight: true,
            },
            {
              label: '전입신고 + 확정일자',
              desc: '잔금 당일 또는 입주 당일에 바로 처리하세요. 동사무소(주민센터)에서 동시에 처리 가능합니다. 이걸 미루면 대항력이 생기지 않습니다.',
              highlight: true,
            },
            {
              label: '보증보험 가입 (HUG 또는 SGI)',
              desc: '임대인이 보증금을 돌려주지 않을 경우 보증기관이 대신 돌려주는 상품입니다. 보험료는 보증금의 0.1~0.2% 수준이고, 이게 없으면 최악의 경우 보증금을 날릴 수 있습니다.',
              highlight: false,
            },
            {
              label: '건물 공시가격 확인',
              desc: '전세금이 공시가격의 70~80%를 넘으면 위험합니다. 임대인이 경매에 넘어갈 경우 보증금을 못 받을 수 있습니다.',
              highlight: false,
            },
          ].map(({ label, desc, highlight }) => (
            <div
              key={label}
              className={`rounded-lg p-3 ${highlight ? 'bg-primary-bg' : 'bg-[#f3f5f9]'}`}
            >
              <p className={`text-[12px] font-bold mb-1 ${highlight ? 'text-primary' : 'text-text'}`}>
                {label}
              </p>
              <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 흔한 실수 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">전세대출에서 많이 하는 실수</h2>
        <div className="space-y-3">
          <div className="border-l-2 border-amber pl-3">
            <p className="text-[12px] font-semibold text-text mb-1">
              &ldquo;계약 먼저 하고 대출 알아봤는데 안 나와요&rdquo;
            </p>
            <p className="text-[11px] text-muted leading-relaxed">
              전세 계약을 먼저 해버리고 대출을 알아보다가 자격이 안 된다는 걸 뒤늦게 알면
              계약금을 날릴 수 있습니다. 계약서 쓰기 전에 은행에 먼저 가서 대략적인
              가능 여부를 확인하는 게 순서입니다.
            </p>
          </div>
          <div className="border-l-2 border-amber pl-3">
            <p className="text-[12px] font-semibold text-text mb-1">
              &ldquo;보증보험 안 했다가 보증금 날릴 뻔 했어요&rdquo;
            </p>
            <p className="text-[11px] text-muted leading-relaxed">
              HUG 전세보증보험은 선택이 아니라 거의 필수입니다. 보험료가 아깝다고 안
              들었다가 임대인이 잠적하거나 경매로 넘어가면 보증금을 돌려받기가 굉장히
              어렵습니다.
            </p>
          </div>
          <div className="border-l-2 border-line pl-3">
            <p className="text-[12px] font-semibold text-text mb-1">
              &ldquo;잔금일 촉박하게 잡았다가 대출 실행이 안 됐어요&rdquo;
            </p>
            <p className="text-[11px] text-muted leading-relaxed">
              버팀목이나 중기청은 보증 심사까지 포함하면 2~3주는 잡아야 합니다. 잔금일을
              계약일로부터 너무 가깝게 잡으면 대출이 아직 안 났는데 잔금을 치러야 하는
              상황이 생깁니다.
            </p>
          </div>
          <div className="border-l-2 border-line pl-3">
            <p className="text-[12px] font-semibold text-text mb-1">
              &ldquo;전입신고를 며칠 미뤘다가 대항력이 없었어요&rdquo;
            </p>
            <p className="text-[11px] text-muted leading-relaxed">
              잔금 치른 날 당일에 전입신고와 확정일자를 받아야 합니다. 주말이라 미루거나
              귀찮아서 다음 날 했다가 그 사이에 임대인 채무가 생기면 법적 우선순위에서
              밀릴 수 있습니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 전세 vs 월세 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">전세 vs 월세, 어느 쪽이 나을까?</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          단순하게 보면 전세가 무조건 유리할 것 같지만, 요즘엔 꼭 그렇지도 않습니다.
          계산해보면 의외의 결과가 나오는 경우도 있습니다.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-primary-bg rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-primary mb-2">전세가 유리한 경우</p>
            <ul className="text-[11px] text-text space-y-1.5 leading-relaxed">
              <li>목돈이 있고, 이 돈을 투자하기 어려운 경우</li>
              <li>저금리 정부 대출 자격이 되는 경우</li>
              <li>2년 이상 같은 곳에 거주할 계획</li>
              <li>월세 대비 전세 전환율이 낮은 지역</li>
            </ul>
          </div>
          <div className="bg-[#f3f5f9] rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-2">월세가 유리한 경우</p>
            <ul className="text-[11px] text-text space-y-1.5 leading-relaxed">
              <li>목돈을 수익률 높은 곳에 굴릴 수 있는 경우</li>
              <li>1년 이내 이사 계획이 있는 경우</li>
              <li>전세사기 리스크를 피하고 싶은 경우</li>
              <li>월세 지원 정책 자격이 되는 경우</li>
            </ul>
          </div>
        </div>
        <p className="text-[12px] text-text leading-relaxed">
          예를 들어 전세 1억짜리에 카카오뱅크 대출(금리 4%)을 100% 받으면
          연 이자가 400만 원, 월 33만 원입니다. 같은 집의 월세가 50만 원이라면
          전세가 유리하지만, 보증보험 비용·이사 비용까지 더하면 차이가 크지 않을 수
          있습니다. 직접 계산해보는 게 가장 정확합니다.
        </p>
        <div className="mt-3">
          <a
            href="https://moduncalc.com/realestate/jeonse-vs-wolse"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-surface border border-line rounded-[var(--radius)] p-3 text-[12px] text-primary font-semibold no-underline hover:bg-primary-bg transition-colors"
          >
            전세 vs 월세 손익분기 계산기로 직접 비교해보기 →
          </a>
        </div>
      </Card>

      {/* 관련 링크 */}
      <div className="mt-3 space-y-2">
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년 주거정책 가이드 — 월세 200만 원 받은 후기
          </span>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년도약계좌 vs 청년미래적금 비교 — 직접 갈아탄 경험
          </span>
        </Link>
        <a
          href="https://nhuf.molit.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            주택도시기금 공식 홈페이지 — 버팀목 금리 및 자격 확인
          </span>
        </a>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <Link
          href="/"
          className="block w-full py-3 bg-primary text-white text-center rounded-[var(--radius)] font-bold text-[13px] hover:opacity-90 transition-opacity no-underline"
        >
          나에게 맞는 청년 정책 찾기 →
        </Link>
      </div>

      {/* 면책 */}
      <div className="mt-4 p-3 bg-green-bg rounded-[var(--radius)] text-[11px] text-muted leading-relaxed">
        이 글은 전세대출을 직접 알아보며 정리한 내용입니다. 저는 전세대출을 직접 실행한
        경험은 없으며, 공개된 정보를 바탕으로 비교 정리한 것입니다. 금리와 조건은
        시기에 따라 달라지므로, 실제 신청 전에 반드시 각 기관 공식 홈페이지나
        담당 은행에서 최신 조건을 확인하세요.
        <br />
        <span className="mt-1 inline-block">
          출처:{' '}
          <a
            href="https://nhuf.molit.go.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            주택도시기금
          </a>
          {' · '}
          <a
            href="https://www.youthcenter.go.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            온통청년
          </a>
          {' · '}작성자: 김태양
        </span>
      </div>
    </>
  );
}
