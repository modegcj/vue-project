// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible.js'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$http = axios

import './stylesheets/reset.scss'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
