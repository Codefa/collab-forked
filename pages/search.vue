<template>
  <div>
    <h1>search</h1>
    <Map :markers="setMarkers" />
  </div>
</template>

<script>
import Map from '@/components/Search/Map'

export default {
  components: {
    Map
  },
  data () {
    return {}
  },
  computed: {
    setMarkers () {
      return this.$store.getters.setMarkers
    }
  },
  created () {
    console.log(this.$store.getters.place)
  },
  methods: {
    usePlace (place) {
      this.$store.commit('usePlace', place)
    }
  }
}
</script>


