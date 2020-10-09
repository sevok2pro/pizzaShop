const HtmlWebpackPlugin = require('html-webpack-plugin');

function makeConfig(env) {
  const { app } = env;
  return {
    entry: {
      [app]: `./${app}/index.ts`,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css'],
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                import: true,
                modules: true,
              }
            }
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: ['file-loader?name=img/[name].[hash].[ext]'],
        },
      ],
    },
    output: {
      path: `${__dirname}/dist/${app}`,
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
      historyApiFallback: true
    }
  };
}

module.exports = makeConfig
