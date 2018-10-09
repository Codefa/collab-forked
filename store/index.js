import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loadedLists: [],
      counter: 0
    }),
    mutations: {
      setLists (state, lists) {
        state.loadedLists = lists
      },
      increment (state) {
        state.counter++
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return context.app.$axios.$get('/public/api/listings')
          .then(data => {
            vuexContext.commit('setLists', data)
          })
          .catch(e => context.error(e))
      },
      setLists (vuexContext, lists) {
        vuexContext.commit('setLists', lists)
      }
    },
    getters: {
      loadedLists (state) {
        return state.loadedLists
      }
    }
  })
}

export default createStore
