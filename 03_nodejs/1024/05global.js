console.log(global);

setTimeout(function () {
    console.log("我是定时器执行的程序");
}, 1000);

var timer = setInterval(function () {
    console.log("我是定时器执行的程序");
}, 1000);

clearInterval(timer);