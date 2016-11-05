var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    app: "./src/index",
    vendors: ['angular', 'jquery', 'immutable']
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  resolve: {
    moduleDirectories: [path.resolve(__dirname, '/src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
     { test: /\.ts$/, loader: "awesome-typescript-loader", exclude: ['node_modules']}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin('vendors'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};