// 1. 中间件必须是一个函数 2. 这个函数必须返回一个异步函数 3. 必须要有next()
export default () => {
  return async (ctx, next) => {
    // todo
    console.log('mid2-start')
    next()
    // todo
    console.log('mid2-end')
  }
}
