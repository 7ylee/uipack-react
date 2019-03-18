const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval',
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 9000
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'demo.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader?name=assets/images/[name].[ext]'
            }
        ]
    },
    externals: [],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};