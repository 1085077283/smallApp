//index.js
//获取应用实例
const app = getApp()

import { confirm_login } from '../../utils/login.js'
import { carousel, function_tab, carousel_config, business_config } from '../../config/database.js'
import { addLockerToPage } from '../../utils/page_locker.js'
import { get_activity_list } from '../../webapi/welfare.js'
import {showFail } from '../../utils/showtoast.js'

var page_obj = {
  data: {
    carousel: carousel,//轮播图数据
    businessConfig: business_config,//商家信息配置
    welfare: [],//福利数据
    functionTab: function_tab,//导航区数据
    carouselConfig: carousel_config,//轮播图配置
    popup: false,//popup控制器
    operate_list: [
      {
        id: '1',
        title: '服务咨询'
      },
      {
        id: '2',
        title: '投诉建议'
      },
      {
        id: '3',
        title: '留言反馈'
      },
    ],//popuplist
  },
  //tab点击操作
  goDesc(e) {
    let path = e.currentTarget.dataset.path
    this.tabChoiceOperate(path)
  },
  //tab点击之后根据path反应操作
  tabChoiceOperate(path) {
    switch (path) {
      case 'feedback': this.showPopup()
        break;
      case 'service': this.goService()
        break;
      default: this.jump(path)
        break;
    }
  },
  jump(path) {
    let that = this;
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      let func_list = this.data.functionTab
      for(let i =0;i<func_list.length;i++){
        if(path==func_list[i].path){
          var tab_obj=func_list[i]
          break
        }
      }
      wx.navigateTo({ url: '../firstclassfication/firstclassfication?case_obj=' + JSON.stringify(tab_obj), success() { }, fail() { that.unlockButtons() } })
    }
  },
  //弹出popuo
  showPopup() {
    this.setData({
      popup: true
    })
  },
  //收起popup
  cancelTap() {
    this.setData({
      popup: false
    })
  },
  //popup点击
  popupHandClick(e) {
    let id = e.currentTarget.dataset.id
    this.choiceHandle(id)
    this.cancelTap()
  },
  //popup点击后根据id选择操作函数
  choiceHandle(id) {
    switch (id) {
      case '1': this.callMobile()
        break;
      case '2': this.callMobile()
        break;
      case '3': this.leaveMessage()
        break
    }
  },
  //拨打电话
  callMobile() {
    wx.makePhoneCall({
      phoneNumber: business_config.mobile
    })
  },
  //去留言页面
  leaveMessage() {
    let that = this;
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      wx.navigateTo({ url: '../feedback/feedback', success() { }, fail() { that.unlockButtons() }, })
    }
  },
  //去服务评价页面
  goService() {
    let that = this;
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      wx.navigateTo({ url: '../service/service', success() { }, fail() { that.unlockButtons() }, })
    }
  },
  //更多会员福利
  welfareMore(){
    let that = this;
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      wx.navigateTo({ url: '../welfare/welfare', success() { }, fail() { that.unlockButtons() }, })
    }
  },
  //点击会员福利获取更多
  goActivityDetail(e){
    var id = e.currentTarget.dataset.id
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      wx.navigateTo({ url: '../welfaredetail/welfaredetail?id='+id, success() { }, fail() { that.unlockButtons() }, })
    }
  },
  onLoad() {
    this.initLoginState()
  },
  onShow() {
    this.unlockButtons()
  },
  //初始化登录状态
  initLoginState() {
    var that = this
    confirm_login({
      success(res) {
        that.initActivityList()
      },
      fail(res) { }
    })
  },
  //初始化会员福利
  initActivityList() {
    get_activity_list({
      pnum: 1, psize: 3, success: res => {
        this.setData({ welfare: res.data.records })
      }, fail: res => { this.failNetwork }
    })
  },
  //网络错误
  failNetwork() {
    showFail({ msg: '网络错误' })
  },
}

addLockerToPage(page_obj)

Page(page_obj)
