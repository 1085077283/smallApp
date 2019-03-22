// 本文件定义了所有“显示微信wx.showToast模式的提示”的使用函数。
// 原则上，本小程序中所有wx.showToast都应该使用这里的函数。

// 提示“成功”
// 参数obj：一个object，属性：
//      msg: string, 显示的内容。可以省略，默认值“成功”。
//      duration: int，显示时长，单位毫秒。可以省略，默认值1500。
export function showSuccess(obj) {
  if (!obj) { obj = {} }
  if (!obj.msg) { obj.msg = "成功" }
  if (!obj.duration) { obj.duration = 1500 }
  wx.showToast({
    icon: "success",
    title: obj.msg,
    duration: obj.duration,
    fail: function () {
      console.log("微信showToast\"success\"失败")
    }
  })
}

// 提示“正在执行操作”
// 参数obj：一个object，属性：
//      msg: string, 显示的内容。可以省略，默认值“成功”。
//      duration: int，显示时长，单位毫秒。可以省略，默认值1500。
export function showLoading(obj) {
  if (!obj) { obj = {} }
  if (!obj.msg) { obj.msg = "操作进行中" }
  if (!obj.duration) { obj.duration = 1500 }
  wx.showToast({
    icon: "loading",
    title: obj.msg,
    duration: obj.duration,
    fail: function () {
      console.log("微信showToast\"loading\"失败")
    }
  })
}

// 提示“警告”
// 参数obj：一个object，属性：
//      msg: string, 显示的内容。可以省略，默认值“成功”。
//      duration: int，显示时长，单位毫秒。可以省略，默认值1500。
export function showWarning(obj) {
  if (!obj) { obj = {} }
  if (!obj.msg) { obj.msg = "注意" }
  if (!obj.duration) { obj.duration = 1500 }
  wx.showToast({
    image: "/images/warn.png",
    title: obj.msg,
    duration: obj.duration,
    fail: function () {
      console.log("微信showToast\"warning\"失败")
    }
  })
}

// 提示“失败”
// 参数obj：一个object，属性：
//      msg: string, 显示的内容。可以省略，默认值“成功”。
//      duration: int，显示时长，单位毫秒。可以省略，默认值1500。
export function showFail(obj) {
  if (!obj) { obj = {} }
  if (!obj.msg) { obj.msg = "失败" }
  if (!obj.duration) { obj.duration = 1500 }
  wx.showToast({
    image: "/images/fail.png",
    title: obj.msg,
    duration: obj.duration,
    fail: function () {
      console.log("微信showToast\"fail\"失败")
    }
  })
}

// 隐藏提示窗口
export function hide() {
  wx.hideToast();
}

