import {getCity} from "@api/city";
import { stat } from "fs";

const state = {
    hotCity:JSON.parse(sessionStorage.getItem("hotCity"))||[],
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    nm:sessionStorage.getItem("nm")||"北京",
    id:sessionStorage.getItem("id")||1


}

const mutations = {
    handleHomecityNameInfo(state,info){
        state.nm = info.nm;
        state.id = info.id;

        sessionStorage.setItem("nm",info.nm);
        sessionStorage.setItem("id",info.id);
    },
    handleMutationGetCity(state,params){
        // console.log(params);

    
        let hotCity = [],cityList = [];
        // 热门城市
        for(var i=0; i<params.length;i++){
            if(params[i].hotCity){
                hotCity.push({id:params[i].cityId,nm:params[i].cityName})
            }
        }
        // console.log(hotCity);


        // 城市列表
        for(var i=0;i<params.length;i++){
            let first = params[i].cityEnName.slice(0,1).toUpperCase();
            if(isIndex(first)){
                cityList.push({index:first,list:[{id:params[i].cityId,nm:params[i].cityName}]})
            }else{
                for(var j=0;j<cityList.length;j++){
                        if(first == cityList[j].index){
                            cityList[j].list.push({id:params[i].cityId,nm:params[i].cityName})
                            break;
                        }
                }
            }
        }

        // 城市首字母
        function isIndex(first){
            var bStop = true;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == first){
                    bStop= false;
                    break;
                }
            }
            return bStop;
        }

        // 城市排序
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })

        state.hotCity = hotCity;
        state.cityList = cityList;

        sessionStorage.setItem("hotCity",JSON.stringify(hotCity));
        sessionStorage.setItem("cityList",JSON.stringify(cityList));    
   

    }
} 

//  异步的处理
const actions = {
    async handleGetCity({commit}){
        let data = await getCity();
        commit("handleMutationGetCity",data)
    }
}


export default {
    state,
    mutations,
    actions,
    namespaced:true
}