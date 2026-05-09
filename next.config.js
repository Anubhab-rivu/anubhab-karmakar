const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: { unoptimized: true },
  reactStrictMode: true,
};

// Try to load PWA plugin, skip if not available in dev
let config = withMDX(nextConfig);
try {
  const withPWA = require('@ducanh2912/next-pwa').default;
  if (process.env.NODE_ENV !== 'development') {
    config = withPWA({
      dest: 'public',
      register: true,
      skipWaiting: true,
    })(config);
  }
} catch {
  // PWA plugin not loaded, continue without it
}

module.exports = config;
