const express = require('express');
const serveIndex = require('serve-index');
const app = express();
const open = require('open');

// 这里按照常理来说，则是要访问  http://localhost:3001/ftp，因为这里只是提供静态文件的
// 因为 / 路径，是要给应用的首页的
app.use('/public', express.static('public'), serveIndex('public', {'icons': true}));

app.listen(3001, open('http://localhost:3001/public'))