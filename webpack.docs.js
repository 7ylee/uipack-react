const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: '/uipack-react/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        }
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