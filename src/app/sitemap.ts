import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vrikshvani.com';
  const now = new Date();

  const routes: { path: string; priority: number; freq: 'always' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }[] = [
    // ── Core Brand Pages (maximum priority for "vrikshvani" brand queries) ──
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/about', priority: 0.95, freq: 'weekly' },
    { path: '/contact', priority: 0.85, freq: 'monthly' },
    { path: '/waitlist', priority: 0.95, freq: 'daily' },
    { path: '/manifesto', priority: 0.85, freq: 'monthly' },
    { path: '/press', priority: 0.8, freq: 'weekly' },

    // ── Product ──
    { path: '/product', priority: 0.95, freq: 'weekly' },
    { path: '/product/features', priority: 0.9, freq: 'weekly' },
    { path: '/product/colorways', priority: 0.85, freq: 'weekly' },
    { path: '/product/specifications', priority: 0.85, freq: 'weekly' },
    { path: '/product/craftsmanship', priority: 0.85, freq: 'weekly' },
    { path: '/product/lab-journal', priority: 0.85, freq: 'weekly' },
    { path: '/product/comparison', priority: 0.8, freq: 'weekly' },
    { path: '/product/unboxing', priority: 0.75, freq: 'weekly' },
    { path: '/features', priority: 0.9, freq: 'weekly' },
    { path: '/pricing', priority: 0.9, freq: 'weekly' },
    { path: '/pricing/enterprise', priority: 0.8, freq: 'weekly' },

    // ── Nature Intelligence & Research ──
    { path: '/nature-intelligence', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/what-is-ni', priority: 0.95, freq: 'weekly' },
    { path: '/nature-intelligence/nte-voice', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/evidence', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/research', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/research/note-001', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/research/note-002', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/research/note-003', priority: 0.9, freq: 'weekly' },
    { path: '/nature-intelligence/experiment-log', priority: 0.85, freq: 'weekly' },
    { path: '/nature-intelligence/open-data', priority: 0.85, freq: 'weekly' },
    { path: '/nature-intelligence/whitepaper', priority: 0.85, freq: 'weekly' },
    { path: '/source-of-truth', priority: 0.9, freq: 'weekly' },
    { path: '/vpd-guide', priority: 0.9, freq: 'weekly' },

    // ── Learn & Content ──
    { path: '/learn', priority: 0.9, freq: 'weekly' },
    { path: '/glossary', priority: 0.85, freq: 'monthly' },
    { path: '/knowledge-base', priority: 0.8, freq: 'weekly' },
    { path: '/blog', priority: 0.85, freq: 'weekly' },
    { path: '/blog/science', priority: 0.8, freq: 'weekly' },
    { path: '/blog/podcast', priority: 0.75, freq: 'weekly' },
    { path: '/vision-100', priority: 0.8, freq: 'monthly' },

    // ── Species Library ──
    { path: '/species', priority: 0.85, freq: 'weekly' },
    { path: '/species/tropical', priority: 0.8, freq: 'weekly' },
    { path: '/species/succulents', priority: 0.8, freq: 'weekly' },
    { path: '/species/orchids', priority: 0.8, freq: 'weekly' },

    // ── Community & Developers ──
    { path: '/community', priority: 0.85, freq: 'weekly' },
    { path: '/community/leaderboard', priority: 0.75, freq: 'weekly' },
    { path: '/community/forum', priority: 0.8, freq: 'weekly' },
    { path: '/developers', priority: 0.85, freq: 'weekly' },
    { path: '/enterprise', priority: 0.85, freq: 'weekly' },

    // ── Brand & Legal ──
    { path: '/sustainability', priority: 0.8, freq: 'monthly' },
    { path: '/referral', priority: 0.7, freq: 'monthly' },
    { path: '/careers', priority: 0.7, freq: 'weekly' },
    { path: '/privacy', priority: 0.5, freq: 'monthly' },
    { path: '/terms', priority: 0.5, freq: 'monthly' },
    { path: '/cookies', priority: 0.4, freq: 'monthly' },
    { path: '/accessibility', priority: 0.4, freq: 'monthly' },
    { path: '/shipping', priority: 0.4, freq: 'monthly' },
    { path: '/warranty', priority: 0.4, freq: 'monthly' },

    // ── Support ──
    { path: '/support/faq', priority: 0.8, freq: 'weekly' },
    { path: '/support/status', priority: 0.7, freq: 'daily' },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
