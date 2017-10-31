let db = require('./db');

// 添加用户信息
exports.insert = function (data, callback) {
    let query = 'insert into users set ?';

    // 加密
    data.pass = db.md5(data.pass);
    db.query(query, data, (err) => {
        if (err) {
            callback(err);
            return;
        }

        callback(null);
    })
}

// 查找信息验证登录
exports.auth = function (email, pass, callback) {
    let query = 'select * from users where email = ?'
    db.query(query, email, (err, rows) => {
        if (err) {
            callback(err);
            return;
        }
        // 数据库中的密码和用户输入的密码一致则登陆成功
        if (rows[0].pass == db.md5(pass)) {
            return callback(null, rows[0]);
        }
        callback({
            msg:'用户名或密码错误'
        })
    })
}

// 查询一个用户信息
exports.find = function (id, callback) {
    db.query('select * from users where id = ?', id, (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    })
}

// 更新用户信息
exports.update = function (id, data, callback) {
    db.query('update users set ? where id = ?', [data, id], (err) => {
        if (err) {
            return callback(err);
        }

        callback(null);
    })
}