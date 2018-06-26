// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const path = require('path');
// const SRC = path.join(__dirname, 'src/');
// const NODE_MODULES = path.join(__dirname, 'node_modules/');
// const JQUERY = path.join(__dirname, 'src/vendor');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.(s)?css$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
    devServer: {
      contentBase: __dirname + '/dist',
      compress: true,
      port: 9000
    }
  });
