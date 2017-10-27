let url = require('url');
let template = require('art-template');
template.defaults.root = './views';
// console.log(__dirname);
template.defaults.extname = '.html';
let db = require('./database/students.json');
let fs = require('fs');
let path = require('path');

let http = require('http');
let app = http.createServer();
app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器已在3000端口启动');    
    }
})
app.on('request', (req, res) => {
    // 获得请求路径
    let {pathname} = url.parse(req.url);
    // console.log(pathname);
    let realPath = path.join('./public', pathname);

    // 对模板引擎进行封装
    res.render = function (tpl, data) {
        let html = template(tpl, data);
        res.end(html);
    }

    // 根据请求路径创建路由给前端相应的响应
    switch(pathname) {
        case '/add':
        case '/':
            res.render('add', {});
            break;
        
        case '/list':
            res.render('list', {list:db});
            break;
        // 添加一个学生信息
        case '/create':
            // 接收get上表单传的参数，并处理成对象形式
            var {query} = url.parse(req.url, true);
            // 在json文件中追加一个数据
            db.push(query);

            // 写入文件
            fs.writeFile('./database/students.json', JSON.stringify(db), (err) => {
                if (!err) {
                    res.writeHeader(302, {
                        // 写入数据后跳转到列表页并展示
                        'Location': './list'
                    })
                }
                res.end();
            })
            break;
        // 删除一个学生信息
        case '/del':
            var {query} = url.parse(req.url);
            var idx = query.split('');
            idx = idx[idx.length - 1];
            db.splice(idx, 1);
            // 写入文件
            fs.writeFile('./database/students.json', JSON.stringify(db), (err) => {
                if (!err) {
                    res.writeHeader(302, {
                        // 写入数据后跳转到列表页并展示
                        'Location': './list'
                    })
                }
                res.end();
            })
            break;
        default: 
            // 处理静态请求
            fs.readFile(realPath, (err, data) => {
                if (!err) {
                    res.end(data);
                }
            });
    }
})