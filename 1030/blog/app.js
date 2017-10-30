let express = require('express');
let app = express();
app.set('views','./views');
app.set('view engine', 'xtpl');
app.use(express.static('public'));
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index', {});
});
app.get('/index', (req, res) => {
    res.render('index', {});
});
app.get('/article', (req, res) => {
    res.render('article', {});
})