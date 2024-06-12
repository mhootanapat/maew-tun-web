/** @type {import('next').NextConfig} */

const nextConfig = {
  // NOTE:
  // output:
  // - 'standalone': Default from Next.js
  // - 'export': Enables starting as a static site export it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets
  //     - After running next build, Next.js will produce an out folder which contains the HTML/CSS/JS assets for your application. https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  //     - When run `npm run export`,you can seeing the final product by run `serve out` (https://github.com/vercel/serve)
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/_next/static/(.*).js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=UTF-8',
          },
        ],
      },
      {
        source: '/static/(.*).js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=UTF-8',
          },
        ],
      },
    ];
  },
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
