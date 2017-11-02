let express = require('express');

let home = express.Router();
// 处理用户数据
let user = require('../models/user');

// 博客
let post = require('../models/post');

// 前台子路由
home.get('/', (req, res) => {

    // 每页几条数据        当前第几页     总共多少页   
    let pageSize = 2;
    // 当前页
    let page = req.query.page || 1;

    post.count((err, row) => {
        if (err) return;
        // 总文章数    我封装的方法返回的是数组，所以要二次取值
        let total = row[0].total;
        // 页数
        let pages = Math.ceil(total / pageSize);

        post.findAll(pageSize, page, (err, rows) => {
            if (!err) {
                res.render('home/index', {
                    post: rows,
                    pages: pages,
                    page: page
                });
            }
        })
    })

    
})

// 文章页
home.get('/article', (req, res) => {
    post.find(req.query.id, (err, rows) => {
        if (!err) {
            res.render('home/article', {post: rows[0]});
        }
    })
})

home.get('/about', (req, res) => {
    res.render('home/about', {});
})

home.get('/center', (req, res) => {
    res.render('home/center', {})
})

home.get('/join', (req, res) => {
    res.render('home/join', {})
})

home.get('/login', (req, res) => {
    res.render('home/login', {});
})

home.get('/register', (req, res) => {
    res.render('home/register', {});
})

// 注册用户
home.post('/register', (req, res) => {
    // res.send('注册');
    user.insert(req.body, (err) => {
        if (!err) {
            // express 的json方法
            res.json({
                code: 555,
                msg: '注册成功'
            });
        }
    })

})

// 登陆
home.post('/login', (req, res) => {
    user.auth(req.body.email, req.body.pass, (err, row) => {
        if (!err) {

            // 存一个session
            req.session.logininfo = row;
            res.json({
                code: 10000,
                msg: '登陆成功'
            })
        }
    })
})



module.exports = home;