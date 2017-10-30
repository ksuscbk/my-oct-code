let express = require('express');
let app = express();
app.set('views', './views');
app.set('view engine', 'xtpl');
// 在express中设计了中间件这个概念，所谓中间件就是指在请求和响应的中间阶段，对请求和响应做出的一系列处理逻辑，
// 通过use方法来实现这一概念 
app.use(express.static('public'));
app.listen(3000);


app.get('/', (req, res) => {
    res.render('index', {});
})