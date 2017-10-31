// 处理post表
let db = require('./db');

exports.insert = function (data, callback) {
    db.query('insert into posts set ?', data, (err) => {
        if (err) {
            return cb(err);
        }
        cb(null);
    })
}

// 
exports.findAll = function (callback) {
    db.query('select * from posts', (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
}


// 删除
exports.delete = (id, callback) => {
    db.query('delete from posts where id = ?', id, (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    })
}

