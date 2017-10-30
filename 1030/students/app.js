let express = require('express');
let app = express();
// 设置模板目录为 ./views
app.set('views','./views');
// 使用模板引擎 xtpl  模板后缀为 xtpl   xtpl 模块不需要手动引入   Express 内部负责自动引入的
app.set('view engine', 'xtpl');
// 中间件托管静态资源  自己会找相当于之前自己封装的default
app.use(express.static('public'));
app.listen(3000);
// Express 没有内置模板引擎功能    但是它可以非常方便的支持其它模板引擎

// 客户端（浏览器）以get方式请求的时候
app.get('/', (req, res) => {
    res.render('add', {});
});
app.get('/add', (req, res) => {
    res.render('add', {});
})
app.get('/list', (req, res) => {
    res.render('list', {});
})
// post方式
app.post('/add', (req, res) => {
    res.send('hello express! post');
});