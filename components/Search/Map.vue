<template>
  <div>
    <GmapMap style="width: auto; height: 300px;" :zoom="1" :center="{lat: 0, lng: 0}">
      <!-- <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
      </gmap-info-window> -->
      <GmapMarker v-for="(marker, index) in markers" :key="index" :position="marker.position" :clickable="true" />
      <GmapMarker v-if="this.place" title="hello" :draggable="true" label="$" :position="{
      lat: this.place.geometry.location.lat(),
      lng: this.place.geometry.location.lng()
    }" />
      <!-- <GmapMarker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></GmapMarker> -->
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
    return {
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  computed: {
    place () {
      return this.$store.getters.place
    }
  },
  mounted () {
    console.log(this.place)
  }
}
</script>
