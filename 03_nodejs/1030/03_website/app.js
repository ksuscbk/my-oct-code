var bodyParser = require('body-parser');

let express = require('express');
let app = express();
app.set('views','./views');
app.set('view engine', 'xtpl');
app.use(express.static('public'));
// 使用中间件来解析post请求方式发送的数据  application/x-www/form-url-encoded
// 此时会在req上添加一个body属性
app.use(bodyParser.urlencoded());

app.listen(3000);

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/index', (req, res) => {
    console.log(req.query);
    res.render('index', {});
});

app.get('/blog', (req, res) => {
    res.render('blog', {});
})

app.get('/doc', (req, res) => {
    res.render('doc', {});
})

// 在express中直接使用query来获取地址参数
// 如果要解析post的参数，使用中间件body-parser，是一个第三方模块
app.get('/test', (req, res) => {
    res.render('test', {});
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('post方式');
})
