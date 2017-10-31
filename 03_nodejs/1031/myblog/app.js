let express = require('express');
let app = express();
app.listen(555);
app.set('view engine', 'xtpl');
app.set('views', './views');
app.use(express.static('./public'));

let bodyParser = require('body-parser');
// 解析post数据的中间件
app.use(bodyParser.urlencoded({extended: false}));

// 通过路由来区分前台网站和后台网站
let admin = require('./routes/admin');
let home = require('./routes/home');

app.use('/admin', admin);
app.use('/', home)