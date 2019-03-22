// 本函数占用page.data.tipdata变量。
export function appendShowTipMethod(page_obj) {
  page_obj["showTip_Top_Error"] = function (text) {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "ease-in-out",
      delay: 0
    })
    animation.translateY(50).opacity(0.6).step()
    var go_down_tipdata = {
      animationData: animation.export(),
      text: text
    }
    this.setData({ tipdata: go_down_tipdata })
    setTimeout(function () {
      animation.translateY(-40).step()
      var back_up_tipdata = this.data.tipdata
      back_up_tipdata.animationData = animation.export()
      this.setData({ tipdata: back_up_tipdata })
    }.bind(this), 1500)
  }
}
