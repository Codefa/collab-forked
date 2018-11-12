// var faker = require('faker')
// class Person {
//   constructor () {
//     this.city = faker.address.city()
//     this.lat = faker.address.latitude(19.5, 64.5)
//     this.lng = faker.address.longitude(-161.75583, -68.01197)
//     this.email = faker.internet.email()
//   }
// }

// var peopleArray = []
import axios from 'axios'

export default {
  state: {
    markers: [],
    place: null
    // peopleArray: peopleArray
  },
  mutations: {
    // setFaker (state, payload) {
    //   state.peopleArray = payload
    // },
    setMarkers (state, markers) {
      state.markers = markers
    },
    setLoadedPlaces (state, payload) {
      state.markers = payload
    },
    setPlace (state, place) {
      state.place = place
    }
  },
  actions: {
    // generate ({ commit }) {
    //   let person = new Person()
    //   peopleArray.unshift(person)
    //   commit('setFaker', peopleArray)
    // },
    fetchNearestLocations ({commit}) {
      axios.get('https://raw.githubusercontent.com/Codefa/nuxt-static-test/master/search.json')
      .then(response => {
        const markers = []
        let data = response.data
        for (const key in data) {
          markers.push({
            position: {
              lat: parseFloat(data[key].lat),
              lng: parseFloat(data[key].lon)
            },
            infoText: {
              name: data[key].name,
              image: 'https://sauspa.com/uploads/resorts/spa3.jpg',
              price: data[key].mid_price
            },
            price: data[key].mid_price
          })
        }
        commit('setLoadedPlaces', markers)
      })
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
