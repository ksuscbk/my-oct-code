let http = require('http');
let app = http.createServer();

let url = require('url');

let db = require('./config/db.js');

let mime = require('mime');

let fs = require('fs');

let path = require('path');

let mysql = require('mysql');
// 使用mysql模块提供的方法操作数据库
    // 连接
    let connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'wish'
    });

let template = require('art-template');
// template.defaults.root = './';
template.defaults.root = './views';
template.defaults.extname = '.html';
// 解决前后端模板符号冲突问题
template.defaults.rules[1].test = /##([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*##/;

app.listen(3000, (err) => {
    console.log('服务器在3000端口启动');
});

app.on('request', (req, res) => {     
    res.render = function (tpl, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        let html = template(tpl, data);
        res.write(html);
        res.end();
    }
    // 路由不完全等于地址  获取前端提交的地址和参数
    let {pathname, query} = url.parse(req.url, true);

    let realPath = path.join('./public', pathname);
    switch(pathname) {
        case '/':

        case '/index':
            // 加载的时候把数据库中数据展示在页面上
            // console.log(__dirname);
            db.query('select * from lists', (err, rows) => {
                if (!err) {
                    // rows是查询结果，为数组格式
                    res.render('index', {lists: rows});
                }
            })
            break;

        case '/create':
            // query.id = 5;
            // 序号
            query.no = Math.ceil(Math.random() * 1000000);
            // 发布时间
            query.datetime = new Date();
            console.log(query);
            // console.log(db);
            
            // 执行sql语句
            connection.query('insert into lists set ?', query, (err, info) => {
                if (!err) {
                    // 响应数据为json格式
                    res.writeHead('200', {
                        'Content-Type': 'application/json'
                    })

                    res.end(JSON.stringify({
                        code: 555,
                        msg: '添加成功!',
                        result: query
                    }));
                }
            })
            break;
        default: 
            fs.readFile(realPath, (err, data) => {
                if (!err) {
                    res.writeHead(200, {
                        'Content-Type': mime.getType(realPath)
                    })
                    res.write(data);
                    res.end();
                }
            })
            // break;
    }
})





// let mysql = require('mysql');
// 使用mysql模块提供的方法操作数据库
    // 连接
    // let connection = mysql.createConnection({
    //     host     : 'localhost',
    //     user     : 'root',
    //     password : '123456',
    //     database : 'wish'
    // });
    // 操作数据库
    // connection.query('select * from lists', (err, rows) => {
    //     if (!err) {

    //     }
    // });

    // connection.query('insert into lists (id, username, content, no, datetime) values ("1", "小明", "自己滚出去", "456", "2017-10-28 11:09:13")');
    // 为了避免字符串的拼接  mysql模块进行了封装 可以使用?充当一个占位符，表示将来此处会替换一个变量
    // let username = '焦强';
    // let no = 1;
    // connection.query("select * from lists where username = ? and no = ?", [username, no], (err, rows) => {
    //     console.log(rows);
    // })

    // 稍微复杂点的数据结构   如果数据是对象，会转成key1=val1,key2=val2  通过connection.query返回的结果可以查看真正执行的sql语句
    // connection.query('select * from lists where ?', [{username:username}, {no:no}], (err, rows) => {
        // console.log(rows);
    // })