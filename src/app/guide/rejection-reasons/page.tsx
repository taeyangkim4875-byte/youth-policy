import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년 정책 탈락 사유 TOP 5와 대처법 | 신청했는데 왜 떨어졌을까',
  description:
    '청년 정책을 신청했는데 탈락했다면? 소득 기준 초과, 거주지 요건, 서류 유효기간 만료 등 실제로 많은 청년이 탈락하는 이유 5가지와 각각의 대처법을 정리했습니다.',
  openGraph: {
    title: '청년 정책 탈락 사유 TOP 5와 대처법 | 청년정책 매칭',
    description:
      '소득 기준 착각, 전입신고 누락, 만 나이 혼동, 서류 유효기간 만료, 중복 수혜 제한. 탈락 이유와 다음엔 통과하는 법.',
    url: 'https://youth.moduncalc.com/guide/rejection-reasons',
  },
};

export default function RejectionReasonsPage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '청년 정책 소득 기준은 세전인가요 세후인가요?',
            a: '대부분 세전(근로소득 기준) 입니다. 상여금·성과급도 포함되기 때문에 내가 실수령액 기준으로 계산했을 때보다 소득이 높게 잡히는 경우가 많습니다. 홈택스에서 전년도 소득금액증명원을 발급해 실제 반영 금액을 미리 확인하는 것이 좋습니다.',
          },
          {
            q: '청년 정책 신청 후 탈락하면 이의신청을 할 수 있나요?',
            a: '네, 가능합니다. 탈락 통보 후 보통 7~14일 이내에 담당 부서에 전화하거나 온라인 포털을 통해 이의신청을 할 수 있습니다. 탈락 사유를 정확히 파악하고, 해당 사유가 착오나 서류 오류에 의한 것이라면 소명 자료를 첨부해 신청하면 됩니다.',
          },
          {
            q: '국가 월세 지원을 받으면 지자체 월세 지원도 중복으로 받을 수 있나요?',
            a: '정책마다 다릅니다. 일부 정책은 같은 성격의 지원을 중복으로 받을 수 없다고 명시합니다. 반드시 공고문의 "중복 수혜 제한" 항목을 확인하세요. 월세 지원과 이사비 지원처럼 성격이 다른 경우에는 중복 수령이 가능한 경우가 많습니다.',
          },
        ]}
      />

      <div className="mb-6">
        <Link href="/" className="text-[12px] text-primary no-underline hover:underline mb-3 inline-block">
          ← 홈으로
        </Link>
        <p className="text-[12px] text-primary font-semibold mb-1">신청 가이드</p>
        <h1 className="text-[22px] font-extrabold leading-tight mb-2">
          청년 정책 탈락 사유 TOP 5와 대처법
        </h1>
        <p className="text-[13px] text-muted">
          작성: 김태양 · 2026.08.13 · 읽는 데 6분
        </p>
      </div>

      {/* 들어가며 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3">&ldquo;왜 탈락했지?&rdquo; — 신청했는데 떨어지는 진짜 이유들</h2>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          저는 서울시 청년 월세 지원과 이사비를 직접 받은 경험이 있습니다. 운이 좋았던 게 아니라,
          신청 전에 조건을 꼼꼼히 따진 덕분이었습니다. 그 과정에서 주변 친구들이 탈락했다는
          소식을 꽤 많이 들었습니다. 이유를 들어보면 &ldquo;그거 미리 알았으면 됐을 텐데&rdquo;
          싶은 것들이 대부분이었습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          특히 억울한 건, 자격이 충분한데도 서류 유효기간이 하루 넘어서 탈락하거나,
          만 나이를 세는 나이로 착각해서 신청 자체를 포기하는 경우였습니다.
          이 글은 그런 분들을 위해 씁니다.
        </p>
        <div className="bg-amber-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong className="text-amber">주의:</strong> 아래 내용은 실제 사례와 공고문 분석을 바탕으로
          작성했습니다. 정책마다 세부 조건이 다르므로 반드시 본인이 신청하는 공고문 원문을 확인하세요.
        </div>
      </Card>

      {/* 탈락 사유 1 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-bg text-amber text-[11px] font-bold shrink-0">1</span>
          <h2 className="text-[13px] font-extrabold text-text">소득 기준 초과 — 내 예상보다 소득이 높게 잡힌다</h2>
        </div>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          탈락 이유 중 가장 흔한 케이스입니다. 실수령액(세후)이 아니라
          <strong> 세전 근로소득</strong>을 기준으로 하기 때문에, 월급 실수령이 200만 원이어도
          공제 전 금액은 훨씬 높게 잡힙니다. 여기에 상여금, 성과급까지 합산되면 소득이 생각보다
          훌쩍 올라가 있는 경우가 있습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          친구 중 한 명은 연봉 협상 때 인상됐는데, 그걸 감안 안 하고 전년도 소득 기준으로
          &ldquo;괜찮겠지&rdquo; 하고 신청했다가 탈락했습니다. 알고 보니 당해 소득이 반영되어
          기준을 초과했던 거였습니다.
        </p>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text mb-3">
          <strong className="text-green">대처법:</strong> 홈택스(hometax.go.kr)에서 &lsquo;소득금액증명원&rsquo;을
          발급해 실제 반영 금액을 미리 확인하세요. 신청 전에 기준 소득과 비교해보는 것이 필수입니다.
        </div>
        <div className="bg-amber-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong className="text-amber">팁:</strong> 부모와 같은 세대에 주민등록이 되어 있으면 가구 합산
          소득으로 계산됩니다. 1인 가구로 <strong>전입신고(세대 분리)</strong>가 되어 있으면 본인
          소득만 반영되어 기준을 통과할 수도 있습니다. 독립 자취 중이라면 전입신고 상태를 꼭 확인하세요.
        </div>
      </Card>

      {/* 탈락 사유 2 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-bg text-amber text-[11px] font-bold shrink-0">2</span>
          <h2 className="text-[13px] font-extrabold text-text">거주지 요건 미충족 — 전입신고를 안 했거나 거주 기간이 짧다</h2>
        </div>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          지자체 정책은 해당 지자체에 <strong>주민등록이 되어 있어야</strong> 신청 가능합니다.
          실제로 거기서 살고 있어도 전입신고를 안 했다면 자격이 없습니다. 이건 당연한 것 같지만,
          이사하고 바쁘다는 이유로 전입신고를 한 달 넘게 미루는 경우가 생각보다 많습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          더 빠뜨리기 쉬운 건 <strong>거주 기간 요건</strong>입니다. 일부 정책은 해당 지자체에
          &ldquo;전입일로부터 3개월 이상 거주&rdquo; 같은 조건이 있습니다. 막 이사한 직후에
          신청하면 이 기간 요건에서 걸립니다. 제 지인은 서울로 올라온 지 2개월 됐을 때 신청했다가
          &ldquo;3개월 이상 거주 요건 미충족&rdquo;으로 탈락했습니다.
        </p>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text mb-3">
          <strong className="text-green">대처법:</strong> 이사하면 가능한 한 빨리(14일 이내 의무) 전입신고를
          완료하세요. 그리고 신청하려는 정책의 공고문에서 거주 기간 요건을 확인한 뒤, 요건을
          충족한 시점에 신청하세요.
        </div>
        <div className="bg-amber-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong className="text-amber">주의:</strong> 전입신고는 주민센터 방문 또는 정부24(gov.kr) 온라인
          신청 둘 다 됩니다. 온라인이 훨씬 빠르니 이사 당일이나 다음 날 바로 처리하는 습관을 들이세요.
        </div>
      </Card>

      {/* 탈락 사유 3 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-bg text-amber text-[11px] font-bold shrink-0">3</span>
          <h2 className="text-[13px] font-extrabold text-text">연령 기준 착각 — 만 나이와 세는 나이 혼동</h2>
        </div>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          청년 정책의 연령 기준은 거의 모두 <strong>만 나이</strong>입니다. 2023년부터 법적으로도
          만 나이가 공식화되었지만, 막상 본인 만 나이를 정확히 계산하지 못하는 분들이 많습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          예를 들어 만 34세 이하가 조건인 정책에서, 생일이 지나지 않은 시점의 만 나이와
          지난 시점의 나이가 다릅니다. 거기에 &ldquo;신청일 기준&rdquo;인지
          &ldquo;공고일 기준&rdquo;인지도 정책마다 다릅니다. 12월 생일인 분이 1월에 신청하면
          아직 만 34세인데, 본인이 &ldquo;올해 35살 됐으니까 안 되겠지&rdquo;라고 착각하는
          경우도 있습니다.
        </p>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text mb-3">
          <strong className="text-green">대처법:</strong> 만 나이는 &ldquo;올해 연도 - 출생 연도&rdquo;에서
          생일이 지났으면 그대로, 아직 안 지났으면 1을 뺀 값입니다. 신청일 기준으로 계산하고,
          공고문에서 기준일을 반드시 확인하세요.
        </div>
        <div className="bg-amber-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong className="text-amber">흔한 실수:</strong> &ldquo;34세 이하&rdquo;는 만 34세도 포함입니다.
          만 35세가 되는 생일 전날까지는 신청 가능한 정책이 많으니, 포기하기 전에 정확히 계산해보세요.
        </div>
      </Card>

      {/* 탈락 사유 4 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-bg text-amber text-[11px] font-bold shrink-0">4</span>
          <h2 className="text-[13px] font-extrabold text-text">서류 미비 / 유효기간 만료 — 하루 차이로 탈락</h2>
        </div>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          이게 가장 억울한 탈락 이유입니다. 자격도 되고, 열심히 준비했는데 서류 유효기간 때문에
          탈락하는 경우가 실제로 있습니다. 주민등록등본은 보통 발급일로부터 <strong>30일 이내</strong>만
          유효한데, 여유 있게 미리 발급받아뒀다가 신청 시점에 31일이 넘어버리면 재발급해야 합니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          소득 관련 서류도 마찬가지입니다. &ldquo;전년도&rdquo; 소득증명을 요구하는데
          &ldquo;전전년도&rdquo; 것을 냈다거나, 건강보험료 납부확인서 발급 기간이 맞지 않아
          반려된 사례도 있습니다. 서류 하나하나의 발급 연도와 기간 요건을 꼼꼼히 확인해야 합니다.
        </p>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text mb-3">
          <strong className="text-green">대처법:</strong> 서류는 신청 <strong>1~2일 전</strong>에 발급하세요.
          미리 넉넉히 받아두면 오히려 유효기간이 넘길 위험이 있습니다. 정부24에서 주민등록등본,
          홈택스에서 소득금액증명원을 당일 발급받을 수 있습니다.
        </div>
        <div className="bg-surface border border-line2 rounded-[var(--radius)] p-3 text-[12px] text-text">
          <p className="font-semibold mb-2">자주 요구되는 서류 체크</p>
          <ul className="space-y-1 text-[11px] text-muted list-disc pl-4">
            <li>주민등록등본 — 발급일로부터 30일 이내</li>
            <li>소득금액증명원 (홈택스) — 전년도 기준인지 확인</li>
            <li>건강보험료 납부확인서 — 최근 3개월치 요구하는 경우 있음</li>
            <li>임대차계약서 사본 — 잔여 계약 기간 확인</li>
            <li>통장 사본 — 본인 명의 계좌</li>
          </ul>
        </div>
      </Card>

      {/* 탈락 사유 5 */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-bg text-amber text-[11px] font-bold shrink-0">5</span>
          <h2 className="text-[13px] font-extrabold text-text">중복 수혜 제한 — 이미 비슷한 정책을 받고 있다</h2>
        </div>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          같은 성격의 지원을 이미 받고 있으면 중복으로 신청할 수 없는 경우가 있습니다. 가장 흔한
          예가 월세 지원입니다. 국가(LH) 청년 월세 지원을 받고 있는 상태에서 서울시 청년 월세
          지원까지 신청하면, 공고문에 &ldquo;동종 사업 중복 수혜 불가&rdquo; 조항이 있을 경우
          탈락합니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          반대로 월세 지원과 이사비 지원은 성격이 다르므로 중복 수령이 가능했습니다. 저도 두 가지를
          같이 받았습니다. 중요한 건 &ldquo;전부 중복 불가&rdquo; 혹은 &ldquo;전부 중복 가능&rdquo;이
          아니라, <strong>정책마다 다르다</strong>는 점입니다.
        </p>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text mb-3">
          <strong className="text-green">대처법:</strong> 공고문에서 &ldquo;중복 수혜&rdquo; 또는
          &ldquo;중복 지원&rdquo; 항목을 꼭 찾아 읽으세요. 현재 받고 있는 지원이 있다면 해당 내용을
          담당 부서에 전화로 문의하는 게 가장 확실합니다.
        </div>
        <div className="bg-amber-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong className="text-amber">주의:</strong> 이미 다른 정책을 받고 있다고 무조건 포기하지 마세요.
          성격이 다른 정책은 중복 수령이 되는 경우가 많습니다. 직접 확인하는 게 중요합니다.
        </div>
      </Card>

      {/* 탈락 후 대처법 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3">탈락했을 때 할 수 있는 것들</h2>
        <p className="text-[12px] text-text leading-relaxed mb-4">
          탈락했다고 끝난 게 아닙니다. 아래 순서대로 대응해보세요.
        </p>

        <div className="space-y-3">
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-1">1단계 — 탈락 사유 확인</p>
            <p className="text-[11px] text-muted leading-relaxed">
              탈락 통보 문자나 메일에 사유가 적혀 있는 경우가 있습니다. 없으면 담당 부서에
              전화해서 어떤 이유로 탈락했는지 물어보세요. 대부분 친절하게 알려줍니다.
            </p>
          </div>
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-1">2단계 — 이의신청 검토</p>
            <p className="text-[11px] text-muted leading-relaxed">
              사유가 서류 오류나 시스템 착오라면 이의신청을 할 수 있습니다. 통보 후
              보통 7~14일 이내에 담당 부서에 전화하거나 신청 포털의 이의신청 메뉴를
              이용하세요. 소명 자료(정정된 서류, 소득 증빙 등)를 함께 제출하면 됩니다.
            </p>
          </div>
          <div className="p-3 bg-surface border border-line2 rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-1">3단계 — 다음 모집 기간 준비</p>
            <p className="text-[11px] text-muted leading-relaxed">
              대부분의 정책은 연 1~2회 모집합니다. 탈락 사유를 보완한 뒤 다음 모집에
              재신청하세요. 이번에 서류를 준비하면서 파악한 내용이 다음번에 큰 도움이 됩니다.
            </p>
          </div>
          <div className="p-3 bg-green-bg rounded-[var(--radius)]">
            <p className="text-[12px] font-bold text-text mb-1">4단계 — 유사한 다른 정책 찾기</p>
            <p className="text-[11px] text-muted leading-relaxed">
              한 가지 정책에 탈락했다고 다른 정책도 안 된다는 게 아닙니다. 국가, 광역시,
              기초자치단체 각각 비슷한 성격의 정책을 운영하는 경우가 많으니 매칭 도구로
              다시 찾아보세요.
            </p>
          </div>
        </div>
      </Card>

      {/* 탈락 방지 체크리스트 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3">신청 전 탈락 방지 체크리스트</h2>
        <p className="text-[12px] text-text leading-relaxed mb-4">
          신청 전날 이 목록을 한 번만 훑어봐도 불필요한 탈락을 크게 줄일 수 있습니다.
        </p>
        <div className="space-y-2">
          {[
            { label: '소득 기준', desc: '홈택스 소득금액증명원으로 실제 금액 확인했는가' },
            { label: '가구 기준', desc: '1인 가구인지 다인 가구인지, 주민등록 세대 구성 확인했는가' },
            { label: '거주지 전입신고', desc: '해당 지자체에 주민등록이 되어 있는가' },
            { label: '거주 기간', desc: '최소 거주 기간 요건(1~3개월)을 충족했는가' },
            { label: '만 나이 계산', desc: '신청일 기준 만 나이를 정확히 계산했는가' },
            { label: '서류 유효기간', desc: '주민등록등본 발급일이 30일 이내인가' },
            { label: '서류 연도', desc: '소득 관련 서류가 공고 요구 연도와 일치하는가' },
            { label: '중복 수혜', desc: '현재 받고 있는 정책과 중복 제한 여부를 확인했는가' },
            { label: '신청 기간', desc: '신청 마감일과 시간을 정확히 확인했는가 (선착순 정책 주의)' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 bg-surface border border-line2 rounded-[var(--radius)]"
            >
              <span className="mt-0.5 w-4 h-4 rounded border border-line2 shrink-0 bg-primary-bg" />
              <div>
                <span className="text-[12px] font-semibold text-text">{item.label}</span>
                <span className="text-[11px] text-muted ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 관련 가이드 */}
      <Card>
        <h2 className="text-[13px] font-extrabold mb-3">관련 가이드</h2>
        <div className="space-y-2">
          <Link
            href="/guide/housing"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            청년 주거정책, 직접 받아본 후기와 신청 팁 →
          </Link>
          <Link
            href="/guide/first-independence"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            자취 처음 시작하는 청년을 위한 정책 총정리 →
          </Link>
          <Link
            href="/guide/finance"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            청년 금융정책 완전 정복 →
          </Link>
          <Link
            href="/guide/terms"
            className="block p-3 bg-surface border border-line2 rounded-[var(--radius)] text-[12px] text-primary font-medium no-underline hover:bg-primary-bg transition-colors"
          >
            청년정책 용어 해설 — 중위소득, 기준 중위소득이 뭔가요? →
          </Link>
        </div>
      </Card>

      {/* 면책 고지 */}
      <div className="mt-4 p-3 bg-amber-bg rounded-[var(--radius)] text-[11px] text-muted leading-relaxed">
        본 가이드는 실제 경험과 공개된 정책 공고문을 바탕으로 작성된 개인 의견입니다.
        정책의 세부 조건(소득 기준, 거주 기간, 중복 수혜 여부 등)은 연도 및 지자체에 따라
        달라질 수 있습니다. 최종 판단은 반드시 해당 정책의 공식 공고문 또는 담당 기관에
        직접 문의해 확인하세요.
        <br />
        참고:{' '}
        <a
          href="https://www.youthcenter.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          온통청년 (youthcenter.go.kr)
        </a>
        ,{' '}
        <a
          href="https://www.gov.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          정부24 (gov.kr)
        </a>
      </div>

      <div className="mt-4">
        <Link
          href="/"
          className="block w-full py-3 bg-primary text-white text-center rounded-[var(--radius)] font-bold text-[12px] hover:bg-primary-d transition-colors no-underline"
        >
          나에게 맞는 정책 찾기 →
        </Link>
      </div>
    </>
  );
}
