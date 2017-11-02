let express = require('express');
let app = express();
app.listen(3000);
app.set('view engine', 'xtpl');
app.set('views', './views');
app.use(express.static('./public'));
app.use('/public', express.static('./public'));

// 解析post数据的中间件
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// 处理session的中间件     
    // 使用了session中间件之后就在请求上添加了一个session属性，通过这个属性可以实现设置和读取session
let session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    // secure需要支持https协议
    // cookie: { secure: false }
}))



// 检测是否登陆的中间件,在后台网站    http要求在请求头设置前不允许有响应主体
app.use('/admin', (req, res, next) => {
    if (!req.session.logininfo && req.url != '/login') {
        // express封装的重定向
        return res.redirect('/login');
    }
    next();    
})
// 在nodejs中，默认情况下session存在内存中，所以服务器重启后session也会消失

// 通过路由来区分前台网站和后台网站
let admin = require('./routes/admin');
let home = require('./routes/home');

app.use('/admin', admin);
app.use('/', home)