import Vue from 'vue'
import axios from 'axios'
// import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css' //
import Vuetify from 'vuetify'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGoogle,
  faStackOverflow,
  faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faTwitter, faFacebook, faStackOverflow, faGithub,faGoogle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

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
