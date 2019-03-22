var http = require('../../helpers/HttpResource.js')
import __config from '../../etc/config'
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    display: false,
    floor: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.banner();

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
  //轮播
  banner: function() {
    var that = this;
    var token = wx.getStorageSync('token');
    if(token==''){
      token='-1'
    }
    console.log(token)
    let data={token:token};
    wx.request({
      url: __config.domain+'index',
      data: data,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'post',
      dataType: 'json',
      success: function(res) {
        console.log(res);
        let data=res.data
        if (data.code == "100000") {
          let advertJson = JSON.parse(data.msg.advertJson);
          let floorJson = JSON.parse(data.msg.floorJson);

          for (let i = 0; i < floorJson.length; i++) {
            for (let j = 0; j < floorJson[i].lines_info[0].line_info.length; j++) {
              floorJson[i].lines_info[0].line_info[j].img_url = __config.file_domain + floorJson[i].lines_info[0].line_info[j].img_url
            }
          }
          for (let i = 0; i < advertJson.length; i++) {
            advertJson[i].img = __config.file_domain + advertJson[i].path + '/' + advertJson[i].name
          }
          //floor 用到的楼层
          var floor = [];
          for (let i = 0; i < floorJson.length; i++) {
            floor[i] = {
              lines_info: floorJson[i].lines_info[0].line_info,
              more_link: floorJson[i].more_link,
              title: floorJson[i].title
            };
          }
          // console.log(floor)
          that.setData({
            floor: floor,
            imgUrls: advertJson
          })

        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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