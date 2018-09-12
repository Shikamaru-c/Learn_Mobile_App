const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../../model').User
const cookieOptions = require('../../config').cookieOptions

const router = express.Router()

router.post('/signin', function (req, res, next) {
  // 用户登录
  let {account, password} = req.body.user
  // 加密密码 然后比较
  User.findOne({'account': account}, function (err, data) {
    // 如果数据不存在 或者 密码不对
    if (!data || !bcrypt.compareSync(password, data.password)) {
      return res.json({
        ERR_NUM: 1,
        message: '账号或密码错误'
      })
    } else {
      // 登录成功后设置cookie保持状态
      res.cookie('userid', data._id, cookieOptions)
      res.cookie('nickname', data.nickname, cookieOptions)
      return res.json({
        ERR_NUM: 0,
        message: '登录成功',
        user: {
          account,
          nickname: data.nickname
        }
      })
    }
  })
})

router.post('/signup', function (req, res, next) {
  // 用户注册
  let {account, nickname, password} = req.body.user
  User.findOne({'account': account}, function (err, data) {
    if (data) {
      return res.json({
        ERR_NUM: 1,
        message: '账号已存在'
      })
    }
    User.findOne({'nickname': nickname}, function (err, data) {
      if (data) {
        return res.json ({
          ERR_NUM: 1,
          message: '昵称已存在'
        })
      }
      // 加密后存入数据库
      let salt = bcrypt.genSaltSync(10)
      req.body.user.password = bcrypt.hashSync(password, salt)
      ;(new User(req.body.user)).save(function (err, data) {
        if (err) {
          res.json({
            ERR_NUM: 1,
            message: '发生未知错误'
          })
          return next(err)
        } else {
          // 注册成功后，也设置cookie
          res.cookie('userid', data._id, cookieOptions)
          res.cookie('nickname', nickname, cookieOptions)
          return res.json({
            ERR_NUM: 0,
            message: '注册成功',
            user: {
              account,
              nickname
            }
          })
        }
      })
    })
  })
})

module.exports = router