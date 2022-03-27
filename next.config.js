/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: false,
  },
  reactStrictMode: true,
  images: {
    domains: ["cpqgggswxufbyvaoaryi.supabase.in", "cpqgggswxufbyvaoaryi.supabase.co"]
  }
}

module.exports = nextConfig
