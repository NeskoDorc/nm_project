import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.config.productionTip = false

Vue.use(VueSmoothScroll, {
  duration: 1000,
 
})



new Vue({
  render: h => h(App),
}).$mount('#app')
