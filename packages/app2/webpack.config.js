const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map': 'source-map',
  output: {
    publicPath: 'http://localhost:3003/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    port: 3003,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'app2_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/components/App'
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)(s|sx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
