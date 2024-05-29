/** @type {import('next').NextConfig} */

const nextConfig = {
  // NOTE:
  // output:
  // - 'standalone': Default from Next.js
  // - 'export': Enables starting as a static site export it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets
  //     - After running next build, Next.js will produce an out folder which contains the HTML/CSS/JS assets for your application. https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  //     - When run `npm run export`,you can seeing the final product by run `serve out` (https://github.com/vercel/serve)
  output: process.env.NEXT_OUTPUT_MODE || 'standalone',
  distDir: process.env.NEXT_OUTPUT_FOLDER || 'dist',
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  publicRuntimeConfig: {
    NEXT_BASE_API_URL: process.env.NEXT_BASE_API_URL,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
