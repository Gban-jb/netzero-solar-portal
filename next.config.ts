import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the build simple and predictable: four other students will be
  // opening PRs against this repo, so we avoid opt-in caching features
  // that produce confusing build errors for contributors.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  turbopack: {
    // Pin the workspace root. Without this, Turbopack walks up and
    // finds stray lock files above the repository and warns about
    // them on every build — confusing for contributors.
    root: path.resolve(process.cwd()),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
