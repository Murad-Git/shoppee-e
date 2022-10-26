/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'flowbite.com',
      'cdn.sanity.io',
    ],
  },
  // reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
