import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search/Index'
import Explore from '@/components/Explore/Index'
import Dashboard from '@/components/Partner/Dashboard'
import PartnerJoin from '@/components/Partner/Join/Index'
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
    // {
    //   path: '/partner',
    //   name: 'PartnerIndex',
    //   component: PartnerIndex
    // },
    {
      path: '/partner/join',
      name: 'PartnerJoin',
      component: PartnerJoin
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
