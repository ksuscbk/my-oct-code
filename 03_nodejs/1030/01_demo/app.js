let express = require('express');
let app = express();
app.set('views','./views');
app.set('view engine', 'xtpl');
app.use(express.static('public'));

let queryString = require('querystring');
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/index', (req, res) => {
    res.render('index', {});
});

app.post('/add', (req, res) => {
    bodyParser();
    console.log(req.body);
    res.send('hreloo');
})


function bodyParser () {
    return {
        urlencoded: function (req, res, next) {
            // 解析post方式发送的数据
            let text = '';
            req.on('data', (chunk) => {
                text += chunk;
            })

            req.on('end', () => {
                req.body = queryString.parse(text);
                next();
            })
        }
    }
}