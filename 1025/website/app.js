let http = require('http');
let fs = require('fs');
let path = require('path');
let mime = require('mime');
let server = http.createServer();

server.listen(3000, () => {
    console.log('服务器已启动！');
});

server.on('request', (req, res) => {
    let a = req.url;
    if (a == '/' || a == '/doc' || a == '/blog') {
        res.writeHeader(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        if (a == '/') a = './index.html';
        if (a == '/doc') a = './doc.html';
        if (a == '/blog') a = './blog.html';

        // a == '/' ? a = '/' : a == '/doc' ? a = '/doc' : a = '/blog';
        fs.readFile(a, 'utf-8', (err, data) => {
            res.write(data);
            res.end();
        });
    } else {
        read(a);        
    }

    function read (a) {
        let realPath = path.join('./', a);
        console.log(realPath);
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

// if(req.url == '/') {
    //     res.writeHeader(200, {
    //         'Content-Type': 'text/html; charset=UTF-8'
    //     });
    //     fs.readFile('./index.html', 'utf-8', (err, data) => {
    //         if(!err) {
    //             res.write(data);
    //             res.end();
    //         }
    //     });
    // } else {
    //     let realPath = path.join('./', req.url);
    //     console.log(realPath);

    //     fs.readFile(realPath, (err, data) => {
    //         if(!err) {
    //             // 通过第三方模块 mime 可以获得不同类型资源的 mime
    //             console.log(mime.getType(realPath));

    //             res.writeHeader(200, {
    //                 'Content-Type': mime.getType(realPath)
    //             });
    //             res.write(data);
    //             res.end();
    //         }
    //     });
    // }


    // if (req.url == '/doc') {
    //     res.writeHeader(200, {
    //         'Content-Type': 'text/html; charset=UTF-8'
    //     })
    //     fs.readFile('./doc.html', 'utf-8', (err, data) => {
    //         if (!err) {
    //             res.write(data);
    //             res.end();
    //         }
    //     });
    // } else {
    //     let aaa = path.join('./', req.url);
    //     fs.readFile(aaa, (err, data) => {
    //         res.writeHeader(200, {
    //             'Content-Type': mime.getType(aaa)
    //         });
    //         res.write(data);
    //         res.end();
    //     })
    // }

    // if (req.url == '/blog') {
    //     res.writeHeader(200, {
    //         'Content-Type': 'text/html; charset=UTF-8'
    //     })
    //     fs.readFile('./blog.html', 'utf-8', (err, data) => {
    //         if (err) {
    //             return;
    //         } else {
    //             res.write(data);
    //             res.end();
    //         }
    //     })
    // } else {
    //     let a = path.join('./', req.url);
    //     fs.readFile(a, (err, data) => {
    //         res.writeHeader(200, {
    //             'Content-Type': mime.getType(a)
    //         })
    //         res.write(data);
    //         res.end();
    //     });
    // }