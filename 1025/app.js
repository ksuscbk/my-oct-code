// 通过系统模块创建http服务器
let http = require('http');
let server = http.createServer();
server.listen(2000);

// 通过事件监听来处理请求和响应  request
server.on('request', (req, res) => {
    // req 请求， res响应（状态行  响应头 响应主体）
    // 通过writeHead来设置状态行和响应头
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    })

    // 通过write来设置响应主体，允许执行多次
    res.write('好久不见，焦node');
    // 终止响应
    res.end();
})