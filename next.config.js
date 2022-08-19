/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com","template.viserlab.com"],
  },
};

module.exports = nextConfig;
