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
    return {}
  },
  methods: {
    setPlace (place) {
      this.$store.commit('setPlace', place)
    }
  }
}
</script>

