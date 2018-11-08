<template>
  <div>
    <GmapMap :center="{lat:41.9050707, lng:2.9029856}" :zoom="2" style="width: auto; height: 450px">
      <div v-for="label in labels" :key="label.key">
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click="center=m.position" :label="{'text': '$' + label.price, 'color': 'black', fontSize: '16px'}" :icon="{path:'M30.662 5.003c-4.488-0.645-9.448-1.003-14.662-1.003-5.214 0-10.174 0.358-14.662 1.003-0.86 3.366-1.338 7.086-1.338 10.997 0 3.911 0.477 7.63 1.338 10.997 4.489 0.645 9.448 1.003 14.662 1.003 5.214 0 10.174-0.358 14.662-1.003 0.86-3.366 1.338-7.086 1.338-10.997 0-3.911-0.477-7.63-1.338-10.997zM12 22v-12l10 6-10 6z'}" />
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
  }
}
</script>

<style scoped>

</style>
