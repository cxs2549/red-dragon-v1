/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dummyimage.com", "www.storz-bickel.com", "cdn.shopify.com"],
  },
}

module.exports = nextConfig
