// next.config.js
module.exports = {
  reactStrictMode: true,
  // distDir: '.next',
  // swcMinify: false,
  // "presets": ["next/babel"],
  images: {
    domains: [
      'cg-herbal.s3.amazonaws.com',
      'cg-herbal.s3.ap-south-1.amazonaws.com'
    ],
  },
  
}