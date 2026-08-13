import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '첫 취업 후 바로 신청해야 할 정책 5가지 | 청년정책 매칭',
  description:
    '첫 월급 받고 뭐부터 해야 할지 모르겠다면? 청년미래적금, 청년내일채움공제, 소득세 감면, 주거지원, K-패스까지 입사 첫 달에 신청할 정책 5가지를 정리했습니다.',
  openGraph: {
    title: '첫 취업 후 바로 신청해야 할 정책 5가지 | 청년정책 매칭',
    description:
      '첫 월급 받고 챙겨야 할 청년 정책 5가지 — 청년미래적금, 내일채움공제, 소득세 감면, 주거지원, K-패스 신청 타임라인',
    url: 'https://youth.moduncalc.com/guide/first-job',
  },
};

export default function FirstJobGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '첫 취업 후 가장 먼저 신청해야 할 청년 정책은 뭔가요?',
            a: '청년미래적금과 청년내일채움공제를 최우선으로 신청하세요. 미래적금은 정부기여금 월 4만 원을 5년간 받을 수 있고, 내일채움공제는 2년 근속 시 1,200만 원 이상 목돈을 마련할 수 있습니다. 둘 다 입사 후 가능한 빨리 신청할수록 유리합니다.',
          },
          {
            q: '수습 기간에도 청년 정책을 신청할 수 있나요?',
            a: '네, 대부분 가능합니다. 청년미래적금은 근로소득만 있으면 신청 가능하고, 청년내일채움공제도 정규직 전환 예정자라면 수습 중에도 신청할 수 있습니다. 단, 중소기업 소득세 감면은 정규직 채용일 기준으로 소급 적용되므로 입사 즉시 신청해두는 게 좋습니다.',
          },
          {
            q: '중소기업 청년 소득세 감면은 어떻게 신청하나요?',
            a: '입사 후 원천징수의무자(회사)를 통해 감면신청서를 제출하면 됩니다. 제출 기한은 사실상 연말정산 전이지만, 빠를수록 그해 급여에서 바로 감면 효과를 볼 수 있습니다. 만약 첫해에 신청을 못 했더라도 경정청구로 5년 이내 소급 환급이 가능합니다.',
          },
        ]}
      />

      <Link
        href="/"
        className="text-sm text-primary no-underline hover:underline mb-4 inline-block"
      >
        ← 홈으로
      </Link>

      <p className="text-[12px] text-primary font-semibold mb-1">취업 · 금융 가이드</p>
      <h1 className="text-[22px] font-extrabold leading-tight mb-1">
        첫 취업 후 바로 신청해야 할 정책 5가지
      </h1>
      <p className="text-[13px] text-muted mb-5">
        작성: 김태양 · 2026년 8월 기준 · 읽는 데 약 7분
      </p>

      {/* 히어로 박스 */}
      <div className="bg-primary text-white rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[13px] font-bold mb-2">첫 월급 받고 뭐부터 해야 해?</p>
        <p className="text-[15px] font-extrabold leading-snug">
          입사 첫 달에 이 5가지만 챙겨도 5년 후 수천만 원이 달라집니다.
        </p>
        <p className="text-[12px] opacity-80 mt-2 leading-relaxed">
          청년 정책은 &ldquo;몰라서&rdquo; 못 받는 경우가 대부분입니다. 신청 기한이 정해진 것들도 있어서
          취업 직후 한 번만 제대로 정리해두면 나중에 후회할 일이 없습니다.
        </p>
      </div>

      {/* 체크리스트 요약 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">한눈에 보는 신청 체크리스트</h2>
        <div className="space-y-2">
          {[
            { label: '청년미래적금 가입', tag: '월 +4만 원 기여금', color: 'text-primary' },
            { label: '청년내일채움공제 신청', tag: '2년 후 +1,200만 원', color: 'text-primary' },
            { label: '중소기업 소득세 감면 신청', tag: '5년간 세금 90% 면제', color: 'text-green' },
            { label: '주거 정책 확인 (월세·전세)', tag: '월 최대 20만 원 지원', color: 'text-amber' },
            { label: 'K-패스 카드 발급', tag: '교통비 최대 53% 환급', color: 'text-text' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-primary-bg rounded-lg px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary text-white text-[11px] font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-[12px] font-semibold text-text">{item.label}</span>
              </div>
              <span className={`text-[11px] font-bold ${item.color}`}>{item.tag}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* 정책 1: 청년미래적금 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold">
            1
          </span>
          청년미래적금 가입
        </h2>
        <p className="text-[11px] text-muted mb-3">신청 시기: 입사 첫 달 · 중소기업 근무자 필수</p>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-primary-bg rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted mb-0.5">월 납입 한도</p>
            <p className="text-[14px] font-extrabold text-primary">50만 원</p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted mb-0.5">정부 기여금</p>
            <p className="text-[14px] font-extrabold text-primary">월 4만 원</p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted mb-0.5">5년 만기 예상</p>
            <p className="text-[14px] font-extrabold text-primary">약 5,300만</p>
          </div>
        </div>

        <div className="text-[12px] text-text space-y-2 leading-relaxed">
          <p>
            월 50만 원 납입하면 정부에서 월 4만 원을 얹어줍니다. 5년 동안 받는 기여금만
            <strong> 240만 원</strong>이고, 거기다 비과세 이자까지 붙으니까 일반 적금이랑
            비교가 안 됩니다.
          </p>
          <p>
            저는 취업 전에 도약계좌를 쓰다가 취업하고 나서 미래적금으로 갈아탔는데,
            기여금 차이가 월 1만 5천 원 넘게 나더라고요. 5년이면 90만 원 차이입니다.
            새로 시작한다면 고민할 것도 없이 미래적금이에요.
          </p>
        </div>

        <div className="mt-3 bg-green-bg rounded-lg p-3 text-[12px] text-green leading-relaxed">
          <strong>신청 조건:</strong> 만 19~34세, 개인소득 7,500만 원 이하, 근로·사업소득자.
          시중은행 앱에서 &ldquo;청년미래적금&rdquo; 검색하면 바로 비대면 가입됩니다.
        </div>
      </Card>

      {/* 정책 2: 청년내일채움공제 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold">
            2
          </span>
          청년내일채움공제
        </h2>
        <p className="text-[11px] text-muted mb-3">신청 시기: 입사 6개월 이내 · 중소·중견기업 해당</p>

        <div className="overflow-x-auto mb-3">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-3 text-muted font-bold">납입 주체</th>
                <th className="text-left py-2 text-muted font-bold">2년간 적립</th>
                <th className="text-left py-2 pl-3 font-bold text-primary">만기 수령</th>
              </tr>
            </thead>
            <tbody className="text-text">
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-3">청년 (본인)</td>
                <td className="py-2.5">월 12.5만 × 24 = 300만</td>
                <td className="py-2.5 pl-3 font-semibold text-primary">—</td>
              </tr>
              <tr className="border-b border-line2">
                <td className="py-2.5 pr-3">기업</td>
                <td className="py-2.5">월 20만 × 24 = 480만</td>
                <td className="py-2.5 pl-3 font-semibold text-primary">—</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-3">정부</td>
                <td className="py-2.5">2년간 420만</td>
                <td className="py-2.5 pl-3 font-semibold text-primary">합계 약 1,200만+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-[12px] text-text space-y-2 leading-relaxed">
          <p>
            2년을 버티면 1,200만 원이 생깁니다. 내가 내는 돈은 월 12만 5천 원인데,
            회사와 정부가 나머지를 채워줘요. 중소기업에 다니면서 이걸 안 신청하는 건
            진짜 손해입니다.
          </p>
          <p>
            신청은 워크넷(www.work.go.kr)에서 하는데, 입사 후 <strong>6개월 이내</strong>에 해야 합니다.
            이 기한 넘기는 분들이 생각보다 많아요. 달력에 바로 표시해두세요.
          </p>
        </div>

        <div className="mt-3 bg-amber-bg rounded-lg p-3 text-[12px] text-amber leading-relaxed">
          <strong>주의:</strong> 2년 안에 퇴사하면 본인이 낸 금액만 돌려받습니다.
          이직 계획이 확실하다면 다음 직장에서 다시 신청하는 것도 방법입니다.
        </div>
      </Card>

      {/* 정책 3: 소득세 감면 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold">
            3
          </span>
          중소기업 청년 소득세 감면
        </h2>
        <p className="text-[11px] text-muted mb-3">신청 시기: 입사 직후 · 연말정산 때 큰 차이</p>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-green-bg rounded-lg p-3 text-center">
            <p className="text-[10px] text-muted mb-0.5">감면율</p>
            <p className="text-[20px] font-extrabold text-green">90%</p>
            <p className="text-[10px] text-muted">소득세 5년간</p>
          </div>
          <div className="bg-green-bg rounded-lg p-3 text-center">
            <p className="text-[10px] text-muted mb-0.5">연간 절세 효과</p>
            <p className="text-[20px] font-extrabold text-green">수십만 원</p>
            <p className="text-[10px] text-muted">연봉 따라 다름</p>
          </div>
        </div>

        <div className="text-[12px] text-text space-y-2 leading-relaxed">
          <p>
            중소기업에 다닌다면 입사 후 5년간 소득세의 90%를 안 내도 됩니다.
            연봉 3,000만 원 기준으로 연간 세금이 약 100만 원 이상 줄어드는 효과입니다.
            5년이면 최소 500만 원 넘게 차이 납니다.
          </p>
          <p>
            신청 방법은 간단해요. 회사 HR 담당자한테 &ldquo;중소기업 취업청년 소득세 감면 신청서&rdquo;를
            제출하면 됩니다. 양식은 국세청 홈택스에서 내려받을 수 있어요.
          </p>
        </div>

        <div className="mt-3 bg-green-bg rounded-lg p-3 text-[12px] text-green leading-relaxed">
          <strong>대상:</strong> 만 15~34세, 중소기업 취업자, 상시근로자 수 무관.
          군 복무 기간은 나이 계산에서 빠집니다(최대 6년 추가).
        </div>
      </Card>

      {/* 정책 4: 주거 정책 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold">
            4
          </span>
          주거 정책 확인 (월세 지원 · 전세대출)
        </h2>
        <p className="text-[11px] text-muted mb-3">신청 시기: 입사 후 3개월 이내 · 지역별 상이</p>

        <div className="space-y-2 mb-3">
          <div className="bg-surface border border-line2 rounded-lg p-3">
            <p className="text-[12px] font-bold text-text mb-1">청년 월세 지원</p>
            <p className="text-[12px] text-muted leading-relaxed">
              월 최대 20만 원 × 최대 12개월. 서울은 서울주거포털, 타 지역은 복지로에서 신청.
              소득 기준 충족하면 직장인도 받을 수 있습니다.
            </p>
          </div>
          <div className="bg-surface border border-line2 rounded-lg p-3">
            <p className="text-[12px] font-bold text-text mb-1">청년 전세대출 (버팀목·중기청)</p>
            <p className="text-[12px] text-muted leading-relaxed">
              중소기업 취업청년 전세대출은 금리 1.2%로 최대 1억 원까지 가능.
              취업 후 소득이 생기면 대출 자격이 오히려 넓어집니다.
            </p>
          </div>
        </div>

        <div className="text-[12px] text-text leading-relaxed">
          취업 직후에는 독립을 많이 하잖아요. 이 시기에 주거 정책을 함께 챙기면
          월세 부담을 꽤 줄일 수 있습니다. 저는 관악구 월세를 지원받으면서
          그 돈을 적금으로 돌렸어요.
        </div>
      </Card>

      {/* 정책 5: K-패스 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-text flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold">
            5
          </span>
          K-패스 교통카드 발급
        </h2>
        <p className="text-[11px] text-muted mb-3">신청 시기: 입사 첫 주 · 5분이면 발급 완료</p>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-primary-bg rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted mb-0.5">일반 환급률</p>
            <p className="text-[14px] font-extrabold text-primary">20%</p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted mb-0.5">청년 환급률</p>
            <p className="text-[14px] font-extrabold text-primary">30%</p>
          </div>
          <div className="bg-primary-bg rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted mb-0.5">저소득 환급률</p>
            <p className="text-[14px] font-extrabold text-primary">53%</p>
          </div>
        </div>

        <div className="text-[12px] text-text space-y-2 leading-relaxed">
          <p>
            출퇴근에 대중교통을 월 21회 이상 이용하면 교통비의 30%를 돌려받습니다.
            한 달 교통비가 6만 원이면 1만 8천 원 환급. 1년이면 20만 원 넘게 절약됩니다.
          </p>
          <p>
            기존 알뜰교통카드를 쓰고 있었다면 K-패스로 전환하면 돼요. 앱에서 바로 신청 가능하고,
            기존 카드 그대로 사용할 수 있는 경우도 많습니다.
          </p>
        </div>
      </Card>

      {/* 첫 월급 배분 시뮬레이션 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">
          실수령 230만 원일 때 배분 추천
        </h2>
        <p className="text-[12px] text-muted mb-3">연봉 3,000만 원 초반, 중소기업 기준 대략적인 예시입니다.</p>

        <div className="space-y-2 mb-3">
          {[
            { label: '청년미래적금', amount: '50만 원', note: '정부기여금 4만 원 추가', color: 'bg-primary-bg text-primary' },
            { label: '월세 (또는 전세대출 상환)', amount: '50만 원', note: '월세 지원 받으면 실부담 30만↓', color: 'bg-amber-bg text-amber' },
            { label: '내일채움공제 납입', amount: '12.5만 원', note: '회사 + 정부가 2배 넣어줌', color: 'bg-green-bg text-green' },
            { label: '생활비 (식비·통신·여가)', amount: '100만 원', note: 'K-패스로 교통비 절약 가능', color: 'bg-surface border border-line2 text-text' },
            { label: '비상금 통장', amount: '17.5만 원', note: '3~6개월치 생활비 목표', color: 'bg-surface border border-line2 text-text' },
          ].map((item, i) => (
            <div key={i} className={`rounded-lg p-3 ${item.color}`}>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold">{item.label}</span>
                <span className="text-[13px] font-extrabold">{item.amount}</span>
              </div>
              <p className="text-[11px] opacity-70 mt-0.5">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-bg rounded-lg p-3 text-[12px] text-primary font-semibold text-center">
          정책 혜택 포함 시 실질 저축률 약 40% — 일반 직장인 평균(20%)의 2배
        </div>
      </Card>

      {/* 연말정산 준비 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">연말정산, 첫해부터 챙겨야 하는 이유</h2>

        <div className="text-[12px] text-text space-y-3 leading-relaxed">
          <p>
            첫 직장은 연말정산 자체가 생소해서 그냥 회사가 처리해주겠거니 하고 넘기는 분들이
            많습니다. 그런데 직접 챙기지 않으면 돌려받을 수 있는 세금을 그냥 나라에 헌납하는 거예요.
          </p>

          <div className="space-y-2">
            <p className="font-bold text-text">첫해에 꼭 챙겨야 할 것들</p>
            {[
              { title: '중소기업 소득세 감면 신청서', desc: '미리 제출하면 매달 원천징수부터 줄어듭니다. 늦으면 연말정산에서 한 번에 환급.' },
              { title: '월세 세액공제', desc: '월세 계약서 + 이체 내역만 있으면 됩니다. 연 750만 원 한도로 15~17% 세액공제.' },
              { title: '청년미래적금 소득공제', desc: '납입금액의 40%까지 공제됩니다. 50만 원 납입 시 연간 240만 원 공제 효과.' },
              { title: '대중교통·신용카드 공제', desc: 'K-패스 이용 내역도 대중교통 공제로 잡힙니다. 총급여 25% 초과분부터 적용.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-text">{item.title}</p>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 bg-amber-bg rounded-lg p-3 text-[12px] text-amber leading-relaxed">
          <strong>중요:</strong> 월세 세액공제는 당해연도 연말정산에서만 신청 가능합니다.
          5년 이내 경정청구가 가능하긴 하지만 번거로우니 그해에 바로 챙기세요.
        </div>
      </Card>

      {/* 신청 타임라인 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">신청 순서 & 타임라인</h2>

        <div className="space-y-3">
          <div>
            <p className="text-[12px] font-bold text-primary mb-2">입사 첫 주 (D+1~7)</p>
            <div className="space-y-1.5 pl-3 border-l-2 border-primary-bg">
              <p className="text-[12px] text-text">K-패스 카드 발급 (앱으로 5분)</p>
              <p className="text-[12px] text-text">중소기업 소득세 감면 신청서 HR 제출</p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-green mb-2">입사 첫 달 (D+8~30)</p>
            <div className="space-y-1.5 pl-3 border-l-2 border-green-bg">
              <p className="text-[12px] text-text">청년미래적금 가입 + 급여일 다음 날 자동이체 설정</p>
              <p className="text-[12px] text-text">지역 월세 지원 신청 (복지로 or 서울주거포털)</p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-amber mb-2">입사 3개월 이내 (D+31~90)</p>
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-bg">
              <p className="text-[12px] text-text">청년내일채움공제 신청 (워크넷 필수 — 6개월 이내)</p>
              <p className="text-[12px] text-text">청년 전세대출 조건 확인 (이직·이사 계획 있을 때)</p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-muted mb-2">연말 (12월~1월)</p>
            <div className="space-y-1.5 pl-3 border-l-2 border-line">
              <p className="text-[12px] text-text">연말정산 — 월세 세액공제, 적금 공제 서류 준비</p>
              <p className="text-[12px] text-text">놓친 감면 항목 경정청구 여부 확인</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 흔한 실수 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">흔한 실수들</h2>

        <div className="space-y-2">
          {[
            {
              mistake: '"수습 기간에는 안 되는 줄 알았어요"',
              fix: '대부분 수습 기간에도 신청 가능합니다. 특히 소득세 감면은 수습 포함 채용일부터 적용됩니다.',
            },
            {
              mistake: '"어차피 연말정산 때 하면 되겠지"',
              fix: '소득세 감면을 미리 안 내면 매달 세금이 더 빠집니다. 첫 달 급여부터 차이가 납니다.',
            },
            {
              mistake: '"내일채움공제 나중에 신청해야지"',
              fix: '6개월 지나면 신청 자격이 사라집니다. 달력에 입사일 +5개월로 알림을 맞춰두세요.',
            },
            {
              mistake: '"적금은 목돈 생기면 시작해야지"',
              fix: '정부기여금은 납입 기간에 비례합니다. 10만 원이라도 빨리 시작하는 게 낫습니다.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-surface border border-line2 rounded-lg p-3">
              <p className="text-[12px] font-bold text-amber mb-1">{item.mistake}</p>
              <p className="text-[12px] text-text leading-relaxed">{item.fix}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 경험담 박스 */}
      <div className="bg-green-bg rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[12px] font-bold text-green mb-2">작성자 경험담</p>
        <p className="text-[12px] text-text leading-relaxed">
          저는 취업하고 나서 도약계좌에서 미래적금으로 갈아탔는데, 당시에는 갈아타기가 가능했습니다.
          월 기여금이 2.5만 원에서 4만 원으로 올랐고, 5년 계산해보니 90만 원 차이였습니다.
          다만 <strong>갈아타기는 2026년 8월 6일부로 종료</strong>되어 지금은 더 이상 불가능합니다.
          지금 도약계좌를 쓰고 있다면 갈아타기 대신 도약계좌를 유지하거나, 별도로 미래적금에 새로 가입하는 방식을 선택해야 합니다.
          소득세 감면은 첫 달에 신청서 냈더니 그달부터 원천징수액이 확 줄어서 월급이
          더 들어온 것처럼 느껴졌고요. 내일채움공제는 입사 4개월 차에 신청했는데
          &ldquo;왜 이걸 이제야 알았지&rdquo; 싶었습니다.
          아는 만큼 챙기는 게 재테크의 시작이더라고요.
        </p>
      </div>

      {/* 관련 링크 */}
      <div className="mt-3 space-y-2">
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년도약계좌 vs 청년미래적금, 뭐가 더 유리할까?
          </span>
          <p className="text-[11px] text-muted mt-0.5">갈아탄 실제 경험과 수익률 비교</p>
        </Link>
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년 주거정책 가이드 — 월세 200만 원 받은 후기
          </span>
          <p className="text-[11px] text-muted mt-0.5">서울시 월세 지원 신청 팁과 실수령 경험</p>
        </Link>
        <a
          href="https://moduncalc.com/savings"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            적금 이자 계산기로 미래적금 수익 직접 계산해보기
          </span>
          <p className="text-[11px] text-muted mt-0.5">moduncalc.com</p>
        </a>
      </div>

      {/* 면책 */}
      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 내용은 2026년 8월 기준 공개된 정책 정보를 바탕으로 작성되었습니다.
        정책 조건은 연도별로 변경될 수 있으니 신청 전 공식 사이트(youthcenter.go.kr, work.go.kr)에서
        최신 내용을 반드시 확인하세요.
        <br />
        작성자: 김태양 · 청년미래적금 가입, 내일채움공제, 중소기업 소득세 감면 실제 신청 경험
      </div>
    </>
  );
}
