/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'flowbite.com'],
  },
  // reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
