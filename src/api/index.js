import http from "@utils/http.js";


export const goodsDetailApi = ()=>http({
    method:"get",
    url: "/api/v3/activities",

//  获取详情
    data:{
        pageIndex : 2 ,
        categoryId : 1 ,
        time : "",
        sort : "",
        seatMap : false ,
        highestPrice : "",
        lowestPrice :""
    }
})