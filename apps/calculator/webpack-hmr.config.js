const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main.ts',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
};