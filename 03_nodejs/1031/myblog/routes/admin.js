let express = require('express');

let admin = express.Router();
// 操作文章
let post = require('../models/post');

// 中间件
let multer = require('multer');
// let upload = multer({dest: 'public/admin/uploads/avatar'}); // 文件上传到什么位置
// 通过 diskStorage 实现目录位置和文件名的自定义操作
var storage = multer.diskStorage({
    // 自定义文件目录
    destination: function (req, file, cb) {
        cb(null, 'public/admin/uploads/avatar');
    },
    // 自定义文件名称
    filename: function (req, file, cb) {
        let extname = file.originalname.slice(file.originalname.lastIndexOf('.'));
        cb(null, file.fieldname + '-' + Date.now() + extname);
    }
})
var upload = multer({storage: storage});

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
// 添加文章
admin.get('/add', (req, res) => {
    res.render('admin/manage', {action: '/admin/add'});
})
// 编辑文章
admin.get('/edit', (req, res) => {
    // 根据参数id获取文章内容展示在页面上
    post.find(req.query.id, (err, rows) => {
        // console.log(err);
        if (!err) {
            res.render('admin/manage', {
                post: rows[0],
                action: '/admin/modify'
            });
        }
    })
})

admin.post('/modify', (req, res) => {
    // 主键 不能修改的处理
    let id = req.body.id;
    delete req.body.id;
    post.update(id, req.body, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                msg: '修改成功'
            })
        }
    })
})
// 文章列表页
admin.get('/list', (req, res) => {
    post.findAll((err, rows) => {
        if (err) {
            return res.send('数据库错误');
        }
        // 模板引擎需要的是对象形式的数据
        // console.log(rows)
        res.render('admin/list', {posts: rows});
    })
})

admin.get('/repass', (req, res) => {
    res.render('admin/repass', {});
})

// 退出
admin.get('/logout', (req, res) => {
    req.session.loginfo = null;
    res.redirect('/login');
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
    // console.log(req.query.id);
    post.delete(req.query.id, (err) => {
        console.log(err);
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

// 头像上传
admin.post('/upfile', upload.single('avatar'), (req, res) => {
    // console.log(req.file.path);
    res.json({
        code: 10000,
        msg: '上传成功',
        result: {
            path: req.file.path
        }
    })
})
module.exports = admin;