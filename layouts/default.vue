<template>
  <div>
    <b-navbar toggleable="md" variant="faded" type="light">

      <b-navbar-toggle target="nav_collapse" />
      <div v-if="$route.name == 'search'">
        <GAutoComplete />
      </div>
      <b-navbar-brand to="/" v-else>
        <img class="nav-logo" src="https://sauspa.com/assets/img/logo.svg" alt="Sauspa logo">
        <b-badge variant="primary">BETA</b-badge>
      </b-navbar-brand>

      <b-collapse id="nav_collapse" :key="item.title" is-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="item in menuItems" :to="item.path">{{ item.title }}</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <br>
    <nuxt />
  </div>
</template>

<script>
import GAutoComplete from '@/components/Search/GAutoComplete'

export default {
  components: {
    GAutoComplete
  },
  data () {
    return {
      menuItems: [
        { title: 'Destinations', path: '/destinations' },
        { title: 'Spa and centers', path: '/search' },
        { title: 'Offers', path: '/Offers' },
        { title: 'Help?', path: '/Help?' },
        { title: 'User', path: '/user' }
      ]
    }
  }
}
</script>


<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

nav.navbar {
    border-bottom: 1px solid rgb(0, 0, 0, .1);
}
a.navbar-brand img {
    height: 40px;
    width: auto;
}
</style>
