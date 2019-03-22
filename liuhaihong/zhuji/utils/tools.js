export function checkObjectInListById(id,list){
  if(!id || !list) return null
  for (let i = 0; i < list.length; i++) {
    if (id === list[i].id || id===list[i].cid) {
      return  list[i]
    }
  }
  return null
}
