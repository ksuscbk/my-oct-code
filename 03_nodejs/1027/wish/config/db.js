// let mysql = require('mysql');
// // 也可以使用moudles.exports.db
// module.exports = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'wish'
// });


let mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456', 
    database: 'wish'
});
