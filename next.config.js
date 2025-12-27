/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play.google.com',
        pathname: '/intl/**',
      },
    ],
  },
}

module.exports = nextConfig
