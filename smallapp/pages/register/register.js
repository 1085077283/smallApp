var http = require('../../helpers/HttpResource.js')
import __config from '../../etc/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  //验证手机
  phone: function(e) {
    var that = this;
    var phone = e.detail.value;
    let data = {
      phone: phone
    }
    http.post({
        url: 'examiningPhone',
        data: data
      },
      function(data) {
        let msg = JSON.parse(data.msg)
        console.log(msg)
        if (msg.boolean == true) {
          that.setData({
            phone: phone
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '手机号已被注册'
          })
        }
      })
  },
  //获取验证码
  takecode: function(e) {
    var that = this;
    setTimeout(function () {
    var phone = that.data.phone;
    console.log(phone)
    let data = {
      phone: phone
    }
    http.post({
        url: 'sendRegisterCode',
        data: data
      },
      function(data) {
        console.log(data)
        wx.showToast({
          title: data.msg,
          icon: 'loading',
          duration: 2000
        })
      })
    }, 1000)
  },

  //注册
  formSubmit: function(e) {
    console.log(e)
    var that = this;
    var value = e.detail.value;
    let data = {
      username: value.username,
      password: value.password,
      passwordTwo: value.passwordTwo,
      code: value.code,
      phone: value.phone
    }
    http.post({
      url: 'register',
      data: data
    }, function(data) {
      console.log(data)
      if (data.code = "100000") {
          let msg=JSON.parse(data.msg)
          
      }
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})