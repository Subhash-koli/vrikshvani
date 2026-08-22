import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vrikshvani.com';
  const now = new Date();

  const routes: { path: string; priority: number; freq: 'always' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }[] = [
    // Core
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/about', priority: 0.9, freq: 'weekly' },
    { path: '/features', priority: 0.9, freq: 'weekly' },
    { path: '/pricing', priority: 0.9, freq: 'weekly' },
    { path: '/contact', priority: 0.8, freq: 'monthly' },
    { path: '/glossary', priority: 0.8, freq: 'monthly' },
    // Product
    { path: '/product', priority: 0.95, freq: 'weekly' },
    { path: '/product/craftsmanship', priority: 0.85, freq: 'weekly' },
    { path: '/product/lab-journal', priority: 0.85, freq: 'weekly' },
    // Nature Intelligence & Research
    { path: '/nature-intelligence', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/what-is-ni', priority: 0.95, freq: 'weekly' },
    { path: '/nature-intelligence/nte-voice', priority: 0.85, freq: 'weekly' },
    { path: '/nature-intelligence/research', priority: 0.85, freq: 'weekly' },
    { path: '/nature-intelligence/research/note-001', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/research/note-002', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/research/note-003', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/evidence', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/experiment-log', priority: 0.85, freq: 'weekly' },
    { path: '/vpd-guide', priority: 0.85, freq: 'weekly' },
    { path: '/source-of-truth', priority: 0.9, freq: 'weekly' },
    // Learn
    { path: '/learn', priority: 0.9, freq: 'weekly' },
    // App
    { path: '/app', priority: 0.85, freq: 'weekly' },
    // Blog
    { path: '/blog', priority: 0.85, freq: 'weekly' },
    // Species
    { path: '/species', priority: 0.8, freq: 'weekly' },
    // Community & Waitlist
    { path: '/community', priority: 0.85, freq: 'weekly' },
    { path: '/waitlist', priority: 0.9, freq: 'weekly' },
    // Brand & Legal
    { path: '/sustainability', priority: 0.8, freq: 'monthly' },
    { path: '/press', priority: 0.7, freq: 'weekly' },
    { path: '/careers', priority: 0.7, freq: 'weekly' },
    { path: '/privacy', priority: 0.5, freq: 'monthly' },
    { path: '/terms', priority: 0.5, freq: 'monthly' },
    { path: '/cookies', priority: 0.4, freq: 'monthly' },
    { path: '/accessibility', priority: 0.4, freq: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
