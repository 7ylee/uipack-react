/* global __dirname, require, module */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const { env } = require('yargs').argv; // use --env with webpack 2
const pkg = require('./package.json');

const libraryName = pkg.name;

let outputFile; let mode; let plugins;

if (env === 'build') {
    mode = 'production';
    outputFile = `${libraryName}.min.js`;
    plugins = [
        new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    ];
} else {
    mode = 'development';
    outputFile = `${libraryName}.js`;
    plugins = [];
}

const config = {
    mode,
    entry: `${__dirname}/src/index.js`,
    devtool: 'inline-source-map',
    output: {
        path: `${__dirname}/lib`,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: ['react', 'react-dom', 'prop-types', 'styled-components'],
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    },
    plugins
};

module.exports = config;
