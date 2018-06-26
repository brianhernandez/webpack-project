let webpack = require('webpack');
const path = require('path');
const SRC = path.join(__dirname, 'src/');
const NODE_MODULES = path.join(__dirname, 'node_modules/');
const VENDOR = path.join(__dirname, 'src/vendor');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
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
          }
      ]
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: 'HEY HEY HEY, This is my banner from BannerPlugin', // the banner as string, it will be wrapped in a comment
        raw: false, // if true, banner will not be wrapped in a comment
        entryOnly: false, // if true, the banner will only be added to the entry chunks
        // test: 'This is a test string for the banner from BannerPlugin' | RegExp | Array,
        // include: string | RegExp | Array,
        // exclude: string | RegExp | Array,
      }),
      new HtmlWebpackPlugin({
        title: 'My Webpack Project',
        hash: true
      })
    ]
};
