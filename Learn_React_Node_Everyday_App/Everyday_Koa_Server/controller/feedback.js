const router = require('koa-router')()
const {sequelize, Feedback} = require('../model')

router.post('/', async (ctx, next) => {
  const nickname = ctx.cookies.get('nickname')
  const content = ctx.request.body.content
  await Feedback.create({nickname, content})
  ctx.body = {
    ERR_NUM: 0
  }
})

// 需要 admin 权限
router.get('/', async (ctx, next) => {
  // 获取 建议反馈
})

module.exports = router