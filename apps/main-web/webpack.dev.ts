import path from 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin')

export default {
  entry: './src/main',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.mjs', '.js'],
  },
  
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    })
  ]
}