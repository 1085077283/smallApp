
import { get_case_list } from '../../webapi/classify_list.js'
import { showFail } from '../../utils/showtoast.js'
import { function_tab } from '../../config/database.js'

export function newCatalog() {
  let page = {}
  page["data"] = {
    catalog_list: [],//目录列表
    case_obj: {},//页面数据
    page_num: 1,//当前页码
    page_size: 10,//当前页大小
    hasMore: true,//是否还有更多
  },
    page["onLoad"] = function (options) {
      let case_obj = JSON.parse(options.case_obj);
      this.initPageData(case_obj)
      this.initCaseList()
      this.updateCurrentPagePath()
    },
    page['initPageData'] = function (case_obj) {
      wx.setNavigationBarTitle({
        title: case_obj.name || case_obj.cname
      })
      this.setData({
        case_obj: case_obj
      })
    },
    //请求分类列表
    page['initCaseList'] = function () {
      console.log(this.data.case_obj)
      get_case_list({
        id: parseInt(this.data.case_obj.path), pnum: this.data.page_num, psize: this.data.page_size,
        success: res => { if (res.length < this.data.page_size) { this.setData({ hasMore: false }) } this.setData({ catalog_list: this.data.catalog_list.concat(res) }) },
        fail: res => { showFail({ msg: '网络错误' }) }
      })
    },
    //上拉触底加载更多
    page['onReachBottom'] = function () {
      if (this.data.hasMore) {
        this.setData({ page_num: this.data.page_num + 1 })
        this.initCaseList()
      } else {
        console.log("没有更多数据")
      }
    },
    //计算当期分类去详情的时候，详情页的底部菜单权限
    page['getCaseDetailFooterMenuLimts'] = function (path) {
      for (let i = 0; i < function_tab.length;i++){
          if(path===function_tab[i].path){
            return function_tab[i].limits
          }
      }
    },
    page["onShow"] = function () {
      this.unlockButtons()
    }
  return page
}