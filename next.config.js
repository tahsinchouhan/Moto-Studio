// next.config.js
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: [] //['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  env: {
    GOOGLE_CLIENT_ID: '597197014261-l362ikvagqd00e6av736rl5r8bj1vldu.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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',
    SECRET:'ksjkddskfhsjkdvhskjvbcxnvkjsadajdsbcnb',
    FACEBOOK_CLIENT_ID:'335557988510070',
    FACEBOOK_CLIENT_SECRET:'be4a34a7467ff38344fb08d31abb24d1',
    NEXTAUTH_URL:'https://manchtantra.com'
  },
  // distDir: '.next',
  // swcMinify: false,
  // "presets": ["next/babel"],
  images: {
    domains: [
      'res.cloudinary.com',
      'cg-herbal.s3.amazonaws.com',
      'cg-herbal.s3.ap-south-1.amazonaws.com',
      'prakash-art.s3.amazonaws.com',
      'prakash-art.s3.ap-south-1.amazonaws.com',
      'res.cloudinary.com'
    ],
  },
  
}