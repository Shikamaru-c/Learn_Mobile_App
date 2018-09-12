// pages/signin/index.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  handleSubmitSignin: function (e) {
    let data = e.detail.value
    wx.request({
      url: 'https://www.37sd.cn/api.php?op=index&module=member&action=login',
      data: data,
      success: res => {
        let data = res.data
        if (data.error === 0) {
          // 本地存储 跳转
          let {userid, username} = data.data
          app.globalData.userInfo = {userid, username}
          app.globalData.message = '登录成功'
          wx.setStorage({
            key: 'userInfo',
            data: { userid, username },
            success: () => {
              wx.switchTab({
                url: '/pages/vip/index'
              })
            }
          })
        } else {
          wx.showToast({
            title: data.data[0],
            icon: 'none'
          })
        }
      }
    })
  }
})