<template>
  <div id="app">
    <Navbar />
    <br>
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/MainNav/NavBar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
