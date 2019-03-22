import { getFullUrl } from '../config/url.js'
import { getHeaders } from './get_header.js'
import { formatObject } from '../utils/obj_format.js'
import { showLoading, hide } from '../utils/showtoast.js'


//URL：/classify/list
//get case list 
//arguments is Object ; key and value include id number;pnum number ,psize number initialize psize = 5
//success success callback func fail fail callback func
export function get_case_list(obj) {
  console.log("开始获取案例列表,案例id是", obj.id,',案例名称是 ',obj.cname,',页码是 ',obj.pnum,',页大小是',obj.psize)
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj);
  var req_data = {id:obj.id,cname:obj.cname,pnum:obj.pnum,psize:obj.psize};
  wx.request({
    method: 'POST',
    url: getFullUrl('/classify/list'),
    header: getHeaders(),
    data: req_data,
    success: function (res) {
      hide()
      if (res.statusCode == 200) {
        console.log(res)
        obj.success(res.data)
      } else {
        obj.fail()
      }
    },
    fail: function () {
      obj.fail()
    }
  })
}



//URL:/commodity/info
//commodity detail infomation page
//arguments is Object ; key and value include commodityId number ;
//success success callback func ;fail fail callback func

export function get_commodity_detail(obj) {
  console.log("开始获取文章，文章id是", obj.cid)
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj);
  var req_data = JSON.stringify({ cid: obj.cid });
  wx.request({
    method: 'POST',
    url: getFullUrl('/commodity/info'),
    header: getHeaders(),
    data: req_data,
    success: function (res) {
      hide()
      if (res.statusCode == 200 ) {
        obj.success(res)
      } else {
        obj.fail()
      }
    },
    fail: function () {
      obj.fail()
    }
  })
}



//URL：/reserve/decapply
//order a commodity
//arguments is Object ;key and value include commodityId number ;uname string ;phone string 
//success success callback func;fail fail callback func
export function order_commodity(obj) {
  console.log("begin order commodity ")
  showLoading({ msg: '加载中...' })
  obj = formatObject(obj);
  var req_data = JSON.stringify(obj.order_info);
  wx.request({
    method: 'POST',
    url: getFullUrl('/reserve/decapply'),
    header: getHeaders(),
    data: req_data,
    success: function (res) {
      hide()
      if (res.statusCode == 200 && res.data.status == '0') {
        obj.success({
          timestamp: res.data.timestamp,
          nonce_str: res.data.nonce_str,
          pay_sign: res.data.pay_sign,
          pkg: res.data.pkg
        })
      } else {
        obj.fail()
      }
    },
    fail: function () {
      obj.fail()
    }
  })
}

