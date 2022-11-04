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
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
