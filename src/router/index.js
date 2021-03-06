import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search/Index'
import Explore from '@/components/Explore/Index'
import Dashboard from '@/components/Partner/Dashboard'
import Partner from '@/components/Partner/Index'
import BecomePartnerInfo from '@/components/Partner/Join/Info'
import BecomePartnerLocation from '@/components/Partner/Join/Location'
import UserProfile from '@/components/User/Profile'
import UserSaved from '@/components/User/Saved'
import UserSettings from '@/components/User/Settings'
import Resort from '@/components/Resorts/Resort'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resort/:id',
      name: 'Resort',
      props: true,
      component: Resort
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/become-partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/become-partner/location',
      name: 'BecomePartnerLocation',
      component: BecomePartnerLocation
    },
    {
      path: '/partner/join',
      name: 'PartnerJoin',
      component: BecomePartnerInfo
    },
    {
      path: '/partner/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user/saved',
      name: 'Saved',
      component: UserSaved
    },
    {
      path: '/user/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/user/settings',
      name: 'Settings',
      component: UserSettings
    }
  ]
})
