import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";
import MineUI from "@lib";
Vue.config.productionTip = false
Vue.use(MineUI);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
