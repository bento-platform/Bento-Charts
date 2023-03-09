const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'BentoCharts.js',
    library: 'bento-charts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      { test: /\.[tj](sx|s)?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ }
    ],
  },
  devServer: {
    static: './dist',
    contentBase: './distgetuk',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = (_env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  }
  return config;
};
