<template>
  <div>
    <GmapMap style="width: 600px; height: 300px;" :zoom="1" :center="{lat: 0, lng: 0}">
      <GmapMarker v-for="(marker, index) in markers" :key="index" :position="marker.position" />
      <GmapMarker v-if="this.place" label="$" :position="{
      lat: this.place.geometry.location.lat(),
      lng: this.place.geometry.location.lng()
    }" />
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: {
    markers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    place () {
      return this.$store.getters.place
    }
  }
}
</script>
