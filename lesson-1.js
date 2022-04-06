import Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
  if (ctx.req.url === '/') {
    ctx.body = 'hello world'
  }
  if (ctx.req.url === '/test') {
    ctx.body = {
      code: 0
    }
  }
})
app.listen(3000)
