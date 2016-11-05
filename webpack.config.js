var path = require('path');
module.exports = {
  entry: "./src/index",
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
     { test: /\.ts$/, loader: "awesome-typescript-loader"}
    ]
  }
};