import type { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://youth.moduncalc.com';
  const now = new Date().toISOString();

  // 정적 페이지
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/policies`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/guide/housing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guide/seoul`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guide/finance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guide/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/first-independence`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/job-seeker`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/first-job`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/newlywed`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/gyeonggi`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/busan`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/housing-loan`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/savings-compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/checklist`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/timeline`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide/income-check`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/common-mistakes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/rejection-reasons`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/apply-experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/deadline`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // 동적: 정책별 페이지
  let policyPages: MetadataRoute.Sitemap = [];

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      const { data } = await supabase
        .from('policies')
        .select('id, updated_at')
        .eq('status', 'active');

      if (data) {
        policyPages = data.map((p) => ({
          url: `${base}/policy/${p.id}`,
          lastModified: p.updated_at,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }));
      }
    }
  } catch {
    // Supabase 미연결 시 샘플 페이지만
    policyPages = [
      'sample-1', 'sample-2', 'sample-3', 'sample-4', 'sample-5',
    ].map((id) => ({
      url: `${base}/policy/${id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  }

  return [...staticPages, ...policyPages];
}
