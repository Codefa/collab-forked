<template>
  <div>
    <GmapMap :center="{lat:41.9050707, lng:2.9029856}" :zoom="2" style="width: auto; height: 450px">
      <div v-for="label in labels" :key="label.key">
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click="center=m.position" :label="{'text': '$' + label.price, 'color': 'black', fontSize: '16px'}" />
      </div>
    </GmapMap>
  </div>
</template>

<script>
// import { EventBus } from '@/event-bus.js'
export default {
  name: 'MapSearch',
  computed: {
    // icon () {
    //   const url = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    //   return url
    // },
    place () {
      return this.$store.getters.place
    },
    markers () {
      return this.$store.getters.setMarkers
    },
    labels () {
      return this.$store.getters.setLoadedListsPrice
    }
  },
  created () {
    this.$store.dispatch('fetchNearestLocations')
    console.log(this.$store.getters.setLoadedListsPrice)
  }
}
</script>

<style scoped>

</style>
