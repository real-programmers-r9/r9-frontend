/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = withImages({
  target: '//your target',
  webpack: function (config, { webpack }) {
    config.module.rules.push({
      test: /\.(eot|svg|gif|md)$/,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    })

    return config
  },
})