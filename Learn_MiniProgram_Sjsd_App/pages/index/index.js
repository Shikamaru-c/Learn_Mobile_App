Page({
  data: {
    imgUrls: [],
    brands: [],
    showPopupLayer: false,
    joinNum: 0,
    page: 1,
    noMore: false
  },
  onLoad: function () {
    getImgUrls.call(this)
    getBrands.call(this)
    getJoinNum.call(this)
  },
  // 打开浮层表单
  handleOpenPopupLayer () {
    this.selectComponent('#popup-layer').handleOpenPopupLayer()
  },
  onReachBottom: function () {
    getBrands.call(this)
  },
  onShareAppMessage: function () {
    return {
      title: '商机速递',
      // imageUrl: ''
    }
  }
})

function getImgUrls () {
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=banner&spaceid=1&num=4',
    success: res => {
      let data = res.data
      if (data.error === 0) {
        this.setData({
          imgUrls: data.data
        })
      }
    }
  })
}

function getBrands () {
  const PAGESIZE = 10
  if (this.data.page > 5) return 
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=content&action=lists&catid=9',
    data: {
      pagesize: PAGESIZE,
      page: this.data.page
    },
    success: res => {
      let data = res.data
      let tmpBrands = this.data.brands
      if (data.error === 0) {
        this.setData({
          brands: [...tmpBrands, ...data.data],
          page: ++this.data.page
        })
        if (this.data.page > 5) {
          this.setData({
            noMore: true
          })
        }
      }
    }
  })
}

function getJoinNum () {
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=addnum',
    success: (res) => {
      let data = res.data
      if (data.error === 0) {
        this.setData({
          joinNum: data.data[0]['jiameng_num']
        })
      }
    }
  })
}