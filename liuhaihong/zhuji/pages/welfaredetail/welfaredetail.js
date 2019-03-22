// pages/welfaredetail/welfaredetail.js

var WxParse = require('../../wxParse/wxParse.js');
import { get_activity_detail } from '../../webapi/welfare.js'
import { showFail } from '../../utils/showtoast.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    case_id: null,//案例id
    content: '',//页面内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({ case_id: id })
    this.initCaseData()
  },
  //初始化页面数据
  initCaseData() {
    get_activity_detail({
      contentid: this.data.case_id,
      success: res => {
        var article = res.data.content
        WxParse.wxParse('article', 'html', article, this, 5);
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
      },
      fail: res => { showFail({ msg: '网络错误' }) }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})