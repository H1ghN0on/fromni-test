/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  env: {
    AXIOS_BASE_URL: "http://localhost:3001",
  },
};

module.exports = nextConfig;
