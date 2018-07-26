export default {
  searchItems(keyword, allItems) {
    let items = []
    allItems.forEach(function (item) {
      if (keyword == '') return
      if (item.name.indexOf(keyword) === 0) items.push(item)
      if (items.length > 20) return
    })

    if (items.length == 0) {
      items = allItems.slice(13, 18)
    }
    return items
  },

  findWeeks(results, params) {
    let weeks = []
    results.forEach(function (result) {
      if (params['area'] == result.area && params['number'] == result.number) {
        weeks = result.week
        return
      }
    })

    return weeks
  }
}
