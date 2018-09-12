// components/html-content/index.js

const WxParse = require('../../utils/wxParse/wxParse.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    htmlContent: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        WxParse.wxParse('wxContent', 'html', newVal, this, 10)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    htmlContent: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
