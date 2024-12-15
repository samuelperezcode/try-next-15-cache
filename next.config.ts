import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    inlineCss: true,
    ppr: true,
    dynamicIO: true,
    authInterrupts: true,
  }
};

export default nextConfig;
