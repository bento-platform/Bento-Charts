module.exports = {
  mode: 'production',
  entry: './src/index.js',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};