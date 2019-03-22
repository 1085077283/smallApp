// pages/feedback/feedback.js


import { addLockerToPage } from '../../utils/page_locker.js'
import { showFail,showSuceess } from '../../utils/showtoast.js'
import { save_feedback } from '../../webapi/service.js'


var page_obj = {
  /**
   * 页面的初始数据
   */
  data: {
   content:'',//留言内容
   refreshContent:'',//用来刷新输入框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  }, 
  //保存留言
  savaFeebback(e){  
    this.setData({content:e.detail.value})
  },
  //提交留言
  submitFeedback(){
    if(this.data.content.length<1){
      showFail({msg:'请输入留言内容'})
    }else{
      save_feedback({ content: this.data.content, success: res => { showSuceess({msg:'留言成功'})},fail:res=>{showFail({msg:'网络错误'})}})
    }
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


Page(page_obj)