const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin=require('extract-text-webpack-plugin');

const cwd = (...args) => path.join(__dirname, ...args)

module.exports = function override(config, env) {
    config = {
        mode:'development',
        entry:'./src/index.js',
        output:{
            path: path.resolve(__dirname, "build"),
            filename: '[name].[chunkHash:5].js'
        },
        module:{
            rules:[
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                name: "[name]-[hash:5].[ext]",
                                limit: 5,
                                outputPath: "./assets/images"
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: 
                        ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: [
                                {
                                    loader: 'css-loader'
                                },
                                {
                                    loader: 'postcss-loader',
                                    options:{
                                        ident:'postcss',
                                    }
                                }
                            ]
                        })
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                       presets: ['@babel/react'],
                       plugins: ['@babel/proposal-class-properties']
                    }
                }
            ]
        },
        plugins:[
            new htmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                inject: 'body'
            }),
            new ExtractTextPlugin({
                filename: './assets/css/[name]-[hash:5].css'
            })
        ]
    }
    return config;
}