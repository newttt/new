import {goodsDetailApi} from "@api";



const state = {
    goodsInfo:{},
    numListIndex:1,
    numList:[],
    ticketInfo:{},
    id:"",
    type:"",
}


const actions = {
   async getGoodsInfo({commit},val) {
    let data = await goodsDetailApi();
       commit("getInfoMutations",data.data);
   },
    
}

const mutations = {
    getInfoMutations(state,params) {
        state.goodsInfo = params[0];
        state.id = params[0].id;
        state.type = params[0].activityType;
    },
    getNumIndex(state,params) {
        state.numListIndex = params;
    },
    
}



export default {
    state,
    actions,
    mutations,
    namespaced: true
}