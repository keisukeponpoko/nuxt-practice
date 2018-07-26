import Vuex from 'vuex'
import apis from '~/api/index'

const store = () => new Vuex.Store({
  state: {
    id: null,
    area: '',
    number: '',
    items: [],
    types: [],
    weeks: []
  },
  getters: {
    getItems: state => {
      return state.items
    },
    getWeeks: state => {
      return state.weeks
    },
    getTypes: state => {
      return state.types
    },
    getAddress: state => {
      return state.area + state.number
    }
  },
  actions: {
    searchItems ({state, commit}, keyword) {
      apis.getItems(
        {id: state.id, keyword: keyword},
        (items => {commit('setItems', items)})
      )
    },
    setInfo ({commit}, param) {
      const id = param['id'] || 131130
      const area = param['area'] || '千駄ヶ谷'
      const number = param['number'] || '1～4丁目'

      commit('setId', id)
      commit('setArea', area)
      commit('setNumber', number)
      this.dispatch('searchItems', '')
      apis.getTypes(id, (types => {commit('setTypes', types)}))
      apis.getWeeks(
        {id: id, area: area, number: number},
        (weeks => {commit('setWeeks', weeks)})
      )
    }
  },
  mutations: {
    setId (state, id) {
      state.id = id
    },
    setArea (state, area) {
      state.area = area
    },
    setNumber (state, number) {
      state.number = number
    },
    setItems (state, items) {
      state.items = items
    },
    setTypes (state, types) {
      state.types = types
    },
    setWeeks (state, weeks) {
      state.weeks = weeks || []
    }
  }
})

export default store
