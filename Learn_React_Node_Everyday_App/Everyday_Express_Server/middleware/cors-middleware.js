function corsMiddleware () {
  return function (req, res, next) {
    res.set({
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Origin': req.headers.origin,
      'Access-Control-Allow-Headers': 'Content-Type',
      "Access-Control-Allow-Credentials": 'true'
    })
    next()
  }
}

module.exports = corsMiddleware