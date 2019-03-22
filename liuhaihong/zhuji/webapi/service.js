import { getFullUrl } from '../config/url.js'
import { getHeaders } from './get_header.js'
import { formatObject } from '../utils/obj_format.js'
import { showLoading, hide } from '../utils/showtoast.js'


//url:/feedback/save
//留言反馈
//参数是一个obj，包含content 留言内容 string ，success 成功回调 ，fail 失败回调


export function save_feedback(obj){
  console.log("开始留言,内容是",obj.content)
  showLoading({ msg: '留言中...' })
  obj = formatObject(obj);
  var req_data = {content:obj.content }
  wx.request({
    method: 'POST',
    url: getFullUrl('/feedback/save'),
    header: getHeaders(),
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

//url:/evaluate/save
//服务评价
//参数是一个obj，包含content 留言内容 string ，mid 商户id string ，star 星级 number ,success 成功回调 ，fail 失败回调

export function save_evaluate(obj){
  console.log("开始评价中,内容是 ", obj.content,' ,商户id是 ',obj.mid,' ,星级为 ',obj.star)
  showLoading({ msg: '评价中...' })
  obj = formatObject(obj);
  var req_data = { content: obj.content,mid:obj.mid,star:obj.stars }
  wx.request({
    method: 'POST',
    url: getFullUrl('/evaluate/save'),
    header: getHeaders(),
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