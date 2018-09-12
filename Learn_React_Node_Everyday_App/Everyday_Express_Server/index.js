const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const corsMiddleware = require('./middleware/cors-middleware')

const app = express()

// 让服务器支持 CORS
app.use(corsMiddleware())

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true})) // 表单
app.use(cookieParser())

router(app)

app.listen('8080', function () {
  console.log('listen on port 8080')
})