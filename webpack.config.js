const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'src/pages', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js',
        publicPath: ''
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext]',
                }
            },
            {
                test: /\.(png|svg|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                type: 'asset/resource',
                options: {
                    name: 'assets/[name].[ext]',
                }
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/images'),
                to: path.resolve(__dirname, 'dist/images')
            }]
        })
    ]
};