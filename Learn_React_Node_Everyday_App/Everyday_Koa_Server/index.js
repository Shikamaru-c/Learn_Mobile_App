const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const router = require('./controller/index')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Origin': ctx.headers.origin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true'
  })
  await next()
  ctx.status = 200
})

// body-parser
app.use(bodyParser())

app.use(router.routes())

app.listen(8080, () => {
  console.log('the server is on port 8080')
})