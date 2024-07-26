const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev['process.env.' + next] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, './src/js/index.js')
    },
    snapshot: {
        managedPaths: [path.resolve(__dirname, 'node_modules')]
    },
    watchOptions: {
        followSymlinks: true
    },
    resolve: {
        symlinks: false,
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name][ext]',
        clean: true
    },
    target: 'web',
    devServer: {
        static: path.resolve(__dirname, './src'),
        port: 80,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|dev_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['app'],
            inject: 'body',
            filename: 'index.html'
        }),
        new copyPlugin({
            patterns: [
                // {
                //     from: path.resolve(__dirname, 'src/images'),
                //     to: path.resolve(__dirname, 'dist/images')
                // }
                'src/.nojekyll'
            ]
        })
    ]
};
