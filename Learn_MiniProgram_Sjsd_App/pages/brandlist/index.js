// pages/brandlist/index.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    brands: [],
    catid: null,
    pageTitle: null,
    title: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.catid) {
      this.setData({
        catid: options.catid
      })
      getBrands.call(this)
    } else if (options.title) {
      this.setData({
        catid: 9,
        title: options.title
      })
      getSearchBrands.call(this)
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // title 是搜索页的关键字
    if (!this.data.title) {
      getBrands.call(this)
    } else {
      getSearchBrands.call(this)
    }
  },
})

function getBrands () {
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=content&action=lists',
    data: {
      catid: this.data.catid,
      page: this.data.page,
      pagesize: 10
    },
    success: res => {
      let data = res.data
      // 如果 pageTitle 为空就是第一次加载，需要设置 pageTitle
      if (!this.data.pageTitle) {
        let catname = data.data[0].catname
        wx.setNavigationBarTitle({
          title: catname,
          success: this.setData({
            pageTitle: catname
          })
        })
      }
      // 每次都 push 到 brands 数组中
      if (data.error === 0) {
        let tmpBrands = this.data.brands
        this.setData({
          brands: [...tmpBrands, ...data.data],
          page: ++this.data.page
        })
      }
    }
  })
}

function getSearchBrands () {
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=content&action=lists',
    data: {
      catid: this.data.catid,
      page: this.data.page,
      pagesize: 10,
      title: this.data.title
    },
    success: res => {
      let data = res.data
      // 如果是第一次加载 就要 设置 pageTitle
      if (!this.data.pageTitle) {
        wx.setNavigationBarTitle({
          title: `搜索${this.data.title}的结果`
        })
      }
      if (data.error === 0) {
        // 如果搜索有结果
        if (data.data.length > 0) {
          let tmpBrands = this.data.brands
          this.setData({
            brands: [...tmpBrands, ...data.data],
            page: ++this.data.page
          })
        } else {
          // 如果搜索没有结果
          // 将 title 设为 null，可以在上拉的时候加载 catid = 9 的品牌
          this.setData({
            title: null,
            catid: 9
          })
          // 设置页面pageTitle
          wx.setNavigationBarTitle({
            title: '加盟项目聚焦',
            success: this.setData({
              pageTitle: '加盟项目聚焦'
            })
          })
          getBrands.call(this)
        }
      }
    }
  })
}