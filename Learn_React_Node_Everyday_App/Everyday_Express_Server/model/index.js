const mongoose = require('mongoose')
const {mongodbUrl} = require('../config')
mongoose.connect(mongodbUrl)

const ObjectId = mongoose.Schema.Types.ObjectId

// TODO = 0, FININSHED = 1, DELETE = 2
const Todo = new mongoose.Schema({
  content: String,
  status: {type: Number, default: 0},
  date: {type: Date, default: Date.now()},
  userid: ObjectId
})

exports.Todo = mongoose.model('Todo', Todo)

const Bill = new mongoose.Schema({
  thing: String,
  cost: Number,
  date: {type: Number, default: Date.now()},
  userid: ObjectId
})

exports.Bill = mongoose.model('Bill', Bill)

const Diary = new mongoose.Schema({
  title: String,
  content: String,
  // position: String,
  date: {type: Date, default: Date.now()},
  userid: ObjectId
})

exports.Diary = mongoose.model('Diary', Diary)

const Feedback = new mongoose.Schema({
  nickname: String,
  content: String,
  date: {type: Date, default: Date.now()}
})

exports.Feedback = mongoose.model('Feedback', Feedback)

const User = new mongoose.Schema({
  account: String,
  password: String,
  nickname: String,
  date: {type: Date, default: Date.now()}
})

exports.User = mongoose.model('User', User)