//webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  cache: false, // webpack cache issue with src/game/parser.ts not getting changes once cache is established
  devtool: 'inline-source-map',
  entry: {
    main: './src/main.ts',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 3000,
    hot: false,
  },
};
