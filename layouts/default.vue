<template>
  <div>
  <b-navbar toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href="#/">Home</b-nav-item>
        <b-nav-item href="/search">Search</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="/user/profile">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
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
