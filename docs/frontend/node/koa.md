# Koa 是一个新的 web 框架

:::tip 介绍
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 
致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 
通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 
Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。
:::

[官网传送](https://koa.bootcss.com/#introduction)

```js
// app.js
const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const ejs = require('koa-ejs')
const static = require('koa-static')
const body = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa()
const router = new Router()

// 配置ejs模板
ejs(app, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false,
})

app.use(body())

// 配置跨域资源共享
app.use(
 cors({
		origin: '*',
		exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
		maxAge: 5,
		credentials: true,
		allowMethods: ['GET', 'POST', 'DELETE'],
		 allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
	})
)

router.use('/', require('./router/home'))
router.use('/api', require('./router/api'))
router.use('/login', require('./router/login'))

// 配置静态资源
app.use(static(path.resolve(__dirname, './public')))
app.use(router.routes())

// 监听端口
app.listen(3000, () => {
  console.log('this is 3000')
})
```