let express = require('express');

let home = express.Router();
// 处理用户数据
let user = require('../models/user');

// 前台子路由
home.get('/', (req, res) => {
    res.render('home/index', {})
})

home.get('/article', (req, res) => {
    res.render('home/article', {})
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
module.exports = home;