const express = require('express');
const {createHttpTerminator} = require('http-terminator');

const app = express();
const server = app.listen(3000);

// 将启动的服务注入
const httpTerminator = createHttpTerminator({server});

app.get('/', (req, res) => {
    res.send('ok');
});

// 设定多久之后关闭当前服务
setTimeout(() => {
    httpTerminator.terminate();
}, 3000);