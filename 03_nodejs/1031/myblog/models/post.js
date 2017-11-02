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

// 查询所有
exports.findAll = function (...args) {

    let query, offset, pageSize;

    if (args.length == 1 && typeof args[0] == 'function') {
        query = 'select * from posts left join users on posts.uid = users.id';
        callback = args[0];
    } else {
        pageSize = args[0];
        page = args[1];
        callback = args[2];

        offset = (page - 1) * pageSize;
        query = 'select * from posts left join users on posts.uid = users.id limit ?, ?';
        
    }
    db.query(query, [offset, pageSize], (err, rows) => {
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

// 查询一个
exports.find = (id, callback) => {
    db.query('select * from posts left join users on posts.uid = users.id where posts.id = ?', id, (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    })
}

// 修改文章
exports.update = (id, data, callback) => {
    db.query('update posts set ? where id = ?', [data, id], callback);
}

// 获取文章数据总条数   返回的是数组，所以需要接受时做二次处理
exports.count = (callback) => {
    db.query('select count(*) as total from posts', (err, rows) => {
        if (!err) {
            callback(null, rows);        
        }
    })
}