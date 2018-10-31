<template>
  <div id="Profile">
    <UserNav />
    <UserLastViews />
  </div>
</template>

<script>
import UserNav from '@/components/User/UserNav'
import UserLastViews from '@/components/Includes/UserLastViews'
export default {
  name: 'Profile',
  components: {
    UserNav,
    UserLastViews
  },
  data () {
    return {}
  }
}
</script>
