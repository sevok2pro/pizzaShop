const HtmlWebpackPlugin = require('html-webpack-plugin');

function makeConfig(env) {
  const { app } = env;
  return {
    entry: {
      [app]: `./${app}/index.ts`,
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
      path: `${__dirname}/dist/${app}`,
    },
    plugins: [new HtmlWebpackPlugin()],
  };

}

module.exports = makeConfig
