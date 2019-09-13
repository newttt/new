export default {
    path: "/order/:sum",
    name: "order",
    meta: {
        flag: false
    },
    component: () => import("@pages/detail/order"),
}