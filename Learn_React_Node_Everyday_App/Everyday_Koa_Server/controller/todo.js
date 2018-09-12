const router = require('koa-router')()
const {sequelize, Todo} = require('../model')

router.get('/', async (ctx, next) => {
  const userid = ctx.cookies.get('userid')
  let todos = await Todo.findAll({where: {userid}})
  ctx.body = {
    ERR_NUM: 0,
    allTodo: todos
  }
})

router.post('/', async (ctx, next) => {
  const content = ctx.request.body.todo.content
  const userid = ctx.cookies.get('userid')
  const todo = await Todo.create({content, userid})
  ctx.body = {
    ERR_NUM: 0,
    todo
  }
})

router.put('/:id/:toStatus', async (ctx, next) => {
  const {id, toStatus} = ctx.params
  await Todo.update({status: toStatus}, {where: {_id: id}})
  const todo = await Todo.findOne({where: {_id: id}})
  ctx.body = {
    ERR_NUM: 0,
    todo
  }
})

router.delete('/:id', async (ctx, next) => {
  const id = ctx.params.id
  await Todo.destroy({where: {_id: id}})
  ctx.body = {
    ERR_NUM: 0
  }
})

module.exports = router
