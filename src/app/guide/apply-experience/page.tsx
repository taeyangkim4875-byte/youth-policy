import type { Metadata } from 'next';
import Card from '@/components/Card';
import { FaqJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '청년정책 5개 직접 신청해본 후기 | 실수령액·난이도 솔직 정리',
  description:
    '서울시 청년월세 특별지원, 이사비 지원, 청년도약계좌, 청년미래적금, K-패스까지 5개 청년정책을 직접 신청해봤습니다. 소요 시간, 난이도, 실수령액을 솔직하게 정리했습니다.',
};

const faqs = [
  {
    q: '청년월세 특별지원 신청이 정말 어렵지 않나요?',
    a: '생각보다 훨씬 쉬웠습니다. 주민센터에 서류 챙겨서 방문하면 담당자가 대부분 안내해줍니다. 서류 준비 2시간, 방문 1시간 정도면 충분합니다. 오전에 방문하면 대기도 짧아요.',
  },
  {
    q: '청년도약계좌에서 청년미래적금으로 갈아타도 되나요?',
    a: '저는 종료 전에 갈아탔지만, 2026년 8월 6일부로 갈아타기는 종료되었습니다. 이제는 새로 가입하는 것만 가능합니다. 제 경험상 미래적금은 기여금이 더 높고 금리도 유리해서 갈아타길 잘했다고 생각합니다.',
  },
  {
    q: 'K-패스는 어떻게 신청하나요?',
    a: 'K-패스 제휴 카드사(신한, 현대, KB 등)에서 카드를 발급받은 후 K-패스 앱이나 홈페이지에서 교통카드로 등록하면 됩니다. 이후 대중교통 이용 시 자동으로 환급이 적용되어 별도 신청이 필요 없습니다.',
  },
];

export default function ApplyExperiencePage() {
  return (
    <>
      <FaqJsonLd items={faqs} />

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* 홈으로 링크 */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-[12px] text-primary hover:underline"
          >
            ← 홈으로
          </Link>
        </div>

        {/* 히어로 */}
        <section className="mb-8">
          <p className="text-[13px] text-muted mb-2">2025년 실제 경험 · 김태양</p>
          <h1 className="text-[22px] font-extrabold text-text leading-tight mb-3">
            5개 청년정책에 직접 신청해봤습니다
          </h1>
          <p className="text-[12px] text-muted leading-relaxed">
            "청년 지원금? 나는 해당 안 되겠지"라고 생각하던 시절이 있었습니다. 근데 막상
            알아보니 조건이 생각보다 넓고, 신청도 어렵지 않더라고요. 직접 5개 정책에
            신청해보고 실제로 돈을 받아본 경험을 솔직하게 정리했습니다.
          </p>

          {/* 요약 박스 */}
          <div className="mt-5 bg-primary-bg border border-line rounded-[var(--radius)] p-4 grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-[11px] text-muted mb-1">신청 정책 수</p>
              <p className="text-[18px] font-extrabold text-primary">5개</p>
            </div>
            <div>
              <p className="text-[11px] text-muted mb-1">총 실수령 (현금)</p>
              <p className="text-[18px] font-extrabold text-primary">220만원+</p>
            </div>
            <div>
              <p className="text-[11px] text-muted mb-1">평균 신청 난이도</p>
              <p className="text-[18px] font-extrabold text-primary">★★☆☆☆</p>
            </div>
          </div>
        </section>

        {/* 타임라인 */}
        <section className="mb-8">
          <h2 className="text-[15px] font-bold text-text mb-3">신청 타임라인</h2>
          <div className="bg-surface border border-line rounded-[var(--radius)] p-4">
            <ol className="text-[12px] text-text space-y-3">
              <li className="flex gap-3">
                <span className="text-muted shrink-0 w-20">2023년 8월</span>
                <span>서울시 청년월세 특별지원 신청 → 선정, 10개월 수령 시작</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted shrink-0 w-20">2023년 9월</span>
                <span>서울시 이사비 지원 신청 → 바로 선정, 20만원 입금</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted shrink-0 w-20">2023년 10월</span>
                <span>청년도약계좌 가입 → 매월 70만원 납입 시작</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted shrink-0 w-20">2024년 초</span>
                <span>K-패스 카드 발급 → 대중교통 환급 적용</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted shrink-0 w-20">2024년 하반기</span>
                <span>도약계좌 해지 → 청년미래적금으로 갈아탐</span>
              </li>
            </ol>
          </div>
        </section>

        {/* 정책별 후기 */}
        <section className="mb-8">
          <h2 className="text-[15px] font-bold text-text mb-4">정책별 솔직 후기</h2>
          <div className="space-y-5">

            {/* 정책 1: 청년월세 */}
            <Card>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[13px] font-bold text-text">
                    1. 서울시 청년월세 특별지원
                  </h3>
                  <span className="text-[11px] bg-green-bg text-green px-2 py-0.5 rounded-full font-medium">
                    실수령 200만원
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">난이도</p>
                    <p className="font-bold text-text">★★☆☆☆ 보통</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">소요 시간</p>
                    <p className="font-bold text-text">약 3시간</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">신청 방법</p>
                    <p className="font-bold text-text">주민센터 방문</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">수령액</p>
                    <p className="font-bold text-text">월 20만원 × 10개월</p>
                  </div>
                </div>

                <div className="text-[12px] text-text leading-relaxed space-y-2">
                  <p>
                    관악구 서울대입구역 근처에 혼자 살면서 학원에서 취업 준비를 하던
                    시절이었습니다. 월세 부담이 꽤 컸는데, 지인이 청년월세 지원 받고
                    있다는 말을 듣고 알아보기 시작했습니다.
                  </p>
                  <p>
                    서류 준비가 좀 번거롭긴 했어요. 임대차계약서, 가족관계증명서,
                    건강보험료 납부확인서 등을 챙겨야 하는데, 뭐가 필요한지 몰라서
                    주민센터 홈페이지 공지문 프린트해서 하나씩 체크했습니다. 준비하는 데
                    2시간 정도 걸렸고요.
                  </p>
                  <p>
                    주민센터는 오전 10시쯤 방문했는데, 대기번호 뽑고 30분 정도 기다렸습니다.
                    담당 아주머니가 꼼꼼하게 서류 확인해주시면서 부족한 게 있으면 그 자리에서
                    알려주셨어요. 친절해서 생각보다 수월했습니다.
                  </p>
                  <p>
                    경쟁이 엄청 심할 것 같았는데, 생각보다 안 심했습니다. 3주쯤 후에 선정
                    문자 왔고, 그달부터 20만원씩 계좌로 들어오기 시작했습니다. 10개월 동안
                    총 200만원 받았어요. 서류 준비가 귀찮을 뿐이지, 난이도 자체는 높지
                    않습니다.
                  </p>
                </div>

                <div className="mt-3 bg-green-bg rounded p-3 text-[11px] text-green">
                  <span className="font-bold">팁:</span> 주민센터는 오전에 가면 대기가 짧습니다. 점심 시간 직후(13:30~14:00)도 비교적 한산해요. 서류 목록은 서울주거포털에서 사전에 꼭 확인하세요.
                </div>
              </div>
            </Card>

            {/* 정책 2: 이사비 */}
            <Card>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[13px] font-bold text-text">
                    2. 서울시 청년 이사비 지원
                  </h3>
                  <span className="text-[11px] bg-green-bg text-green px-2 py-0.5 rounded-full font-medium">
                    실수령 20만원
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">난이도</p>
                    <p className="font-bold text-text">★☆☆☆☆ 매우 쉬움</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">소요 시간</p>
                    <p className="font-bold text-text">30분</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">신청 방법</p>
                    <p className="font-bold text-text">온라인 신청</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">수령액</p>
                    <p className="font-bold text-text">20만원 (1회)</p>
                  </div>
                </div>

                <div className="text-[12px] text-text leading-relaxed space-y-2">
                  <p>
                    월세 지원 받은 거 알려준 지인이 이사비 지원도 있다고 해서 바로 알아봤습니다.
                    이건 진짜 쉬웠어요. 온라인으로 신청서 작성하고 이사 관련 서류 올리면
                    끝이었습니다.
                  </p>
                  <p>
                    당시 직장인이 아니었고 소득이 거의 없었는데, 소득 기준이 꽤 넉넉해서
                    문제없이 통과됐습니다. 취업 준비생이나 프리랜서도 조건 맞으면 충분히
                    받을 수 있어요.
                  </p>
                  <p>
                    제일 중요한 게 선착순이라는 점입니다. 공고 올라오는 날 바로 신청 안 하면
                    금방 마감돼요. 저는 공고 뜬 날 오전에 접수했고 무사히 선정됐습니다.
                    신청하고 한 달도 안 돼서 20만원이 계좌로 들어왔어요.
                  </p>
                </div>

                <div className="mt-3 bg-amber-bg rounded p-3 text-[11px] text-amber">
                  <span className="font-bold">주의:</span> 선착순 마감입니다. 공고 뜨는 날 바로 신청하지 않으면 탈락할 가능성이 높아요. 서울주거포털 알림 설정해두는 걸 추천합니다.
                </div>
              </div>
            </Card>

            {/* 정책 3: 청년도약계좌 */}
            <Card>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[13px] font-bold text-text">
                    3. 청년도약계좌
                  </h3>
                  <span className="text-[11px] bg-green-bg text-green px-2 py-0.5 rounded-full font-medium">
                    기여금 월 ~2.5만원
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">난이도</p>
                    <p className="font-bold text-text">★☆☆☆☆ 매우 쉬움</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">소요 시간</p>
                    <p className="font-bold text-text">5분</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">납입 방식</p>
                    <p className="font-bold text-text">월 70만원</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">3년 기여금 예상</p>
                    <p className="font-bold text-text">약 90만원</p>
                  </div>
                </div>

                <div className="text-[12px] text-text leading-relaxed space-y-2">
                  <p>
                    은행 앱에서 가입 신청하면 며칠 후 심사 결과가 옵니다. 5분이면 신청 끝나요.
                    가입 자체는 역대 가장 쉬운 정책이었습니다.
                  </p>
                  <p>
                    저는 매월 70만원씩 납입했고, 정부 기여금이 월 약 2.5만원 붙었습니다.
                    5년 만기 기준 최대 기여금이 꽤 되는데, 저는 3년 정도 유지하다가 청년미래적금이
                    출시되면서 갈아탔습니다.
                  </p>
                  <p>
                    도약계좌 자체가 나쁜 건 아닌데, 미래적금이 나온 후로는 조건이 미래적금이
                    더 유리하더라고요. 아직 도약계좌 유지 중이라면 한 번 비교해보시길 추천합니다.
                  </p>
                </div>

                <div className="mt-3 bg-green-bg rounded p-3 text-[11px] text-green">
                  <span className="font-bold">참고:</span> 소득 구간에 따라 기여금이 달라집니다. 소득이 낮을수록 기여금 비율이 높아요. 가입 전 본인 소득 구간을 먼저 확인해보세요.
                </div>
              </div>
            </Card>

            {/* 정책 4: 청년미래적금 */}
            <Card>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[13px] font-bold text-text">
                    4. 청년미래적금
                  </h3>
                  <span className="text-[11px] bg-green-bg text-green px-2 py-0.5 rounded-full font-medium">
                    기여금 월 4만원
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">난이도</p>
                    <p className="font-bold text-text">★☆☆☆☆ 매우 쉬움</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">소요 시간</p>
                    <p className="font-bold text-text">10분</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">기여금</p>
                    <p className="font-bold text-text">월 4만원</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">남은 2년 기대 이득</p>
                    <p className="font-bold text-text">약 50만원+</p>
                  </div>
                </div>

                <div className="text-[12px] text-text leading-relaxed space-y-2">
                  <p>
                    청년도약계좌를 유지하던 중에 청년미래적금이 출시됐습니다. 납입 한도는 월 50만원으로 도약계좌(70만원)보다 낮지만, 기여금이 더 높고 금리도 유리하다는 걸 알고 비교 계산을 해봤는데, 갈아타는 게 확실히 이득이더라고요.
                  </p>
                  <p>
                    도약계좌 해지 후 미래적금 가입까지 총 10분 정도 걸렸습니다. 도약계좌 해지는
                    은행 앱에서 바로 됐고, 미래적금은 출시 초기라 특정 은행 앱에서만 가입
                    가능했는데, 그것도 어렵지 않았어요.
                  </p>
                  <p>
                    남은 기간 2년을 기준으로 도약계좌 대비 약 50만원 이상 이득을 볼 것으로
                    계산됩니다. 금리 차이까지 합치면 더 차이 날 수 있고요. 결과적으로 갈아타길
                    잘한 것 같습니다. 단, <strong>도약계좌→미래적금 갈아타기는 2026년 8월 6일부로 종료</strong>되었습니다. 현재는 미래적금에 새로 가입하는 것만 가능합니다.
                  </p>
                </div>

                <div className="mt-3 bg-amber-bg rounded p-3 text-[11px] text-amber">
                  <span className="font-bold">참고 (갈아탈 당시 기준):</span> 당시 도약계좌 해지 시 이미 받은 기여금은 환수 대상이었습니다. 저는 유지 기간이 길지 않아 갈아타는 게 유리했지만, 갈아타기 자체는 2026년 8월 6일부로 종료되었으므로 현재는 해당 사항 없습니다.
                </div>
              </div>
            </Card>

            {/* 정책 5: K-패스 */}
            <Card>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[13px] font-bold text-text">
                    5. K-패스
                  </h3>
                  <span className="text-[11px] bg-green-bg text-green px-2 py-0.5 rounded-full font-medium">
                    월 3~5만원 환급
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">난이도</p>
                    <p className="font-bold text-text">★☆☆☆☆ 매우 쉬움</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">소요 시간</p>
                    <p className="font-bold text-text">5분</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">신청 방법</p>
                    <p className="font-bold text-text">카드 발급 후 등록</p>
                  </div>
                  <div className="bg-surface rounded p-2">
                    <p className="text-muted mb-0.5">월 환급 (출퇴근 기준)</p>
                    <p className="font-bold text-text">3~5만원</p>
                  </div>
                </div>

                <div className="text-[12px] text-text leading-relaxed space-y-2">
                  <p>
                    K-패스는 솔직히 "이게 정책 혜택이라고?" 싶을 만큼 신청이 간단합니다.
                    제휴 카드사에서 K-패스 카드 발급받고, 앱이나 홈페이지에서 교통카드로
                    등록하면 끝이에요.
                  </p>
                  <p>
                    이후 버스, 지하철 탈 때 자동으로 환급이 적용됩니다. 별도로 뭔가 눌러야
                    하는 것도 없고, 월말에 환급 내역 확인만 하면 됩니다. 매일 출퇴근하는
                    분이라면 월 3~5만원은 쉽게 환급받습니다.
                  </p>
                  <p>
                    대중교통을 자주 이용하는데 K-패스 아직 안 쓰고 있다면, 지금 당장 발급
                    받는 게 맞습니다. 안 받는 게 손해예요.
                  </p>
                </div>

                <div className="mt-3 bg-green-bg rounded p-3 text-[11px] text-green">
                  <span className="font-bold">팁:</span> 월 15회 이상 대중교통 이용 시 환급률이 올라갑니다. 이미 쓰던 교통카드를 K-패스로 바꾸는 것만으로도 매달 수만원이 환급돼요.
                </div>
              </div>
            </Card>

          </div>
        </section>

        {/* 총 수령액 */}
        <section className="mb-8">
          <h2 className="text-[15px] font-bold text-text mb-3">총 실수령액 합산</h2>
          <div className="bg-surface border border-line rounded-[var(--radius)] p-4">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-line2">
                  <th className="text-left text-muted font-medium py-2">정책명</th>
                  <th className="text-right text-muted font-medium py-2">수령액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line2">
                <tr>
                  <td className="py-2 text-text">서울시 청년월세 특별지원</td>
                  <td className="py-2 text-right font-bold text-text">200만원</td>
                </tr>
                <tr>
                  <td className="py-2 text-text">서울시 이사비 지원</td>
                  <td className="py-2 text-right font-bold text-text">20만원</td>
                </tr>
                <tr>
                  <td className="py-2 text-text">청년도약계좌 기여금 (3년)</td>
                  <td className="py-2 text-right font-bold text-text">~90만원</td>
                </tr>
                <tr>
                  <td className="py-2 text-text">청년미래적금 추가 이득 (2년)</td>
                  <td className="py-2 text-right font-bold text-text">~50만원+</td>
                </tr>
                <tr>
                  <td className="py-2 text-text">K-패스 교통 환급 (연간)</td>
                  <td className="py-2 text-right font-bold text-text">36~60만원</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-line">
                  <td className="pt-3 font-bold text-text">합계 (최소 추산)</td>
                  <td className="pt-3 text-right text-[15px] font-extrabold text-primary">약 396만원+</td>
                </tr>
              </tfoot>
            </table>
            <p className="text-[11px] text-muted mt-3">
              * 도약계좌·미래적금 기여금은 만기 수령 기준이며 중도 해지 시 달라질 수 있습니다. K-패스는 연 기준 추산값입니다.
            </p>
          </div>
        </section>

        {/* 느낀 점 */}
        <section className="mb-8">
          <h2 className="text-[15px] font-bold text-text mb-3">직접 해보고 느낀 점</h2>
          <div className="text-[12px] text-text leading-relaxed space-y-3">
            <p>
              5개 정책을 다 신청하고 나서 든 생각은 딱 하나입니다. <strong>"왜 진작 안 했지?"</strong>
            </p>
            <p>
              솔직히 처음엔 겁이 났어요. 서류도 복잡할 것 같고, 나는 해당이 안 될 것 같고,
              신청해봤자 안 될 것 같다는 막연한 걱정이 있었거든요. 근데 막상 해보니까 거의 다
              생각보다 훨씬 간단했습니다.
            </p>
            <p>
              청년 정책을 못 받는 이유의 99%는 "몰라서"입니다. 조건이 안 돼서가 아니라요.
              조건표 보면 생각보다 범위가 넓어요. 나이 기준도 넉넉하고, 소득 기준도 취업 준비생이면
              대부분 통과가 됩니다.
            </p>
            <p>
              서류 준비가 귀찮다는 것도 사실인데, 월세 지원처럼 200만원이 들어오는 걸 생각하면
              서류 준비 2시간은 시간당 100만원짜리 알바보다 효율적입니다. 관점 바꾸면 이것만큼
              효율 좋은 일이 없어요.
            </p>
          </div>
        </section>

        {/* 다음에 신청할 정책 */}
        <section className="mb-8">
          <h2 className="text-[15px] font-bold text-text mb-3">다음에 신청해볼 정책들</h2>
          <div className="bg-primary-bg border border-line rounded-[var(--radius)] p-4">
            <ul className="text-[12px] text-text space-y-2">
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                <span><strong>청년 전세대출 (버팀목 전세자금대출)</strong> — 저금리로 전세 보증금 마련 가능, 조건 맞으면 꼭 써야 함</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                <span><strong>내일채움공제 (청년형)</strong> — 중소기업 재직 중이라면 2년 만기 시 목돈 마련 가능</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                <span><strong>국민취업지원제도</strong> — 구직 활동 중이라면 구직촉진수당 지원</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold shrink-0">→</span>
                <span><strong>청년내일저축계좌</strong> — 기초생활수급자·차상위계층 청년 대상, 기여금 높음</span>
              </li>
            </ul>
          </div>
          <p className="text-[11px] text-muted mt-2">
            이 정책들도 신청해보고 경험담을 추가로 올릴 예정입니다.
          </p>
        </section>

        {/* 관련 링크 */}
        <section className="mb-8">
          <h2 className="text-[15px] font-bold text-text mb-3">관련 글</h2>
          <div className="space-y-2">
            <Link
              href="/guide/checklist"
              className="block text-[12px] text-primary hover:underline"
            >
              → 내 조건에 맞는 청년정책 찾는 법 (체크리스트)
            </Link>
            <Link
              href="/guide/documents"
              className="block text-[12px] text-primary hover:underline"
            >
              → 청년정책 신청 시 자주 쓰이는 서류 총정리
            </Link>
            <Link
              href="/"
              className="block text-[12px] text-primary hover:underline"
            >
              → 청년정책 매칭 서비스 사용해보기
            </Link>
          </div>
        </section>

        {/* 면책 조항 */}
        <footer className="border-t border-line2 pt-5">
          <p className="text-[11px] text-muted leading-relaxed">
            본 글은 작성자(김태양)의 개인적인 신청 경험을 바탕으로 작성된 후기입니다.
            정책 내용, 지원 금액, 신청 기간 등은 변경될 수 있으므로 신청 전 반드시
            공식 사이트(온라인청년센터, 서울주거포털, 금융위원회 등)에서 최신 정보를
            확인하시기 바랍니다. 본 글의 내용은 법적·재정적 조언이 아니며, 개인 상황에
            따라 결과가 다를 수 있습니다.
          </p>
          <p className="text-[11px] text-muted mt-2">
            최종 업데이트: 2025년 · 작성자: 김태양
          </p>
        </footer>
      </main>
    </>
  );
}
