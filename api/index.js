import axios from 'axios'

export default {
  getItems(params, callback) {
    const id = params['id']
    const keyword = params['keyword']
    axios.get(`/json/${id}/items.json`)
      .then(response => {
        callback(this.searchItems(keyword, response.data));
      })
      .catch(error => {
        console.log(error)
      })
  },

  searchItems(keyword, allItems) {
    let items = []
    allItems.forEach(function (item) {
      if(item.name.indexOf(keyword) === 0) items.push(item)
      if (items.length > 20) return
    })

    if (items.length == 0) {
      items = allItems.slice(13, 18)
    }
    return items
  },

  getTypes(id, callback) {
    axios.get(`/json/${id}/type.json`)
      .then(response => {
        callback(response.data.type);
      })
      .catch(error => {
        console.log(error)
      })
  },

  getWeeks(params, callback) {
    const id = params['id']
    axios.get(`/json/${id}/week.json`)
      .then(response => {
        callback(this.findWeeks(response.data, params));
      })
      .catch(error => {
        console.log(error)
      })
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
