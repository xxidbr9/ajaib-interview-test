import paths from './paths'
import { merge } from 'webpack-merge'
import baseConfig from './webpack.base'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

// const Dotenv = require('dotenv-webpack');
import Dotenv from 'dotenv-webpack'
import { WebpackPluginInstance } from 'webpack'

// const envPlugin = new Dotenv({
//   path: './.env.production',
// })

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: './',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  plugins: [
    // envPlugin as unknown as WebpackPluginInstance,
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
