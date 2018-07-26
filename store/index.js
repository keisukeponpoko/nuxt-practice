import Vuex from 'vuex'
import library from '~/library/index'

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
    async searchItems ({state, commit}, keyword) {
      const response = await this.$axios.$get(`/json/${state.id}/items.json`)
      commit('setItems', library.searchItems(keyword, response))
    },
    async setInfo ({commit}, param) {
      const id = param['id'] || 131130
      const area = param['area'] || '千駄ヶ谷'
      const number = param['number'] || '1～4丁目'

      commit('setId', id)
      commit('setArea', area)
      commit('setNumber', number)
      this.dispatch('searchItems', '')
      commit('setTypes', (await this.$axios.$get(`/json/${id}/type.json`)).type)
      const response = await this.$axios.$get(`/json/${id}/week.json`)
      commit('setWeeks', library.findWeeks(response, {area: area, number: number}))
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
