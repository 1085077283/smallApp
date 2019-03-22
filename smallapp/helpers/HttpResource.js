
import __config from '../etc/config'

//flag 为true的时候不关闭
function post(config, cb, closeFlag) {
  var token = wx.getStorageSync('token');
  // console.log(token)
  // if (null == token || '' == token) {
  //   wx.navigateTo({
  //     url: '/pages/signIn/index'
  //   })
  // }

  wx.showLoading({
    title: '加载中...',
    mask: true
  })
  var data = config.data || {};
  data.token = token;
  wx.request({
    url: __config.domain + config.url,
    data: data,
    header: { "content-type": "application/x-www-form-urlencoded" },
    method: 'post',
    dataType: 'json',
    success: function (res) {
      typeof cb == "function" && cb(res.data);
    },
    fail: function (res) {
      console.log(res)
    },
    complete: function (res) {
      if (!closeFlag)
        wx.hideLoading()
    },
  })
}

function getOrder(orderId, cb) {
  wx.showLoading({
    title: '加载中...',
    mask: true
  })
  var data = { orderId: orderId };
  data.token = wx.getStorageSync('token')
  wx.request({
    url: __config.domain + 'getOrder.do',
    data: data,
    header: { "content-type": "application/x-www-form-urlencoded" },
    method: 'post',
    dataType: 'json',
    success: function (res) {
      typeof cb == "function" && cb(res.data);
    },
    fail: function (res) {
      console.log(res)
    },
    complete: function (res) {
      wx.hideLoading()
    },
  })
}
module.exports.post = post
module.exports.getOrder = getOrder