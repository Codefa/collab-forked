import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import NavBar from './components/Includes/NavBar'
// import ResortLists from './components/SearchListings/ResortLists'
import '../src/assets/css/app.css'

Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCe1exctmeJjIb4guyT6newSpyJ7kA3aLc',
        libraries: 'places'
    }
})
Vue.component('app-header', NavBar)
// Vue.component('app-resort-lists', Home)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
