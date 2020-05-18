const path = require('path');
const HtmlkWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // creates style nodes from JS strings
          'css-loader',  // translates CSS into CommonJS
          'sass-loader'  // compilies Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    publicPath: 'http://localhost:8080/build/'
  },
  plugins: [
    new HtmlkWebpackPlugin({
      template: './index.html'
    })
  ]
};