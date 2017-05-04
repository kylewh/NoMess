const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIST = [
  'react',
  'redux',
  'redux-logger',
  'redux-thunk',
  'react-redux',
  'react-dom',
  'react-router-dom',
  'react-transition-group',
  'material-ui',
  'underscore',
  'normalizr',
  'leancloud-storage',
  'classnames',
  'history',
  'styled-components'
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIST
  },
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
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
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
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
