<template>
  <div>
 <b-navbar toggleable="md" type="light" fixed="top">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="/"><img class="nav-logo" src="assets/img/logo.svg" alt="Sauspa logo"><b-badge variant="primary">BETA</b-badge></b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="ml-auto">
	<b-nav-item href="destinations">destinations</b-nav-item>
		<b-nav-item href="resorts">resorts</b-nav-item>
	 <b-nav-item href="offers">offers</b-nav-item>
	 <b-nav-item href="help">help</b-nav-item>
	 <b-nav-item href="checkout">Cart</b-nav-item>
	 <b-nav-item-dropdown text="Hi, user" right>
        <b-dropdown-item href="user/profile">profile</b-dropdown-item>
        <b-dropdown-item href="user/bookings">bookings</b-dropdown-item>
        <b-dropdown-item href="user/saved">saved</b-dropdown-item>
        <b-dropdown-item href="user/settings">account</b-dropdown-item>
        <b-dropdown-item href="<?php echo base_url();?>manager/dashboard">Manager centro</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="user/logout">logout</b-dropdown-item>
      </b-nav-item-dropdown>

		<b-nav-item @click="flip('signin', $event)" href="#signin">login</b-nav-item>
		<b-nav-item @click="flip('signup', $event)" href="#signup">signup</b-nav-item>
    </b-navbar-nav>
  <nuxt/>
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

nav.navbar {
    border-bottom: 1px solid rgb(0, 0, 0, .1);
}
a.navbar-brand img {
    height: 40px;
    width: auto;
}
</style>
