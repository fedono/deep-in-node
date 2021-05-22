const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const app = express();

// 模拟一个表单来上传文件
app.get('/', (req, res) => {
    res.send(`
        <h2>With <code>"express"</code> npm package</h2>
        <form action="/api/upload" enctype="multipart/form-data" method="post">
            <div>Text field title: <input type="text" name="title" /></div>
            <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
            <input type="submit" value="Upload" />
        </form>
    `)
});

app.post('/api/upload', (req, res, next) => {
    const form = formidable({multiple: true});

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        // 创建文件夹
        let fileDir = path.resolve(__dirname, './uploads');
        if (!fs.existsSync(fileDir)) {
            fs.mkdirSync(fileDir);
        }

        let filePath = path.join(fileDir, files.someExpressFiles.name)
        // 这里把上传的文件放到我们设定的目录中去
        fs.rename(files.someExpressFiles.path, filePath, err => {
            if (err) {
                console.log(err)
            }
        })

        res.json({fields, files});
    });
});

app.listen(3000, () => {
    console.log('server listening on http://localhost:3000 ...');
})

// 唉，以前一直使用一个包，好像叫 multi，上传文件半天没弄好，
// 当时真的怀疑自己了，觉得 node 水平居然一个上传文件都都写不好