
let http = require('http');
let url = require('url');
let fs = require('fs');
let template = require('art-template');
template.defaults.root = __dirname;
template.defaults.extname = '.html';
let path = require('path');

let app = http.createServer();

app.listen(3000, (err) => {
    if(!err) {
        console.log('服务器已启动在3000端口');
    }
});

app.on('request', (req, res) => {

    // 根据请求做出相应的响应
    // let realPath = req.url == '/' ? 'index.html' : path.join('.', req.url);
    
    let {pathname} = url.parse(req.url);
    let realPath = path.join('./', pathname);

    res.render = function (tpl, data) {
        let html = template(tpl, data);
        res.end(html);
    }

    var title = '呆橘';
    switch (pathname) {
        case '/':
        case '/index':
            res.render('index', {title: title});
            break;
        case '/doc':
            res.render('doc', {title: title});
            break;
        case '/blog':
            res.render('blog', {title: title});
            break;
        default:
            fs.readFile(realPath, (err, data) => {
                if (!err) {
                    res.end(data);
                }
            })
    }

})