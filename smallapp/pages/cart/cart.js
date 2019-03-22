var http = require('../../helpers/HttpResource.js')
import __config from '../../etc/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'JAVA', value: 'Android', checked: 'true' },
      { name: 'Object-C', value: 'IOS' },
      { name: 'JSX', value: 'ReactNative' },
      { name: 'JS', value: 'wechat' },
      { name: 'Python', value: 'Web' }
    ]
  },

  /**
   * 监听checkbox事件
   */
  listenCheckboxChange: function (e) {
 
    //打印对象包含的详细信息
    console.log(e);

  },
  getCartGoodsList:function(){
    var that = this;
    let pageSize= 1;
    http.post({
      url: 'getCartGoodsList '
    },
      function (data) {
            console.log(data)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCartGoodsList()
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