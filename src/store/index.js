import Vue from "vue";
import Vuex from "vuex";
import goodsList from "./goodsList";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        goodsList
    }
})


export default store;