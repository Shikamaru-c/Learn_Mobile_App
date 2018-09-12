const express = require('express')
const Feedback = require('../../model').Feedback

const router = express.Router()

router.post('/', function (req, res, next) {
  // 提交 建议反馈
  const nickname = req.cookies.nickname
  const content = req.body.content
  const feedback = new Feedback({
    nickname,
    content
  })
  feedback.save(function (err, data) {
    if (err) {
      res.json({
        ERR_NUM: 1,
        message: '发生未知错误，请重新提交'
      })
      return next(err)
    }
    return res.json({
      ERR_NUM: 0
    })
  })
})

// admin 获取全部反馈
router.get('/', function (req, res) {
  // 获取 建议反馈
})

module.exports = router