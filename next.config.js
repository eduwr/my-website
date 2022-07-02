/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR'
  },
  images: {domains: ["cdn.hashnode.com"]}

}

module.exports = nextConfig
