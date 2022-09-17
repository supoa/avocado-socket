/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "template.viserlab.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
