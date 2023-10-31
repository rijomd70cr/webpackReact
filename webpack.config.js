const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" })
    ],

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                                {
                                    "targets": "defaults"
                                }
                            ],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }
        ]
    }
}