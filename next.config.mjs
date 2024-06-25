/** @type {import('next').NextConfig} */
const nextConfig = {};

const withVideos = require("next-videos");

module.exports = withVideos({
  assetPrefix: "https://example.com",

  webpack(config, options) {
    return config;
  },
});
export default nextConfig;

