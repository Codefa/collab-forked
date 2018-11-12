import Vue from 'vue'
import Vuex from 'vuex'

import lists from './lists'
import gautomap from './gautomap'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    lists: lists,
    gautomap: gautomap,
    shared: shared
  }
})
