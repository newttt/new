import Vue from 'vue'
import App from './App.vue'
import router from "./router"
<<<<<<< HEAD
import store from "./store";
import MineUI from "@lib";
Vue.config.productionTip = false
Vue.use(MineUI);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
=======
import store from "./store"
import VueTouch from "vue-touch"

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
