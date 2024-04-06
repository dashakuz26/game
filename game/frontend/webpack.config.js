const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {HTMLWebpackPlugin} = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "main.js"
  },
  plugins : [
      new HtmlWebpackPlugin({template: "./templates/frontend/index.html"}),
      new CleanWebpackPlugin
  ]
};