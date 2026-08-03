import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vrikshvani.com';
  const now = new Date();

  const routes: { path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' }[] = [
    // Core
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/about', priority: 0.9, freq: 'weekly' },
    { path: '/waitlist', priority: 0.95, freq: 'daily' },
    { path: '/pricing', priority: 0.9, freq: 'weekly' },
    { path: '/pricing/calculator', priority: 0.8, freq: 'weekly' },
    // Product
    { path: '/product', priority: 0.95, freq: 'weekly' },
    { path: '/product/features', priority: 0.85, freq: 'weekly' },
    { path: '/product/colorways', priority: 0.8, freq: 'weekly' },
    { path: '/product/specifications', priority: 0.8, freq: 'monthly' },
    { path: '/product/craftsmanship', priority: 0.75, freq: 'monthly' },
    { path: '/product/unboxing', priority: 0.7, freq: 'monthly' },
    { path: '/product/comparison', priority: 0.8, freq: 'monthly' },
    // Technology
    { path: '/nature-intelligence', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/nte-voice', priority: 0.85, freq: 'weekly' },
    { path: '/nature-intelligence/research', priority: 0.8, freq: 'weekly' },
    { path: '/nature-intelligence/whitepaper', priority: 0.8, freq: 'monthly' },
    { path: '/nature-intelligence/open-data', priority: 0.75, freq: 'monthly' },
    // App
    { path: '/app', priority: 0.85, freq: 'weekly' },
    { path: '/app/fleet-management', priority: 0.75, freq: 'weekly' },
    { path: '/app/smart-home', priority: 0.75, freq: 'weekly' },
    // Blog
    { path: '/blog', priority: 0.85, freq: 'weekly' },
    { path: '/blog/vpd-explained', priority: 0.8, freq: 'monthly' },
    { path: '/blog/flir-thermal-imaging', priority: 0.8, freq: 'monthly' },
    { path: '/blog/nte-voice-architecture', priority: 0.8, freq: 'monthly' },
    // Community
    { path: '/community', priority: 0.85, freq: 'weekly' },
    { path: '/community/forum', priority: 0.8, freq: 'daily' },
    { path: '/community/leaderboard', priority: 0.75, freq: 'daily' },
    // Care Guides
    { path: '/care-guides', priority: 0.85, freq: 'weekly' },
    { path: '/care-guides/monstera-deliciosa', priority: 0.8, freq: 'monthly' },
    { path: '/care-guides/ficus-lyrata', priority: 0.8, freq: 'monthly' },
    { path: '/care-guides/calathea-orbifolia', priority: 0.75, freq: 'monthly' },
    { path: '/care-guides/sansevieria-trifasciata', priority: 0.75, freq: 'monthly' },
    { path: '/care-guides/phalaenopsis-orchid', priority: 0.75, freq: 'monthly' },
    { path: '/care-guides/pothos-epipremnum', priority: 0.75, freq: 'monthly' },
    // Enterprise & Referral
    { path: '/enterprise', priority: 0.8, freq: 'weekly' },
    { path: '/enterprise/quote', priority: 0.75, freq: 'weekly' },
    { path: '/referral', priority: 0.8, freq: 'weekly' },
    // Press & Sustainability
    { path: '/press', priority: 0.7, freq: 'weekly' },
    { path: '/sustainability', priority: 0.8, freq: 'monthly' },
    // Support
    { path: '/support', priority: 0.8, freq: 'weekly' },
    { path: '/support/faq', priority: 0.8, freq: 'weekly' },
    { path: '/support/status', priority: 0.6, freq: 'daily' },
    { path: '/shipping', priority: 0.7, freq: 'monthly' },
    { path: '/warranty', priority: 0.7, freq: 'monthly' },
    { path: '/developers', priority: 0.75, freq: 'weekly' },
    // Company
    { path: '/contact', priority: 0.7, freq: 'monthly' },
    { path: '/careers', priority: 0.7, freq: 'weekly' },
    { path: '/privacy', priority: 0.5, freq: 'monthly' },
    { path: '/terms', priority: 0.5, freq: 'monthly' },
    { path: '/cookies', priority: 0.4, freq: 'monthly' },
    // Order
    { path: '/order/confirm', priority: 0.3, freq: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
