import Koa from 'koa'
import Router from 'koa-router'
// import bodyParser from 'koa-bodyparser'  // 处理请求参数， 不处理form-data格式请求
import body from 'koa-better-body' // 兼容处理request header为form-data格式的请求

const app = new Koa()
const router = new Router()
// app.use(bodyParser())
app.use(body())
router.get('/form', async ctx => {
  ctx.body = ctx.query
})
// koa-bodyparser
// router.post('/form', async ctx => {
//   ctx.body = ctx.request.body
// })

// koa-better-body
router.post('/form', async ctx => {
  ctx.body = ctx.request.fields
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(5000)
