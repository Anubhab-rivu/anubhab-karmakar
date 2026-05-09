/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://anubhab.dev',
  generateRobotsTxt: true,
  outDir: './out',
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
