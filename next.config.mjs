/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clips-media-assets2.twitch.tv",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static-cdn.jtvnw.net",
        port: "",
        pathname: "/twitch-clips-thumbnails-prod/**",
      },
    ],
  },
};

export default nextConfig;
