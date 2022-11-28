/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["images.stockx.com", "https://discord.com/channels/691711061513994255/917547212475621456"],
  },
}

module.exports = {nextConfig,
module: {
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  ],
}}
