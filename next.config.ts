import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Há um bun.lock em ~ que faz o Turbopack tomar a home como raiz do workspace
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
