// pages/ordersubject/ordersubject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    car_list:[
      {
        id:'1',
        name:'宝马'
      },
      {
        id:'2',
        name:'奔驰'
      },
      {
        id:'3',
        name:'法拉利'
      },
      {
        id:'4',
        name:'兰博基尼'
      }
    ],//车型列表
  },
  choiceType(e){
    var car_type =this.data.car_list[e.currentTarget.dataset.index];
    var pages = getCurrentPages();
    var page = pages[pages.length - 2];
    page.comfrimCarType(car_type);
    wx.navigateBack({})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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