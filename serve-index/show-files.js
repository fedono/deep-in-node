const finalhandler = require('finalhandler');
const http = require('http');
const serveIndex = require('serve-index');
const serveStatic = require('serve-static');
const open = require('open');

// 展示 public 中所有的文件，提供了搜索功能
const index = serveIndex('public', {'icons': true});
// 用来 host 静态文件的
const serve = serveStatic('public');

const server = http.createServer(function onRequest(req, res) {
    const done = finalhandler(req, res);
    serve(req, res, function onNext(err) {
        if (err) {
            return done(err);
        }
        index(req, res, done);
    })
})

server.listen(3000, open('http://localhost:3000'));