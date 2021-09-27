const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// 패키지 가져오기

module.exports = {
  entry: './js/main.js', 
  output: {
    clean: true 
  },

  module: { 
    // module: 여러 모듈들(scss, css, js 등...)을 여러 가지 loader 들로 분석하여 사용
    rules: [
      {
        test: /\.s?css$/, 
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader',
          'sass-loader' 
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [ 
    new HtmlPlugin({ 
      template: './index.html' 
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' } 
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}
