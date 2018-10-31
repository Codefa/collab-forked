var faker = require('faker')
class Person {
  constructor () {
    this.city = faker.address.city()
    this.lat = faker.address.latitude(19.5, 64.5)
    this.lng = faker.address.longitude(-161.75583, -68.01197)
    this.email = faker.internet.email()
  }
}

var peopleArray = []

export default {
  state: {
    markers: [],
    place: null,
    peopleArray: peopleArray
  },
  mutations: {
    setFaker (state, payload) {
      state.peopleArray = payload
    },
    setMarkers (state, markers) {
      state.markers = markers
    },
    setPlace (state, place) {
      state.place = place
    }
  },
  actions: {
    generate ({ commit }) {
      let person = new Person()
      peopleArray.unshift(person)
      commit('setFaker', peopleArray)
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
  getters: {
    setFaker (state) {
      return state.peopleArray
    },
    setMarkers (state) {
      return state.markers
    },
    place (state) {
      return state.place
    }
  }
}
