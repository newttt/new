import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home";
import City from "./city";
import search from "./search";
import buyTicket from "./detail/buyTicket"
import chooseSeat from "./detail/chooseSeat"
import comment from "./detail/comment"
import order from "./detail/order"
import album from "./list/album"
import alList from "./list/alList"
import navList from "./list/navList"
import lotteryFree from "./list/lotteryFree"
// import swiperSlide from "./components/sildeshow"

Vue.use(VueRouter);
// Vue.use(VueAwesomeSwiper)


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"

        },
        Home,
        buyTicket,
        chooseSeat,
        comment,
        order,
        City,
        search,
        album,
        alList,
        navList,
        lotteryFree

    ]
})
export default router;