<<<<<<< HEAD
import Vue from "vue";
import Vuex from "vuex";
import goodsList from "./goodsList";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        goodsList
=======
import Vue from "vue"
import Vuex from "vuex"
import city from "./city"
Vue.use(Vuex);


const store = new Vuex.Store({

    modules:{
        city
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
    }
})


export default store;