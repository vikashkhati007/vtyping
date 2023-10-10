/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['lh3.googleusercontent.com'], // Add the hostname here
    },
  };
  
  module.exports = nextConfig;
  