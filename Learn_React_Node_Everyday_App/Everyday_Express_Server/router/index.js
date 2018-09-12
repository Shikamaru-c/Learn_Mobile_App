function Router (app) {
  app.use('/api/v1/todo', require('./todo'))
  app.use('/api/v1/bill', require('./bill'))
  app.use('/api/v1/diary', require('./diary'))
  app.use('/api/v1/feedback', require('./feedback'))
  app.use('/api/v1/user', require('./user'))
}

module.exports = Router