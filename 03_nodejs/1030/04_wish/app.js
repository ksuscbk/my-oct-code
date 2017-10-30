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
    res.render('index', {});
});
