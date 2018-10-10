<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="3" lg="3">
          <no-ssr>
            <HotelDatePicker format="DD/MM/YYYY">
            </HotelDatePicker>
          </no-ssr>
          <p id="demo"></p>
        </b-col>
        <b-col lg="4">
          <h2>Top Lists</h2>
          <no-ssr>
            <siema ref="siematop" :options="options">
              <ListItems :lists="loadedLists" class="mt-3" />
            </siema>
            <button @click="$refs.siematop.prev()">Prev</button>
            <button @click="$refs.siematop.next()">Next</button>
          </no-ssr>
          <h2>Luxury Lists</h2>
          <no-ssr>
            <siema ref="siemaluxury" :options="options">
              <ListItems :lists="loadedLuxury" class="mt-3" />
            </siema>
            <button @click="$refs.siemaluxury.prev()">Prev</button>
            <button @click="$refs.siemaluxury.next()">Next</button>
          </no-ssr>
        </b-col>
        <b-col><Map :markers="setMarkers" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Map from '@/components/Search/Map'
import ListItems from '@/components/Lists/ListItems'
import HotelDatePicker from 'vue-hotel-datepicker'

export default {
  components: {
    Map,
    ListItems,
    HotelDatePicker
  },
  async fetch ({ store, params }) {
    await store.dispatch('loadedLuxury')
  },
  data () {
    return {
      options: {
        draggable: true
      }
    }
  },
  computed: {
    setMarkers () {
      return this.$store.getters.setMarkers
    },
    loadedLists () {
      return this.$store.getters.loadedLists
    },
    loadedLuxury () {
      return this.$store.getters.loadedLuxury
    }
  },
  created () {
    console.log(this.loadedLists[0].address)
    console.log(this.$store.getters.loadedLuxury)
  },
  methods: {
    usePlace (place) {
      this.$store.commit('usePlace', place)
    }
  }
}
</script>


