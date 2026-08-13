import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년 정책 신청 시 가장 많이 하는 실수 7가지 | 청년정책 매칭',
  description:
    '직장인은 안 된다는 착각, 서류 하나 빠뜨려서 주민센터 두 번 방문, 선착순 이사비 첫날 받은 비결까지. 청년 정책 신청할 때 진짜 많이 하는 실수 7가지와 해결 팁을 정리했습니다.',
  openGraph: {
    title: '청년 정책 신청 시 가장 많이 하는 실수 7가지 | 청년정책 매칭',
    description:
      '직장인 안 된다는 착각, 서류 빠뜨림, 선착순 놓침... 나도 겪은 실수들, 미리 알고 피하세요.',
    url: 'https://youth.moduncalc.com/guide/common-mistakes',
  },
};

export default function CommonMistakesPage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '청년 정책은 직장인도 신청할 수 있나요?',
            a: '네, 많은 청년 정책이 재직자도 신청 가능합니다. 월세 지원, 이사비 지원, 청년도약계좌 등은 소득 기준만 충족하면 취업자·미취업자 모두 신청할 수 있습니다. 직장인이라서 안 된다고 미리 포기하지 마세요.',
          },
          {
            q: '청년 정책 신청 시 필요한 서류는 어떻게 확인하나요?',
            a: '각 정책 공고문에 제출 서류 목록이 명시되어 있습니다. 주민센터 방문 전 반드시 공고문을 확인하고 서류 목록을 캡처해두는 것이 좋습니다. 주민등록등본, 임대차계약서, 건강보험료 납부확인서가 자주 요구됩니다.',
          },
          {
            q: '청년 정책은 여러 개를 동시에 받을 수 있나요?',
            a: '대부분 중복 수령이 가능합니다. 월세 지원 + 이사비 지원 + 청년도약계좌를 동시에 이용하는 것도 문제없습니다. 다만 일부 정책은 중복 수령 제한이 있으니 공고문에서 중복 여부를 꼭 확인하세요.',
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
        청년 정책 신청할 때 진짜 많이 하는 실수 7가지
      </h1>
      <p className="text-[13px] text-muted mb-5">
        나도 이거 몰라서 놓쳤다 · 작성: 김태양 · 2026년 8월 기준
      </p>

      {/* 도입 */}
      <Card>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          청년 정책을 몇 가지 받고 나서 주변에 알려주다 보면, 하나같이 비슷한 말을
          합니다. <strong>&ldquo;아, 이거 나도 해당됐는데 몰라서 못 받았어.&rdquo;</strong>
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          자격이 됐는데 정보를 몰라서, 혹은 아무것도 아닌 실수 하나 때문에 탈락하는
          경우가 생각보다 많습니다. 저도 직접 겪어봤고, 주변에서도 충분히 받을 수
          있었는데 놓치는 걸 여러 번 봤습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed">
          아래에 정리한 실수들, 미리 알고 가면 확실히 다릅니다.
        </p>
      </Card>

      {/* 실수 1 */}
      <Card>
        <div className="mb-3">
          <span className="text-[11px] text-amber font-bold">실수 1</span>
          <h2 className="text-[14px] font-extrabold text-text mt-0.5">
            &ldquo;직장인은 안 되는 줄 알았어요&rdquo;
          </h2>
        </div>

        <p className="text-[12px] text-text leading-relaxed mb-3">
          이게 아마 가장 흔한 착각입니다. 청년 정책 하면 취업 준비생이나 백수만
          받는 거라고 생각하는 분들이 많은데, 실제로는 재직자도 신청 가능한 정책이
          훨씬 많습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          서울시 청년 월세 지원, 이사비 지원, 청년도약계좌, 지자체 교육비 지원 등
          상당수 정책이 <strong>소득 기준만 충족하면 취업 여부와 무관하게</strong>
          신청할 수 있습니다. 오히려 직장이 있어서 소득 증빙이 더 쉬운 경우도 있습니다.
        </p>
        <div className="bg-primary-bg rounded-[var(--radius)] p-3 mb-3 text-[12px] text-text">
          <strong className="text-primary">핵심:</strong> 공고문에서 &lsquo;재직자 불가&rsquo;
          라는 문구를 직접 확인하기 전까지는 포기하지 마세요. 대부분은 가능합니다.
        </div>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong>내 이야기:</strong> 취업 준비하던 시절 같이 학원 다니던 직장인 친구가
          있었는데, 월세 지원 얘기를 꺼냈더니 &ldquo;나 직장인인데 돼?&rdquo;라고 묻더라고요.
          같이 확인해봤더니 소득 기준만 맞으면 됐고, 결국 그 친구도 신청해서 받았습니다.
          본인이 자격이 되는지 아닌지는 공고문을 직접 봐야 알 수 있어요.
        </div>
      </Card>

      {/* 실수 2 */}
      <Card>
        <div className="mb-3">
          <span className="text-[11px] text-amber font-bold">실수 2</span>
          <h2 className="text-[14px] font-extrabold text-text mt-0.5">
            &ldquo;서류 하나 빠져서 다시 갔어요&rdquo;
          </h2>
        </div>

        <p className="text-[12px] text-text leading-relaxed mb-3">
          주민센터 방문해서 신청서까지 다 썼는데, 서류 하나가 없다는 말에 그냥
          돌아오는 경험입니다. 별거 아닌 것 같아도 왕복 이동에 다시 줄 서는 시간이
          꽤 아깝습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          자주 빠뜨리는 서류는 <strong>임대차계약서, 건강보험료 납부확인서,
          가족관계증명서</strong> 등입니다. 주민등록등본과 신분증은 챙겼는데
          임대차계약서를 깜박하는 경우가 많습니다.
        </p>
        <div className="bg-primary-bg rounded-[var(--radius)] p-3 mb-3 text-[12px] text-text">
          <strong className="text-primary">팁:</strong> 신청 전에 공고문을 열어두고 제출
          서류 목록을 스크린샷 찍어두세요. 주민센터 출발 전에 체크리스트처럼 하나씩
          확인하는 게 제일 확실합니다.
        </div>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong>내 이야기:</strong> 저도 월세 지원 신청 때 임대차계약서를 안 가져가서
          주민센터를 두 번 방문했습니다. 첫 번째 갔을 때 이미 번호표 뽑고 한참 기다린
          뒤였는데 담당자분이 &ldquo;계약서가 없으면 접수가 안 된다&rdquo;고 하시더라고요.
          그 이후로는 가기 전에 무조건 공고문 서류 목록 다시 확인합니다.
        </div>
      </Card>

      {/* 실수 3 */}
      <Card>
        <div className="mb-3">
          <span className="text-[11px] text-amber font-bold">실수 3</span>
          <h2 className="text-[14px] font-extrabold text-text mt-0.5">
            &ldquo;선착순인 줄 몰랐어요&rdquo;
          </h2>
        </div>

        <p className="text-[12px] text-text leading-relaxed mb-3">
          모든 정책이 기간 내에 신청하면 심사를 거쳐서 주는 게 아닙니다. 일부 정책은
          예산이 한정되어 있어서 <strong>선착순으로 마감</strong>됩니다. 이사비
          지원, 일부 교육비 지원이 대표적입니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          신청 기간이 한 달이라고 해도, 예산이 소진되면 기간 내라도 마감됩니다.
          &ldquo;나중에 여유 생기면 넣어야지&rdquo; 했다가 며칠 만에 끝나버리는 경우가
          실제로 있습니다.
        </p>
        <div className="bg-primary-bg rounded-[var(--radius)] p-3 mb-3 text-[12px] text-text">
          <strong className="text-primary">팁:</strong> 공고문에 &lsquo;선착순&rsquo; 또는
          &lsquo;예산 소진 시 조기 마감&rsquo;이라는 문구가 있으면, 모집 시작일 오전에
          바로 신청하세요. 늦어도 당일 내로는 해두는 게 좋습니다.
        </div>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong>내 이야기:</strong> 이사비 지원은 선착순이라는 걸 미리 알았기 때문에,
          모집 시작 당일 오전에 바로 서류 챙겨서 주민센터에 갔습니다. 덕분에 받을 수
          있었는데, 그 뒤에 알아본 친구는 3일 뒤에 갔다가 이미 마감됐다는 말을
          들었습니다. 공고문에 선착순 여부가 꼭 나와 있으니 확인하세요.
        </div>
      </Card>

      {/* 실수 4 */}
      <Card>
        <div className="mb-3">
          <span className="text-[11px] text-amber font-bold">실수 4</span>
          <h2 className="text-[14px] font-extrabold text-text mt-0.5">
            &ldquo;전입신고 안 해서 탈락했어요&rdquo;
          </h2>
        </div>

        <p className="text-[12px] text-text leading-relaxed mb-3">
          주거 관련 정책은 거의 대부분 <strong>해당 지역 전입신고가 필수</strong>입니다.
          이사하고 짐도 다 풀었는데 전입신고를 미루다가, 신청 시점에 아직 이전 주소로
          등록되어 있으면 자격 자체가 안 됩니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          법적으로는 이사 후 14일 이내에 전입신고를 해야 합니다. 청년 정책 신청을
          계획하고 있다면, 이사하자마자 전입신고부터 하는 것을 습관으로 만드는 게
          좋습니다.
        </p>
        <div className="bg-amber-bg rounded-[var(--radius)] p-3 text-[12px] text-amber">
          <strong>주의:</strong> 전입신고는 정부24(gov.kr) 온라인 또는 주민센터 방문으로
          할 수 있습니다. 온라인 신고 시 공인인증서(공동인증서)가 필요합니다. 이사 후
          14일 이내, 늦어도 신청 전까지는 반드시 완료하세요.
        </div>
      </Card>

      {/* 실수 5 */}
      <Card>
        <div className="mb-3">
          <span className="text-[11px] text-amber font-bold">실수 5</span>
          <h2 className="text-[14px] font-extrabold text-text mt-0.5">
            &ldquo;중복 신청 가능한 줄 몰랐어요&rdquo;
          </h2>
        </div>

        <p className="text-[12px] text-text leading-relaxed mb-3">
          청년 정책은 하나만 받을 수 있다고 생각하는 분들이 의외로 많습니다.
          실제로는 <strong>대부분의 정책이 중복 수령 가능</strong>합니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          예를 들어 서울시 월세 지원 + 이사비 지원 + 청년도약계좌 + 지자체 교육비 지원을
          동시에 받는 것도 됩니다. 각각 별개 사업이기 때문입니다. 물론 일부 정책에는
          중복 제한이 있으니, 신청 전에 공고문에서 &lsquo;중복 수령 불가&rsquo; 여부만
          확인하면 됩니다.
        </p>
        <div className="bg-primary-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong className="text-primary">핵심:</strong> &ldquo;이미 하나 받고 있으니까
          다른 건 못 받겠지&rdquo;라는 생각은 틀린 경우가 많습니다. 중복 불가라는
          명시적 문구가 없으면 일단 확인해보세요.
        </div>
      </Card>

      {/* 실수 6 */}
      <Card>
        <div className="mb-3">
          <span className="text-[11px] text-amber font-bold">실수 6</span>
          <h2 className="text-[14px] font-extrabold text-text mt-0.5">
            &ldquo;부모님 집 주소로 되어 있어서 1인 가구가 아니었어요&rdquo;
          </h2>
        </div>

        <p className="text-[12px] text-text leading-relaxed mb-3">
          실제로 독립해서 살고 있는데 주민등록상 주소가 아직 부모님 집으로 되어 있으면,
          행정적으로는 <strong>1인 가구가 아닌 가족 구성원</strong>으로 처리됩니다.
          이 경우 가구 합산 소득 기준이 적용되어 탈락하거나, 아예 신청 자격이 안 생깁니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          독립 후 전입신고를 해서 세대를 분리해야 1인 가구로 인정됩니다. 세대 분리가
          되어 있으면 본인 소득만 기준이 되므로, 소득이 낮은 청년에게는 훨씬 유리합니다.
        </p>
        <div className="bg-amber-bg rounded-[var(--radius)] p-3 text-[12px] text-amber">
          <strong>주의:</strong> 세대 분리 목적만으로 전입신고하는 것도 가능하지만,
          실제 거주지와 다른 주소로 전입신고하면 위장전입이 됩니다. 반드시 실제 거주하는
          주소로 신고하세요.
        </div>
      </Card>

      {/* 실수 7 */}
      <Card>
        <div className="mb-3">
          <span className="text-[11px] text-amber font-bold">실수 7</span>
          <h2 className="text-[14px] font-extrabold text-text mt-0.5">
            &ldquo;마감일 지나서 알았어요&rdquo;
          </h2>
        </div>

        <p className="text-[12px] text-text leading-relaxed mb-3">
          이게 가장 억울한 케이스입니다. 자격도 됐고, 서류도 다 챙길 수 있었는데,
          정책이 있는지 자체를 몰랐거나 늦게 알아서 이미 마감된 경우입니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          청년 정책은 <strong>매년, 매 분기 새롭게 모집이 열립니다.</strong> 한 번
          놓쳤다고 영원히 못 받는 건 아니지만, 미리 알고 있으면 기회를 훨씬 많이
          잡을 수 있습니다.
        </p>
        <div className="bg-primary-bg rounded-[var(--radius)] p-3 mb-3 text-[12px] text-text">
          <strong className="text-primary">팁:</strong>{' '}
          <strong>온통청년 앱 알림</strong>을 켜두거나, 거주 지역 지자체 카카오
          채널을 구독하면 신규 정책 공지를 바로 받을 수 있습니다. 모집 기간이 짧은
          경우 공지 확인이 느리면 이미 마감인 경우도 있으니 알림 설정은 해두는 게
          좋습니다.
        </div>
        <div className="bg-green-bg rounded-[var(--radius)] p-3 text-[12px] text-text">
          <strong>내 이야기:</strong> 저도 처음에는 정책이 있는지 자체를 몰랐고, 우연히
          커뮤니티 글에서 서울시 월세 지원을 알게 됐습니다. 그때가 모집 마감 사흘
          전이라 겨우 신청할 수 있었는데, 만약 일주일만 늦게 알았으면 그 회차는
          그냥 날렸을 거예요. 그 이후로 온통청년 앱 알림 켜두고 지자체 카카오 채널도
          몇 개 구독해뒀습니다.
        </div>
      </Card>

      {/* 체크리스트 요약 */}
      <Card>
        <h2 className="text-[14px] font-extrabold text-text mb-3">
          신청 전 실수 방지 체크리스트
        </h2>
        <div className="space-y-2">
          {[
            { label: '직장인이어도 신청 가능한지 공고문에서 확인했나요?' },
            { label: '제출 서류 목록을 미리 확인하고 모두 준비했나요?' },
            { label: '선착순 정책이라면 모집 첫날 신청할 준비가 됐나요?' },
            { label: '해당 지역 전입신고가 완료되어 있나요?' },
            { label: '중복 수령 가능 여부를 확인하고, 받을 수 있는 정책을 모두 챙겼나요?' },
            { label: '부모님과 세대가 분리된 1인 가구로 등록되어 있나요?' },
            { label: '온통청년 앱 또는 지자체 채널 알림을 켜두었나요?' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 p-2.5 bg-surface border border-line2 rounded-[var(--radius)]"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-[12px] text-text leading-snug">{item.label}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* 관련 가이드 링크 */}
      <div className="mt-3 space-y-2">
        <p className="text-[11px] text-muted mb-1">관련 가이드</p>
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년 주거정책 — 월세 200만 원 받은 후기와 신청 팁
          </span>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            청년도약계좌 vs 청년미래적금, 뭐가 더 유리할까?
          </span>
        </Link>
        <Link
          href="/guide/first-independence"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            첫 독립 준비 가이드 — 분리 전에 챙겨야 할 것들
          </span>
        </Link>
        <Link
          href="/"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-primary">
            나에게 맞는 정책 찾기 →
          </span>
        </Link>
      </div>

      {/* 면책 고지 */}
      <div className="mt-4 p-3 bg-green-bg rounded-[var(--radius)] text-[11px] text-muted leading-relaxed">
        본 가이드는 개인 경험과 공개된 정책 정보를 바탕으로 작성되었습니다. 정책의
        세부 조건과 신청 방법은 연도·지자체·회차에 따라 달라질 수 있으니, 실제 신청
        전에는 반드시 해당 정책의 공식 공고문을 직접 확인하세요.
        <br />
        출처:{' '}
        <a
          href="https://www.youthcenter.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          한국고용정보원 온통청년
        </a>{' '}
        · 작성자: 김태양
      </div>
    </>
  );
}
