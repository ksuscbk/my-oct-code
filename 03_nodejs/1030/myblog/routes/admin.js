let express = require('express');

let admin = express.Router();

admin.get('/', (req, res) => {
    res.render('admin/index', {});
})

admin.get('/index', (req, res) => {
    res.render('admin/index', {})
})

admin.get('/settings', (req, res) => {
    
})

module.exports = admin;