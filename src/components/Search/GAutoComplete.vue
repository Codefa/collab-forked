<template>
  <div>
    <!-- <div @keyup.enter="submit"> -->
    <gmap-autocomplete :select-first-on-enter="true" class="form-control" @place_changed="setPlace">
    </gmap-autocomplete>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: {lat: 42.363211, lng: -105.071875},
      radiusOptions: [100, 200, 300],
      radius: 200
    }
  },
  methods: {
    setPlace (place) {
      // return this.$store.commit('setPlace', place)
      let center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      this.center = center
    }
  }
}
</script>
