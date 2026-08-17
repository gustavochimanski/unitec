// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/hiper-erp", destination: "/", permanent: true },
      { source: "/hiper-erp/funcionalidades", destination: "/funcionalidades", permanent: true },
      { source: "/unity-pdv", destination: "/", permanent: true },
      { source: "/mensura-ecommerce", destination: "/", permanent: true },
      { source: "/mensura-ecommerce/funcionalidades", destination: "/funcionalidades", permanent: true },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ]
  },
}

module.exports = nextConfig
