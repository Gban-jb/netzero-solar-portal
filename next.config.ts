import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the build simple and predictable: four other students will be
  // opening PRs against this repo, so we avoid opt-in caching features
  // that produce confusing build errors for contributors.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
