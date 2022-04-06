import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()

const router = new Router()

// get请求
router.get('/', async ctx => {
  ctx.body = ['1', '2', '3']
})

// post请求
router.post('/detail', async ctx => {
  ctx.body = {
    code: 0,
    list: [1, 2, 3]
  }
})

// 动态路由
router.get('/list/:name', async ctx => {
  ctx.body = {
    name: ctx.params.name,
    time: Date.now()
  }
})

// 路由分组
const group = new Router({
  prefix: '/group'
})
group.get('/', async ctx => {
  ctx.body = 'group路由'
})
group.get('/list', async ctx => {
  ctx.body = [1, 2, 3]
})

// 路由嵌套
const sub = new Router({
  prefix: '/sub'
})
sub.get('/form/:uid', async ctx => {
  ctx.body = {
    code: 0,
    uid: ctx.params.uid,
    list: [1, 2, 3]
  }
})
const nest = new Router()
nest.use('/nest', sub.routes())

// 多重路由
const db = new Router()
db.get('/db/:id', async (ctx, next) => {
  // db查询
  ctx.name = 'db查询的数据'
  next()
}, async (ctx, next) => {
  // log
  ctx.time = Date.now()
  next()
}, async ctx => {
  // 输出
  ctx.body = {
    code: 0,
    name: ctx.name,
    time: ctx.time
  }
})

// 路由重定向
const proxy = new Router()
proxy.get('/find', async ctx => {
  ctx.redirect('/')
})

// 处理options（预检）请求 + response header添加allow字段
// .use(router.allowedMethods())

app.use(proxy.routes()).use(proxy.allowedMethods())
app.use(db.routes()).use(db.allowedMethods())
app.use(nest.routes()).use(nest.allowedMethods())
app.use(group.routes()).use(group.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.listen(5000)
