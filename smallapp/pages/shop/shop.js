var http = require('../../helpers/HttpResource.js')
import __config from '../../etc/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        className: '果味',
        id: '1'
      },
      {
        className: '果味',
        id: '1'
      }

    ],
    data: [{
      goods_name: '苹果',
      img: '/img/icon/NEW.png',
      storeName: '坚强物流',
      maxPrice: 0.1,
      minPrice: 0.1
    }],
    listclick: '5',
  },
  listclick: function(e) {
    var that = this;
    var id = e.target.dataset.id;
    var orderid = that.data.listclick;
    if (id != orderid) {
      that.getGoodsList(id);
      that.setData({
        listclick: id,
        clickname: e.target.dataset.name
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
  },
  getThirdClass: function() {
    var that = this;
    http.post({
        url: 'getThirdClass'
      },
      function(data) {
        console.log(data)
        if (data.code == "100000") {
          var msg = JSON.parse(data.msg)
          that.setData({
            list: msg
          })
          let id = msg[0].id;
          that.getGoodsList(id)
          
        }
      })
  },
  // 二级菜单
  getGoodsList: function(id) {
    var that = this;
    let data = {
      goodsclassId: id,
      pageSize: 1
    };
    // console.log(data)
    http.post({
      url: 'getGoodsList',
      data: data
    }, function(data) {
      console.log(data)
      if (data.code == "100000") {
        
        let msg = JSON.parse(data.msg)
        console.log(msg)
        for (var i = 0; i < msg.length; i++) {
          msg[i].img = __config.file_domain + msg[i].path + '/' + msg[i].name
        }
        that.setData({
          data: msg
        })
      }

    })
  },

  //获取分类商品
  getlist: function() {

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
    this.getThirdClass();
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