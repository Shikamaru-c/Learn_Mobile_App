const router = require('koa-router')()
const bcrypt = require('bcryptjs')
const {sequelize, User} = require('../model')
const {cookieOptions} = require('../config')

router.post('/signin', async (ctx, next) => {
  let {account, password} = ctx.request.body.user
  // 判断用户账号密码是否正确
  let user = await User.findOne({where: {account}})
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return ctx.body = {
      ERR_NUM: 1,
      message: '账号或密码错误'
    }
  }
  // 设置 cookies
  ctx.cookies.set('userid', user._id, cookieOptions)
  ctx.cookies.set('nickname', user.nickname, cookieOptions)
  ctx.body = {
    ERR_NUM: 0,
    message: '登录成功',
    user: user.toJSON()
  }
})

router.post('/signup', async (ctx, next) => {
  let {account, password, nickname} = ctx.request.body.user
  // 判断用户账号是否存在
  let user = await User.findOne({where: {account}})
  if (user) {
    return ctx.body = {
      ERR_NUM: 1,
      message: '账号已存在'
    }
  }
  // 判断用户昵称是否存在
  user = await User.findOne({where: {nickname}})
  if (user) {
    return ctx.body = {
      ERR_NUM: 1,
      message: '昵称已存在'
    }
  }
  // 密码加密后存入数据库
  let salt = await bcrypt.genSalt(10)
  password = await bcrypt.hash(password, salt)
  user = await User.create({
    account,
    password,
    nickname
  })
  // 设置 cookies
  ctx.cookies.set('userid', user._id, cookieOptions)
  ctx.cookies.set('nickname', user.nickname, cookieOptions)
  ctx.body = {
    ERR_NUM: 0,
    message: '注册成功',
    user: user.toJSON()
  }
})

module.exports = router