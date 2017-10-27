let http = require('http');
let app = http.createServer();

let url = require('url');

let fs = require('fs');

let path = require('path');


let template = require('art-template');
// template.defaults.root = './';
template.defaults.root = __dirname;
template.defaults.extname = '.html';

app.listen(3000, (err) => {
    if(!err) {
        console.log('服务器已启动在3000端口');
    }
});

app.on('request', (req, res) => {     
    res.render = function (tpl, data) {
        let html = template(tpl, data);
        res.write(html);
        res.end();
    }
    // 路由不完全等于地址
    let {pathname} = url.parse(req.url);

    let realPath = path.join('.', pathname);
    switch(pathname) {
        case '/':
            let data = {
                title: '许愿墙',
                info1: '转发点赞，年薪百万',
                name1: '焦强',
                info2: '考上公务员证明自己可以的',
                name2: '帅龄斐',
                info3: '状难写之景如在目前，含不尽之意见于言外',
                name3: '呆橘',
                info4: '伊人独立青莲下，青莲也映明眸盈',
                name4: '萌柚'
            }
            res.render('index', data);
        break;
        default: 
            fs.readFile(realPath, (err, data) => {
                if (!err) {
                    res.write(data);
                    res.end();
                }
            })
        break;
    }
})