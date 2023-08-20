const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    // new BundleAnalyzerPlugin()
  ],
  entry: './src/index.js',
  output: { 
      filename: 'bundle.js',
      path: path.join(__dirname, '../public')
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // test: /\.(json|geojson)$/,
        // loader: 'json-loader',
          test: /\.geojson$/,
          type: 'json',
        // type: 'javascript/auto'
      },
    ]
  },
  devServer: {
    port: 5001,
    // this will respond with site root page (index.html) if there is no matching route
    historyApiFallback: true
  }
}