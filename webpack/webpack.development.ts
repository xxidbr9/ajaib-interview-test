import merge from 'webpack-merge';
import baseConfig from './webpack.base';
import { Configuration, WebpackPluginInstance } from 'webpack';
import Dotenv from 'dotenv-webpack';
import paths from './paths';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const envPlugin = new Dotenv({
  path: './.env.development',
});

const config: Configuration = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: paths.build,
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    envPlugin as unknown as WebpackPluginInstance,
    new ReactRefreshWebpackPlugin(),
  ],
});

export default config;
