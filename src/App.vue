<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
