/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // يستعمل SWC WASM على Vercel
  reactStrictMode: true,
}

module.exports = nextConfig
