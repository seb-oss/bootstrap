const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

const unminifiedBuild = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'bootstrap': './bootstrap-prebuilt.js',
    'bootstrap-all': './bootstrap-prebuilt-all.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib/css'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: path.resolve(__dirname, 'scss')
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

const minifiedBuild = {
  mode: 'production',
  entry: {
    'bootstrap.min': './bootstrap-prebuilt.js',
    'bootstrap-all.min': './bootstrap-prebuilt-all.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib/css'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, 'scss')
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = () => {
  return [unminifiedBuild, minifiedBuild];
};
