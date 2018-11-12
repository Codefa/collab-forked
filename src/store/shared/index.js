export default {
  state: {
    loading: false,
    btloading: false,
    error: false
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setBtLoading (state, payload) {
      state.btloading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
      //   if u r sending any new errors u need to clear previous error
    }
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    btloading (state) {
      return state.btloading
    },
    error (state) {
      return state.error
    }
  }
}
