// components/popup-layer/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageTitle: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPopupLayer: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 打开浮层表单
    handleOpenPopupLayer() {
      wx.hideTabBar()
      this.setData({
        showPopupLayer: true
      })
    },
    // 关闭浮层表单
    handleClosePopupLayer() {
      wx.showTabBar()
      this.setData({
        showPopupLayer: false
      })
    }
  }
})
