export default {
    path: "/comment",
    name: "comment",
    meta: {
        flag: false
    },
    component: () => import("@pages/detail/comment"),
}