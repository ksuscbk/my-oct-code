
let path = require('path');

module.exports = {
    // 入口
    entry: './js/main.js',
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
            }
        ]
    }
}