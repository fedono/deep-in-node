const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

let dirPath = path.resolve(__dirname, 'uploads/')
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dirPath)
    },
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
            <div>File: <input type="file" name="avatar" multiple="multiple" /></div>
            <input type="submit" value="Upload" />
        </form>
    `)
});

// 这里的 upload.array 中的第一个参数，一定要和上传文件的字段对应
app.post('/profile', upload.array('avatar', 3), function (req, res, next) {
    // 因为上传的文件都会通过 multer 修改固定的文件名的规则，
    // 可以在这里使用 fs.renameSync(oldPath, newPath) 来修改文件
    res.json({
        file: req.files
    })
})

app.listen(3001, () => {
    console.log('server is listening on 3001');
})


