// 連接數據庫
let mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog'
});

module.exports = db;