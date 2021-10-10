/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // webpack: (config, { dev }) => {
  //   if (!dev) {
  //     config.plugins.push(
  //       new SWPrecacheWebpackPlugin({
  //         staticFileGlobsIgnorePatterns: [/\.next\//],
  //         minify: true,
  //       })
  //     );
  //   }
  // },
};
