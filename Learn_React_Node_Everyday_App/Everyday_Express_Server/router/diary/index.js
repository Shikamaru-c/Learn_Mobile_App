const express = require('express')
const Diary = require('../../model').Diary

const router = express.Router()

router.get('/all', function (req, res, next) {
  // 获取第 Y 个 X 条数据
  let userid = req.cookies.userid
  let { pagesize, page } = req.query
  pagesize = +pagesize
  page = +page
  Diary.find({userid}).sort({_id: -1}).skip(pagesize*(--page)).limit(pagesize).exec(function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0,
      diaryList: data
    })
  })
})

// 目前是 GET_ALL 的时候就获取了整片 DIARY 的数据，所以不用 GET_BY_ID
// router.get('/:id', function (req, res, next) {
//   // 获取某篇日记
//   let id = req.params.id
//   Diary.findById({_id: id}, function (err, data) {
//     if (err) return next(err)
//     res.json({
//       diary: data
//     })
//   })
// })

router.post('/', function (req, res, next) {
  // 保存某篇数据
  let diary = req.body.diary
  diary.userid = req.cookies.userid
  ;(new Diary(diary)).save(function (err, data) {
    if (err) {
      return res.json({
        ERR_NUM: 1,
        message: '提交失败'
      })
    } else {
      return res.json({
        ERR_NUM: 0,
        message: '提交成功',
        diary: data
      })
    }
  })
})

router.put('/', function (req, res, next) {
  // 修改某篇数据
  let {_id, title, content} = req.body.diary
  Diary.findOneAndUpdate({_id: _id}, {$set: {title, content}}, function (err, data) {
    if (err) return next(err)
    let diary = {...data, title, content}
    res.json({
      ERR_NUM: 0,
      diary
    })
  })
})

router.delete('/:id', function (req, res) {
  // 删除某篇数据
  let id = req.params.id
  Diary.remove({ _id: id }, function (err, data) {
    if (err) return next(err)
    res.json({
      ERR_NUM: 0
    })
  })
})

module.exports = router