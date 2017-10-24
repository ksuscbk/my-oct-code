// 通过系统模块fs可以实现目录及文件的操作(增删改查)
let fs = require('fs');
// 创建
console.log(fs);

// 支持第二个参数  回调函数
fs.mkdir('jq999', (abc) => {
    // 如果有错误，abc为一个对象，描述了错误的原因，如果没有错，abc为null
    console.log(abc);
})


// 二级创建  参数  路径  内容   回调函数
fs.writeFile('./jq999/aa.html', '<h1>hello</h1>', (err) => {
    if (!err) {
        console.log('文件创建成功');
    }
})
// 一般都支持回调函数，回调函数第一个参数一般都是提示错误信息的，没有错误即为null
