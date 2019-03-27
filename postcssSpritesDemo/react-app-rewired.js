const path = require('path');

module.exports = {
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader' 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ['@babel/react', '@babel/es2015'],
                   plugins: ['@babel/proposal-class-properties']
                }
            },
            // {
            //     test:/\.(jpg|png|gif)/,
            //     use:['url-loader']
            // },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash:5].min.[ext]",
                            limit: 8192, // size <= 8KB
                                      publicPath: "../images",
                            outputPath: "./images"
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            },
        ]
    }
}