常用的一些包

> 分一下类吧，Express 本身是区分了五种中间件
>
> 1. 应用级别，直接在程序中使用 app.use，然后使用 next 将control 传递到下一个 next
>
> 2. 路由级别，使用 `var router = express.Router()` 来控制路由 
>
> 3. 错误处理
>
>    ```js
>    app.use(function (err, req, res, next) {
>      console.error(err.stack)
>      res.status(500).send('Something broke!')
>    })
>    ```
>
> 4. 内置的，如 express.static 挂载静态文件，express.json / express.urlencode
>
> 5. 第三方的
>
>    ```js
>    var cookieParser = require('cookie-parser')
>       
>    // load the cookie-parsing middleware
>    app.use(cookieParser())
>    ```

- 使用 http-proxy-middleware 来做代理，将当前访问的URL请求到另一个网址的URL
    - [http-proxy](https://www.npmjs.com/package/http-proxy) 也可以
- 使用 open 来打开浏览器或者文件
- 使用 server 来设置当前地址为服务器地址，就可以直接打开了
    - 如打开 build 文件为服务器文件，则使用 server -s build 

## 关于应用的

- body-parser
- cookie-parser
- cookie-session
- morgan 、 winston 、 express-winston 日志记录
- request-validate 参数验证
- config-lite 读取配置文件
- mkdirp 递归创建文件目录
- ejs 文件模板 
- formidable 用来上传文件的
- multer 上传文件
- serve-index 用来展示文件夹中的文件的
- @godaddy/terminus 可以监听强制性关闭应用时，触发设定的操作
- http-terminator 自动关闭当前应用