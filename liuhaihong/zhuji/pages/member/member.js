// pages/member/member.js
const app = getApp()

var page_obj = {

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initAuthorizeState()
  },
  //初始化授权状态
  initAuthorizeState() {
    let isAuthorize = app.globalData.is_authorize
    if (!isAuthorize) {
      wx.showModal({
        title: '提示',
        content: '您尚未授权，部分功能将受限',
        confirmText: '去授权',
        success: res => {
          if (res.confirm) {
            console.log('用户点击授权')
            wx.openSetting({
              success: function (data) {
                if (data.authSetting["scope.userInfo"] == true) {
                  wx.getUserInfo({
                    withCredentials: false,
                    success: function (res) {
                      app.globalData.userInfo = res.userInfo
                      app.globalData.is_authorize = true
                    },
                    fail: function () {
                      console.info("授权接口调用失败");
                    }
                  });
                }
              },
              fail: function () {
                console.info("设置失败返回数据");
              }
            });
          } else if (res.cancel) {
            console.log('用户拒绝授权')
          }
        },
        fail: res => {
          console.log('接口调用失败')
        }
      })
    }
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


Page(page_obj)