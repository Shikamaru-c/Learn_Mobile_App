// pages/brandshow/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    catid: null,
    id: null,
    pageTitle: '',
    detail: null,
    countJmfy: 0,
    consultHistory: [],
    guessBrands: [],
    showPopupLayer: false,
    isConcern: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      catid: options.catid,
      id: options.id
    })
    getBrandshow.call(this)
    getConsultHistory.call(this)
    getGuessBrands.call(this)
    getIsConcern.call(this)
  },
  // 滚动到表单
  handleScrollToConsult: function () {
    // 节点到视口的顶部 + 视口滚动的距离
    let query = wx.createSelectorQuery()
    query.select('#consult-form').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(res => {
      wx.pageScrollTo({
        scrollTop: res[0].top + res[1].scrollTop
      })
    })
  },
  // 打开浮层
  handleOpenPopupLayer () {
    this.selectComponent('#popup-layer').handleOpenPopupLayer()
  },
  // 关注
  handleConcern () {
    let {catid, id, pageTitle} = this.data
    if (app.globalData.userInfo) {
      let {userid} = app.globalData.userInfo
      wx.request({
        url: 'https://www.37sd.cn/api.php?op=index&module=favorite&action=add',
        data: {
          catid,
          id,
          title: pageTitle,
          userid
        },
        success: res => {
          let data = res.data
          if (data.error === 0) {
            this.setData({
              isConcern: true
            })
            wx.showToast({
              title: data.data[0],
              icon: 'success'
            })
          } else {
            wx.showToast({
              title: data.data[0],
              icon: 'none'
            })
          }
        }
      })
    } else {
      wx.showModal({
        title: '您还未登录',
        content: '立即登录',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/signin/index'
            })
          }
        }
      })
    }
  }
})

function getBrandshow () {
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=content&action=show',
    data: {
      catid: this.data.catid,
      id: this.data.id
    },
    success: res => {
      let data = res.data
      if (data.error === 0) {
        // 设置 PAGE TITLE
        if (!this.data.pageTitle) {
          let title = data.data.title
          wx.setNavigationBarTitle({
            title: title,
            success: this.setData({
              pageTitle: title
            })
          })
        }
        let count = 0
        let detail = data.data
        // 计算加盟总费用(后台给的是字符串)
        count += parseInt(detail.jmprice)
          + parseInt(detail.bzprice)
          + parseInt(detail.sbprice)
          + parseInt(detail.oprice)
        this.setData({
          detail: detail,
          countJmfy: count
        })
      }
    }
  })
}

function getConsultHistory () {
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=content&action=lists&catid=20',
    success: res => {
      let data = res.data
      if (data.error === 0) {
        this.setData({
          consultHistory: data.data
        })
      }
    }
  })
}

function getGuessBrands () {
  wx.request({
    url: 'https://www.37sd.cn/api.php?op=index&module=content&action=lists',
    data: {
      catid: this.data.catid,
      pagesize: 6
    },
    success: res => {
      let data = res.data
      if (data.error === 0) {
        this.setData({
          guessBrands: data.data
        })
      }
    }
  })
}

function getIsConcern () {
  let {catid, id} = this.data
  if (app.globalData.userInfo) {
    let {userid} = app.globalData.userInfo
    wx.request({
      url: 'https://www.37sd.cn/api.php?op=index&module=favorite&action=show',
      data: {
        catid,
        id, 
        userid
      },
      success: res => {
        let data = res.data
        if (data.error === 0) {
          this.setData({
            isConcern: true
          })
        }
      }
    })
  }
}