const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIST = [
  'react',
  'redux',
  'react-redux',
  'react-dom',
  'react-router-dom',
  'material-ui'
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIST
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      use: [ 'style-loader', 'css-loader' ],
      test: /\.css$/
    }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      title: 'Mastering-Redux-V2'
    })
  ]
}
