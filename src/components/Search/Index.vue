<template>
  <div id="search">
    <button @click="showMap = !showMap">
            {{ showMap ? 'Hide' : 'Show' }} Map</button>
    <FilterNav />
    <b-container fluid>

      <div id="lisitngs_src">
        <h1>search page</h1>

      </div>
      <div id="map_src">
        <div v-show="showMap">
          <MapSearch />
        </div>
      </div>
    </b-container>
  </div>

</template>

<script>
import FilterNav from '@/components/Search/FilterNav'
import MapSearch from '@/components/Search/MapSearch'

export default {
  name: 'Search',
  components: {
    FilterNav,
    MapSearch
  },
  data () {
    return {
      showMap: true
    }
  },
  computed: {
    setMarkers () {
      return this.$store.getters.setMarkers
    },
    loadedLists () {
      return this.$store.getters.loadedLists
    }
  },
  mounted () {
    this.$store.dispatch('loadedLists')
  },
  methods: {
    usePlace (place) {
      this.$store.commit('usePlace', place)
    },
    setPlaceText (place) {
      this.place = place
    },
    getPlacedetails (place) {
      this.latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    }
  }
}
</script>

<style scoped>
  div#map_src {
    position: fixed;
    width: 40%;
    height: 100vh;
    background: #f5f5f5;
    display: inline-block;
    float: left;
  }

  div#lisitngs_src {
    width: 60%;
    display: inline-block;
    float: left;
  }
</style>
