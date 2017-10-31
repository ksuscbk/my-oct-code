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

admin.get('/add', (req, res) => {
    res.render('admin/add', {});
})

admin.get('/list', (req, res) => {
    res.render('admin/list', {});
})

admin.get('/repass', (req, res) => {
    res.render('admin/repass', {});
})

admin.get('/settings', (req, res) => {
    res.render('admin/settings', {});
})
module.exports = admin;