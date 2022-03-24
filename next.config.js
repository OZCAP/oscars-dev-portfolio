/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["cpqgggswxufbyvaoaryi.supabase.in"]
  }
}

module.exports = nextConfig
