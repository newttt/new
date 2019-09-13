import http from "@utils/http.js";


export const getTicket = (_id,type)=>http({
    methods:"get",
    url: "/api/v3/activities/" + _id,
    data:{
       areaTicketType: type
    }
})

export const getSeat = (params) => http({
    methods:"get",
    url: "/api/v3/ticketCategories",
    data:{
        eventId: params,
        supportSpeedPackBuy : true ,
        b2c : true
    }
})
export const getListApi = (_id,pageIndex=1,pageSize=10) => http({
    methods:"get",
    url: "/api/v3/reviews/relatedReview/" + _id,
    // /api/v3 / reviews / relatedReview / 105636 ? pageIndex = 2 & pageSize = 10
    data:{
        pageIndex,
        pageSize
    }
})






