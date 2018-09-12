const express = require('express')
const Todo = require('../../model').Todo

const router = express.Router()

router.get('/', function (req, res, next) {
  const userid = req.cookies.userid
  Todo.find({userid}, function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0,
      allTodo: data
    })
  })
})
router.post('/', function (req, res, next) {
  const content = req.body.todo.content
  const userid = req.cookies.userid
  const todo = new Todo({
    content,
    userid
  })
  todo.save(function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0,
      todo: data
    })
  })
})
router.put('/:id/:toStatus', function (req, res) {
  // 修改某条 TODO 完成与否
  const {id, toStatus} = req.params
  Todo.findOneAndUpdate({_id: id}, {$set: {status: toStatus}}, function (err, data) {
    if (err) return next(err)
    data.status = toStatus
    res.json({
      ERR_NUM: 0,
      todo: data
    })
  })
})
router.delete('/:id', function (req, res, next) {
  Todo.remove({_id: req.params.id}, function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0
    })
  })
})

module.exports = router