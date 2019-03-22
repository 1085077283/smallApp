var http = require('../../helpers/HttpResource.js')
import __config from '../../etc/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  formSubmit:function(e){
   console.log(e)
    var data = { username: e.detail.value.name, password: e.detail.value.password}
    var that = this;
    http.post({
      url: 'login',
      data:data
    },
      function (data) {
        console.log(data)
        if (data.code == "100000"){
        console.log(data.msg)
          let userinfo = JSON.parse(data.msg);
        console.log(userinfo)
          wx.setStorageSync('userinfo', userinfo)
          wx.switchTab({
            url: "../home/home"
          })
        }else{
          wx.showModal({
            content: data.msg
          })
        
         }
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