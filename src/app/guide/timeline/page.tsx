import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026 하반기 청년 정책 캘린더 — 월별 신청 일정 총정리',
  description:
    '2026년 하반기(7월~12월) 청년 정책 신청 일정을 월별로 정리했습니다. 청년도약계좌, 서울시 월세 지원, 경기도 청년 기본소득, LH 행복주택 등 놓치면 아까운 정책 캘린더입니다.',
  openGraph: {
    title: '2026 하반기 청년 정책 캘린더 | 청년정책 매칭',
    description:
      '7월~12월 월별 청년 정책 신청 일정 총정리. 마감 임박 정책과 상시 신청 가능 정책까지 한눈에.',
    url: 'https://youth.moduncalc.com/guide/timeline',
  },
};

export default function TimelineGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '2026년 하반기에 꼭 신청해야 할 청년 정책은 무엇인가요?',
            a: '청년도약계좌(수시 모집), 서울시 청년월세 지원 3차(8~9월 예정), 경기도 청년 기본소득 3분기(9월), LH 행복주택 하반기 공고(9~10월)가 핵심입니다. 상시 신청 가능한 국민취업지원제도와 K-패스도 아직 안 하셨다면 바로 신청하세요.',
          },
          {
            q: '청년 정책 마감일을 놓치지 않으려면 어떻게 하나요?',
            a: '온통청년 앱에서 알림을 설정하거나, 거주 지자체 카카오톡 채널을 구독하면 모집 공고를 빠르게 받아볼 수 있습니다. 중요한 정책은 스마트폰 캘린더에 모집 예정일을 미리 등록해두는 것도 좋습니다.',
          },
        ]}
      />

      <div className="mb-6">
        <Link
          href="/"
          className="text-[12px] text-primary no-underline hover:underline mb-3 inline-block"
        >
          ← 홈으로
        </Link>
        <p className="text-[12px] text-primary font-semibold mb-1">정책 캘린더</p>
        <h1 className="text-[22px] font-extrabold leading-tight mb-2">
          이번 달에 뭐 신청해야 해?<br />
          2026 하반기 청년 정책 캘린더
        </h1>
        <p className="text-[13px] text-muted">
          2026.08.13 기준 · 7월~12월 월별 정책 일정 총정리
        </p>
      </div>

      <Card>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          청년 정책은 신청 기간을 놓치면 반년, 심하면 1년을 기다려야 합니다.
          &ldquo;이런 게 있는 줄 몰랐어&rdquo;가 가장 흔한 후회 1위인데, 사실
          아는 것만큼 중요한 건 <strong>언제 신청해야 하는지</strong> 아는 겁니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed">
          아래에 2026년 하반기 7월부터 12월까지 월별로 챙겨야 할 정책을 정리했습니다.
          정확한 날짜는 지자체나 사업 주체마다 조금씩 다를 수 있으니,
          공식 공고가 나오면 반드시 한 번 더 확인하세요.
        </p>
      </Card>

      {/* 7월 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-primary">7월 — 하반기 시작, 수시 접수 챙기기</h2>
        <p className="text-[11px] text-muted mb-3">모집 기간: 수시 또는 7~8월 예정</p>

        <div className="space-y-3">
          <div>
            <p className="text-[12px] font-bold text-text mb-1">청년도약계좌 하반기 모집</p>
            <p className="text-[12px] text-text leading-relaxed mb-2">
              청년도약계좌는 매달 은행 앱이나 서민금융진흥원 홈페이지에서 상시에 가깝게 신청을 받습니다.
              하반기 들어 신청 여건이 바뀐 게 있는지 다시 한번 확인해볼 타이밍입니다.
              특히 올해 소득이 낮아졌거나 직장이 바뀐 경우, 자격 조건이 새로 맞는 경우도 있습니다.
            </p>
            <div className="bg-amber-bg rounded-[var(--radius)] p-3">
              <p className="text-[11px] text-amber font-semibold">마감 주의</p>
              <p className="text-[11px] text-text mt-1">
                월별 신청 마감일은 각 은행 공고 기준이므로 앱 알림을 켜두는 게 안전합니다.
                한 달 놓치면 다음 달에 재신청 가능하지만, 납입 기간이 그만큼 줄어듭니다.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-text mb-1">서울시 청년 이사비 지원 2차 모집</p>
            <p className="text-[12px] text-text leading-relaxed">
              서울시 청년 이사비는 보통 7~8월 사이에 2차 모집이 열립니다. 1차가 상반기에 이미 마감됐다면,
              2차를 노려보세요. 1회 최대 40만 원이며 선착순이라 공고가 뜨는 즉시 신청해야 합니다.
              서울주거포털(housing.seoul.go.kr)에서 공고를 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 8월 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-primary">8월 — 월세 지원 3차, 경쟁률 낮은 타이밍</h2>
        <p className="text-[11px] text-muted mb-3">모집 기간: 8월 중순~9월 초 예상</p>

        <div className="space-y-3">
          <div>
            <p className="text-[12px] font-bold text-text mb-1">서울시 청년월세 지원 3차 모집</p>
            <p className="text-[12px] text-text leading-relaxed mb-2">
              하반기 3차 모집은 상반기 1·2차 대비 경쟁률이 낮은 편입니다. 상반기에 몰렸던 신청자들이
              이미 선발됐기 때문이기도 하고, 8월은 이사 성수기가 아니라 신청자 수가 상대적으로 줄어드는
              시기이기도 합니다. 월 최대 20만 원, 최장 12개월입니다.
            </p>
            <div className="bg-amber-bg rounded-[var(--radius)] p-3">
              <p className="text-[11px] text-amber font-semibold">마감 주의</p>
              <p className="text-[11px] text-text mt-1">
                예산 소진 시 조기 마감됩니다. 공고일에 바로 서류(주민등록등본, 임대차계약서, 건강보험료
                납부확인서)를 준비해두면 당일 신청이 가능합니다.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-text mb-1">국민취업지원제도 상시 접수</p>
            <p className="text-[12px] text-text leading-relaxed">
              구직자라면 8월에도 언제든 신청 가능합니다. 1유형은 구직촉진수당 월 50만 원 × 6개월,
              2유형은 취업활동비 지원입니다. 실업급여와 다르게 이직 경력이 없어도 됩니다.
              고용24(work.go.kr)에서 바로 신청할 수 있습니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 9월 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-primary">9월 — 경기도 기본소득·LH 행복주택 핵심 달</h2>
        <p className="text-[11px] text-muted mb-3">모집 기간: 9월 중 예정</p>

        <div className="space-y-3">
          <div>
            <p className="text-[12px] font-bold text-text mb-1">경기도 청년 기본소득 3분기 신청</p>
            <p className="text-[12px] text-text leading-relaxed mb-2">
              경기도에 거주하는 만 24세 청년이라면 분기마다 25만 원 상당의 지역화폐를 받을 수 있습니다.
              3분기 신청 기간은 보통 9월 초~중순입니다. 경기도 청년포털(youth.gg.go.kr)에서 신청하며,
              신청 후 수령까지는 약 2~4주 소요됩니다.
            </p>
            <div className="bg-green-bg rounded-[var(--radius)] p-3">
              <p className="text-[11px] text-green font-semibold">꿀팁</p>
              <p className="text-[11px] text-text mt-1">
                분기마다 신청을 새로 해야 하는 구조입니다. 1분기에 받았더라도 3분기에 다시 신청해야 합니다.
                깜빡하면 해당 분기 지원금을 아예 못 받으니 캘린더에 꼭 등록해두세요.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-text mb-1">LH 행복주택 하반기 공고</p>
            <p className="text-[12px] text-text leading-relaxed">
              LH 행복주택 하반기 입주자 모집 공고는 보통 9월~10월 사이에 나옵니다. 시세 대비 60~80%
              수준의 임대료로 최장 6년(취업준비생·청년)까지 거주할 수 있어 주거비 절감 효과가 큽니다.
              LH청약센터(apply.lh.or.kr)에서 공고를 확인하세요. 단지별·면적별로 경쟁률 차이가 크니
              여러 단지를 동시에 지원하는 전략이 유리합니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 10월 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-primary">10월 — 연말 준비 시작, 대출은 지금</h2>
        <p className="text-[11px] text-muted mb-3">연간 계획 점검 시기</p>

        <div className="space-y-3">
          <div>
            <p className="text-[12px] font-bold text-text mb-1">연말정산 대비 소득공제 항목 점검</p>
            <p className="text-[12px] text-text leading-relaxed mb-2">
              연말정산은 1월에 하지만, 실질적인 준비는 10월부터 시작해야 합니다. 청년 관련 공제 항목인
              청년형 장기집합투자증권저축, 중소기업 취업자 소득세 감면, 월세 세액공제 등이 올해 안에
              가입·납입이 완료돼야 내년 연말정산에 반영됩니다.
            </p>
            <div className="bg-amber-bg rounded-[var(--radius)] p-3">
              <p className="text-[11px] text-amber font-semibold">마감 주의</p>
              <p className="text-[11px] text-text mt-1">
                청년형 장기집합투자증권저축은 연간 납입 한도가 있습니다. 12월 31일이 실질적 마감이므로
                10월 안에 납입 계획을 세워두는 게 좋습니다.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-text mb-1">청년 전세대출 — 연말 전 신청 권장</p>
            <p className="text-[12px] text-text leading-relaxed">
              전세 수요는 12월~2월 이사 시즌에 몰립니다. 청년 버팀목 전세대출이나 청년 전용 보증부 월세
              대출을 고려하고 있다면, 10월 안에 은행 상담을 받아두는 게 유리합니다. 연말에는 대출 한도
              소진이나 심사 지연이 발생하는 경우가 있기 때문입니다. 주택도시기금 홈페이지(nhuf.molit.go.kr)에서
              상품을 먼저 확인하세요.
            </p>
          </div>
        </div>
      </Card>

      {/* 11월 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-primary">11월 — 청약통장·건강보험 정산 확인</h2>
        <p className="text-[11px] text-muted mb-3">연말 마감 항목 점검 시기</p>

        <div className="space-y-3">
          <div>
            <p className="text-[12px] font-bold text-text mb-1">내년도 청약통장 납입 계획 확인</p>
            <p className="text-[12px] text-text leading-relaxed mb-2">
              청약통장(주택청약종합저축)은 연간 납입 인정 금액이 월 25만 원, 연 300만 원 한도입니다.
              소득공제를 최대로 받으려면 12월 31일 이전에 연간 한도를 맞춰야 합니다. 11월에
              올해 납입 누계를 확인하고, 모자란 금액이 있으면 12월에 채우는 게 좋습니다.
            </p>
            <div className="bg-green-bg rounded-[var(--radius)] p-3">
              <p className="text-[11px] text-green font-semibold">참고</p>
              <p className="text-[11px] text-text mt-1">
                연봉 7,000만 원 이하 무주택 세대주라면 납입액의 40%를 소득공제받을 수 있습니다.
                청약 당첨 가능성을 위해서도 꾸준한 납입이 중요합니다.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-text mb-1">건강보험료 정산 확인</p>
            <p className="text-[12px] text-text leading-relaxed">
              직장 가입자는 11월~12월에 보수월액 변경에 따른 건강보험료 정산이 발생하는 경우가 있습니다.
              특히 청년 정책 중 건강보험료를 기준으로 자격을 판단하는 사업(서울시 월세 지원 등)은,
              정산 후 건강보험료 납부 금액이 바뀌면 자격 여부가 달라질 수 있습니다. 직장인이라면
              12월 전에 건강보험공단 앱(The건강보험)에서 내 납부 금액을 한번 확인해보세요.
            </p>
          </div>
        </div>
      </Card>

      {/* 12월 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-1 text-primary">12월 — 연말정산 서류 준비, 내년 정책 체크</h2>
        <p className="text-[11px] text-muted mb-3">연간 마무리 및 내년 준비</p>

        <div className="space-y-3">
          <div>
            <p className="text-[12px] font-bold text-text mb-1">연말정산 서류 미리 준비</p>
            <p className="text-[12px] text-text leading-relaxed mb-2">
              1월 연말정산을 위한 서류 수집은 12월부터 시작하면 여유롭습니다. 월세 세액공제(최대 17%)를
              받으려면 임대차계약서, 계좌이체 내역, 주민등록등본이 필요합니다. 홈택스에서
              간소화 서비스가 열리는 1월 15일 이전에 빠뜨린 항목이 없는지 미리 파악해두세요.
            </p>
            <div className="bg-amber-bg rounded-[var(--radius)] p-3">
              <p className="text-[11px] text-amber font-semibold">마감 주의</p>
              <p className="text-[11px] text-text mt-1">
                청년형 장기집합투자증권저축, 청약통장 소득공제 항목은 12월 31일이 납입 마감입니다.
                놓치면 내년 2월 연말정산에서 혜택을 받을 수 없습니다.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold text-text mb-1">내년 정책 변경사항 미리 확인</p>
            <p className="text-[12px] text-text leading-relaxed">
              매년 12월 말~1월 초에 다음 해 청년 정책의 주요 변경 내용이 발표됩니다.
              청년도약계좌 금리 조정, 월세 지원 규모 변경, 새로운 정책 신설 등이 이 시기에 공고됩니다.
              온통청년(youthcenter.go.kr)과 기획재정부 홈페이지를 12월 중에 한 번 들여다보면
              새해 계획을 세우기 훨씬 쉬워집니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 상시 모집 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">상시 모집 — 언제든 신청 가능한 정책들</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          아래 정책들은 특정 기간에만 열리는 게 아니라 연중 상시 또는 매달 신청이 가능합니다.
          아직 안 하셨다면 지금 당장 신청해도 됩니다.
        </p>
        <div className="space-y-2">
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-0.5">청년미래적금</p>
            <p className="text-[11px] text-muted">
              연 9~10%대 이자율(이자소득 비과세 포함). 은행별로 신청 가능, 월 최대 50만 원.
            </p>
          </div>
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-0.5">K-패스</p>
            <p className="text-[11px] text-muted">
              대중교통 이용 금액의 최대 53%(청년 기준) 환급. 카드사 앱에서 즉시 가입 가능.
            </p>
          </div>
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-0.5">국민취업지원제도</p>
            <p className="text-[11px] text-muted">
              구직자라면 상시 신청 가능. 1유형 구직촉진수당 월 50만 원 × 6개월, 취업 지원 서비스 제공.
            </p>
          </div>
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-0.5">청년도약계좌</p>
            <p className="text-[11px] text-muted">
              매달 신청 창구 운영. 소득 기준 충족 시 정부 기여금 최대 월 2.4만 원.
            </p>
          </div>
        </div>
      </Card>

      {/* 마감 임박 정책 확인하는 법 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">지금 마감 임박한 정책, 어떻게 확인하나요?</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          이 페이지는 월별 일정을 큰 그림으로 정리한 것이고, 실시간 마감 여부는 정책 매칭 기능을
          활용하면 훨씬 정확합니다. 생년월일, 거주 지역, 취업 상태를 입력하면 현재 신청 가능한
          정책과 마감 임박 정책을 바로 확인할 수 있습니다.
        </p>
        <Link
          href="/"
          className="block w-full py-3 bg-primary text-white text-center rounded-[var(--radius)] font-bold text-[12px] hover:opacity-90 transition-opacity no-underline"
        >
          내 조건에 맞는 정책 지금 확인하기 →
        </Link>
      </Card>

      {/* 알림 설정 팁 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">정책 알림 설정하는 3가지 방법</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          공고가 나도 모르면 소용없습니다. 제가 쓰는 알림 설정 방법을 공유합니다.
        </p>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-md bg-primary-bg text-primary text-[11px] font-bold flex items-center justify-center">1</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">온통청년 앱 알림 설정</p>
              <p className="text-[11px] text-muted leading-relaxed">
                온통청년 앱을 설치하고 관심 정책을 북마크해두면 공고가 올라올 때 앱 푸시 알림을 받을 수
                있습니다. 지역, 분야별로 필터링도 됩니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-md bg-primary-bg text-primary text-[11px] font-bold flex items-center justify-center">2</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">지자체 카카오톡 채널 구독</p>
              <p className="text-[11px] text-muted leading-relaxed">
                서울시, 경기도 등 거주 지자체의 공식 카카오톡 채널을 추가하면 정책 공고가 채팅으로
                옵니다. &ldquo;서울시 청년&rdquo;, &ldquo;경기도청 청년&rdquo; 등으로 검색해보세요.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-md bg-primary-bg text-primary text-[11px] font-bold flex items-center justify-center">3</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">스마트폰 캘린더에 예정일 등록</p>
              <p className="text-[11px] text-muted leading-relaxed">
                경기도 청년 기본소득 3분기 신청은 &ldquo;9월 1일~15일&rdquo;처럼 예상 기간을
                캘린더에 미리 등록해두면 잊어버릴 걱정이 없습니다. 2주 전 알림을 설정해두면 여유롭게
                서류를 준비할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 놓쳤을 때 대처법 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">마감을 놓쳤다면? 이렇게 하세요</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          아쉽지만 그렇다고 방법이 없는 건 아닙니다.
        </p>
        <div className="space-y-2">
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-1">다음 모집 기간을 바로 캘린더에 등록</p>
            <p className="text-[11px] text-muted leading-relaxed">
              대부분의 정책은 분기 또는 반기마다 다시 모집합니다. 이번에 놓쳤다면 다음 모집 예상 시기를
              지금 바로 캘린더에 적어두세요. 서울시 월세 지원이면 &ldquo;내년 2~3월 1차 예정&rdquo; 같은 식으로.
            </p>
          </div>
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-1">다른 지자체 유사 정책 찾기</p>
            <p className="text-[11px] text-muted leading-relaxed">
              서울 정책을 놓쳤다면 경기도, 인천, 혹은 다른 광역시 정책 중 비슷한 게 있는지 확인해보세요.
              서울 이외 지역의 청년 정책은 오히려 경쟁률이 낮은 경우도 있습니다.
            </p>
          </div>
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-1">상시 신청 정책으로 우선 시작</p>
            <p className="text-[11px] text-muted leading-relaxed">
              마감이 없는 K-패스, 국민취업지원제도, 청년미래적금은 지금 당장 신청할 수 있습니다.
              기간제 정책을 기다리는 동안 상시 정책부터 챙기면 손해를 줄일 수 있습니다.
            </p>
          </div>
        </div>
      </Card>

      {/* 관련 가이드 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3 text-text">관련 가이드</h2>
        <div className="space-y-2">
          <Link
            href="/guide/finance"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            청년 금융 정책 총정리 — 도약계좌·미래적금·K-패스
          </Link>
          <Link
            href="/guide/housing"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            청년 주거정책 직접 받아본 후기와 신청 팁
          </Link>
          <Link
            href="/guide/seoul"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            서울시 청년 정책 한눈에 보기
          </Link>
          <Link
            href="/guide/savings-compare"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            청년도약계좌 vs 청년미래적금 비교
          </Link>
        </div>
      </Card>

      {/* 면책 고지 */}
      <div className="mt-4 p-3 bg-green-bg rounded-[var(--radius)] text-[11px] text-muted leading-relaxed">
        본 캘린더는 2026년 8월 기준 공개된 정보를 토대로 작성되었습니다. 정책의 모집 시기·기간·
        조건은 주관 기관의 예산 상황 및 사업 계획에 따라 변경될 수 있습니다. 신청 전 반드시
        공식 공고문을 확인하세요.{' '}
        <a
          href="https://www.youthcenter.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          온통청년 공식 사이트
        </a>
        에서 최신 공고를 확인할 수 있습니다.
      </div>

      <div className="mt-4">
        <Link
          href="/"
          className="text-[12px] text-primary no-underline hover:underline"
        >
          ← 홈으로
        </Link>
      </div>
    </>
  );
}
