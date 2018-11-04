<template>
  <div>
    <div>
      <h1>{{ list.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    list () {
      return this.$store.getters.loadedList(this.id)
    }
  }
}
</script>

<style scoped>

</style>
