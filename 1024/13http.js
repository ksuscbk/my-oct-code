// 通过http模块可以创建一个http服务器  例如通过createServer
let http = require('http');
let url = require('url');
let server = http.createServer();
// 通过服务器实例来处理请求和响应   get/post + url
// 通过服务器实例的listen方法来实现端口的监听
server.listen(2000);

// 通过服务器实例的request事件来处理客户端的请求并根据情况作出响应
// 每当修改了nodejs代码后，需要重新启动
server.on('request', (req, res) => {
    console.log('居然有人来来来来来来来来访问了');    
    // req请求   res响应
    // console.log(res);
    // console.log(req.headers);
    // console.log(req.url);
    console.log(url.parse(req.url, true));

    // 回调函数中可以设置两个参数，分别对应请求和响应
    res.writeHead('200', {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.write('hello, brower!');
    res.write('哈哈哈');
    // 响应终止
    res.end();
});