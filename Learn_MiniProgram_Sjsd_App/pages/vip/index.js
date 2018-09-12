// pages/my/index.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '游客',
    signInOrOut: '登录'
  },

  onShow: function () {
    let {userInfo, message} = app.globalData
    // 判断是否有 登录 注册 修改密码 页带来的 message
    if (message) {
      wx.showToast({
        title: message,
        icon: 'success',
        success: () => {
          app.globalData.message = null
        }
      })
    }
    // 显示页面时，判断用户是否是登录状态
    if (userInfo) {
      this.setData({
        username: userInfo.username,
        signInOrOut: '登出'
      })
    } else {
      this.setData({
        username: '游客',
        signInOrOut: '登录'
      })
    }
  },

  handleSign: function () {
    if (this.data.signInOrOut === '登录') {
      wx.navigateTo({
        url: '/pages/signin/index'
      })
    } else if (this.data.signInOrOut === '登出') {
      // 设置用户退出
      this.setData({
        username: '游客',
        signInOrOut: '登录'
      })
      // 全局和存储删除 userInfo
      app.globalData.userInfo = null
      wx.removeStorage({
        key: 'userInfo'
      })
      wx.showToast({
        title: '登出成功',
        icon: 'none'
      })
    }
  }
})