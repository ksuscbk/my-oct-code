function sayHi(name='小红') {
    console.log('你好' + name);
}
sayHi();
sayHi('小明');




// ES6中的新的定义函数的方法
    // 具名函数
let fn = (arg) => {
    console.log(arg);
    console.log('我是新的方法定义的函数')
}
fn('我是参数');

    // 匿名函数
// setTimeout(() => {
//     console.log('匿名函数');
// }, 1000);

// 简写
let bar = () => 'hello';
console.log(bar());