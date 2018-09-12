const router = require('koa-router')()

router.use('/api/v1/todo', require('./todo').routes())
// router.use('/api/v1/bill', require('./bill').routes())
router.use('/api/v1/diary', require('./diary').routes())
router.use('/api/v1/feedback', require('./feedback').routes())
router.use('/api/v1/user', require('./user').routes())

module.exports = router