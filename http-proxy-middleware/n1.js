const express = require('express');
const app = express();
const port = 3000;
const {createProxyMiddleware} = require('http-proxy-middleware');

app.use('/users', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug',
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

require('open')('http://localhost:3000/users')

