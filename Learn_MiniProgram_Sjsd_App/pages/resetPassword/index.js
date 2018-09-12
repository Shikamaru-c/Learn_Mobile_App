// pages/resetPassword/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: ''
  },

  handleSubmitReset: function (e) {
    let data = e.detail.value
    wx.request({
      url: 'https://www.37sd.cn/api.php?op=index&module=member&action=forget',
      data: data,
      success: res => {
        let data = res.data
        if (data.error === 0) {
          // 还要处理保存登录状态
          let {userid, username} = data.data
          app.global.userInfo = {userid, username}
          app.global.message = '修改密码成功'
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
  },

  handleGetCode: function () {
    wx.request({
      url: 'https://www.37sd.cn/api.php?op=index&module=sms',
      data: {
        'mobile': this.data.username
      },
      success: res => {
        let data = res.data
        if (data.error === 0) {
          // 处理按钮
          // 倒计时
        } else {
          wx.showToast({
            title: data.data[0],
            icon: 'none'
          })
        }
      }
    })
  },

  handleChangeUsername: function (e) {
    this.setData({
      username: e.detail.value
    })
  }

})