import http from "@utils/http.js";


export const RelatedApi = (id=1)=>http({
    method:"get",
    url: "/api/v2/home/recommends",
    // https://m.piaoniu.com/api/v2/home/recommends?pageIndex=1&pageSize=10

//  获取详情
    data:{
         pageIndex : 1 ,
         categoryId : 8 ,
         time : "",
         sort : "",
         seatMap : false ,
         highestPrice : "",
         lowestPrice :""
    }
})

//https://m.piaoniu.com/api/v1/activities/hot?pageIndex=2&pageSize=10
export const TabBarApi = ()=>http({
    method:"get",
    url:"/api/v2/home/recommends",


    // 获取详情
    data:{
        pageIndex : 1 ,
        categoryId : 6 ,
        time : "",
        sort : "",
        seatMap : false ,
        highestPrice : "",
        lowestPrice :""
    }
})



export const HomeSearch =(value)=>http({
    method:"get",
    url:"/api/v2/activities/suggest",
    data:{
        input:value,
        size:14,
    }
})


//获取导航下的列表
export const navListApi = (navListId,pageIndex) => http({
    method: "get",
    url: "/api/v3/activities",

    data: {
        pageIndex: pageIndex,
        categoryId: navListId,
        time: "",
        sort: "",
        seatMap: false,
        highestPrice: "",
        lowestPrice: "",
    }
})


//全部列表
export const allListApi = () => http({
    method: "get",
    url: "/api/v1/activities/hot",

    data: {
        pageIndex: 1,
        pageSize: 10
    }
})

//album
export const albumApi = () => http({
    method: "get",
    url: "/api/v1/activitySubject/topic/19",
    data: {

    }
})

//lotteryFree
export const lotteryFreeApi = (pageIndex = 1, pageSize = 10) => http({
    methods: "get",
    url: "api/v1/freeShow/list",
    data: {
        pageIndex,
        pageSize
    }
})

//保障
// export const baozhangApi = () => http({
//     methods: "get",
//     url: "/activity/serviceRule.html",
//     data: {
//         // pageIndex,
//         // pageSize
//     }
// })