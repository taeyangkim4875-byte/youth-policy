import { createClient } from '@supabase/supabase-js';
import type { Policy } from './types';

export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export async function fetchAllPolicies(): Promise<Policy[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const all: Policy[] = [];
  const pageSize = 1000;
  let from = 0;

  while (true) {
    const { data, error } = await supabase
      .from('policies')
      .select('*')
      .eq('status', 'active')
      .order('updated_at', { ascending: false })
      .range(from, from + pageSize - 1);

    if (error || !data || data.length === 0) break;
    all.push(...(data as Policy[]));
    if (data.length < pageSize) break;
    from += pageSize;
  }

  return all;
}
