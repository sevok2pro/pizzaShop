const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    webClient: './webClient/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  output: {
    path: `${__dirname}/dist/`,
  },
  plugins: [new HtmlWebpackPlugin()],
};
