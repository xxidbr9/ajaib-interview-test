import paths from './paths';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import BrotliPlugin from 'brotli-webpack-plugin';

// const Dotenv = require('dotenv-webpack');
import Dotenv from 'dotenv-webpack';
import { WebpackPluginInstance } from 'webpack';

const envPlugin = new Dotenv({
  path: './.env.production',
});

const brotliCompression = new BrotliPlugin({
  asset: '[path].br[query]',
  test: /\.(js|css|html|svg)$/,
  threshold: 10240,
  minRatio: 0.8,
});

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: './',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  plugins: [
    envPlugin as unknown as WebpackPluginInstance,
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    // serve file with brotli compression in production
    brotliCompression as unknown as WebpackPluginInstance,
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
});
