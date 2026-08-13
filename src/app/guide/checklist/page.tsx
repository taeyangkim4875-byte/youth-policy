import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년 정책 신청 전 체크리스트 — 서류 한 번에 준비하는 법',
  description:
    '주민등록등본, 소득증명서, 통장 사본 등 청년 정책 신청에 필요한 공통 서류와 정책별 추가 서류를 정리했습니다. 주민센터 3번 다녀온 경험을 바탕으로 한 번에 준비하는 실전 체크리스트.',
  openGraph: {
    title: '청년 정책 신청 전 체크리스트 | 청년정책 매칭',
    description: '주민센터 3번 다녀온 경험에서 정리한, 청년 정책 서류 한 번에 준비하는 방법',
    url: 'https://youth.moduncalc.com/guide/checklist',
  },
};

export default function ChecklistGuidePage() {
  return (
    <>
      <FaqJsonLd
        items={[
          {
            q: '청년 정책 신청에 공통으로 필요한 서류가 뭔가요?',
            a: '대부분의 청년 정책은 주민등록등본, 소득증명서(건강보험 납부확인서 또는 소득금액증명원), 신분증 사본, 통장 사본을 요구합니다. 이 4가지를 미리 준비해두면 대부분의 정책을 바로 신청할 수 있습니다.',
          },
          {
            q: '주민등록등본은 어디서 발급받나요?',
            a: '정부24(www.gov.kr)에서 공동인증서로 로그인하면 무료로 즉시 발급됩니다. 5분도 안 걸립니다. 주민센터에 직접 방문해도 되지만 온라인이 훨씬 빠릅니다.',
          },
          {
            q: '소득이 없어도 소득증명서가 필요한가요?',
            a: '네, 소득이 없더라도 "소득 없음"을 증명하는 서류가 필요합니다. 국세청 홈택스에서 소득금액증명원을 발급하면 소득이 0원으로 나오고, 이것 자체가 소득 기준 충족 증명이 됩니다.',
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
        신청하려는데 서류가 뭐가 필요하지?
      </h1>
      <p className="text-[13px] text-muted mb-5">
        한 번에 준비하는 체크리스트 · 작성: 김태양 · 2026년 8월 기준
      </p>

      {/* 도입 */}
      <Card>
        <p className="text-[12px] text-text leading-relaxed mb-3">
          청년 정책을 신청하려고 마음먹었는데, 막상 공지문을 열면 서류 목록이 길어서
          막막할 때가 있습니다. 저도 처음에 월세 지원 신청할 때 서류를 빠뜨려서
          주민센터를 세 번이나 갔다 왔습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed">
          그 경험을 바탕으로 &ldquo;이걸 미리 알았다면 한 번에 끝냈을 텐데&rdquo; 싶은
          내용을 정리했습니다. 신청 전에 이 체크리스트를 한 번만 훑어보시면
          괜한 재방문을 줄일 수 있습니다.
        </p>
      </Card>

      {/* 공통 서류 */}
      <Card>
        <h2 className="text-base font-bold mb-1">거의 모든 정책에 필요한 공통 서류</h2>
        <p className="text-[12px] text-muted mb-3">이 4가지만 있으면 대부분 신청 가능합니다</p>

        <div className="space-y-2">
          <div className="flex gap-3 items-start p-3 bg-primary-bg rounded-[var(--radius)]">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">1</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">주민등록등본</p>
              <p className="text-[11px] text-muted">거주지 확인용 · 정부24에서 무료 발급 · 5분이면 충분</p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-3 bg-primary-bg rounded-[var(--radius)]">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">2</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">소득증명서</p>
              <p className="text-[11px] text-muted">
                건강보험 납부확인서 <strong>또는</strong> 소득금액증명원 중 하나 · 소득 없으면 소득금액증명원(0원)으로 대체
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-3 bg-primary-bg rounded-[var(--radius)]">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">3</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">신분증 사본</p>
              <p className="text-[11px] text-muted">주민등록증 또는 운전면허증 앞면 촬영 · 스마트폰으로 찍어 저장해두면 편함</p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-3 bg-primary-bg rounded-[var(--radius)]">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-white text-[11px] font-bold shrink-0 mt-0.5">4</span>
            <div>
              <p className="text-[12px] font-bold text-text mb-0.5">통장 사본</p>
              <p className="text-[11px] text-muted">지원금 입금받을 본인 명의 통장 앞면 · 계좌번호와 이름이 보이게 촬영</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 정책별 추가 서류 */}
      <Card>
        <h2 className="text-base font-bold mb-1">정책 유형별 추가 서류</h2>
        <p className="text-[12px] text-muted mb-3">공통 서류에 더해 해당하는 것만 준비하면 됩니다</p>

        <div className="space-y-3">
          {/* 주거 */}
          <div className="border border-line rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-2">주거 정책 (월세 지원, 이사비 등)</p>
            <ul className="text-[11px] text-muted space-y-1.5 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">임대차계약서</strong> — 현재 살고 있는 집의 전월세 계약서</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">전입세대열람원</strong> — 정부24에서 발급, 거주 확인용</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">건축물대장</strong> — 일부 정책에서 요구, 정부24에서 무료 발급</span>
              </li>
            </ul>
          </div>

          {/* 금융 */}
          <div className="border border-line rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-2">금융 정책 (청년도약계좌, 청년미래적금 등)</p>
            <ul className="text-[11px] text-muted space-y-1.5 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">소득금액증명원</strong> — 홈택스에서 발급, 연간 소득 확인</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">근로소득원천징수영수증</strong> — 직장인의 경우, 홈택스에서 발급</span>
              </li>
            </ul>
          </div>

          {/* 취업 */}
          <div className="border border-line rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-2">취업 정책 (청년내일채움공제, 취업지원 등)</p>
            <ul className="text-[11px] text-muted space-y-1.5 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">구직활동 증명</strong> — 워크넷 구직등록 확인서, 워크넷 앱에서 출력</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">고용보험 가입확인서</strong> — 입사 후 고용보험 가입 증명, 근로복지공단 발급</span>
              </li>
            </ul>
          </div>

          {/* 창업 */}
          <div className="border border-line rounded-[var(--radius)] p-3">
            <p className="text-[12px] font-bold text-text mb-2">창업 정책 (청년창업지원, 예비창업패키지 등)</p>
            <ul className="text-[11px] text-muted space-y-1.5 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">사업자등록증</strong> — 이미 창업했다면 필수, 홈택스에서 사업자등록 후 발급</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">+</span>
                <span><strong className="text-text">사업계획서</strong> — 예비창업 단계면 자체 작성, 각 사업별 양식 상이</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 발급 방법 */}
      <Card>
        <h2 className="text-base font-bold mb-3">서류 발급하는 법 — 사이트별 정리</h2>

        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded">정부24</span>
              <span className="text-[11px] text-muted">www.gov.kr</span>
            </div>
            <ul className="text-[12px] text-text space-y-1 pl-3 border-l-2 border-primary/30">
              <li>주민등록등본 — 무료, 즉시 발급, PDF 저장 가능</li>
              <li>전입세대열람원 — 무료, 즉시 발급</li>
              <li>건축물대장 — 무료, 즉시 발급</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-amber text-white text-[10px] font-bold rounded">홈택스</span>
              <span className="text-[11px] text-muted">hometax.go.kr</span>
            </div>
            <ul className="text-[12px] text-text space-y-1 pl-3 border-l-2 border-amber/40">
              <li>소득금액증명원 — 무료, 로그인 후 바로 출력</li>
              <li>근로소득원천징수영수증 — 무료, 전년도분은 1월 이후 발급 가능</li>
              <li>사업자등록증 사본 — 무료, 사업자 전용</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-green text-white text-[10px] font-bold rounded">건강보험공단</span>
              <span className="text-[11px] text-muted">nhis.or.kr</span>
            </div>
            <ul className="text-[12px] text-text space-y-1 pl-3 border-l-2 border-green/40">
              <li>건강보험 납부확인서 — 무료, 온라인 발급</li>
              <li>건강보험 자격득실확인서 — 무료, 취업·이직 이력 확인 가능</li>
            </ul>
          </div>
        </div>

        <div className="mt-3 p-2.5 bg-amber-bg rounded-[var(--radius)] text-[11px] text-amber">
          <strong>공통 팁:</strong> 세 곳 모두 공동인증서(구 공인인증서)로 로그인합니다.
          미리 인증서를 설치해두면 각 사이트에서 5분 안에 발급할 수 있습니다.
        </div>
      </Card>

      {/* 내 경험 */}
      <div className="bg-green-bg border border-line rounded-[var(--radius)] p-4 mb-3">
        <p className="text-[12px] font-bold text-text mb-2">내 경험: 주민센터를 3번 갔다 온 이유</p>
        <p className="text-[12px] text-text leading-relaxed mb-2">
          월세 지원 신청하러 주민센터에 갔을 때, 첫 번째는 임대차계약서를 안 가져가서 허탕을 쳤습니다.
          두 번째는 계약서는 챙겼는데 통장 사본이 없었고요. 세 번째에 드디어 모든 서류를 다 가져가서
          신청을 마쳤습니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed mb-2">
          이사비 신청 때는 그 경험을 살려서 미리 서류 목록을 종이에 적고, 하나씩 체크하면서
          챙겼더니 한 번에 끝냈습니다. 이게 별거 아닌 것 같아도 막상 현장에서 서류 하나 빠지면
          줄 서고 기다린 시간이 다 날아가는 게 너무 아깝더라고요.
        </p>
        <p className="text-[12px] text-muted">
          지금 생각해보면 전부 정부24에서 미리 발급해서 PDF로 저장해두고 프린트했으면
          주민센터 갈 필요도 없었습니다. 온라인 신청이 가능한 정책은 온라인을 적극 활용하세요.
        </p>
      </div>

      {/* 미리 해두면 좋은 것들 */}
      <Card>
        <h2 className="text-base font-bold mb-3">신청 전에 미리 해두면 좋은 것들</h2>
        <div className="space-y-2">
          <div className="flex gap-3 items-start">
            <span className="text-primary text-[13px] font-bold shrink-0 mt-0.5">1</span>
            <div>
              <p className="text-[12px] font-semibold text-text">정부24 회원가입 + 공동인증서 등록</p>
              <p className="text-[11px] text-muted mt-0.5">
                한 번만 설정해두면 이후 모든 서류 발급이 빨라집니다.
                인증서는 은행 앱에서도 발급 가능합니다.
              </p>
            </div>
          </div>
          <div className="border-t border-line2 pt-2 flex gap-3 items-start">
            <span className="text-primary text-[13px] font-bold shrink-0 mt-0.5">2</span>
            <div>
              <p className="text-[12px] font-semibold text-text">홈택스 간편인증 로그인 설정</p>
              <p className="text-[11px] text-muted mt-0.5">
                카카오, 네이버 등 간편인증을 연동해두면 매번 인증서 비밀번호
                입력할 필요 없이 바로 소득 서류를 발급할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="border-t border-line2 pt-2 flex gap-3 items-start">
            <span className="text-primary text-[13px] font-bold shrink-0 mt-0.5">3</span>
            <div>
              <p className="text-[12px] font-semibold text-text">신분증 사본 + 통장 사본 파일로 저장</p>
              <p className="text-[11px] text-muted mt-0.5">
                스마트폰으로 신분증과 통장 앞면을 잘 찍어두고 &ldquo;서류&rdquo; 폴더에
                저장해두세요. 온라인 신청 시 첨부할 때 바로 쓸 수 있습니다.
              </p>
            </div>
          </div>
          <div className="border-t border-line2 pt-2 flex gap-3 items-start">
            <span className="text-primary text-[13px] font-bold shrink-0 mt-0.5">4</span>
            <div>
              <p className="text-[12px] font-semibold text-text">마이데이터 연동 (은행 앱)</p>
              <p className="text-[11px] text-muted mt-0.5">
                일부 정책은 마이데이터로 소득·자산 정보를 자동으로 확인합니다.
                주거래 은행 앱에서 마이데이터 서비스를 미리 연동해두면 서류 제출이 줄어듭니다.
              </p>
            </div>
          </div>
          <div className="border-t border-line2 pt-2 flex gap-3 items-start">
            <span className="text-primary text-[13px] font-bold shrink-0 mt-0.5">5</span>
            <div>
              <p className="text-[12px] font-semibold text-text">증명사진 파일 준비</p>
              <p className="text-[11px] text-muted mt-0.5">
                일부 지원 프로그램은 증명사진 파일을 요구합니다.
                스마트폰 증명사진 앱으로 찍어두면 3×4 규격 파일을 저장할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 서류 준비 시간 예상 */}
      <Card>
        <h2 className="text-base font-bold mb-3">서류 준비에 시간이 얼마나 걸리나요?</h2>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-primary-bg rounded-[var(--radius)] p-3 text-center">
            <p className="text-[11px] text-primary font-semibold mb-1">온라인 신청</p>
            <p className="text-[22px] font-extrabold text-primary leading-none">30분</p>
            <p className="text-[10px] text-muted mt-1">정부24 + 홈택스 + 파일 첨부</p>
          </div>
          <div className="bg-[#f3f5f9] rounded-[var(--radius)] p-3 text-center">
            <p className="text-[11px] text-muted font-semibold mb-1">주민센터 방문</p>
            <p className="text-[22px] font-extrabold text-text leading-none">반나절</p>
            <p className="text-[10px] text-muted mt-1">서류 발급 + 이동 + 대기</p>
          </div>
        </div>
        <p className="text-[12px] text-text leading-relaxed mb-2">
          온라인으로 처리할 수 있는 정책은 사이트 세 곳만 들르면 30분 안에 서류를
          모두 준비할 수 있습니다. 발급 → PDF 저장 → 업로드로 끝납니다.
        </p>
        <p className="text-[12px] text-text leading-relaxed">
          반면 주민센터 방문이 필요한 경우는 이동 시간, 대기 시간을 포함하면 반나절을
          잡아야 합니다. 서류 하나라도 빠지면 또 와야 하니, 목록을 꼭 두 번 확인하고 가세요.
        </p>
        <div className="mt-3 p-2.5 bg-green-bg rounded-[var(--radius)] text-[11px] text-text">
          <strong>추천 순서:</strong> 정부24 발급 → 홈택스 발급 → 건강보험공단 발급 →
          신분증/통장 사본 촬영 → 정책 신청 페이지에서 업로드
        </div>
      </Card>

      {/* 관련 링크 */}
      <div className="mt-3 space-y-2">
        <Link
          href="/guide/housing"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            주거 정책 가이드 — 월세 200만 원, 이사비 실수령 후기
          </span>
        </Link>
        <Link
          href="/guide/finance"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            금융 정책 가이드 — 청년도약계좌 vs 청년미래적금 비교
          </span>
        </Link>
        <Link
          href="/"
          className="block bg-surface border border-line rounded-[var(--radius)] p-3.5 hover:border-primary/40 transition-colors no-underline"
        >
          <span className="text-[13px] font-bold text-text">
            내 조건에 맞는 청년 정책 매칭받기
          </span>
        </Link>
      </div>

      <div className="mt-4 p-3 bg-green-bg rounded-xl text-[11px] text-muted leading-relaxed">
        본 가이드는 개인 경험 및 공식 정보를 바탕으로 작성되었으며, 정책 조건은 연도와
        지자체에 따라 달라질 수 있습니다. 최종 서류 목록은 반드시 해당 정책 공지문에서
        확인하세요.
        <br />
        출처:{' '}
        <a
          href="https://www.gov.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          정부24
        </a>
        {' · '}
        <a
          href="https://www.hometax.go.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          국세청 홈택스
        </a>
        {' · '}
        <a
          href="https://www.nhis.or.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline hover:underline"
        >
          건강보험공단
        </a>
        <br />
        작성자: 김태양 · 월세 지원, 이사비 신청 등 다수 정책 직접 신청 경험
      </div>
    </>
  );
}
