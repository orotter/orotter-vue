/* eslint-env node */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./webpack.config.base')

config.context = path.resolve(__dirname, 'src')
config.entry = [
  'vuex-toast/dist/vuex-toast.css',
  './main.scss',
  './main.js'
]
config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'main.js'
}

config.plugins.push(
  new HtmlWebpackPlugin({
    template: '../index.html'
  })
)

if (process.env.NODE_ENV === 'production') {
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  config.module.loaders.push({ test: /\.s?css$/, loader: ExtractTextPlugin.extract('css') })
  config.vue.loaders.scss = config.vue.loaders.css = ExtractTextPlugin.extract('css')

  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('main.css')
  ])
} else {
  const Dashboard = require('webpack-dashboard')
  const DashboardPlugin = require('webpack-dashboard/plugin')
  const dashboard = new Dashboard()

  config.plugins.push(
    new DashboardPlugin(dashboard.setData)
  )

  config.devtool = 'source-map'

  config.module.loaders.push({ test: /\.s?css$/, loader: 'style!css' })
  config.vue.loaders.scss = 'style!css!sass'
}

module.exports = config
