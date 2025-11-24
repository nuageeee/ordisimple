import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'animejs': 'animejs/lib/anime.es.js'
    };
    return config;
  },
  turbopack: {
    
  }
};

export default nextConfig;
