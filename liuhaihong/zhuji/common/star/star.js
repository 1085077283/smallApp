export function star(page_obj){
  page_obj['computeStarClasses'] = function () {
    let starCount = parseInt(this.data.starCount);
    let result = []
    for(let i = 0 ;i<starCount;i++){
      result.push('on')
    }
    while (result.length < 5) {
      result.push('off')
    }
    this.setData({
      starClasses:result
    })
  }
  page_obj['changeStars'] = function(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      starCount:index+1
    })
    this.computeStarClasses()
  }
}
