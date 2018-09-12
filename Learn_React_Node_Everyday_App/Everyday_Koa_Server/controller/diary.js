const router = require('koa-router')()
const {sequelize, Diary} = require('../model')

router.get('/all', async (ctx, next) => {
  const userid = ctx.cookies.get('userid')
  let {pagesize, page} = ctx.query
  pagesize = parseInt(pagesize)
  page = parseInt(page)
  const offset = pagesize * (page - 1)
  const diarys = await Diary.findAll({
    where: {userid},
    limit: pagesize,
    offset
  })
  ctx.body = {
    ERR_NUM: 0,
    diaryList: diarys
  }
})

router.post('/', async (ctx, next) => {
  let diary = ctx.request.body.diary
  let userid = ctx.cookies.get('userid')
  diary = await Diary.create({...diary, userid})
  ctx.body = {
    ERR_NUM: 0,
    message: '提交成功',
    diary
  }
})

router.put('/', async (ctx, next) => {
  const {_id, title, content} = ctx.request.body.diary
  await Diary.update({title, content}, {where: {_id}})
  const diary = await Diary.findOne({where: {_id}})
  ctx.body = {
    ERR_NUM: 0,
    diary
  }
})

router.delete('/:id', async (ctx, next) => {
  const id = ctx.params.id
  await Diary.destroy({where: {_id: id}})
  ctx.body = {
    ERR_NUM: 0
  }
})

module.exports = router