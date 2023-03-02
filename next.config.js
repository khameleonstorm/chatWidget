/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: 'production' ? 'https://chat-widget-six.vercel.app/' : undefined,
}

module.exports = nextConfig
