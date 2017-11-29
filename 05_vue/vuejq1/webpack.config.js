var path = require('path')
var htmlPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js'
    },

    // 加载器
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
                test: /\.(jpg|jpeg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)$/,
                loader: 'file-loader'
            }
        ]
    },

    // 插件
    plugins: [
        new htmlPlugin ({
            template: './index.html',

            filename: 'test.html'
        })
    ]
}