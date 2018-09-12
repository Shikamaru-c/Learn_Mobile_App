// components/search-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    // 搜索
    handleSearch: function (e) {
      wx.navigateTo({
        url: `/pages/brandlist/index?title=${e.detail.value}`,
      })
    }
  }
})
