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
> 可以在 [snyk](https://snyk.io/advisor/npm-package/express-actuator) 找到相似的 npm 包

- body-parser

- cookie-parser

- cookie-session
<<<<<<< HEAD

- morgan 、 winston 、 express-winston 日志记录

=======
- morgan 、 winston 、 express-winston 、log4js日志记录
>>>>>>> add
- request-validate 参数验证

- config-lite 读取配置文件

- mkdirp 递归创建文件目录

- ejs 文件模板 

- formidable 用来上传文件的

- multer 上传文件

- serve-index 用来展示文件夹中的文件的

- @godaddy/terminus 可以监听强制性关闭应用时，触发设定的操作
<<<<<<< HEAD

- http-terminator 自动关闭当前应用

- detect-port 用来检测端口是否可用

  - 日常开发启用端口，可能会出现被占用的情况，这时候就可以检测后，再启用另外一个端口了

- Node-config 

  - 这个比 config 好用，可以根据环境自动切换 JSON 配置文件 

- easy-json-schema 将 json 数据转换成 json-schema 的数据格式 

- formstream 在 node 中使用 form 的格式来添加数据

- pump 更好的 stream pipe 的工具

  > When using standard `source.pipe(dest)` source will *not* be destroyed if dest emits close or an error. You are also not able to provide a callback to tell when then pipe has finished.

- parameter 参数验证

- cluster-client

  > Sharing Connection among Multi-Process Nodejs

- agentkeepalive 设置 keep alive 的时长

- logfilestream 通过 stream 的方式，天添加 log 文件，可以自定义文件命名

- [enums](https://github.com/node-modules/enums) JS 实现的 Enum 

- nldr 一个可以遍历文件、复制文件、按行读取文件、创建文件夹的库

- watch-file 用来监控文件是否变化

- [is-type-of](https://github.com/node-modules/is-type-of) 用来检测所有的数据类型

- time-profile 计算函数执行的时间 

- webcamera 网页截图

=======
- http-terminator 自动关闭当前应用
- express-session 关于登录登出
>>>>>>> add
