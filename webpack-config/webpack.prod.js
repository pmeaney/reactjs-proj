const path = require("path")
const webpack = require("webpack")

// https://stackoverflow.com/questions/65298689/uglifyjs-and-webpack-v5
const TerserPlugin = require("terser-webpack-plugin");
const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    target: 'web',
    // context: path.resolve(__dirname, '../src/client'),
    entry: {
      // 'youCanSet_FileOutput_NameHere__eg__bundlefile': './src/index.js',
      'bundle': './src/index.js',
    },
    mode: "production",
    output: {
      filename: "[name].js", // <-- corresponds to object key (in place of "entry" in entry object above)
      // filename: 'bundle.js',
      path: path.join(__dirname, '../public'),
    },
    optimization: {
      splitChunks: {
        automaticNameDelimiter: "-",
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "initial",
            minChunks: 2
          }
        }
      },
      minimize: true,
      minimizer: [
        new TerserPlugin(),
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader', // dumps css file into style tag
          MiniCssExtractPlugin.loader,
          'css-loader', // reads css files in
          'sass-loader' // reads sass files in
        ]
      }
      ]
    },
    plugins: [
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
      }),
      // new OptimizeCssAssetsPlugin({
      //   assetNameRegExp: /\.s?[ac]ss$/g,
      //   cssProcessor: require("cssnano"),
      //   cssProcessorOptions: { discardComments: { removeAll: true } },
      //   canPrint: true
      // }),
      // new BrotliPlugin({
      //   asset: '[path].br[query]',
      //   test: /\.(js|css|html|svg)$/,
      //   threshold: 10240,
      //   minRatio: 0.8
      // }),
    ]
}