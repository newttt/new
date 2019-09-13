<template>
    <div id="goodsDetail">
        <div class="detail-page">
          <detailHead></detailHead>
        <div class="detail-header">
            <div class="header-img">

            </div>
            <div class="header-main">
                <div class="main-top">
                    <img :src="goodsInfo.poster"
                        class="poster">
                    <div class="main-left">
                        <h3>{{goodsInfo.name}}</h3>
                        <div class="eval">
                            <span>10.0</span>
                            <ul>
                                <li>
                                    <img src="https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png">
                                </li>
                                <li>
                                    <img src="https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png">
                                </li>
                            </ul>
                        </div>
                        <div class="lineprice">
                            <div class="left-line">
                                <span>{{goodsInfo.lowPrice}}</span>
                                <span>元起</span>
                            </div>
                            <div class="right-line">
                                已有<i>382</i>人购买
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
                2019.09.05 - 09.30
            </div>
            <div class="bottom-info">
                <div class="info">凯迪拉克中心(原五棵松体育馆)</div>
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
                    <li>
                        <div>
                            <p>北京</p>
                            <p>09.13</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>北京</p>
                            <p>09.14</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>北京</p>
                            <p>09.15</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--  下部详情 -->
        <div class="section">
            <div class="stars">
                <div class="starsone">
                    <div class="stars-title">
                        <span>艺人明星</span>
                        <span>详情 &gt;</span>
                    </div>
                    <div class="stars-detail">
                        <div class="stars-item">
                            <!-- <img src="../img/item-stars.png"> -->
                            <div>
                                <h4>篮球世界杯</h4>
                                <div>
                                    <div class="stars-img">
                                        <!-- <img src="../img/132"> -->
                                        <!-- <img src="../img/132"> -->
                                        <div>
                                            <span>380</span>
                                            人关注
                                        </div>
                                    </div>
                                    <div class="stars-attaction">
                                        <!-- <img src="../img/add-att.png"> -->
                                        <div>关注</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-title">演出简介</div>
            <div class="content">
                <div class="inner">
                    <p class="banner-bask">
                        <!-- <img src="../img/banner-bask.jpg"> -->
                    </p>
                    <p class="pic-tit">
                        世界杯赛程图
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
                                <div class="text-all">
                                    全部评论57条
                                </div>
                    </div>


                </div>
            </div>




            <!-- 列表 -->
            <div class="list-bot">
                <h3 class="list-tit">相关演出</h3>
                <div class="listbox">
                    <ul>
                        <li>
                            <div class="listliImg">
                                <img
                                    src="https://img.piaoniu.com/poster/7c2c9f8cd8aaa9d49ec1ad8beb567f342839dea6.jpg?imageView2/2/w/164/h/220/format/jpg/q/60">
                            </div>
                            <div class="listliText">
                                <p class="listliText1"><span>[北京]</span>北京 话剧:《玩家》</p>
                                <p class="listliText2"><span>2019.09.24 19:00</span> | <span>首都剧场</span></p>
                                <p class="listliText3">评分 <span>9.5</span></p>
                                <p class="listliText4"><span>50</span>元起</p>
                                <p class="listliText5">“收藏是一个充满诱惑，诡秘的世界。”</p>
                            </div>
                        </li>
                        <li>
                            <div class="listliImg">
                                <img
                                    src="https://img.piaoniu.com/poster/7c2c9f8cd8aaa9d49ec1ad8beb567f342839dea6.jpg?imageView2/2/w/164/h/220/format/jpg/q/60">
                            </div>
                            <div class="listliText">
                                <p class="listliText1"><span>[北京]</span>北京 话剧:《玩家》</p>
                                <p class="listliText2"><span>2019.09.24 19:00</span> | <span>首都剧场</span></p>
                                <p class="listliText3">评分 <span>9.5</span></p>
                                <p class="listliText4"><span>50</span>元起</p>
                                <p class="listliText5">“收藏是一个充满诱惑，诡秘的世界。”</p>
                            </div>
                        </li>
                        <li>
                            <div class="listliImg">
                                <img
                                    src="https://img.piaoniu.com/poster/7c2c9f8cd8aaa9d49ec1ad8beb567f342839dea6.jpg?imageView2/2/w/164/h/220/format/jpg/q/60">
                            </div>
                            <div class="listliText">
                                <p class="listliText1"><span>[北京]</span>北京 话剧:《玩家》</p>
                                <p class="listliText2"><span>2019.09.24 19:00</span> | <span>首都剧场</span></p>
                                <p class="listliText3">评分 <span>9.5</span></p>
                                <p class="listliText4"><span>50</span>元起</p>
                                <p class="listliText5">“收藏是一个充满诱惑，诡秘的世界。”</p>
                            </div>
                        </li>
                    </ul>
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
            <router-link
              to="/chooseSeat"
              tag="div"
             class="choose">
                选座购票
            </router-link>
            <router-link
            to="/buyTicket"
            tag="div"
             class="shoppings">
                直接购票
            </router-link>
        </div>
    </div>

        <router-view></router-view>
    </div>
</template>

<script>
import {goodsDetailApi} from "@api";
import detailHead from "@lib/header";
export default {
    name:"goodsDetail",
    data() {
      return {
        goodsInfo:{}
      }
    },
    components: {
      detailHead,
    },
    async created() {
    let data = await goodsDetailApi();
    // console.log(data.data)
    this.goodsInfo = data.data[0];
    console.log(this.goodsInfo)
  },
}
</script>

<style>
   .detail-page {
  padding-bottom: .98rem; }

/* .detail-title {
  background: #fff;
  height: .88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .34rem;
  color: #525252;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500; }

.back-arrows {
  margin-left: .28rem;
  width: .22rem;
  height: .38rem;
  background-size: 100%;
   background-image: url(../img/left-arrows.png);
  } */

.detail-header {
  background-color: #fff;
  width: 100%;
  background-color: #292138; }
  .detail-header .header-img {
    width: 100%;
    position: absolute; }

.main-top {
  display: flex; }

.header-main {
  padding: .4rem .3rem .32rem .3rem;
  justify-content: space-between; }
  .header-main .poster {
    height: 2.56rem;
    width: 1.92rem; }
  .header-main .main-left {
    flex: 1;
    margin-left: .3rem; }
    .header-main .main-left h3 {
      font-size: .34rem;
      font-weight: 700;
      min-height: .88rem;
      line-height: .44rem;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: .26rem; }
    .header-main .main-left .eval {
      margin-left: .3rem;
      margin-bottom: .36rem; }
      .header-main .main-left .eval span {
        font-size: .28rem;
        color: #fdb146;
        margin-right: .12rem; }
      .header-main .main-left .eval ul {
        display: inline-block;
        overflow: visible;
        margin-right: .06rem;
        font-size: 0; }
        .header-main .main-left .eval ul li {
          display: inline-block;
          margin-right: .04rem; }
          .header-main .main-left .eval ul li img {
            width: .16rem;
            height: .16rem;
            margin-bottom: .02rem; }
    .header-main .main-left .lineprice {
      display: flex;
      align-items: center;
      margin-bottom: .2rem;
      color: #fff;
      justify-content: space-between; }
      .header-main .main-left .lineprice .left-line {
        display: flex;
        align-items: center; }
        .header-main .main-left .lineprice .left-line span {
          margin-top: .04rem; }
        .header-main .main-left .lineprice .left-line span:first-child {
          font-size: .48rem;
          margin-right: .06rem;
          margin-top: 0; }
      .header-main .main-left .lineprice .right-line {
        font-size: .24rem; }
        .header-main .main-left .lineprice .right-line i {
          font-style: normal; }
  .header-main .main-bottom {
    color: #fff;
    margin-top: .32rem;
    display: flex;
    justify-content: space-between;
    align-items: center; }
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
      align-items: center; }
      .header-main .main-bottom div img {
        width: .3rem;
        height: .28rem;
        margin-right: .08rem; }

.header-bottom {
  padding-left: .28rem;
  background: #fff; }
  .header-bottom .rgt-arrows {
    /* background-image: url(../img/right-arrows.png); */
    background-size: .16rem .26rem;
    height: .26rem;
    width: .16rem;
    margin-right: .28rem; }
  .header-bottom .bottom-timer {
    font-size: .3rem;
    padding-top: .48rem; }
  .header-bottom .bottom-info {
    display: flex;
    align-items: center;
    border-bottom: .02rem solid #f5f5f5;
    padding-bottom: .3rem;
    padding-top: .32rem;
    justify-content: space-between; }
    .header-bottom .bottom-info .info {
      margin-right: .22rem;
      font-size: .3rem; }
    .header-bottom .bottom-info .bottom-info-position {
      padding: 0 .16rem;
      border-left: .02rem solid #f5f5f5; }
      .header-bottom .bottom-info .bottom-info-position img {
        width: .4rem;
        height: .48rem; }
  .header-bottom .bottom-know {
    display: flex;
    padding: .32rem 0;
    border-bottom: .02rem solid #f5f5f5;
    justify-content: space-between;
    align-items: center; }
    .header-bottom .bottom-know span {
      font-size: .26rem;
      color: #333; }
  .header-bottom .tit-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .32rem 0;
    border-bottom: .02rem solid #f5f5f5; }
    .header-bottom .tit-icon ul {
      display: flex; }
      .header-bottom .tit-icon ul li {
        margin-right: .2rem;
        display: flex; }
        .header-bottom .tit-icon ul li:first-child {
          margin-right: .4rem;
          font-size: .26rem;
          color: #333; }
        .header-bottom .tit-icon ul li img {
          width: .24rem;
          height: .24rem;
          margin-right: .08rem; }
  .header-bottom .time-type ul {
    display: flex;
    flex-wrap: nowrap;
    padding: .52rem 0;
    overflow: auto; }
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
      flex-direction: column; }
      .header-bottom .time-type ul li div p {
        color: #666;
        margin-bottom: .04rem; }

.section {
  margin-top: 10px;
  color: #333;
  overflow: hidden;
  background-color: #fff; }
  .section .stars {
    margin-top: .2rem;
    padding: .4rem .28rem;
    background-color: #fff; }
    .section .stars .starsone .stars-title {
      align-items: center;
      margin-bottom: .38rem;
      display: flex;
      justify-content: space-between; }
      .section .stars .starsone .stars-title span {
        font-size: .24rem;
        color: #888; }
        .section .stars .starsone .stars-title span:first-child {
          font-size: .3rem;
          font-weight: 700;
          color: #333; }
    .section .stars .starsone .stars-detail {
      display: flex;
      overflow: hidden; }
      .section .stars .starsone .stars-detail .stars-item {
        display: flex;
        width: 100%; }
        .section .stars .starsone .stars-detail .stars-item img {
          width: 1.34rem;
          height: 1.34rem;
          margin-right: .24rem; }
        .section .stars .starsone .stars-detail .stars-item > div {
          flex: 1;
          width: 100%; }
          .section .stars .starsone .stars-detail .stars-item > div h4 {
            font-size: .36rem;
            color: #333;
            font-weight: 300; }
          .section .stars .starsone .stars-detail .stars-item > div > div {
            display: flex;
            justify-content: space-between;
            margin-top: .24rem; }
            .section .stars .starsone .stars-detail .stars-item > div > div .stars-img {
              display: flex;
              align-items: center; }
              .section .stars .starsone .stars-detail .stars-item > div > div .stars-img img {
                width: .56rem;
                height: .56rem;
                border-radius: 50%;
                margin-right: .1rem; }
              .section .stars .starsone .stars-detail .stars-item > div > div .stars-img div {
                font-size: .22rem;
                color: #999;
                margin-left: .22rem; }
                .section .stars .starsone .stars-detail .stars-item > div > div .stars-img div span {
                  font-size: .28rem;
                  font-weight: 700;
                  color: #ffb200; }
            .section .stars .starsone .stars-detail .stars-item > div > div .stars-attaction {
              align-items: center;
              color: #4b8feb;
              width: 1.34rem;
              height: .56rem;
              text-align: center;
              border: .02rem solid #4b8feb;
              border-radius: .28rem;
              background-color: #fff;
              box-sizing: border-box;
              justify-content: center;
              display: flex; }
              .section .stars .starsone .stars-detail .stars-item > div > div .stars-attaction img {
                height: .16rem;
                width: .16rem;
                margin-right: .12rem; }
  .section .section-title {
    font-weight: 700;
    font-size: .3rem;
    padding-left: .3rem;
    margin-bottom: -.3rem;
    overflow: hidden;
    height: 1.1rem;
    line-height: 1.1rem; }
  .section .content {
    line-height: 1.6;
    font-size: .3rem;
    padding: .1rem .28rem 0;
    color: #666;
    margin-bottom: .3rem; }
    .section .content .inner .banner-bask {
      margin: 0;
      font-size: .28rem;
      line-height: 1.8;
      color: #666; }
      .section .content .inner .banner-bask img {
        width: 6.9rem !important;
        margin-top: .44rem;
        margin-bottom: .3rem;
        height: auto !important; }
    .section .content .inner .pic-tit {
      letter-spacing: .02rem;
      margin: 0em 0.5em;
      line-height: 1.75em;
      text-align: center; }
    .section .content .inner .game-num {
      margin: 0 .14rem; }
      .section .content .inner .game-num img {
        width: 6.9rem !important;
        height: 47.4376rem !important;
        margin-top: .44rem;
        margin-bottom: .3rem; }
    .section .content .inner .white {
      height: .5rem;
      margin: 0 .14rem; }
    .section .content .inner .detail-comment {
      overflow: hidden;
      background-color: #fff;
      margin-top: .2rem; }
      .section .content .inner .detail-comment .comment-head {
        position: relative;
        font-weight: 700;
        font-size: .3rem;
        padding-left: .3rem;
        margin-bottom: -.3rem;
        overflow: hidden;
        height: 1.1rem;
        line-height: 1.1rem; }
        .section .content .inner .detail-comment .comment-head .text {
          color: #262626; }
      .section .content .inner .detail-comment .text-all {
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .3rem;
        color: #5fb7fc; }

.list-bot {
  overflow: hidden;
  background-color: #fff;
  margin-top: .2rem; }
  .list-bot .list-tit {
    position: relative;
    font-weight: 700;
    font-size: .3rem;
    padding-left: .3rem;
    margin-bottom: -.3rem;
    overflow: hidden;
    height: 1.1rem;
    line-height: 1.1rem; }
  .list-bot .listbox {
    margin-bottom: 0;
    padding: .3rem 0; }
    .list-bot .listbox ul {
      width: 100%; }
      .list-bot .listbox ul li {
        margin: .3rem .3rem 0;
        background-color: #fff;
        display: flex; }
        .list-bot .listbox ul li .listliImg {
          min-height: 2.5rem; }
          .list-bot .listbox ul li .listliImg img {
            width: 1.5rem;
            height: 2rem; }
        .list-bot .listbox ul li .listliText {
          margin-left: .34rem;
          border-bottom: 0.02rem solid rgba(230, 230, 230, 0.5); }
          .list-bot .listbox ul li .listliText .listliText1 {
            font-size: .3rem;
            color: #333;
            max-height: .88rem;
            line-height: .44rem;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans;
            font-weight: 600; }
          .list-bot .listbox ul li .listliText .listliText2 {
            font-size: .24rem;
            color: #999;
            margin-top: .18rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden; }
          .list-bot .listbox ul li .listliText .listliText3 {
            font-size: .2rem;
            color: #999;
            margin-top: .08rem;
            margin-bottom: .32rem; }
            .list-bot .listbox ul li .listliText .listliText3 span {
              font-size: .24rem;
              font-weight: 700;
              color: #ffb02e; }
          .list-bot .listbox ul li .listliText .listliText4 {
            margin-bottom: .2rem; }
            .list-bot .listbox ul li .listliText .listliText4 span {
              top: .02em;
              color: #ff2661;
              font-size: .36rem;
              font-weight: 700;
              margin-right: .08rem; }
          .list-bot .listbox ul li .listliText .listliText5 {
            font-size: .24rem;
            color: #999;
            padding: .28rem 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            border-top: 0.02rem solid rgba(230, 230, 230, 0.5); }

.credit {
  text-align: center;
  padding: .32rem 0;
  background-color: transparent; }
  .credit .credit-tit {
    margin-bottom: .44rem;
    color: #999;
    height: .4rem; }
    .credit .credit-tit::before {
      display: inline-block;
      content: "";
      width: 1.2rem;
      height: .02rem;
      background-color: #e6e6e6;
      margin-bottom: .1rem; }
    .credit .credit-tit::after {
      display: inline-block;
      content: "";
      width: 1.2rem;
      height: .02rem;
      background-color: #e6e6e6;
      margin-bottom: .1rem;
      margin-left: .6rem; }
  .credit .cd-content {
    justify-content: center;
    padding: 0 .7rem;
    align-items: center;
    display: flex; }
    .credit .cd-content .credit-item {
      margin-right: 1.12rem; }
      .credit .cd-content .credit-item img {
        margin: 0 auto;
        width: .6rem;
        height: .6rem; }
      .credit .cd-content .credit-item span {
        margin-top: .14rem;
        color: #999;
        font-size: .24rem;
        display: block;
        line-height: 1;
        white-space: nowrap; }
      .credit .cd-content .credit-item:last-child {
        margin: 0; }

.shopticket {
  position: fixed;
  display: flex;
  height: .98rem;
  width: 100%;
  bottom: 0;
  z-index: 9; }
  .shopticket .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1.3rem;
    background-color: #fff;
    justify-content: center;
    border-top: .02rem solid #e6e6e6; }
    .shopticket .service .icon {
      width: .4rem;
      height: .4rem;
      margin-bottom: .04rem;
      background-size: contain;
      background-image: url(https://static.piaoniu.com/nuxt-static/img/custom-service.89c653b.png); }
    .shopticket .service .text {
      height: .32rem;
      line-height: .32rem;
      text-align: center;
      font-size: .22rem;
      color: #666; }
  .shopticket .choose {
    background-color: #fd8612;
    flex: 1;
    font-size: .32rem;
    line-height: .98rem;
    min-width: 2.2rem;
    height: 100%;
    color: #fff;
    text-align: center;
    box-sizing: border-box; }
  .shopticket .shoppings {
    background-color: #ff2661;
    flex: 1;
    font-size: .32rem;
    line-height: .98rem;
    min-width: 2.2rem;
    height: 100%;
    color: #fff;
    text-align: center;
    box-sizing: border-box; }

/*# sourceMappingURL=detail.css.map */
 
</style>