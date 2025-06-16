/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // Removed: experimental.appDir - no longer needed in Next.js 14
}

module.exports = nextConfig