<template>
  <div id="Search">
    <b-container fluid>
      <b-row>
        <b-col lg="2">
          <DateFilter />
          <GuestFilter />
        </b-col>
        <br><br>
        <b-col lg="4">
          <h2>Top Lists</h2>
          <span v-for="list in loadedLists" :key="list.id">
            <b-col cols="12">
              <b-card :title="list.name" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                <p class="card-text">
                  {{ list.email }}
                </p>
                {{ list.address }} - {{ list.id }}
              </b-card>
            </b-col>
          </span>
        </b-col>
        <b-col><Map :markers="setMarkers" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Map from '@/components/Search/Map'
import DateFilter from '@/components/Filters/DateFilter'
import GuestFilter from '@/components/Filters/GuestFilter'

export default {
  name: 'Search',
  components: {
    Map,
    DateFilter,
    GuestFilter
  },
  data () {
    return {}
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
