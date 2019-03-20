const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { env } = require('yargs').argv;

let mode;
let output;
let optimization;

if (env === 'build') {
    mode = 'production';
    output = {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: '/uipack-react/'
    };
    optimization = {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        }
    };
} else {
    mode = 'development';
    output = {
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js',
        publicPath: '/'
    };
    optimization = {};
}

const config = {
    mode,
    entry: './demo/index.js',
    devtool: 'eval',
    output,
    optimization,
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 9000
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
                use: 'file-loader?name=./assets/images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'demo/index.html',
            filename: 'index.html',
            favicon: 'demo/favicon.ico'
        })
    ]
};

module.exports = config;