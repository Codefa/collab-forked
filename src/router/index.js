import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search/Index'
import Explore from '@/components/Explore/Index'

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
            path: '/search',
            name: 'Search',
            component: Search
    }, {
            path: '/explore',
            name: 'Explore',
            component: Explore
    }
	]
})
