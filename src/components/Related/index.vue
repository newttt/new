<template>
    <div class="wrapper" ref="wrapper">
        <div class="">
              <li class="activity1" v-for="(item,index) in Relateds" :key="index">
                <div class="main-top">
                    <a class="poster-wrap1" href="">
                        <div class="poster-1">
                            <img :src="item.recommendContent.poster" alt="">
                        </div>
                    </a>
                    <div class="info">
                        <div class="title-line">
                            <a class="title-bei" href="">
                                <span>[北京]</span>
                                {{item.recommendContent.name}}
                            </a>
                            <div class="activityTag">
                                <div class="eCard">{{item.recommendContent.actorId}}</div>
                            </div>
                        </div>
                        <div class="time-address">
                            <span class="font">{{item.recommendContent.timeRange}}</span>
                            <span class="split">|</span>
                            <span class="address">{{item.recommendContent.venueName}}</span>
                        </div>
                        <div class="no-rank">{{item.recommendContent.rank}}</div>
                        <div class="price-wrap">
                            <div class="">
                                <span class="price-money">{{item.recommendContent.lowPrice}}</span>
                                <span class="qi">元起</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
           
    </div>

</template>





<script>
import {RelatedApi} from "@api";
import BScorll from "better-scroll";
export default {
    name:"Related",
   async activated(){
        let data= await RelatedApi(this.$store.state.city.id);
        //    console.log(data);
        this.Relateds= data.data;    
        sessionStorage.setItem("Related",JSON.stringify(data.data));
    //    优化 数据缓存 
    // if(this.type !=this.$store.state.city.id || !sessionStorage.getItem("Related")){
       

    //     this.type = this.$store.state.city.id;
    //    }else{
    //        this.Related = JSON.parse(sessionStorage.getItem("Related"));
    //    }
    
    },

    data(){
        return {
            Relateds:[],
            flag:false,
            type:1
        }
    },
    mounted(){
        new BScorll(this.$refs.wrapper);
    }
}
</script>




<style>
.wrapper{
    height: 17.19rem;
}
    .activity1{
    position: relative;
    margin-left: 0.30rem;
    margin-right: 0.30rem;
    background-color: #fff;
    list-style-type: none;
}
.main-top{
    min-height: 2.50rem;
    position: relative;
    display: block;
}
.poster-wrap1{
    position: absolute;
    left: 0;
    top: 0.3rem;
}
.poster-1 img{
    width: 1.5rem;
    height: 2rem;
    background-size: cover;
    background-position: 50%;
}
.info{
    padding-top: 0.3rem;
    margin-left: 1.84rem;
    border-bottom: 1px solid hsla(0,0%,90%,.5);
}
.title-line{
    display: flex;
}
.title-bei{
    font-size: 0.3rem;
    color: #333;
    max-height: 0.88rem;
    line-height: 0.44rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
    font-weight: 600;
}
.activityTag{
    flex-shrink: 0;
    max-width: 0.8rem;
    margin-left: 0.08rem;
    color: #fff;
}
.eCard{
    bottom: 0.24rem;
    text-align: center;
    font-size: 0.2rem;
    display: inline-block;
    margin-right: 0.1rem;
    border-radius: 0.04rem;
    padding: 0.02rem;
    width: 0.3rem;
    height: 0.3rem;
    background-color: #96a3ff;
    box-sizing: border-box;
}

.time-address{
    font-size: 0.24rem;
    color: #999;
    margin-top: 0.18rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.split{
    margin: 0 0.08rem;
}
.no-rank{
    font-size: 0.2rem;
    color: #999;
    margin-top: 0.08rem;
    margin-bottom: 0.32rem;
}
.price-wrap{
    position: relative;
    margin-bottom: 0.2rem;
}
.price-money{
    position: relative;
    top: 0.02rem;
    color: #ff2661;
    font-size: 0.36rem;
    font-weight: 700;
}
.qi{
    font-size: 0.2rem;
    color: #999;
}

.active{
    background: red;
}
</style>