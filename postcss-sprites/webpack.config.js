const path = require('path');

module.exports = {
    mode: "production", 
    entry: "./src/App.js", 
    output:{
        path: path.resolve(__dirname, 'dist'), 
        filename:'build.js', 
        publicPath:"src/assets/"
    },
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
            {
                test:/\.(jpg|png|gif)/,
                use:['url-loader']
            }
        ]
    },
    //其他解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
    },
    //插件
    plugins:[
        
    ]
}