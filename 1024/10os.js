// 在nodejs中对很多常用的功能进行了封装，我们将这些封装好的东西叫成模块，有很多模块随nodejs的安装自动安装好了，
// 常见的系统模块有fs  path   http os ...
// os 模块封装了读取系统信息的功能，要想使用，需要使用require先将其引入

// require 需要传入系统模块名称  并且会得到一个返回值
let os = require('os');
// console.log(os);

console.log(os.hostname());
console.log(os.uptime());
// console.log(os.cpus());
console.log(os.userInfo());