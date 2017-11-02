// define可以传入一个回调函数
define(function() {
    var name = '小明';

    var sayHi = function () {
        console.log('焦强你好');
    }

    return {
        name: name,
        sayHi: sayHi
    }
})