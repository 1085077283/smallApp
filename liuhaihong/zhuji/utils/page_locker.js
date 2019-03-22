export function addLockerToPage(page_obj) {
  if (page_obj.hasOwnProperty("lockButtons") ||
    page_obj.hasOwnProperty("unlockButtons") ||
    page_obj.hasOwnProperty("areButtonsLocked") ||
    page_obj.data.buttons_locked
  ) {
    return false
  }

  page_obj.data.buttons_locked = false
  page_obj["lockButtons"] = function () {
    this.setData({ buttons_locked: true })
  }
  page_obj["unlockButtons"] = function () {
    this.setData({ buttons_locked: false })
  }
  page_obj["areButtonsLocked"] = function () {
    return this.data.buttons_locked
  }
  return true
}
