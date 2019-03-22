
import { getFullUrl } from '../config/url.js'
import { getHeaders } from './get_header.js'
import { formatObject } from '../utils/obj_format.js'
import { showLoading, hide } from '../utils/showtoast.js'
// URL : /activity/page
// 会员福利列表获取， 首页和更多页面
//参数是一个obj,参数为 pnum 页码 number ,psize 页大小 number， top 置顶 number success 成功回调，fail失败回调

export function get_activity_list(obj) {
  console.log("获取会员福利列表，页码是 ", obj.pnum, ",页大小是 ", obj.psize)
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj);
  var req_data = JSON.stringify({ pnum: obj.pnum, psize: obj.psize, top: 0 })
  wx.request({
    method: 'POST',
    url: getFullUrl('/activity/page'),
    header: getHeaders(),
    data: req_data,
    success(res) {
      console.log('活动列表获取成功,是', res);
      hide()
      if (res.statusCode == 200) {
        obj.success(res)
      } else {
        obj.fail(res)
      }
    },
    fail(res) {
      obj.fail(res)
    }
  })
}



// URL : /activity/content3
// 会员福利详情获取
//参数是一个obj,参数为 contentid 福利id number , success 成功回调，fail失败回调

export function get_activity_detail(obj) {
  console.log("获取会员福利详情中，福利id为 ", obj.contentid)
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj)
  var req_data = { contentid: obj.contentid }
  wx.request({
    method: 'GET',
    url: getFullUrl('/activity/content3'),
    header: getHeaders(),
    data: req_data,
    success(res) {
      console.log('会员福利获取成功，res 是', res);      
      if (res.statusCode == 200) {
        obj.success(res)
      } else {
        obj.fail(res)
      }
      hide()
    },
    fail(res) {
      obj.fail(res)
    }
  })
}
