const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

fs.mkdirSync(path.resolve(__dirname, 'uploads/'));
// multer.distStorage 居然不会自动创建 uploads 文件夹，居然还要手动创建
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, 'uploads/'))
    },
    // 自定义上传的文件名称
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})
const upload = multer({storage: storage});

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h2>With <code>"express"</code> npm package</h2>
        <form action="profile" enctype="multipart/form-data" method="post">
            <div>Text field title: <input type="text" name="title" /></div>
            <div>File: <input type="file" name="avatar" /></div>
            <input type="submit" value="Upload" />
        </form>
    `)
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.json({
        file: req.file
    })
})

app.listen(3001, () => {
    console.log('server is listening on 3001');
})


