/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:5000", "localhost"],
  },
};

module.exports = nextConfig;
