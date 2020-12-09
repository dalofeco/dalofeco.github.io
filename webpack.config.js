const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app.tsx',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8000,
  },

  module: {
    rules: [
      // tsx files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      // css files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // less files
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          'less-loader', // compiles less to CSS, using Node Sass by default
        ],
      },
      // sass files
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // For image files
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: '/',
        },
      },

      // Next 3 for font files
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]',
          mimetype: 'application/font-otf',
        },
      },
    ],
  },
  plugins: [
    // this handles the bundled .css output file
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new EnvironmentPlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'production',
    }),
    new HtmlWebpackPlugin({
      title: 'Dalofeco',
      template: path.join(__dirname, 'src/index.html'),
      hash: true,
    }),
  ],
  optimization:
    process.env.NODE_ENV === 'production'
      ? {
          minimize: true,
          minimizer: [new TerserPlugin()],
          splitChunks: {
            chunks: 'all',
          },
        }
      : {
          minimize: false,
        },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less', '.scss'],
  },
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
