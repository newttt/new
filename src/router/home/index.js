export default {
    path:"/home",
    name:"index",
    meta:{
        flag:false
    },
    //  按需加载引入 ==> 路由懒加载
    component: ()=> import("@pages/home")
}