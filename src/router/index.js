import Vue from "vue";
import VueRouter from "vue-router";
<<<<<<< HEAD
import goodsDetail from "./detail/goodsDetail"
import ticket from "./detail/ticket"
import comment from "./detail/comment"
import order from "./detail/order"

Vue.use(VueRouter);
=======
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
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
<<<<<<< HEAD
            redirect:"/goodsDetail"

        },
        goodsDetail,
        ticket,
        comment,
        order
=======
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
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d

    ]
})
export default router;