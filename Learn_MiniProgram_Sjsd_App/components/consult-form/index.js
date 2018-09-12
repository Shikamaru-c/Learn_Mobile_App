// components/consult-form/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 提交表单
    formSubmit: function (e) {
      let data = e.detail.value
      let history = getCurrentPages()
      let nowUrl = history[history.length - 1].route
      wx.request({
        url: 'https://www.37sd.cn/api.php?op=index&module=guest',
        data: {
          xiangmu: this.properties.pageTitle,
          url: nowUrl,
          zhuanyuan: '0016',
          ...data
        },
        success: res => {
          let data = res.data
          if (data.error === 0) {
            wx.showToast({
              title: data.data[0],
              icon: 'success',
              success: () => {
                this.triggerEvent('closePopupLayer')
              }
            })
          }
        }
      })
    }
  }
})
