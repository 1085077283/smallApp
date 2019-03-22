// pages/service/service.js

import {star} from '../../common/star/star.js'
import { showFail, showSuceess } from '../../utils/showtoast.js'
import { save_evaluate } from '../../webapi/service.js'

var page_obj = {

  /**
   * 页面的初始数据
   */
  data: {
    starCount:5,//星级
    content: '',//留言内容
    refreshContent: '',//用来刷新输入框
    business:{mid:'1'}
  },
  //保存留言
  savaFeebback(e) {
    this.setData({ content: e.detail.value })
  },
  //提交留言
  submitFeedback() {
    if (this.data.content.length < 1) {
      showFail({ msg: '请输入留言内容' })
    } else if(!this.data.business.mid){
      showFail({ msg: '请选择商户' })
    }else{
      save_evaluate({ content: this.data.content,mid:this.data.business.mid,star:this.data.starCount,success: res => { showSuceess({ msg: '评价成功' }) }, fail: res => { showFail({ msg: '网络错误' }) } })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.computeStarClasses()
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
}

star(page_obj)

Page(page_obj)