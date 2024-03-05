/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
    typedRoutes: true,
  },
};

module.exports = nextConfig;
