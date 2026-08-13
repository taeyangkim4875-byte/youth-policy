import type { Metadata } from 'next';
import Card from '@/components/Card';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '자취 처음 시작하는 청년을 위한 정책 총정리',
  description:
    '전입신고부터 월세 지원, 이사비, K-패스, 청년 전세대출까지. 자취 첫날 바로 써먹을 수 있는 청년정책 신청 순서와 실제 경험을 정리했습니다.',
  openGraph: {
    title: '자취 처음 시작하는 청년을 위한 정책 총정리 | 청년정책 매칭',
    description:
      '전입신고 후 2주 안에 해야 할 것, 월세 지원 200만 원 받은 방법, 이사비 20만 원까지. 자취 초보를 위한 정책 신청 가이드.',
    url: 'https://youth.moduncalc.com/guide/first-independence',
  },
};

export default function FirstIndependencePage() {
  return (
    <>
      <ArticleJsonLd
        title="자취 처음 시작하는 청년을 위한 정책 총정리"
        description="전입신고부터 월세 지원, 이사비, K-패스, 청년 전세대출까지. 자취 첫날 바로 써먹을 수 있는 청년정책 신청 순서와 실제 경험을 정리했습니다."
        url="https://youth.moduncalc.com/guide/first-independence"
        datePublished="2026-08-13"
        dateModified="2026-08-13"
      />
      <FaqJsonLd
        items={[
          {
            q: '자취를 처음 시작할 때 가장 먼저 해야 할 행정 처리는?',
            a: '이사 후 14일 이내에 주민센터에 전입신고를 해야 합니다. 전입신고와 동시에 확정일자도 받아두세요. 이 두 가지가 보증금을 지키는 기본 중의 기본입니다.',
          },
          {
            q: '서울에서 자취하면 월세 지원을 얼마나 받을 수 있나요?',
            a: '서울시 청년 월세 지원은 월 최대 20만 원을 최대 12개월간 지급합니다. 소득 기준(중위소득 150% 이하)과 무주택 요건을 충족하면 신청할 수 있습니다. 직장인이 아닌 취준생도 신청 가능합니다.',
          },
          {
            q: '자취 첫 달에 신청할 수 있는 청년정책이 있나요?',
            a: '전입신고 후 바로 신청할 수 있는 정책이 여러 가지입니다. 서울시 기준으로 월세 지원, 이사비 지원(최대 40만 원), K-패스 교통비 환급을 우선 챙기세요. 전입신고 기준으로 신청 자격이 생기는 경우가 많습니다.',
          },
        ]}
      />

      <Link
        href="/"
        className="text-sm text-primary no-underline hover:underline mb-4 inline-block"
      >
        ← 홈으로
      </Link>

      {/* Hero */}
      <div className="mb-5">
        <p className="text-xs text-primary font-semibold mb-1">자취 입문 가이드</p>
        <h1 className="text-[22px] font-extrabold leading-tight mb-2">
          자취 처음 시작하는 청년을 위한 정책 총정리
        </h1>
        <p className="text-[13px] text-muted">
          작성: 김태양 · 2026.08.13 · 읽는 데 7분
        </p>
      </div>

      {/* 도입 */}
      <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[13px] font-bold mb-1">자취 처음이라 뭐부터 해야 할지 모르겠다면</p>
        <p className="text-[15px] font-extrabold leading-snug">
          전입신고 → 확정일자 → 월세 지원 신청. 이 순서만 기억하세요.
        </p>
        <p className="text-[12px] opacity-80 mt-1">
          저도 처음 자취할 때 이 순서를 몰라서 이사비 지원 신청을 한 달 놓쳤습니다.
        </p>
      </div>

      {/* 들어가며 */}
      <Card>
        <h2 className="text-base font-bold mb-3">들어가며</h2>
        <div className="space-y-3 text-[13px] text-text leading-relaxed">
          <p>
            저는 관악구 서울대입구역 근처에서 처음 자취를 시작했습니다. 대학 졸업 후
            서울에 혼자 살게 됐는데, 처음엔 전입신고가 뭔지도 몰랐고 월세 지원 같은 게
            있다는 것도 까맣게 몰랐습니다.
          </p>
          <p>
            나중에 알고 나서 계산해보니 그냥 모르고 지나친 돈이 꽤 됐어요. 월세 지원만
            해도 200만 원, 이사비 20만 원. 가만히 있었으면 그냥 날린 돈입니다. 그래서
            처음 자취를 시작하는 분들이 저처럼 놓치지 않도록, 신청 순서대로 정리해봤습니다.
          </p>
          <p>
            거창하게 준비하려고 하면 오히려 못 합니다. 일단 이사하고 며칠 안에
            해야 할 것들부터 순서대로 보여드릴게요.
          </p>
        </div>
      </Card>

      {/* 체크리스트 */}
      <Card>
        <h2 className="text-base font-bold mb-3">자취 시작 전 · 직후 체크리스트</h2>
        <p className="text-[12px] text-muted mb-3">이사 당일~2주 이내에 해야 하는 것들입니다.</p>
        <div className="space-y-2">
          {[
            { done: true, text: '전입신고 (이사 후 14일 이내 필수)', sub: '주민센터 또는 정부24 온라인' },
            { done: true, text: '확정일자 받기 (보증금 보호)', sub: '전입신고와 동시에 가능, 600원' },
            { done: true, text: '서울시 월세 지원 신청', sub: '서울주거포털 또는 주민센터' },
            { done: true, text: '이사비 지원 신청 (선착순!)', sub: '서울시 기준 최대 40만 원' },
            { done: false, text: 'K-패스 카드 발급', sub: '대중교통 환급 20~53%' },
            { done: false, text: '공과금 자동이체 설정', sub: '전기·가스·수도·관리비' },
            { done: false, text: '청년미래적금 가입 검토', sub: '월 70만 원, 5년, 정부기여금 최대 월 4만 원' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 bg-[#F7F8FA] rounded-lg">
              <div className={`shrink-0 w-4 h-4 rounded-full mt-0.5 flex items-center justify-center text-[10px] font-bold ${item.done ? 'bg-primary text-white' : 'border-2 border-line bg-white text-muted'}`}>
                {item.done ? '✓' : ''}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-text">{item.text}</p>
                <p className="text-[11px] text-muted">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 정책 목록 */}
      <div className="mb-2">
        <h2 className="text-base font-extrabold text-text">바로 신청할 수 있는 정책</h2>
        <p className="text-[12px] text-muted mt-0.5">신청해야 하는 순서대로 정리했습니다.</p>
      </div>

      {/* 1. 전입신고 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">1</span>
          <h3 className="text-[14px] font-bold text-text">전입신고 — 이사 후 14일 이내 필수</h3>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-3">
          <p className="text-[12px] font-bold text-red-700">14일 넘기면 과태료 최대 5만 원!</p>
          <p className="text-[11px] text-red-600 mt-0.5">이게 진짜 중요합니다. 까먹지 마세요.</p>
        </div>
        <div className="space-y-2 text-[13px] text-text leading-relaxed">
          <p>
            전입신고는 새 주소지로 주민등록을 옮기는 겁니다. 월세 지원, 이사비 지원을
            비롯한 대부분의 청년정책이 <strong>해당 지역에 전입신고된 날짜를 기준</strong>으로
            자격을 판단하기 때문에, 이사하자마자 바로 하는 게 좋습니다.
          </p>
          <p>
            방법은 두 가지입니다. 가까운 주민센터에 직접 가거나,
            정부24(gov.kr)에서 온라인으로 신청할 수 있습니다. 신분증 하나만 있으면 됩니다.
          </p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
          <div className="bg-[#F7F8FA] rounded-lg p-2.5 text-center">
            <p className="font-bold text-text">오프라인</p>
            <p className="text-muted">주민센터 방문<br />신분증 지참</p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2.5 text-center">
            <p className="font-bold text-primary">온라인</p>
            <p className="text-muted">정부24(gov.kr)<br />공동인증서 필요</p>
          </div>
        </div>
      </Card>

      {/* 2. 확정일자 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">2</span>
          <h3 className="text-[14px] font-bold text-text">확정일자 받기 — 보증금을 지키는 방어막</h3>
        </div>
        <div className="space-y-2 text-[13px] text-text leading-relaxed">
          <p>
            전입신고와 세트로 처리해야 합니다. 확정일자는 임대차 계약서에 날짜 도장을
            찍어주는 건데, 이게 있어야 나중에 집이 경매로 넘어가도 보증금을 돌려받을
            우선순위가 생깁니다.
          </p>
          <p>
            주민센터에서 전입신고할 때 &ldquo;확정일자도 같이 주세요&rdquo;라고 하면
            됩니다. 비용은 <strong>600원</strong>입니다. 이 600원이 수백만 원 보증금을
            지켜줍니다.
          </p>
        </div>
        <div className="mt-3 bg-amber-50 rounded-xl p-3 text-[12px]">
          <strong className="text-amber-800">주의:</strong>
          <span className="text-amber-700"> 전입신고와 확정일자는 둘 다 해야 합니다. 하나만 해서는 보증금 보호가 완전하지 않습니다.</span>
        </div>
      </Card>

      {/* 3. 월세 지원 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">3</span>
          <h3 className="text-[14px] font-bold text-text">월세 지원 신청 — 서울시 기준 월 최대 20만 원</h3>
        </div>
        <div className="bg-primary-bg rounded-xl p-4 mb-3">
          <div className="text-[22px] font-extrabold text-primary-d">월 20만 원 × 최대 12개월</div>
          <div className="text-[11px] text-muted mt-1">저는 10개월 수령 → 총 200만 원</div>
        </div>
        <div className="space-y-2 text-[13px] text-text leading-relaxed">
          <p>
            제가 관악구에 살 때 직접 받은 지원입니다. 당시 취업 준비 중이었는데
            직장인이 아니어도 신청할 수 있었습니다. 소득이 낮을수록 오히려 자격이
            더 잘 됩니다.
          </p>
          <p>
            &ldquo;나는 직장인도 아닌데 되겠어?&rdquo; 라고 미리 포기하지 마세요.
            저도 그렇게 생각했다가 친구 말듣고 신청했더니 됐습니다.
          </p>
        </div>
        <div className="mt-3 space-y-1.5 text-[12px]">
          <p className="font-bold text-text mb-1">주요 신청 요건 (서울시 기준)</p>
          {[
            '만 19세 ~ 39세 청년',
            '서울시 거주 + 전입신고 완료',
            '무주택 세대구성원',
            '기준 중위소득 150% 이하 (1인 가구 약 330만 원/월)',
            '보증금 5천만 원 이하, 월세 60만 원 이하 주택',
          ].map((req, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-primary shrink-0 mt-0.5">•</span>
              <span className="text-text">{req}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[12px] text-muted bg-[#F7F8FA] rounded-lg p-2.5">
          <strong>신청 방법:</strong> 서울주거포털(housing.seoul.go.kr) 또는 거주지 주민센터 방문
        </div>
      </Card>

      {/* 4. 이사비 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">4</span>
          <h3 className="text-[14px] font-bold text-text">이사비 지원 — 서울시 20~40만 원 (선착순!)</h3>
        </div>
        <div className="bg-[#FFF3E0] rounded-xl p-4 mb-3">
          <div className="text-[22px] font-extrabold text-[#E65100]">최대 40만 원 지급</div>
          <div className="text-[11px] text-muted mt-1">저는 20만 원 수령 · 선착순이라 시기가 중요</div>
        </div>
        <div className="space-y-2 text-[13px] text-text leading-relaxed">
          <p>
            이사비 20만 원이 별거 아닌 것처럼 들릴 수 있는데, 이사할 때 들어가는
            이삿짐센터 비용, 청소비, 중개수수료를 생각하면 꽤 쏠쏠합니다. 특히
            소형 원룸 이사는 이삿짐센터 비용이 20~30만 원 사이라서 이사비 지원으로
            거의 커버가 됩니다.
          </p>
          <p>
            <strong>선착순입니다.</strong> 신청 기간이 공지되면 가능한 빨리 신청하세요.
            저는 접수 시작 당일 오전에 바로 했습니다. 예산 소진 후 조기 마감되는 경우가
            있습니다.
          </p>
        </div>
        <div className="mt-3 bg-[#FFF3E0] rounded-lg p-2.5 text-[12px] text-[#E65100]">
          <strong>주의:</strong> 이사비 지원은 이사 후에 신청하는 경우가 많으니, 영수증·계약서를 꼭 보관해두세요.
        </div>
      </Card>

      {/* 5. K-패스 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">5</span>
          <h3 className="text-[14px] font-bold text-text">K-패스 교통비 환급 — 최대 53% 돌려받기</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3 text-center text-[12px]">
          <div className="bg-[#F7F8FA] rounded-lg p-2.5">
            <p className="font-bold text-text">일반</p>
            <p className="text-primary font-extrabold text-[16px]">20%</p>
            <p className="text-muted">환급</p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2.5">
            <p className="font-bold text-primary">청년</p>
            <p className="text-primary font-extrabold text-[16px]">30%</p>
            <p className="text-muted">환급</p>
          </div>
          <div className="bg-[#F7F8FA] rounded-lg p-2.5">
            <p className="font-bold text-text">저소득층</p>
            <p className="text-primary font-extrabold text-[16px]">53%</p>
            <p className="text-muted">환급</p>
          </div>
        </div>
        <div className="space-y-2 text-[13px] text-text leading-relaxed">
          <p>
            매달 지하철·버스를 15회 이상 타면 교통비 일부를 다음 달에 돌려줍니다.
            청년(만 19~34세)이면 30% 환급입니다. 별도 카드를 만들어서 교통비를
            결제하면 알아서 계산됩니다.
          </p>
          <p>
            서울에서 자취하면 출퇴근·외출 때 대중교통을 많이 탈 수밖에 없어서,
            K-패스 효과가 꽤 큽니다. 월 교통비 7만 원이면 30% 환급 시 월 2.1만 원,
            연간 25만 원 정도 돌려받습니다.
          </p>
        </div>
        <div className="mt-3 text-[12px] text-muted bg-[#F7F8FA] rounded-lg p-2.5">
          <strong>신청:</strong> K-패스 앱 설치 또는 카드사 K-패스 카드 발급 → 교통비 자동 환급
        </div>
      </Card>

      {/* 6. 전세대출 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">6</span>
          <h3 className="text-[14px] font-bold text-text">청년 전세대출 — 버팀목·청년전용 버팀목</h3>
        </div>
        <div className="space-y-2 text-[13px] text-text leading-relaxed">
          <p>
            월세보다 전세가 장기적으로 이득인 경우가 많지만, 목돈이 없는 청년에겐
            진입 장벽이 높습니다. 그래서 정부가 저금리 전세대출을 지원합니다.
          </p>
        </div>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-2 text-muted font-bold">상품</th>
                <th className="text-left py-2 px-2 font-bold text-text">금리</th>
                <th className="text-left py-2 pl-2 font-bold text-text">한도</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2 pr-2">버팀목 전세대출</td>
                <td className="py-2 px-2 text-primary font-semibold">연 1.5~2.9%</td>
                <td className="py-2 pl-2">최대 8,000만 원</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2 pr-2">청년전용 버팀목</td>
                <td className="py-2 px-2 text-primary font-semibold">연 1.5~2.7%</td>
                <td className="py-2 pl-2">최대 1억 원</td>
              </tr>
              <tr>
                <td className="py-2 pr-2">중소기업 청년</td>
                <td className="py-2 px-2 text-primary font-semibold">연 1.2%</td>
                <td className="py-2 pl-2">최대 1억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-[12px] text-muted">
          * 금리는 소득·보증금 규모에 따라 달라집니다. 주택도시기금(nhuf.go.kr)에서 확인하세요.
        </div>
      </Card>

      {/* 7. 적금 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">7</span>
          <h3 className="text-[14px] font-bold text-text">청년미래적금 가입 — 정부가 돈을 얹어주는 적금</h3>
        </div>
        <div className="bg-primary-bg rounded-xl p-4 mb-3">
          <div className="text-[20px] font-extrabold text-primary-d">월 70만 원 × 5년 = 목돈</div>
          <div className="text-[11px] text-muted mt-1">정부기여금 월 최대 4만 원 + 이자 비과세</div>
        </div>
        <div className="space-y-2 text-[13px] text-text leading-relaxed">
          <p>
            자취 첫 달부터 고민할 게 하나 더 있습니다. 바로 목돈 마련입니다.
            자취 시작하면 지출이 갑자기 늘어나서 &ldquo;적금은 나중에&rdquo; 하기 쉬운데,
            청년미래적금은 늦게 시작할수록 손해입니다.
          </p>
          <p>
            여유 금액이 작아도 됩니다. 월 10만 원부터 시작할 수 있고,
            정부가 기여금을 얹어주니까 일반 적금보다 확실히 유리합니다.
          </p>
        </div>
        <div className="mt-3 text-[12px] text-muted bg-[#F7F8FA] rounded-lg p-2.5">
          <strong>신청:</strong> 시중 은행 앱에서 &ldquo;청년미래적금&rdquo; 검색 후 비대면 가입
        </div>
      </Card>

      {/* 실제 경험 */}
      <Card>
        <h2 className="text-base font-bold mb-3">솔직히 말하면 — 처음 자취할 때 제가 놓친 것들</h2>
        <div className="space-y-4 text-[13px] text-text leading-relaxed">
          <p>
            저는 관악구에서 자취를 시작하면서 전입신고는 그나마 제때 했는데,
            그다음 단계들을 완전히 까먹었습니다. 이사비 지원은 신청 기간을
            그냥 흘려보냈고, 월세 지원은 이사 한 달 뒤에야 존재를 알았습니다.
          </p>
          <div className="bg-red-50 rounded-xl p-3 border-l-4 border-red-300">
            <p className="font-semibold text-red-800 mb-1">제가 놓친 것들</p>
            <ul className="text-red-700 space-y-1 list-disc pl-4 text-[12px]">
              <li>이사비 지원 — 신청 기간을 몰라서 놓침</li>
              <li>K-패스 — 자취 6개월째에야 발급 (그 전 교통비 환급 0원)</li>
              <li>전기세 자동이체 미설정 → 연체 문자 2번 받음</li>
              <li>확정일자는 받았지만 임차권등기는 나중에야 개념을 이해함</li>
            </ul>
          </div>
          <p>
            특히 K-패스는 진짜 아쉬웠습니다. 서울대입구역에서 매일 지하철을 탔는데
            그 6개월치 환급을 못 받은 거잖아요. 월 2만 원이면 6개월에 12만 원입니다.
            별것 아닌 것 같아도 쌓이면 꽤 됩니다.
          </p>
          <p>
            만약 시간을 되돌린다면 이 순서대로 했을 겁니다.
          </p>
          <div className="bg-primary-bg rounded-xl p-3">
            <p className="text-[12px] font-bold text-primary mb-2">이상적인 순서 (이사 당일~1개월)</p>
            <ol className="text-[12px] text-text space-y-1 list-decimal pl-4">
              <li>이사 당일 또는 다음 날: 전입신고 + 확정일자</li>
              <li>이사 3일 이내: 공과금 자동이체 설정</li>
              <li>이사 1주일 이내: 이사비 지원 신청</li>
              <li>이사 2주 이내: 서울시 월세 지원 신청</li>
              <li>이사 1개월 이내: K-패스 카드 발급, 청년미래적금 가입</li>
            </ol>
          </div>
        </div>
      </Card>

      {/* 월별 지출 시뮬레이션 */}
      <Card>
        <h2 className="text-base font-bold mb-1">월별 지출 시뮬레이션</h2>
        <p className="text-[12px] text-muted mb-3">서울 원룸 기준 (관악구·노원구·은평구 수준), 정책 활용 전후 비교</p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-[#F7F8FA] rounded-xl p-3">
            <p className="text-[11px] text-muted font-semibold mb-2">정책 활용 전</p>
            <div className="space-y-1.5 text-[12px] text-text">
              <div className="flex justify-between"><span>월세</span><span className="font-semibold">55만 원</span></div>
              <div className="flex justify-between"><span>교통비</span><span className="font-semibold">7만 원</span></div>
              <div className="flex justify-between"><span>식비</span><span className="font-semibold">30만 원</span></div>
              <div className="flex justify-between"><span>공과금</span><span className="font-semibold">5만 원</span></div>
              <div className="flex justify-between"><span>통신비</span><span className="font-semibold">4만 원</span></div>
              <div className="border-t border-line mt-1 pt-1 flex justify-between font-extrabold">
                <span>합계</span><span>101만 원</span>
              </div>
            </div>
          </div>
          <div className="bg-primary-bg rounded-xl p-3">
            <p className="text-[11px] text-primary font-semibold mb-2">정책 활용 후</p>
            <div className="space-y-1.5 text-[12px] text-text">
              <div className="flex justify-between"><span>월세</span><span className="font-semibold">55만 원</span></div>
              <div className="flex justify-between text-primary"><span>월세 지원</span><span className="font-semibold">-20만 원</span></div>
              <div className="flex justify-between"><span>교통비</span><span className="font-semibold">7만 원</span></div>
              <div className="flex justify-between text-primary"><span>K-패스 환급</span><span className="font-semibold">-2.1만 원</span></div>
              <div className="flex justify-between"><span>식비</span><span className="font-semibold">30만 원</span></div>
              <div className="flex justify-between"><span>공과금</span><span className="font-semibold">5만 원</span></div>
              <div className="flex justify-between"><span>통신비</span><span className="font-semibold">4만 원</span></div>
              <div className="border-t border-primary/20 mt-1 pt-1 flex justify-between font-extrabold text-primary">
                <span>합계</span><span>78.9만 원</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary text-white rounded-xl p-3 text-center">
          <p className="text-[12px] mb-0.5">정책 활용만으로 월</p>
          <p className="text-[22px] font-extrabold">약 22만 원 절약</p>
          <p className="text-[11px] opacity-80">연간 264만 원 · 이사비·적금 기여금 제외 수치</p>
        </div>
        <p className="text-[11px] text-muted mt-2">
          * 실제 금액은 거주지·소득 수준에 따라 다릅니다. 참고 수치입니다.
        </p>
      </Card>

      {/* 유의사항 & FAQ */}
      <Card>
        <h2 className="text-base font-bold mb-3">자주 받는 질문</h2>
        <div className="space-y-3">
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-[13px] font-semibold text-text mb-1">
              &ldquo;취준생인데 월세 지원 받을 수 있나요?&rdquo;
            </p>
            <p className="text-[12px] text-muted">
              네, 됩니다. 저도 직장인이 아닌 취준생 신분으로 받았습니다.
              소득이 없거나 낮으면 오히려 소득 기준을 더 쉽게 충족합니다.
            </p>
          </div>
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-[13px] font-semibold text-text mb-1">
              &ldquo;월세 지원이랑 이사비 지원 동시에 받을 수 있나요?&rdquo;
            </p>
            <p className="text-[12px] text-muted">
              서울시 기준 두 사업이 별개라 중복 수령이 가능했습니다.
              저도 두 가지 모두 받았습니다. 다만 사업 연도마다 규정이 바뀔 수 있으니
              공지를 꼭 확인하세요.
            </p>
          </div>
          <div className="p-3 bg-[#F7F8FA] rounded-xl">
            <p className="text-[13px] font-semibold text-text mb-1">
              &ldquo;원룸 보증금이 높으면 월세 지원을 못 받나요?&rdquo;
            </p>
            <p className="text-[12px] text-muted">
              서울시 기준 보증금 5천만 원 이하, 월세 60만 원 이하 주택이어야 합니다.
              서울 원룸 시세 기준으로 대부분 해당됩니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 관련 가이드 */}
      <div className="mb-2 mt-1">
        <p className="text-[12px] font-bold text-muted">관련 가이드</p>
      </div>
      <div className="space-y-2">
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년 주거정책 상세 후기 — 월세 200만 원, 이사비 20만 원 수령 과정
          </span>
          <p className="text-[11px] text-muted mt-0.5">서류 준비부터 수령까지 상세히 정리</p>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년도약계좌 vs 청년미래적금 — 3년 유지하다 갈아탄 이유
          </span>
          <p className="text-[11px] text-muted mt-0.5">자취 첫 달부터 적금 시작을 권하는 이유</p>
        </Link>
        <Link
          href="/guide/seoul"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            서울 청년정책 총정리 — 지역별 추가 지원 확인
          </span>
          <p className="text-[11px] text-muted mt-0.5">관악구·노원구·은평구 등 자치구별 혜택</p>
        </Link>
      </div>

      {/* 나에게 맞는 정책 CTA */}
      <div className="mt-4">
        <Link
          href="/"
          className="block w-full py-3 bg-primary text-white text-center rounded-[var(--radius)] font-bold text-sm hover:bg-primary-d transition-colors no-underline"
        >
          나에게 맞는 정책 찾기 →
        </Link>
      </div>

      {/* 면책 */}
      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 가이드는 개인 경험을 바탕으로 작성된 참고 정보입니다. 정책의 세부 조건·금액·신청 기간은
        연도 및 지자체에 따라 달라질 수 있으므로, 최종 신청 전 반드시 공식 사이트에서 확인하세요.
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
          href="https://housing.seoul.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          서울주거포털
        </a>
        <br />
        작성자: 김태양 · 관악구 서울대입구 거주, 월세 지원 200만 원·이사비 20만 원 수령
      </div>
    </>
  );
}
