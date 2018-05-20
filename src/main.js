/* eslint-disable */ 
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/iconfont.css'
import './assets/js/flexible.js'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
