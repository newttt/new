export default {
    path: "/ticket",
    name: "ticket",
    meta: {
        flag: false
    },
    component: () => import("@pages/detail/ticket"),
    children:[
        {
            path: "/ticket",
            redirect: "/ticket/chooseSeat",
        },
        {
            path: "chooseSeat",
            name: "chooseSeat",
            meta: {
                flag: false
            },
            component: () => import("@components/detail/chooseSeat"),
        },
        {
            path: "buyTicket",
            name: "buyTicket",
            meta: {
                flag: false
            },
            props:true,
            component: () => import("@components/detail/buyticket"),
        }
    ]
}