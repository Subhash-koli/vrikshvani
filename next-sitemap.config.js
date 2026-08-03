// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vrikshvani.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/api/*',
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/blog/vpd-explained'),
    await config.transform(config, '/blog/flir-thermal-imaging'),
    await config.transform(config, '/blog/nte-voice-architecture'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    additionalSitemaps: [],
  },
};
