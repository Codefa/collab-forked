import Vue from 'vue'
import Vuex from 'vuex'
import { store } from './store'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import NavBar from './components/Includes/NavBar'
import Footer from './components/Includes/Footer'
// import ResortLists from './components/SearchListings/ResortLists'
import '../src/assets/css/app.css'
import VeeValidate from 'vee-validate'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCe1exctmeJjIb4guyT6newSpyJ7kA3aLc',
    libraries: 'places'
  }
})
Vue.use(VeeValidate)
Vue.component('app-header', NavBar)
Vue.component('app-footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
