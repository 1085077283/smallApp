
import { getFullUrl } from '../config/url.js'
import { getHeaders, getHeadersForLogin } from './get_header.js'
import { formatObject } from '../utils/obj_format.js'
import { showLoading, hide } from '../utils/showtoast.js'
// URL : /user/login
//微信登录后，获取的code，去服务器换取token ，ustatus,authorization
//参数是一个obj,code string 微信code，success 成功回调，fail失败回调

export function user_login(obj) {
  console.log("用户登录，code 是", obj.wx_code, ",向服务器换取token")
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj);
  var req_data = JSON.stringify({ wx_code: obj.wx_code, aid: obj.aid })
  wx.request({
    method: 'POST',
    url: getFullUrl('/user/login'),
    header: getHeadersForLogin(),
    data: req_data,
    success(res) {
      console.log(res);
      hide()
      if (res.statusCode == 200) {
        obj.success(res)
      } else {
        obj.fail()
      }
    },
    fail(res) {
      obj.fail()
    }
  })

}


//URL: /user/save
//成功获取code后，保存微信用户信息到服务器,参数是一个obj，键值有
//obj.userInfo is Object , key && value include 
// avatarurl String  , nickname String ,gender number, provice（省份） String ,city string ,country string 
//obj include success success callback func and fail fail callback func

export function save_user_info(obj) {
  console.log("begin save user infomation，user information is ", obj.userInfo)
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj);
  var req_data = JSON.stringify(obj.userInfo);
  wx.request({
    method: 'POST',
    url: getFullUrl('/user/save'),
    header: getHeaders(),
    data: req_data,
    success(res) {
      hide()
      if (res.statusCode == 200) {
        console.log(res);
        obj.success(res)
      } else {
        obj.fail()
      }
    },
    fail() {
      obj.fail()
    }
  })
}

// URL: /validate/send
// 通过微信获取微信code，并发送短信验证码到云平台服务器。
// 参数obj：一个object，至少4个属性
//      stype:发送类型 1：补充信息中的验证码 2、验证原手机号 3、绑定新手机号
//      mobile: 发送验证码时的目标手机号码
//      success：网络请求成功时调用的函数，不带参数。
//      fail: 网络请求失败时时调用的函数，不带参数。
function verify_code(obj) {
  console.log("发送验证码到手机")
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj);
  var req_data = JSON.stringify({mobile:obj.mobile,stype:obj.stype});
  wx.request({
    method: "POST",
    url: getFullUrl("/validate/send"),
    data: req_data,
    header: getHeaders(),
    success(res) {
      console.log("(success)", res)
      if (res.statusCode == 200) {
        obj.success(res)
      } else {
        obj.fail(res)
      }
    },
    fail(res) {
      obj.fail()
    }
  })
}





















