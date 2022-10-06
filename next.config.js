// next.config.js
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: [], //['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  env: {
    GOOGLE_CLIENT_ID:
      "852378479279-vtnqa7qqj8cmr8r4g6mq7edrq7e7povg.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    SECRET: "ksjkddskfhsjkdvhskjvbcxnvkjsadajdsbcnb",
    FACEBOOK_CLIENT_ID: "335557988510070",
    FACEBOOK_CLIENT_SECRET: "be4a34a7467ff38344fb08d31abb24d1",
    NEXTAUTH_URL: "https://www.chhattisgarhherbal.com",
    // NEXTAUTH_URL:'http://localhost:3000'
  },
  // distDir: '.next',
  // swcMinify: false,
  // "presets": ["next/babel"],
  images: {
    domains: [
      "res.cloudinary.com",
      "cg-herbal.s3.amazonaws.com",
      "cg-herbal.s3.ap-south-1.amazonaws.com",
      "prakash-art.s3.amazonaws.com",
      "prakash-art.s3.ap-south-1.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
};
