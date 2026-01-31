/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ["avatars.githubusercontent.com", "your-cdn.com"]
  }
};

module.exports = nextConfig
