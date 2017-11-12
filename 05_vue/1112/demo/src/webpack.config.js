
let path = require('path');

module.exports = {
    // 入口
    entry: './js/main.js',
    // 生成文件的出口(位置)
    output: {
        path: path.join(__dirname, '/disk'),
        filename: 'index.js'
    },
    module: {
        rules:[
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader', 'file-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
            }
        ]
    },


    // webpack-dev-server的一些配置信息
    devtool: 'eval',
    devServer: {
        contentBase: __dirname + '/src',  // 要监听的路径
        hot: true,  // 是否热更新
        port: 8085,  // 定义端口 
        host: 'localhost',
        open: true      // 是否自动打开浏览器
    }
}