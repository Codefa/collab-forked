import axios from 'axios'

export default {
  state: {
    loadedLists: [],
    loadedLuxury: []
  },
  mutations: {
    setLists (state, payload) {
      state.loadedLists = payload
    },
    setLuxury (state, payload) {
      state.loadedLuxury = payload
    }
  },
  actions: {
    loadedLists ({ commit }) {
      axios.get('https://rocketgo.it/public/api/v1/search')
      .then(result => result.data)
      .then(lists => {
        for (const key in lists) {
          if (lists.hasOwnProperty(key)) {
            // console.log(lists[key].address)
            // const add = lists[key].address
            // commit('usePlace', add)
          }
        }
        commit('setLists', lists)
      })
    },
    loadedLuxury ({ commit }) {
      axios.get('https://rocketgo.it/public/api/v1/search')
      .then(result => result.data)
      .then(lists => {
        console.log(lists)
        commit('setLuxury', lists)
      })
    }
  },
  getters: {
    loadedLists (state) {
      return state.loadedLists
    },
    loadedLuxury (state) {
      return state.loadedLuxury
    }
  }
}
