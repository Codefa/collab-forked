<template>
  <div id="UserNav">
    <div class="sub_nav" id="partner_sub_nav">
      <b-container>
        <b-nav>
          <b-nav-item active>Profile</b-nav-item>
          <b-nav-item href="/user/saved">Saved</b-nav-item>
          <b-nav-item href="/user/bookings">My bookings</b-nav-item>
          <b-nav-item>My purchases</b-nav-item>
          <b-nav-item href="/user/settings">Settings</b-nav-item>
        </b-nav>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserNav',
  data () {
    return {}
  }
}
</script>
