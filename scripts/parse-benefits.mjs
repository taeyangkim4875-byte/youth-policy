/**
 * 정규식 기반 benefit 텍스트 → 구조화 금액 파싱
 * 1차: 정규식으로 추출, 실패 시 benefit_unknown = true
 */

const SUPABASE_URL = process.argv[2];
const SERVICE_KEY = process.argv[3];

// 한글 숫자 → 실제 숫자 변환
function parseKoreanAmount(text) {
  if (!text) return null;

  // "최대 30만원", "월 20만원" 등 지원금 맥락의 금액을 우선 추출
  // 거래금액, 보증금 한도 등 비지원금 금액은 피함
  const priorityPatterns = [
    // "최대 OO만원", "OO만원 지원/지급"
    { regex: /(?:최대|월|매월|연|연간)\s*([\d,.]+)\s*만\s*원/, multiplier: 10000 },
    { regex: /([\d,.]+)\s*만\s*원\s*(?:지원|지급|보조|수당|장려)/, multiplier: 10000 },
    // 일반 만원 (첫 번째 등장)
    { regex: /([\d,.]+)\s*만\s*원/, multiplier: 10000 },
    // 천원 단위
    { regex: /([\d,.]+)\s*천\s*원/, multiplier: 1000 },
    // 원 단위 (큰 숫자, "13,303원" 같은 시급 등)
    { regex: /([\d,]{4,})\s*원/, multiplier: 1 },
    // 억 단위 (대출/보증금 한도일 가능성 높으므로 후순위)
    { regex: /([\d,.]+)\s*억\s*원?/, multiplier: 100000000 },
  ];

  for (const { regex, multiplier } of priorityPatterns) {
    const match = text.match(regex);
    if (match) {
      const num = parseFloat(match[1].replace(/,/g, ''));
      if (!isNaN(num) && num > 0) {
        return num * multiplier;
      }
    }
  }

  return null;
}

// 기간(개월) 추출
function parseDuration(text) {
  if (!text) return null;

  // "최대 12개월", "24개월", "12개월(회)"
  const monthMatch = text.match(/(최대\s*)?([\d]+)\s*개월/);
  if (monthMatch) return parseInt(monthMatch[2]);

  // "1년", "2년", "5년"
  const yearMatch = text.match(/([\d]+)\s*년/);
  if (yearMatch) return parseInt(yearMatch[1]) * 12;

  return null;
}

// benefit 텍스트에서 구조화 데이터 추출
function parseBenefit(benefit) {
  if (!benefit || benefit.trim().length === 0) {
    return { benefit_monthly: null, benefit_total: null, benefit_duration: null, benefit_type: 'unknown', benefit_unknown: true };
  }

  const text = benefit.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // 대출/융자 관련 → loan 타입 (금액 합산에서 제외)
  if (/대출|융자|이자\s*지원|보증금\s*지원|보증료/i.test(text)) {
    const amount = parseKoreanAmount(text);
    return {
      benefit_monthly: null,
      benefit_total: amount,
      benefit_duration: null,
      benefit_type: 'loan',
      benefit_unknown: false,
    };
  }

  // "무료", "무상" → 금액 계산 불가하지만 혜택 있음
  if (/무료\s*(제공|지원|입주)|무상/i.test(text) && !parseKoreanAmount(text)) {
    return { benefit_monthly: null, benefit_total: null, benefit_duration: null, benefit_type: 'free', benefit_unknown: true };
  }

  // 월 지급 패턴: "월 최대 20만원", "월 OO만원", "매월 OO"
  const monthlyPatterns = [
    /월\s*(최대\s*)?([\d,.]+)\s*만\s*원/,
    /매월\s*(최대\s*)?([\d,.]+)\s*만\s*원/,
    /월\s*([\d,.]+)\s*만\s*원/,
    /월\s*(최대\s*)?([\d,]+)\s*원/,
  ];

  let monthly = null;
  for (const pat of monthlyPatterns) {
    const m = text.match(pat);
    if (m) {
      const numStr = m[m.length - 1].replace(/,/g, '');
      const num = parseFloat(numStr);
      if (text.includes('만')) {
        monthly = num * 10000;
      } else {
        monthly = num;
      }
      break;
    }
  }

  const duration = parseDuration(text);

  // 총액 패턴: "최대 OO만원", "OO만원 지원"
  let total = null;
  if (!monthly) {
    total = parseKoreanAmount(text);
  }

  // 월 지급 + 기간 → 총액 계산
  if (monthly && duration && !total) {
    total = monthly * duration;
  }

  // 1회성 판단
  const isOneoff = /1회|일회|일시/i.test(text);

  let type = 'unknown';
  if (monthly) type = 'monthly';
  else if (isOneoff) type = 'lumpsum';
  else if (total) type = 'lumpsum';

  const hasAnyAmount = monthly || total;

  return {
    benefit_monthly: monthly ? Math.round(monthly) : null,
    benefit_total: total ? Math.round(total) : null,
    benefit_duration: duration,
    benefit_type: type,
    benefit_unknown: !hasAnyAmount,
  };
}

async function fetchAll() {
  const all = [];
  let from = 0;
  while (true) {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/policies?select=id,benefit&status=eq.active&limit=1000&offset=${from}`, {
      headers: { 'apikey': SERVICE_KEY, 'Authorization': 'Bearer ' + SERVICE_KEY },
    });
    const data = await r.json();
    if (!data.length) break;
    all.push(...data);
    if (data.length < 1000) break;
    from += 1000;
  }
  return all;
}

async function run() {
  console.log('Fetching policies...');
  const policies = await fetchAll();
  console.log('Total:', policies.length);

  let parsed = 0, unknown = 0, monthly = 0, lumpsum = 0, loan = 0;

  // 배치 업데이트 (50건씩)
  const batchSize = 50;
  for (let i = 0; i < policies.length; i += batchSize) {
    const batch = policies.slice(i, i + batchSize);
    const updates = batch.map(p => {
      const result = parseBenefit(p.benefit);
      if (result.benefit_unknown) unknown++;
      if (result.benefit_type === 'monthly') monthly++;
      if (result.benefit_type === 'lumpsum') lumpsum++;
      if (result.benefit_type === 'loan') loan++;
      parsed++;
      return { id: p.id, ...result };
    });

    // 개별 업데이트 (Supabase REST는 bulk update 미지원)
    for (const u of updates) {
      const { id, ...fields } = u;
      await fetch(`${SUPABASE_URL}/rest/v1/policies?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SERVICE_KEY,
          'Authorization': 'Bearer ' + SERVICE_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });
    }

    process.stdout.write(`\r${parsed}/${policies.length} processed...`);
  }

  console.log('\n\n=== 결과 ===');
  console.log('총 정책:', policies.length);
  console.log('월 지급형:', monthly);
  console.log('일시금형:', lumpsum);
  console.log('대출/융자:', loan);
  console.log('금액 미정:', unknown);
  console.log('금액 파악률:', ((policies.length - unknown) / policies.length * 100).toFixed(1) + '%');

  // 샘플 출력
  console.log('\n=== 파싱 샘플 ===');
  const samples = policies.slice(0, 5);
  samples.forEach(p => {
    const r = parseBenefit(p.benefit);
    console.log({
      benefit: p.benefit?.slice(0, 60),
      ...r,
    });
  });
}

run().catch(e => console.error(e));
