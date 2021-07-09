const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
    
    plugins: [
        new HtmlWebpackPlugin({
             template: './public/index.html' 
            }),
      ],
      stats: 'errors-only',
}