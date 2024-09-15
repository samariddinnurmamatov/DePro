/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  async headers() {
    return [
      {
        source: '/(.*)', // barcha fayllar uchun keshlashni o'rnating
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 yilga mo'ljallangan kesh
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;