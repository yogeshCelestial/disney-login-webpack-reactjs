const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"), // the bundle output path
        filename: "bundle.js", // the name of the bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    devServer: {
        port: 3030, // you can change the port
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192, // Convert images < 8kb to base64 strings
                      name: 'src/assets/[name].[hash:8].[ext]', // Output path and filename pattern
                    },
                  },
                ],
            },
            // {
            //     test: /\.(cjs)$/i,
            //     use: ['file-loader'],
            // }
        ],
    },
};