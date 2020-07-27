const path = require('path');
const webpack = require('webpack');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        src: resolveSrc('src'),
        'chart.js': 'chart.js/dist/Chart.js'
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'DBSV After Login Website',
    themeColor: '#ff0000',
    msTileColor: '#ff0000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#ff0000'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
