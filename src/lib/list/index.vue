<template>
    <div id="list">
        <ul>
            <li v-for="(item,index) in goodsList" :key="index">
                <div class="listliImg">
                    <img
                        :src="goodsList[index].poster">
                </div>
                <div class="listliText">
                    <p class="listliText1">{{goodsList[index].properName}}</p>
                    <p class="listliText2"><span>{{goodsList[index].timeRange}}</span> | <span>{{goodsList[index].venueName}}</span></p>
                    <p class="listliText3"  v-if="goodsList[index].rank">评分 <span>{{goodsList[index].rank}}</span></p>
                    <p class="listliText2" v-else><span>暂无评分</span></p>
                    <p class="listliText4"><span>{{goodsList[index].lowPrice}}</span>元起</p>
                    <p class="listliText5">{{goodsList[index].desc}}</p>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
import {goodsDetailApi} from "@api";
    export default {
        name: "detailList",
        data() {
            return {
                goodsList:[]
            }
        },
        async created() {
        let data = await goodsDetailApi();
        this.goodsList = data.data.slice(1,4)
  },
    }
</script>


<style>
    #list ul {
        width: 100%;

    }

    #list ul li {
        margin: .3rem .3rem 0;
        background-color: #fff;
        display: flex;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    #list ul li .listliImg {
        min-height: 2.5rem;
    }

    #list ul li .listliImg img {
        width: 1.5rem;
        height: 2rem;
    }

    #list ul li .listliText {
        margin-left: .34rem;
        border-bottom: 0.02rem solid rgba(230, 230, 230, 0.5);
    }

    #list ul li .listliText .listliText1 {
        font-size: .3rem;
        color: #333;
        max-height: .88rem;
        line-height: .44rem;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans;
        font-weight: 600;
    }

    #list ul  li .listliText .listliText2 {
        font-size: .24rem;
        color: #999;
        margin-top: .18rem;
        
    }
    .listliText2 span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    #list ul  li .listliText .listliText3 {
        font-size: .24rem;
        color: #999;
        margin-top: .08rem;
        margin-bottom: .32rem;
    }

    ul li .listliText .listliText3 span {
        font-size: .28rem;
        font-weight: 700;
        color: #ffb02e;
        
    }

    ul li .listliText .listliText4 {
        margin-bottom: .2rem;
    }

    ul li .listliText .listliText4 span {
        top: .02em;
        color: #ff2661;
        font-size: .36rem;
        font-weight: 700;
        margin-right: .08rem;
    }

    ul li .listliText .listliText5 {
        font-size: .24rem;
        color: #999;
        padding: .28rem 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        border-top: 0.02rem solid rgba(230, 230, 230, 0.5);
    }
</style>