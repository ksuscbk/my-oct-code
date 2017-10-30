let express = require('express');
let app = express();
app.listen(555);
app.set('view engine', 'xtpl');
app.set('views', './views');
app.use(express.static('./public'));

// 通过路由来区分前台网站和后台网站
let admin = require('./routes/admin');
let home = require('./routes/home');

app.use('/admin', admin);
app.use('/', home)