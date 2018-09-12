const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize('eve', config.dbAdminName, config.dbAdminPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  define: {
    timestamps: false
  }
})

const Todo = sequelize.define('todo', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: Sequelize.TEXT,
  status: {type: Sequelize.INTEGER, defaultValue: 0},
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
  userid: Sequelize.STRING
})

const Bill = sequelize.define('bill', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  thing: Sequelize.STRING,
  cost: Sequelize.DECIMAL,
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
  userid: Sequelize.STRING
})

const Diary = sequelize.define('diary', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  // position: Sequelize.STRING,
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},  
  userid: Sequelize.STRING
})

const Feedback = sequelize.define('feedback', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickname: Sequelize.STRING,
  content: Sequelize.TEXT,
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}  
})

const User = sequelize.define('user', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  account: Sequelize.STRING,
  password: Sequelize.STRING,
  nickname: Sequelize.STRING,
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
})

module.exports = {sequelize, Todo, Bill, Diary, Feedback, User}