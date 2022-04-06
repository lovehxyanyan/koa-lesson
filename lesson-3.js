import Koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'
import source from 'koa-static'

const app = new Koa()

const router = new Router()

// app.use(views('./views', {
//   map: {
//     ejs: 'ejs',
//     html: 'underscore'
//   }
// }))

app.use(views('./views', {
  extension: 'ejs'
}))

app.use(source('./static'))

router.get('/', async ctx => {
  await ctx.render('index', {
    user: {
      name: '我是吴超！！！'
    }
  })
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
