// pages/welfare/welfare.js

import { addLockerToPage } from '../../utils/page_locker.js'
import {welfare} from '../../config/database.js'  
import { showFail } from '../../utils/showtoast.js'
import { get_activity_list } from '../../webapi/welfare.js'


var page_obj = {
  /**
   * 页面的初始数据
   */
  data: {
    welfare: [],//福利列表
    page_num:1,//页码
    page_size:3,//页大小
    hasMore:true,//是否还有更多
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initWelfareList()
  },
  initWelfareList(){
    get_activity_list({
      pnum:this.data.page_num,
      psize:this.data.page_size,
      success:res=>{
        if (res.data.records.length < this.data.page_size){
          this.setData({hasMore:false})
        }
        this.setData({welfare:this.data.welfare.concat(res.data.records)})
      },
      fail:res=>{
        showFail({msg:'网络错误'})
      }
    })
  },
  //点击会员福利获取更多
  goActivityDetail(e) {
    var id = e.currentTarget.dataset.id
    if (this.areButtonsLocked()) {
      console.log("页面已锁定，丢弃该事件")
    } else {
      this.lockButtons()
      wx.navigateTo({ url: '../welfaredetail/welfaredetail?id=' + id, success() { }, fail() { that.unlockButtons() }, })
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
    if(this.data.hasMore){
        this.setData({page_num:this.data.page_num+1})
        this.initWelfareList()
    }else{
      console.log('没有更多数据')
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}
addLockerToPage(page_obj)


Page(page_obj)