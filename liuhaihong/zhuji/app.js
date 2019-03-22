//app.js
var webapi = require('./webapi/server.js');

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          console.log("已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框");
          //用户为二次登陆
          this.globalData.login_state.first_login = false
          wx.getUserInfo({
            success: res => {
              // 保存用户信息到全局
              this.globalData.userInfo = res.userInfo
              this.globalData.is_authorize = true             
              console.log("授权成功,用户信息为", res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })      
        }else{
          console.log("没有授权，开始授权")
          wx.getUserInfo({
            success: res => {
              // 保存用户信息到全局
              this.globalData.userInfo = res.userInfo
              console.log("授权成功,用户信息为", res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              //设置用户授权为true
              this.globalData.is_authorize = true
              //用户同意授权，保存用户信息
              this.save_user_info(res.userInfo);
            },
            fail: res => {
              console.log("拒绝授权")              
              this.globalData.is_authorize = false
            }
          })
          //用户为初次登陆
          this.globalData.login_state.first_login = true
        }
      }
    })
  },
  save_user_info (userInfo){
    webapi.save_user_info({
      userInfo: userInfo,
      success: function () {
        console.log("用户信息保存成功")
      },
      fail: function () {
      }
    })
  },
  globalData: {
    userInfo: null,//用户信息
    login_state:{
      is_login:false,//是否登录      
      token:'',//用户token
      first_login:false,//根据用户是否授权，判断是否第一次登录
      ustatus:false,//用户是否注册 0 未注册 1 已注册
      authorization:null,//用户是否通过微信鉴权
    },
    is_authorize: false,//是否授权
    current_page_path:null,//当前打开的功能模块的path
  }
})