import __config from './etc/config'
App({
  onLaunch: function() {
        console.log(this.APPDATA)
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        wx.setStorageSync('screenHeight', res.screenHeight)
        let screenHeight = wx.getStorageSync('screenHeight')//手机的高度
        let token=wx.getStorageSync('token')
        wx.request({
          url: __config.domain + 'init', //仅为示例，并非真实的接口地址
          data: {
            brand: res.brand,
            model: res.model,
            system: res.system,
            platform: res.platform,
            screenWidth: res.screenWidth,
            screenHeight: res.screenHeight,
            token:token
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            console.log(res.data)
            console.log('获得token')
            var token=res.data.msg
            wx.setStorageSync('token', token)
          }
        })
      }
    })
    // 登录
    //   wx.login({
    //     success: res => {
    //       // 发送 res.code 到后就台换取 openId, sessionKey, unionId
    //     }
    //   })
    //   // 获取用户信息
    //   wx.getSetting({
    //     success: res => {
    //       if (res.authSetting['scope.userInfo']) {
    //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //         wx.getUserInfo({
    //           success: res => {
    //             // 可以将 res 发送给后台解码出 unionId
    //             this.globalData.userInfo = res.userInfo
    //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //             // 所以此处加入 callback 以防止这种情况
    //             if (this.userInfoReadyCallback) {
    //               this.userInfoReadyCallback(res)
    //             }
    //           }
    //         })
    //       }
    //     }
    //   })
  },
  globalData: {
    userInfo: null
  }
})