<template>
  <div id="goodsDetail">
    <div class="detail-page">
      <detailHead></detailHead>
      <div class="detail-header">
        <div class="header-img">

        </div>
        <div class="header-main">
          <div class="main-top">
            <img :src="goodsInfo.poster" class="poster">
            <div class="main-left">
              <h3>{{goodsInfo.name}}</h3>
              <div class="eval">
                <span>{{goodsInfo.rank}}</span>
                <ul>
                  <li v-for="(item,index) in goodsInfo.ranks">
                    <img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png">
                  </li>
                 
                </ul>
              </div>
              <div class="lineprice">
                <div class="left-line">
                  <span>{{goodsInfo.lowPrice}}</span>
                  <span>元起</span>
                </div>
                <div class="right-line">
                  {{ticketInfo.postageTip}}
                </div>
              </div>
            </div>
          </div>

          <div class="main-bottom">
            <div>
              <!-- <img src="../img/want-watch.png"> -->
              <span>想看</span>
            </div>
            <div>
              <!-- <img src="../img/info.png"> -->
              <span>评论</span>
            </div>
          </div>
        </div>
      </div>
      <!--  上底部  -->
      <div class="header-bottom">
        <div class="bottom-timer">
          {{goodsInfo.timeRange}}
        </div>
        <div class="bottom-info">
          <div class="info">{{goodsInfo.venueName}}</div>
          <div class="bottom-info-position">
            <!-- <img src="../img/position.png"> -->
          </div>
        </div>
        <div class="bottom-know">
          <span>购票须知</span>
          <div class="rgt-arrows"></div>
        </div>
        <div class="tit-icon">
          <ul>
            <li>平台保障</li>
            <li>
              <!-- <img src="../img/littlelogo.png"> -->
              <span>无票赔付</span>
            </li>
            <li>
              <!-- <img src="../img/littlelogo.png"> -->
              <span>出票保真</span>
            </li>
            <li>
              <!-- <img src="../img/littlelogo.png"> -->
              <span>配送保障</span>
            </li>
          </ul>
          <div class="rgt-arrows"></div>
        </div>
        <div class="time-type">
          <ul>
            <li v-for="(item,index) in goodsInfo.ticketCategories" :key="index">
              <div>
                <p>北京</p>
                <p>09.13</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <!--  下部详情 -->
      <div class="section">
        <!-- 明星 -->
        <stars></stars>
        <div class="section-title">演出简介</div>
        <div class="content">
          <div class="inner">
            <p class="banner-bask">
              <!-- <img src="../img/banner-bask.jpg"> -->
            </p>
            <p class="pic-tit">
              简介
            </p>
            <p class="game-num">
              <!-- <img src="../img/long-pic.png"> -->
            </p>
            <p class="white"></p>
            <!-- 评论 -->
            <div class="detail-comment">
              <div class="comment-head">
                <div class="text">

                  所有评论(57)
                </div>
              </div>
              <router-link 
              class="text-all"
              tag="div"
              to="/comment"
              >
                全部评论57条
              </router-link>
            </div>


          </div>
        </div>




        <!-- 列表 -->
        <div class="list-bot">
          <h3 class="list-tit">相关演出</h3>
          <div class="listbox">
            <detailList></detailList>
          </div>
        </div>


      </div>
      <!-- 权益保障 -->

      <div class="credit">
        <div class="credit-tit">
          票牛服务保障
        </div>
        <div class="cd-content">
          <div class="credit-item">
            <img src="https://static.piaoniu.com/nuxt-static/img/icon-zhenpiao2.6bf8fbd.png">
            <span>无票赔付</span>
          </div>
          <div class="credit-item">
            <img src="https://static.piaoniu.com/nuxt-static/img/icon-zhenpiao2.6bf8fbd.png">
            <span>无票赔付</span>
          </div>
          <div class="credit-item">
            <img src="https://static.piaoniu.com/nuxt-static/img/icon-zhenpiao2.6bf8fbd.png">
            <span>无票赔付</span>
          </div>


        </div>
      </div>
      <!-- 底部购票 -->
      <div class="shopticket">
        <div class="service">
          <div class="icon"></div>
          <div class="text">客服</div>
        </div>
        <router-link to="/ticket/chooseSeat" tag="div" class="choose">
          选座购票
        </router-link>
        <router-link to="/ticket/buyticket" tag="div" class="shoppings">
          直接购票
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import {goodsDetailApi} from "@api";
import {getTicket} from "@api/detail";
  import detailHead from "@lib/header";
  import detailList from "@lib/list";
  import stars from "@lib/list/star";
  export default {
    name: "goodsDetail",
    data() {
      return {
        goodsInfo:"",
        ticketInfo:""
      }
    },
    components: {
      detailHead, 
      detailList,
      stars
    },
    async created() {
      
        if(!this.goodsInfo || !sessionStorage.getItem("goodsItem")) {
          let data = await goodsDetailApi();
          this.goodsInfo = data.data[2];
          // console.log(this.goodsInfo);
          
          if(!this.goodsInfo.rank) {
            this.goodsInfo.rank = "暂无评分";
            
            this.goodsInfo.ranks = [1,1,1,1,1]
            }else {
               this.goodsInfo.ranks = [1,1,1,1,1],
               this.goodsInfo.ranks.length = Math.ceil(this.goodsInfo.rank / 2)
            }
          
          console.log(data);
          sessionStorage.setItem("goodsItem",JSON.stringify(this.goodsInfo));
// 
          let _id = this.goodsInfo.id;
          let type = this.goodsInfo.areaTicketType;
          this.ticketInfo = await getTicket(_id,type);
          // console.log(this.ticketInfo)
          sessionStorage.setItem("goodsInfo",JSON.stringify(this.ticketInfo))
        }else {
          this.goodsInfo = JSON.parse(sessionStorage.getItem("goodsItem"));
        }
    }
    

  }
</script>

<style>
  .detail-page {
    padding-bottom: .98rem;
  }



  .detail-header {
    background-color: #fff;
    width: 100%;
    background-color: #292138;
  }

  .detail-header .header-img {
    width: 100%;
    position: absolute;
  }

  .main-top {
    display: flex;
  }

  .header-main {
    padding: .4rem .3rem .32rem .3rem;
    justify-content: space-between;
  }

  .header-main .poster {
    height: 2.56rem;
    width: 1.92rem;
  }

  .header-main .main-left {
    flex: 1;
    margin-left: .3rem;
  }

  .header-main .main-left h3 {
    font-size: .34rem;
    font-weight: 700;
    min-height: .88rem;
    line-height: .44rem;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .26rem;
  }

  .header-main .main-left .eval {
    margin-left: .3rem;
    margin-bottom: .36rem;
  }

  .header-main .main-left .eval span {
    font-size: .28rem;
    color: #fdb146;
    margin-right: .12rem;
  }

  .header-main .main-left .eval ul {
    display: inline-block;
    overflow: visible;
    margin-right: .06rem;
    font-size: 0;
  }

  .header-main .main-left .eval ul li {
    display: inline-block;
    margin-right: .04rem;
  }

  .header-main .main-left .eval ul li img {
    width: .16rem;
    height: .16rem;
    margin-bottom: .02rem;
  }

  .header-main .main-left .lineprice {
    display: flex;
    align-items: center;
    margin-bottom: .2rem;
    color: #fff;
    justify-content: space-between;
  }

  .header-main .main-left .lineprice .left-line {
    display: flex;
    align-items: center;
  }

  .header-main .main-left .lineprice .left-line span {
    margin-top: .04rem;
  }

  .header-main .main-left .lineprice .left-line span:first-child {
    font-size: .48rem;
    margin-right: .06rem;
    margin-top: 0;
  }

  .header-main .main-left .lineprice .right-line {
    font-size: .24rem;
  }

  .header-main .main-left .lineprice .right-line i {
    font-style: normal;
  }

  .header-main .main-bottom {
    color: #fff;
    margin-top: .32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-main .main-bottom div {
    background: rgba(255, 255, 255, 0.1);
    height: .6rem;
    border-radius: .06rem;
    line-height: .6rem;
    text-align: center;
    font-size: .28rem;
    width: 48%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-main .main-bottom div img {
    width: .3rem;
    height: .28rem;
    margin-right: .08rem;
  }

  .header-bottom {
    padding-left: .28rem;
    background: #fff;
  }

  .header-bottom .rgt-arrows {
    /* background-image: url(../img/right-arrows.png); */
    background-size: .16rem .26rem;
    height: .26rem;
    width: .16rem;
    margin-right: .28rem;
  }

  .header-bottom .bottom-timer {
    font-size: .3rem;
    padding-top: .48rem;
  }

  .header-bottom .bottom-info {
    display: flex;
    align-items: center;
    border-bottom: .02rem solid #f5f5f5;
    padding-bottom: .3rem;
    padding-top: .32rem;
    justify-content: space-between;
  }

  .header-bottom .bottom-info .info {
    margin-right: .22rem;
    font-size: .3rem;
  }

  .header-bottom .bottom-info .bottom-info-position {
    padding: 0 .16rem;
    border-left: .02rem solid #f5f5f5;
  }

  .header-bottom .bottom-info .bottom-info-position img {
    width: .4rem;
    height: .48rem;
  }

  .header-bottom .bottom-know {
    display: flex;
    padding: .32rem 0;
    border-bottom: .02rem solid #f5f5f5;
    justify-content: space-between;
    align-items: center;
  }

  .header-bottom .bottom-know span {
    font-size: .26rem;
    color: #333;
  }

  .header-bottom .tit-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .32rem 0;
    border-bottom: .02rem solid #f5f5f5;
  }

  .header-bottom .tit-icon ul {
    display: flex;
  }

  .header-bottom .tit-icon ul li {
    margin-right: .2rem;
    display: flex;
  }

  .header-bottom .tit-icon ul li:first-child {
    margin-right: .4rem;
    font-size: .26rem;
    color: #333;
  }

  .header-bottom .tit-icon ul li img {
    width: .24rem;
    height: .24rem;
    margin-right: .08rem;
  }

  .header-bottom .time-type ul {
    display: flex;
    flex-wrap: nowrap;
    padding: .52rem 0;
    overflow: auto;
  }

  .header-bottom .time-type ul li div {
    display: flex;
    justify-content: center;
    height: 1.12rem;
    padding: 0 .28rem;
    margin-right: .24rem;
    text-align: center;
    border: .02rem solid #eee;
    border-radius: .06rem;
    white-space: nowrap;
    flex-direction: column;
  }

  .header-bottom .time-type ul li div p {
    color: #666;
    margin-bottom: .04rem;
  }

  .section {
    margin-top: 10px;
    color: #333;
    overflow: hidden;
    background-color: #fff;
  }

  .section .section-title {
    font-weight: 700;
    font-size: .3rem;
    padding-left: .3rem;
    margin-bottom: -.3rem;
    overflow: hidden;
    height: 1.1rem;
    line-height: 1.1rem;
  }

  .section .content {
    line-height: 1.6;
    font-size: .3rem;
    padding: .1rem .28rem 0;
    color: #666;
    margin-bottom: .3rem;
  }

  .section .content .inner .banner-bask {
    margin: 0;
    font-size: .28rem;
    line-height: 1.8;
    color: #666;
  }

  .section .content .inner .banner-bask img {
    width: 6.9rem !important;
    margin-top: .44rem;
    margin-bottom: .3rem;
    height: auto !important;
  }

  .section .content .inner .pic-tit {
    letter-spacing: .02rem;
    margin: 0em 0.5em;
    line-height: 1.75em;
    text-align: center;
  }

  .section .content .inner .game-num {
    margin: 0 .14rem;
  }

  .section .content .inner .game-num img {
    width: 6.9rem !important;
    height: 47.4376rem !important;
    margin-top: .44rem;
    margin-bottom: .3rem;
  }

  .section .content .inner .white {
    height: .5rem;
    margin: 0 .14rem;
  }

  .section .content .inner .detail-comment {
    overflow: hidden;
    background-color: #fff;
    margin-top: .2rem;
  }

  .section .content .inner .detail-comment .comment-head {
    position: relative;
    font-weight: 700;
    font-size: .3rem;
    padding-left: .3rem;
    margin-bottom: -.3rem;
    overflow: hidden;
    height: 1.1rem;
    line-height: 1.1rem;
  }

  .section .content .inner .detail-comment .comment-head .text {
    color: #262626;
  }

  .section .content .inner .detail-comment .text-all {
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    font-size: .3rem;
    color: #5fb7fc;
  }

  .list-bot {
    overflow: hidden;
    background-color: #fff;
    margin-top: .2rem;
  }

  .list-bot .list-tit {
    position: relative;
    font-weight: 700;
    font-size: .3rem;
    padding-left: .3rem;
    margin-bottom: -.3rem;
    overflow: hidden;
    height: 1.1rem;
    line-height: 1.1rem;
  }

  .list-bot .listbox {
    margin-bottom: 0;
    padding: .3rem 0;
  }



  .credit {
    text-align: center;
    padding: .32rem 0;
    background-color: transparent;
  }

  .credit .credit-tit {
    margin-bottom: .44rem;
    color: #999;
    height: .4rem;
  }

  .credit .credit-tit::before {
    display: inline-block;
    content: "";
    width: 1.2rem;
    height: .02rem;
    background-color: #e6e6e6;
    margin-bottom: .1rem;
  }

  .credit .credit-tit::after {
    display: inline-block;
    content: "";
    width: 1.2rem;
    height: .02rem;
    background-color: #e6e6e6;
    margin-bottom: .1rem;
    margin-left: .6rem;
  }

  .credit .cd-content {
    justify-content: center;
    padding: 0 .7rem;
    align-items: center;
    display: flex;
  }

  .credit .cd-content .credit-item {
    margin-right: 1.12rem;
  }

  .credit .cd-content .credit-item img {
    margin: 0 auto;
    width: .6rem;
    height: .6rem;
  }

  .credit .cd-content .credit-item span {
    margin-top: .14rem;
    color: #999;
    font-size: .24rem;
    display: block;
    line-height: 1;
    white-space: nowrap;
  }

  .credit .cd-content .credit-item:last-child {
    margin: 0;
  }

  .shopticket {
    position: fixed;
    display: flex;
    height: .98rem;
    width: 100%;
    bottom: 0;
    z-index: 9;
  }

  .shopticket .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1.3rem;
    background-color: #fff;
    justify-content: center;
    border-top: .02rem solid #e6e6e6;
  }

  .shopticket .service .icon {
    width: .4rem;
    height: .4rem;
    margin-bottom: .04rem;
    background-size: contain;
    background-image: url(https://static.piaoniu.com/nuxt-static/img/custom-service.89c653b.png);
  }

  .shopticket .service .text {
    height: .32rem;
    line-height: .32rem;
    text-align: center;
    font-size: .22rem;
    color: #666;
  }

  .shopticket .choose {
    background-color: #fd8612;
    flex: 1;
    font-size: .32rem;
    line-height: .98rem;
    min-width: 2.2rem;
    height: 100%;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
  }

  .shopticket .shoppings {
    background-color: #ff2661;
    flex: 1;
    font-size: .32rem;
    line-height: .98rem;
    min-width: 2.2rem;
    height: 100%;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
  }

  /*# sourceMappingURL=detail.css.map */
</style>