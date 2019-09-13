export default {
    path: "/album",
    name: "album",
    meta: {
        flag: false
    },
    component: () => import("@pages/list/album"),
}