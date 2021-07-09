const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
      },
      resolve: {
        extensions: ['.js'],
      },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [

                    {
                        loader: "file-loader"
                    }
                ],
            },

        ],

    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html'
        }),
    ],

}