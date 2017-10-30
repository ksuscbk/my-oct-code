//公共引用
let fs = require('fs'),
path = require('path');

//readFile(filename,[options],callback);

/** 读文件
 * filename, 必选参数，文件名
 * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

fs.readFile(__dirname + '/test.txt', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) {
     console.error(err);
     return;
    }
    console.log(data);
});

// fs.writeFile(filename,data,[options],callback);
var w_data = '这是一段通过fs.writeFile函数写入的内容；\r\n';
var w_data = new Buffer(w_data);

/**  写文件
 * filename, 必选参数，文件名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

fs.writeFile(__dirname + '/test.txt', w_data, {flag: 'a'}, function (err) {
   if(err) {
    console.error(err);
    } else {
       console.log('写入成功');
    }
});


// 追加文件 
//fs.appendFile(filename,data,[options],callback);

fs.appendFile(__dirname + '/test.txt', '使用fs.appendFile追加文件内容', function () {
    console.log('追加内容完成');
});