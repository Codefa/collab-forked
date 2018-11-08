<template>
  <div id="MainSearch">
    <gmap-autocomplete :select-first-on-enter="true" class="form-control">
    </gmap-autocomplete>
  </div>

</template>

<script>
export default {
  name: 'MainSearch',
  data () {
    return {}
  }
}
</script>

<style scoped>
.pac-item-query {
  color: brown !important
}
</style>

