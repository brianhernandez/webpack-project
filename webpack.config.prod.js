// let webpack = require('webpack');
const path = require('path');
const SRC = path.join(__dirname, 'src/');
const NODE_MODULES = path.join(__dirname, 'node_modules/');
const VENDOR = path.join(__dirname, 'src/vendor');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',                  // entry point
    output: {                                 // output folder
        path: path.join(__dirname, 'dist'),   // folder path
        filename: 'my-app.js'                 // file name
    },
    resolve: {
      modules: [SRC, NODE_MODULES, path.join(SRC, 'modules'), VENDOR]
    },
    module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.(s)?css$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
          }
      ]
    },
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: false
          }
        },
        sourceMap: true
      }),
      new ExtractTextPlugin("my-app.min.css"),
      new HtmlWebpackPlugin({
        title: 'My Webpack Project',
        hash: false
      })
    ]
};
