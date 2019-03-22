// 本代码实现了webapi反复用到的功能。

// 返回一个object，包含web请求的header，不包括token
export function getHeadersForLogin() {
  return {
    "Accept": "application/json;charset=utf-8",
    "Content-Type": "application/json;charset=utf-8",
  }
}

// 返回一个object，包含web请求的header，包括token
export function getHeaders() {
  var headers = getHeadersForLogin();
  headers["Token"] = getApp().globalData.login_state.token
  return headers
}



