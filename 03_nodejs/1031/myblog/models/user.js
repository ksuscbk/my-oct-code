let db = require('./db');

// 添加用户信息
exports.insert = function (data, callback) {
    let query = 'insert into users set ?';
    db.query(query, data, (err) => {
        if (err) {
            callback(err);
            return;
        }

        callback(null);
    })
}