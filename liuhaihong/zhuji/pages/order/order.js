// pages/order/order.js
import { appendShowTipMethod } from '../../common/tip/tip.js'
import { addLockerToPage } from '../../utils/page_locker.js'
var page_obj = {
  /**
   * 页面的初始数据
   */
  data: {
    agreement:true,//用户协议，默认同意，为true
    carType:{},//预约项目
    username:'',//用户姓名
    userMobile:'',//用户电话
  },
  //切换用户协议
  switchTap(){
    this.setData({
      agreement:!this.data.agreement
    })
  },
  goUserAgreement(){
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      wx.navigateTo({
        url: '../agreement/agreement',
      })
    }   
  },
  saveUsername(e){
    this.setData({
      username:e.detail.value
    })
  },
  saveUserMobile(e){
    this.setData({
      userMobile:e.detail.value
    })
  },
  submit(){
    if (this.judegSubmitInfo()){
      console.log('开始预约')
    }
  },
  choiceCarType(){
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      wx.navigateTo({
        url: '../ordersubject/ordersubject',
      })
    }      
  },
  comfrimCarType(car_type){
    this.setData({
      carType:car_type
    })
  },
  judegSubmitInfo(){
    if(!this.data.carType.id){
      this.showTip_Top_Error('请选择预约类型')
      return  false
    }else if(this.data.username.length<1){
      this.showTip_Top_Error('请输入姓名')
      return false
    }else if(this.data.userMobile.length<1){
      this.showTip_Top_Error('请输入电话号码')
      return false
    }else if(this.data.userMobile.length<11){
      this.showTip_Top_Error('请输入正确的电话号码')
      return false
    }
    return true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.unlockButtons()
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
addLockerToPage(page_obj)

appendShowTipMethod(page_obj)

Page(page_obj)