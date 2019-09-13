export default {
    path: "/order",
    name: "order",
    meta: {
        flag: false
    },
    component: () => import("@pages/detail/order"),
}