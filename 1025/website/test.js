// let a = '/blogg'; 
// a == '/' ? a = '/' : a == '/doc' ? a = '/doc' : a = '/blog';
// console.log(a);

let http = require('http');
let path = require('path');
let url = require('url');
let mime = require('mime');
let fs = require('fs');


let server = http.createServer();

server.listen(3000, () => {
    console.log("服务器已启动");
})

server.on('request', (req, res) => {
    let url = req.url;
    if (url == '/' || url == '/doc' || url == '/blog') {
        res.writeHeader(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        if (url == '/') url = './index.html'
        if (url == '/doc') url = './doc.html'
        if (url == '/blog') url = './blog.html'
        fs.readFile(url, 'utf-8', (err, data) => {
            res.write(data);
            res.end();
        }) 
    } else {
        let realPath = path.join('./', url);
        fs.readFile(realPath, (err, data) => {
            if (!err) {
                res.writeHeader(200, {
                    'Content-Type': mime.getType(realPath)
                });
                res.write(data);
                res.end();
            }
        });
    }
})

// server.on('request', (req, res) => {
//     let url = req.url;
//     if (url == '/' || url == '/doc' || url == '/blog') {
//         res.writeHeader(200, {
//             'Content-Type': 'text/html; charset=UTF-8'
//         });
//         if (url == '/') url = './index.html'
//         if (url == '/doc') url = './doc.html'
//         if (url == '/blog') url = './blog.html'
//         fs.readFile(url, 'utf-8', (err, data) => {
//             res.write(data);
//             res.end();
//         });
//     } else {
//         let realPath = path.join('./', url);
//         fs.readFile(realPath, (err, data) => {
//             res.writeHeader(200, {
//                 'Content-Type': mime.getType(realPath)
//             })
//             res.write(data);
//             res.end();
//         })
//     }
// })

