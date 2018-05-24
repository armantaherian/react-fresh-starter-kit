const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    clientLogLevel: "error",
    compress: true,
    stats: "errors-only",
    host: 'localhost',
    port: 4000,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
})
