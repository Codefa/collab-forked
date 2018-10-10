import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loadedLists: [],
      markers: [],
      place: null,
      counter: 0
    }),
    mutations: {
      setLists (state, lists) {
        state.loadedLists = lists
      },
      increment (state) {
        state.counter++
      },
      setMarkers (state, markers) {
        state.markers = markers
      },
      setPlace (state, place) {
        state.place = place
      },
      usePlace (state, place) {
        state.place = place
        if (this.place) {
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng()
            }
          })
          this.place = null
        }
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
      },
      placesChanged (vuexContext, place) {
        vuexContext.commit('placeChanged', place)
      }
    },
    getters: {
      loadedLists (state) {
        return state.loadedLists
      },
      setMarkers (state) {
        return state.markers
      },
      place (state) {
        return state.place
      }
    }
  })
}

export default createStore
