const http = require('http');
const express = require('express');
const {createTerminus} = require('@godaddy/terminus');

const app = express();

app.get('/', (req, res) => {
    res.send('ok');
});

const server = http.createServer(app);

function onSignal() {
    // 使用 node shutdown.js 启动当前应用时，使用 ctrl + c 强制关闭应用，这时候会触发当前的 onSignal 方法
    // 所以可以在这里执行相应的方法
    console.log('server is starting cleanup');
}

async function onHealthCheck() {
    console.log('on health check')
}

createTerminus(server, {
    signal: 'SIGINT',
    healthChecks: {'/healthcheck': onHealthCheck},
    onSignal
})

server.listen(3000)