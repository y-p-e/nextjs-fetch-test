/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/users/csr',
        destination: 'http://localhost:8080/users',
      },
    ]
  },
}

module.exports = nextConfig
