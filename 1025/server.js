let http = require('http');
// url系统模块处理地址上的参数
let url = require('url');

// 处理字符串
let queryString = require('querystring');

let server = http.createServer();
server.listen(2000, (err) => {
    if (!err) {
        console.log('服务器已在2000端口启用');        
    }
})

server.on('request', (req, res) => {
    // 请求(请求行，请求头，请求主体)
        // 请求头一般认为由请求方式req.method和请求地址req.url组成
        // get
    // console.log('您的请求方式是', req.method);
    // console.log('您的请求地址为', req.url);
    // // console.log('您的请求头为', req.headers);
    // // 处理请求中的参数
    // let params = url.parse(req.url, true); // true表示将参数从字符串的形式转换为对象形式
    // console.log(params.query);
    // console.log(params.query.username, params.query.pass);
    // res.end();


        // post  当数据以post方式上传时，会触发一个data事件               chunk一小块
    let formData = '';
    // 上传数据时会触发data事件
    req.on('data', (chunk) => {
        formData += chunk;
    })
    // post方式数据传输完毕会触发end事件
    req.on('end', () => {
        console.log(formData);
        let parmas = queryString.parse(formData);
        console.log(parmas);
    })

    res.end();
    
})