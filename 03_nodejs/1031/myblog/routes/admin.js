let express = require('express');

let admin = express.Router();
// 操作文章
let post = require('../models/post');

// 操作用户
let user = require('../models/user');
admin.get('/', (req, res) => {
    res.render('admin/index', {});
})
// 首页
admin.get('/index', (req, res) => {
    res.render('admin/index', {})
})
// 个人中心信息
admin.get('/settings', (req, res) => {
    // 通过session获取用户id
    // console.log(req.session.logininfo.id);
    user.find(req.session.logininfo.id, (err, rows) => {
        if (!err) {
            res.render('admin/settings', {user: rows[0]});
        }
    });
})

admin.get('/add', (req, res) => {
    res.render('admin/add', {});
})

admin.get('/list', (req, res) => {
    res.render('admin/list', {});
    post.findAll((err, rows) => {
        if (err) {
            return res.send('数据库错误');
        }
        // 模板引擎需要的是对象形式的数据
        res.render('admin/list', {posts: rows});
    })
})

admin.get('/repass', (req, res) => {
    res.render('admin/repass', {});
})

// 退出
admin.get('/logout', (req, res) => {
    req.session.logininfo = null;
    res.redirect = '/login';
})

// 添加博客文章
admin.post('/add', (req, res) => {

    // 当前登陆用户即为作者  通过session可以获取作者信息
    req.body.uid = req.session.logininfo.id;
    post.insert(req.body, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                msg: '添加成功'
            });
        }
    })
})

// 删除文章
admin.get('/delete', (req, res) => {
    // get方式的参数可以通过req.query接收
    post.delete(req.query.id, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                msg: '删除成功'
            })
        }
    })
})

// 个人中心修改信息
admin.post('/update', (req, res) => {
    user.update(req.session.logininfo.id, req.body, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                msg: '更新成功'
            })
        }
    })
})
module.exports = admin;