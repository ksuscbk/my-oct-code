// 通过系统模块path 可以获得路径相关信息  文件名  目录名  后缀名

let path = require('path');
// console.log(path);
let img = './images/20171024.jpg';
// path.parse();
// 1、解构赋值读取img相关信息    path模块提供的parse方法
let {dir, name, ext} = path.parse(img);
console.log(dir, name, ext);

// 2、通过path模块提供的dirname方法，获取目录名称
console.log(path.dirname(img));

// 3、通过path模块的extname方法，获取后缀名称
console.log(path.extname(img));

// 4、path.join方法，可以处理多个路径  还会自动处理不严谨的路径写法
console.log(path.join('./jq666', './jq777', './jq888'));
console.log(path.join('./jq666', './jq777', '../jq888'));

