// pages/firstclassfication/firstclassfication.js


import { newCatalog } from '../../template/catalog/catalog.js'
import { checkObjectInListById } from '../../utils/tools.js'
import { IS_CLASSIFY, IS_DETAIL, INTACT} from '../../config/database.js'
import { addLockerToPage } from '../../utils/page_locker.js'
import { getCaseDetailFooterMenuLimts} from '../../utils/tools.js'
const app = getApp()

let page_obj = newCatalog();

page_obj['goNextLevelClassify'] = function (e) {
  let id = e.currentTarget.dataset.id;
  let catalog_list = this.data.catalog_list;
  console.log(id, catalog_list)
  let case_obj = checkObjectInListById(id, catalog_list)
  if (this.areButtonsLocked()) {
    console.log("页面已锁定，丢弃该事件")
  } else {
    this.lockButtons()
    if (case_obj.stype === IS_CLASSIFY) {
      console.log('下一级是分类')
      this.jump('../secondclassfication/secondclassfication',case_obj)
    } else if (case_obj.stype === IS_DETAIL) {
      console.log('下一级是详情')
      case_obj.limits = this.getCaseDetailFooterMenuLimts(app.globalData.current_page_path)
      this.jump('../casedetail/casedetail', case_obj)
    }
  }
}
page_obj['updateCurrentPagePath'] = function (){
  let case_obj = this.data.case_obj
  app.globalData.current_page_path = case_obj.path
  console.log(app.globalData.current_page_path)
}
page_obj['jump'] = function (desc, obj) {
  wx.navigateTo({ url: desc+'?case_obj=' + JSON.stringify(obj), success: res => { }, fail: res => { this.unlockButtons() } })
}

addLockerToPage(page_obj)

Page(page_obj)