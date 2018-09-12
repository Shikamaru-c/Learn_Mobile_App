//app.js
App({
  onLaunch: function () {
    let self = this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        self.globalData.userInfo = res.data
      }
    })
  },
  globalData: {
    userInfo: null,
    message: null
  }
})