import Vue from "vue";
import VueRouter from "vue-router";
import goodsDetail from "./detail/goodsDetail"
import ticket from "./detail/ticket"
import comment from "./detail/comment"
import order from "./detail/order"

Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/goodsDetail"

        },
        goodsDetail,
        ticket,
        comment,
        order

    ]
})
export default router;