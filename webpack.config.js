const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
        entry: "./src/index.js",
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
                template: './public/index.html'
            }),
        ],

    }
    // const productionConfig = merge([{
    //     output: {

//         publicPath: "./dist/index.html",
//     },
// }, ]);