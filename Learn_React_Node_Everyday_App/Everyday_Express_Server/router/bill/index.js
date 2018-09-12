const express = require('express')
const Bill = require('../../model').Bill

const router = express.Router()

router.get('/', function (req, res) {
  // 返回第 Y 个 X 条数据
  const userid = req.cookies.userid
  let {pagesize, page} = req.query
  pagesize = +pagesize
  page = +page
  Bill.find({userid}).sort({_id: -1}).skip(pagesize * (--page)).limit(pagesize).exec(function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0,
      billList: data
    })
  })
})

router.post('/', function (req, res, next) {
  // 将 bill 存入数据库
  const userid = req.cookies.userid
  const bill = new Bill({
    ...req.body.bill,
    userid
  })
  bill.save(function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0,
      bill: data
    })
  })
})

router.put('/:id', function (req, res, next) {
  // 修改某条 BILL
  const id = req.params.id
  const {thing, cost} = req.body.bill
  Bill.findOneAndUpdate({_id: id}, {$set: {thing, cost}}, function (err, data) {
    if (err) return next(err)
    const bill = {...data, thing, cost}
    res.json({
      ERR_NUM: 0,
      bill
    })
  })
})

router.delete('/:id', function (req, res, next) {
  // 删除某条 BILL
  const id = req.params.id
  Bill.remove({_id: id}, function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0
    })
  })
})

module.exports = router