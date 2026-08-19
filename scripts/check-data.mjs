import { createClient } from '@supabase/supabase-js';
const sb = createClient(process.argv[2], process.argv[3]);

const { data } = await sb.from('policies').select('name,regions,org_name,benefit_total,benefit_type').eq('status', 'active').limit(2000);

// 경기도 정책
const gg = data.filter(p => (p.regions || []).some(r => r.includes('경기')));
console.log('경기도 정책 수:', gg.length);
console.log('\n지역 데이터 샘플:');
gg.slice(0, 10).forEach(p => console.log(JSON.stringify({ n: p.name.slice(0, 30), r: p.regions, o: p.org_name })));

const withCity = gg.filter(p => (p.regions || []).some(r => r.length > 4));
console.log('\n시군구 구분된 정책:', withCity.length);
if (withCity.length > 0) withCity.slice(0, 5).forEach(p => console.log(JSON.stringify({ n: p.name.slice(0, 30), r: p.regions })));

// 비대출 고액
const big = data.filter(p => p.benefit_total > 5000000 && p.benefit_type !== 'loan');
console.log('\n비대출 500만초과:', big.length);
big.slice(0, 8).forEach(p => console.log(JSON.stringify({ n: p.name.slice(0, 30), t: p.benefit_total, ty: p.benefit_type })));
