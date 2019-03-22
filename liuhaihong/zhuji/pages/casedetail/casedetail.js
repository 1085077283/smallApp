// pages/casedetail/casedetail.js
var WxParse = require('../../wxParse/wxParse.js')
import { INTACT, ORDER, CALL} from '../../config/database.js'
import { get_commodity_detail} from '../../webapi/classify_list.js'
import { showSuccess, showFail} from '../../utils/showtoast.js'

var page_obj = {

  /**
   * 页面的初始数据
   */
  data: {
      case_obj:{},//父级页面对象
      funcLimits:true,//单个拨打电话按钮控制器。控制底部菜单显示和电话按钮显示,true为底部菜单显示，false为拨打电话按钮显示
      footerMenuLimits:true,//底部功能区控制按钮，true为显示全部功能，false为只显示预约
      article_obj:{
        commodityId:1,//产品id
        coordinate:['1111','2222'],//商家精度为
        phones:['15558155021','18693061998','18093061998']//商家电话
      },//页面文章对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let case_obj = JSON.parse(options.case_obj)
    this.setData({case_obj:case_obj})
    this.initFooterMenuLimits()
    this.initPageArticleData()
  },
  //初始化底部菜单权限
  initFooterMenuLimits(){
    let limits = this.data.case_obj.limits
    if (limits === INTACT){
      this.setData({ funcLimits: true, footerMenuLimits:true})
    } else if (limits === ORDER){
      this.setData({ funcLimits: true, footerMenuLimits: false})
    } else if (limits === CALL){
      this.setData({ funcLimits: false, footerMenuLimits: false })
    }
  },
  //初始化页面文章
  initPageArticleData(){
    console.log(this.data.case_obj)
    get_commodity_detail({cid:this.data.case_obj.cid,
    success:res=>{
      let article = res.data.content
      // let article_obj = { commodityId: res.data.commodityId, coordinate: res.data.coordinate.split(","), phones: res.data.phones.split(","),}
      // WxParse.wxParse('article', 'html', article, this, 5);      
      // this.setData({
      //   article_obj: article_obj
      // })
    },
    fail:res=>{}})
  },
  failNetwork(){
    showFail({msg:'网络错误'})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}


Page(page_obj)