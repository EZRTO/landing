/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ezrto.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://ezrto.in/server-sitemap.xml',
    ],
  },
};

module.exports = config;
