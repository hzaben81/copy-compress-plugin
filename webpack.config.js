const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new CompressionPlugin(),

    // version 5.1.2
    // new CopyWebpackPlugin([
    //   './data.json',
    // ])

    // version 6 and above
    new CopyWebpackPlugin({
      patterns: [
        './data.json',
      ]
    })
  ]
};
