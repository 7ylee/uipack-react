const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/uipack-react.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'uipack-react.js',
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
    externals: ['styled-components', 'react', 'react-dom', 'prop-types'],
    plugins: [
        new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    ]
};