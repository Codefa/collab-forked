<template>
  <div>
    <v-flex>
      The average nightly price is $73
      <br>
    </v-flex>

    <v-flex>
      <v-range-slider v-model="price" :max="600" :min="20" :step="10"></v-range-slider>
    </v-flex>

    <v-flex>
      <span>${{ price[0] }}</span> -
      <span>${{ price[1] }}</span>
    </v-flex>
  </div>
</template>

<script>
export default {
  data () {
    return {
      price: [10, 1000]
    }
  }
}
</script>

<style>

</style>
