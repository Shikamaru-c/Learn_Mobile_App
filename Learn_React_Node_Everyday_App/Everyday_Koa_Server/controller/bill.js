const router = require('koa-router')()
const {sequelize, Bill} = require('../model')

router.get('/', async (ctx, next) => {
  await Bill.sync({force: true})
  ctx.body = {
    ERR_NUM: 0
  }
})

module.exports = router