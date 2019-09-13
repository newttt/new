<template>
    <div>
        <div class="buy-ticket">
        <!-- 头部选项卡 -->
          
         <!-- 内容 -->
         <div class="buy-page">
            <div class="shop-session">
                <div class="shop-content-out">
                    <div class="shop-content-info">
                        选择场次
                    </div>
                    <div class="shop-content-time">
                        <div 
                        :class="titleClassIndex == index ? 'event-item event-item-select' : 'event-item'"
                        v-for="(item,index) in goodsItem.events"
                        :key="index"
                        @click="toggleHandler(index)"
                        >
                            <p>
                                {{item.specification}}
                            </p>
                            <div class="select-icon">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-content">
                <div class="head">
                    <h3>选择票档</h3>
                    <div>
                        <!-- <img src="../img/seat.png" > -->
                        座位图
                    </div>
                </div>
                <ul class="body">
                    <li 
                    v-for="(item,index) in seatList"
                    :class="classNameIndex === index ? 'item-select' : ''"
                    :key="index"
                    @click="chooseDesc(item.id,index)"
                    >
                        <div class="body-tp">
                            <span
                            >{{item.specification}}</span>
                            <span>票档</span>
                        </div>
                        <div class="type-tp">
                            <span>{{item.desc}}</span>
                        </div>
                    </li>
                    
                </ul>


            </div>

         </div>

         <div class="bottom-fixed">

             <!-- 尾部赋值 选座位 -->
             <numList></numList>
    <!--  -->
             <div class="gotobuy">
                 <div class="content-buy">
                     <div class="total-price">
                         <em>合计:</em>
                         
                         <span>
                            <i>￥{{price * num}}</i>
                            <b>￥{{price}}/张</b>
                         </span>
                         
                     </div>
                     <div class="gotobuy-right">
                         <div class="price-lower">
                             <img src="https://static.piaoniu.com/m/static/img/no-set.cac6248.png">
                             <div class="price-lower-notice">降价通知</div>
                         </div>
                         <router-link 
                         class="gotobuy-barsum"
                         tag="div"
                         :to="{name:'order',params:{sum:price * num}}"
                         >
                             结算
                             <span>({{num}})</span>
                         </router-link>
                     </div>
                 </div>
             </div>
         </div>


    </div>
    </div>
</template>

<script>
import {getSeat} from "@api/detail";
import {mapState,mapActions,mapMutations} from "vuex";
import numList from "@lib/list/numlist";
export default {
    name:"buyticket",
    data() {
      return {
        seatList:[],
        classNameIndex:0,
        price:0,
        goodsItem:{},
        titleClassIndex:0
      }
    },
    components:{
      numList,
    },
    async created () {
      if(sessionStorage.getItem("goodsInfo")) {
        this.goodsItem = JSON.parse(sessionStorage.getItem("goodsInfo"))
        
        console.log(this.goodsItem);
        let eventsId = this.goodsItem.events[0].id;

        console.log(eventsId);
        let data = await getSeat(eventsId);
        this.seatList = data;
        this.price = data[0].originPrice;
       
        
      }else {
        this.$router.back();
      }




    },
    computed: {
      ...mapState({
        num:state=>state.goodsList.numListIndex,

      }),
    },
    methods:{
      chooseDesc(_id,index) {
        this.classNameIndex = index;
        this.price = this.seatList[index].originPrice
      },
      toggleHandler(index) {
          this.titleClassIndex = index;
      }
    }
}
</script>

<style>
 
.buy-page {
  background-color: #fff;
  padding-bottom: 0;
  padding-top: .88rem; }
  .buy-page .shop-content-out {
    padding: 0 .28rem; }
    .buy-page .shop-content-out .shop-content-info {
      font-size: .3rem;
      font-weight: bold;
      text-align: left;
      padding-top: .36rem;
      padding-bottom: .2rem; }
    .buy-page .shop-content-out .shop-content-time {
      position: relative;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      overflow: auto; }
      .buy-page .shop-content-out .shop-content-time .event-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border: .02rem solid #e6e6e6;
        border-radius: .06rem;
        padding: .2rem .52rem;
        margin-bottom: .2rem;
        box-sizing: border-box;
        width: 100%; }
        .buy-page .shop-content-out .shop-content-time .event-item p {
          width: 100%;
          text-align: left; 
          font-size: .28rem
          }
  .buy-page .event-item-select {
    position: relative;
    color: #ff2661;
    border-color: #ff2661; }
    .buy-page .event-item-select::after {
      position: absolute;
      content: "";
      width: .5rem;
      height: .34rem;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-image: url(https://static.piaoniu.com/m/static/img/selected-tag.9a607f3.png); }
  .buy-page .select-icon {
    margin-top: .06rem; }
  .buy-page .page-content {
    padding: 0 .3rem;
    background-color: #fff;
    overflow: hidden; }
    .buy-page .page-content .head {
      display: flex;
      justify-content: space-between;
      align-items: center; }
      .buy-page .page-content .head h3 {
        text-align: left;
        color: #262626;
        font-size: .28rem;
        font-weight: bold;
        margin-top: .4rem;
        margin-bottom: .26rem;
        margin-right: .12rem; }
      .buy-page .page-content .head div {
        width: 1.32rem;
        height: .48rem;
        color: #f2af1e;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .04rem;
        border: .02rem solid #f2af1e;
        border-radius: .04rem;
        box-sizing: border-box; }
        .buy-page .page-content .head div img {
          width: .28rem;
          height: .24rem;
          margin-right: .04rem; }
    .buy-page .page-content .body {
      max-height: 7.8rem;
      overflow: scroll; }
      .buy-page .page-content .body li {
        border: .02rem solid #e6e6e6;
        border-radius: .06rem;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        text-align: left;
        padding: .2rem .26rem;
        margin-right: .14rem;
        margin-bottom: .1rem;
        min-width: 1.92rem;
        line-height: .36rem;
        background-color: #f7f7f7;
        color: #999; 
        font-size: .24rem;
        }
        .buy-page .page-content .body li .body-tp span {
          margin-right: .1rem;
          font-size: .28rem; 
          }

        .buy-page .page-content .body li .type-tp {
          width: 100%;
          font-size:.24rem; }
      .buy-page .page-content .body .item-select {
        border-color: #ff2661;
        color: #ff2661; }

.bottom-fixed {
  position: fixed;
  bottom: 0;
  width: 100%; }

.choose-num {
  position: relative;
  z-index: 10;
  height: .88rem;
  line-height: .88rem;
  box-sizing: border-box;
  float: none;
  display: flex;
  justify-content: center;
  padding: 0 .28rem;
  margin-right: 0;
  background-color: #fff;
  align-items: center;
  box-shadow: 0 -.02rem .06rem rgba(0, 0, 38, 0.2); }
  .choose-num .text {
    font-size: .24rem;
    width: .48rem;
    margin-right: .28rem; }
  .choose-num ul {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: scroll; }
    .choose-num ul li {
      position: relative;
      width: .8rem;
      height: .64rem;
      line-height: .64rem;
      border: .02rem solid #d4d4d4;
      color: #262626;
      border-radius: .06rem;
      box-sizing: border-box;
      text-align: center;
      margin-left: .16rem;
      flex-shrink: 0; }
    .choose-num ul .num-select {
      border-color: #ff2661;
      color: #ff2661; }
      .choose-num ul .num-select::after {
        position: absolute;
        content: "";
        width: .3rem;
        height: .2rem;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-image: url(https://static.piaoniu.com/m/static/img/selected-tag.9a607f3.png); }

.gotobuy {
  width: 100%;
  height: 1.3rem;
  background-color: #fff;
  padding: .2rem 0;
  border-top: .02rem solid #e5e5e5;
  box-sizing: border-box;
  z-index: 10; }
  .gotobuy .content-buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%; }
    .gotobuy .content-buy .total-price {
      padding-left: .3rem;
      font-size: .28rem;
      display: flex;
      align-items: center; }
      .gotobuy .content-buy .total-price em {
        font-style: normal; }
      .gotobuy .content-buy .total-price span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; }
        .gotobuy .content-buy .total-price span i {
          font-style: normal;
          color: #ff2661;
          font-size: .4rem; }
        .gotobuy .content-buy .total-price span b {
          bottom: .04rem;
          line-height: .2rem;
          white-space: nowrap;
          transform: scale(0.8);
          color: #999;
          font-weight: 200; }
    .gotobuy .content-buy .gotobuy-right {
      display: flex;
      justify-content: space-between;
      align-items: center; }
      .gotobuy .content-buy .gotobuy-right .price-lower {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* .price-lower-notice {
            // color: #666;
        } */ }
        .gotobuy .content-buy .gotobuy-right .price-lower img {
          width: .44rem;
          height: .44rem; }
      .gotobuy .content-buy .gotobuy-right .gotobuy-barsum {
        margin: 0 .3rem 0 .3rem;
        height: .88rem;
        line-height: .88rem;
        background-color: #ff2661;
        border-radius: .06rem;
        text-align: center;
        font-size: .32rem;
        color: #fff;
        width: 2rem; }

</style>