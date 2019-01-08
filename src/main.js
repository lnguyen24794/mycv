import Vue from 'vue'
import axios from 'axios'
// import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.config.productionTip = false

Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
