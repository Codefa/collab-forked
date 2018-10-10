import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loadedLists: [],
      loadedLuxury: [],
      markers: [],
      place: null,
      counter: 0
    }),
    mutations: {
      setLists (state, lists) {
        state.loadedLists = lists
      },
      setLuxury (state, lists) {
        state.loadedLuxury = lists
      },
      increment (state) {
        state.counter++
      },
      setMarkers (state, markers) {
        state.markers = markers
      },
      setPlace (state, place) {
        state.place = place
      }
      // usePlace (state, place) {
      //   state.place = place
      //   if (this.place) {
      //     this.markers.push({
      //       position: {
      //         lat: this.place.geometry.location.lat(),
      //         lng: this.place.geometry.location.lng()
      //       }
      //     })
      //     this.place = null
      //   }
      // }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return context.app.$axios.$get('/public/api/listings')
          .then(data => {
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                // const element = data[key].address
                // vuexContext.commit('setPlace', element)
              }
            }
            // const postsArray = []
            // for (const key in data) {
            //   postsArray.push({ ...data[key],
            //     address: key
            //   })
            // }
            // vuexContext.commit('setLists', postsArray)
            // for (const address in data) {
            //   console.log(`obj.${address} = ${data[address]}`)
            //   console.log(data.address)
            // }
            vuexContext.commit('setLists', data)
          })
          .catch(e => context.error(e))
      },
      async loadedLuxury ({ commit }) {
        const data = await this.$axios.$get('/public/api/listings/luxury')
        commit('setLuxury', data)
      }
    },
    getters: {
      loadedLists (state) {
        return state.loadedLists
      },
      loadedLuxury (state) {
        return state.loadedLuxury
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
