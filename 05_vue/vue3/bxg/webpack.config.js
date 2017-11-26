const path = require('path');

const htmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },

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

    plugins: [
        new htmlPlugin({
            //  原html
            template: './index.html',
            // 新html名字  在出口位置生成
            filename: 'test.html'
        })
    ]
}