//此js文件是针对一个对象进行格式化

// 对于obj，如果是null则新建；并追加success和fail函数
export function formatObject(obj) {
  if (!obj) { obj = {} }
  if (!obj.hasOwnProperty("success")) { obj["success"] = function () { } }
  if (!obj.hasOwnProperty("fail")) { obj["fail"] = function () { } }
  return obj
}

