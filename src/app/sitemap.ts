import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vrikshvani.vercel.app';
  const now = new Date();

  const routes: { path: string; priority: number; freq: 'always' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }[] = [
    // Core
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/about', priority: 0.9, freq: 'weekly' },
    { path: '/features', priority: 0.9, freq: 'weekly' },
    { path: '/pricing', priority: 0.9, freq: 'weekly' },
    { path: '/pricing/enterprise', priority: 0.85, freq: 'weekly' },
    { path: '/contact', priority: 0.8, freq: 'monthly' },
    { path: '/glossary', priority: 0.8, freq: 'monthly' },
    // Product
    { path: '/product', priority: 0.95, freq: 'weekly' },
    { path: '/product/colorways', priority: 0.8, freq: 'monthly' },
    { path: '/product/comparison', priority: 0.8, freq: 'monthly' },
    { path: '/product/craftsmanship', priority: 0.75, freq: 'monthly' },
    { path: '/product/unboxing', priority: 0.7, freq: 'monthly' },
    // Nature Intelligence
    { path: '/nature-intelligence', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/nte-voice', priority: 0.85, freq: 'weekly' },
    { path: '/nature-intelligence/research', priority: 0.8, freq: 'weekly' },
    { path: '/nature-intelligence/whitepaper', priority: 0.8, freq: 'monthly' },
    { path: '/nature-intelligence/open-data', priority: 0.8, freq: 'monthly' },
    { path: '/nature-intelligence/iisc-partnership', priority: 0.75, freq: 'monthly' },
    { path: '/nature-intelligence/kew-gardens', priority: 0.75, freq: 'monthly' },
    { path: '/vpd-guide', priority: 0.85, freq: 'weekly' },
    // App
    { path: '/app', priority: 0.85, freq: 'weekly' },
    { path: '/app/smart-home', priority: 0.75, freq: 'weekly' },
    { path: '/app/offline-mode', priority: 0.7, freq: 'monthly' },
    { path: '/app/notifications', priority: 0.7, freq: 'monthly' },
    { path: '/app/fleet-management', priority: 0.75, freq: 'weekly' },
    // Blog
    { path: '/blog', priority: 0.85, freq: 'weekly' },
    { path: '/blog/science', priority: 0.8, freq: 'weekly' },
    { path: '/blog/engineering', priority: 0.8, freq: 'weekly' },
    { path: '/blog/podcast', priority: 0.7, freq: 'weekly' },
    { path: '/blog/authors', priority: 0.6, freq: 'monthly' },
    { path: '/blog/vpd-why-it-matters', priority: 0.8, freq: 'monthly' },
    { path: '/blog/nte-voice-architecture', priority: 0.8, freq: 'monthly' },
    { path: '/blog/open-data-programme-launch', priority: 0.75, freq: 'monthly' },
    // Species
    { path: '/species', priority: 0.8, freq: 'weekly' },
    { path: '/species/tropical', priority: 0.75, freq: 'monthly' },
    { path: '/species/succulents', priority: 0.75, freq: 'monthly' },
    { path: '/species/orchids', priority: 0.75, freq: 'monthly' },
    // Care Guides
    { path: '/care-guides', priority: 0.85, freq: 'weekly' },
    { path: '/care-guides/monstera-deliciosa', priority: 0.8, freq: 'monthly' },
    { path: '/care-guides/fiddle-leaf-fig', priority: 0.8, freq: 'monthly' },
    // Community
    { path: '/community', priority: 0.85, freq: 'weekly' },
    { path: '/community/forum', priority: 0.8, freq: 'daily' },
    { path: '/community/leaderboard', priority: 0.75, freq: 'daily' },
    // Enterprise & Developers
    { path: '/enterprise', priority: 0.85, freq: 'weekly' },
    { path: '/developers', priority: 0.8, freq: 'weekly' },
    { path: '/referral', priority: 0.75, freq: 'weekly' },
    // Brand & Mission
    { path: '/manifesto', priority: 0.8, freq: 'monthly' },
    { path: '/vision-100', priority: 0.75, freq: 'monthly' },
    { path: '/sustainability', priority: 0.8, freq: 'monthly' },
    { path: '/press', priority: 0.7, freq: 'weekly' },
    { path: '/careers', priority: 0.7, freq: 'weekly' },
    // Support
    { path: '/support', priority: 0.8, freq: 'weekly' },
    { path: '/support/status', priority: 0.6, freq: 'daily' },
    { path: '/knowledge-base', priority: 0.8, freq: 'weekly' },
    { path: '/shipping', priority: 0.7, freq: 'monthly' },
    { path: '/warranty', priority: 0.7, freq: 'monthly' },
    // Legal
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
