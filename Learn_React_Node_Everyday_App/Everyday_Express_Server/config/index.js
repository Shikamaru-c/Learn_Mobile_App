const config = {
  mongodbUrl: 'mongodb://localhost:27017/everyday',
  cookieOptions: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

module.exports = config