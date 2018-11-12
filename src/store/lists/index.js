import axios from 'axios'

export default {
  state: {
    loadedLists: [],
    priceLists: [],
    user: {
      id: '34'
      // things related to user added here
    }
  },
  mutations: {
    setLoadedLists (state, payload) {
      state.loadedLists = payload
    },
    setLoadedListsPrice (state, payload) {
      state.priceLists = payload
    }
  },
  actions: {
    loadLists ({commit}) {
      commit('setLoading', true)
      axios.get('https://raw.githubusercontent.com/Codefa/nuxt-static-test/master/search.json')
      .then(result => result.data)
      .then(lists => {
        const price = []
        for (const key in lists) {
          price.push({
            price: String(lists[key].mid_price)
          })
        }
        commit('setLoadedListsPrice', price)
        commit('setLoadedLists', lists)
        commit('setLoading', false)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {
    setLoadedListsPrice (state) {
      return state.priceLists
    },
    loadedLists (state) {
      return state.loadedLists
      // return state.loadedLists.sort((listA, listB) => {
      //   return listA.created > listB.created
      // })
    },
    loadedList (state) {
      return (listId) => {
        return state.loadedLists.find((list) => {
          return list.id === listId
        })
      }
    }
  }
}
