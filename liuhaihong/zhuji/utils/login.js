//此js文件主要为登录小程序，保存个人登录信息
import { user_login } from '../webapi/server.js'
import { aid } from '../config/database.js'
let login_state = getApp().globalData.login_state

// 确保当前微信账号已登录（获得token）。
// 参数obj：一个object，至少包含一个属性success，是一个无参函数。
// 如果确保成功，则确保app.globalData.login_state.token有有效值，并无参回调obj.success函数。
// 如果中途出错，则跳转到首页。
export function confirm_login(obj) {
  if (login_state.token && login_state.is_login) {
    console.log("token已经获取过了，是：", login_state.token)
    obj.success()
  }else {
    console.log("开始尝试获取token，首先是是wx.login，以获取code")
    wx.login({
      success: function (res) {
        console.log("wx.login success, return: ", res)
        user_login({
          wx_code:res.code,
          aid:aid,
          success:function(res){
            login_state.token  = res.data.token
            login_state.is_login = true
            login_state.ustatus = res.data.ustatus
            login_state.authorization = res.data.authorization
            console.log("token get success ,token is ",res.data.token)
            obj.success(res)
          },
          fail:function(){
            obj.fail(res)
          }
        })
      },
      fail: function (res) {
        console.log("wx.login fail")
        obj.fail(res)
      }
    })
  }
}

