const path = require("path");

/**
 * @type {import("next").NextConfig}
 */
module.exports = {
  i18n: {
    locales: ["en", "uz", "ru"],
    defaultLocale: "en",
    localePath: path.resolve("./public/locales"),
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  swcMinify: true,
  ns: ["common", "not-found", "internal-server-error"],
};
