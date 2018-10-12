// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import { store } from './store'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import Siema from 'vue2-siema'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(Siema)
const datepickerOptions = {}
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCe1exctmeJjIb4guyT6newSpyJ7kA3aLc',
    libraries: 'places'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
