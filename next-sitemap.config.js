/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://clinicalai.academy',
  generateRobotsTxt: true,
  outDir: './public',
  exclude: ['/academy', '/progress', '/certificate/*', '/contact', '/service', '/payment-success', '/api/*'],
};
