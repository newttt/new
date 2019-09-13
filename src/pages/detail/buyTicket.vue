<template>
    <div>
        <div class="buy-ticket">
        <!-- 头部选项卡 -->
         <div class="choose-head">
             <div class="nav">
                 <div class="nav-back">返回</div>
                 <div class="nav-content">
                     <router-link
                     to="/buyTicket"
                      tag="div"
                      class="sp-seat">选座购票
                      </router-link>
                     <div class="cs-seat sp-seat">直接购票</div>
                 </div>
                 <div class="nav-right">
                     <img src="https://static.piaoniu.com/m/static/img/hint.958a721.png">
                 </div>
             </div>
         </div>
         <!-- 内容 -->
         <div class="buy-page">
            <div class="shop-session">
                <div class="shop-content-out">
                    <div class="shop-content-info">
                        选择场次
                    </div>
                    <div class="shop-content-time">
                        <div class="event-item event-item-select">
                            <p>
                                2019年09月08日 周日 19:30
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
                    <li>
                        <div class="body-tp">
                            <span>80</span>
                            <span>票档</span>
                        </div>
                        <div class="type-tp">
                            <span>E档</span>
                        </div>
                    </li>
                    <li>
                        <div class="body-tp">
                            <span>80</span>
                            <span>票档</span>
                        </div>
                        <div class="type-tp">
                            <span>E档</span>
                        </div>
                    </li>
                    <li>
                        <div class="body-tp">
                            <span>80</span>
                            <span>票档</span>
                        </div>
                        <div class="type-tp">
                            <span>E档</span>
                        </div>
                    </li>
                    <li class="item-select event-item-select">
                        <div class="body-tp">
                            <span>80</span>
                            <span>票档</span>
                        </div>
                        <div class="type-tp">
                            <span>E档</span>
                        </div>
                    </li>
                </ul>


            </div>

         </div>

         <div class="bottom-fixed">

             <!-- 尾部赋值 选座位 -->
             <div class="choose-num">
                 <div class="text">数量</div>
                 <ul>
                     <li class="num-select">1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                 </ul>
             </div>
    <!--  -->
             <div class="gotobuy">
                 <div class="content-buy">
                     <div class="total-price">
                         <em>合计:</em>
                         
                         <span>
                            <i>￥238</i>
                            <b>￥144/张</b>
                         </span>
                         
                     </div>
                     <div class="gotobuy-right">
                         <div class="price-lower">
                             <img src="https://static.piaoniu.com/m/static/img/no-set.cac6248.png">
                             <div class="price-lower-notice">降价通知</div>
                         </div>
                         <div class="gotobuy-barsum">
                             结算
                             <span>(1)</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>


    </div>
    </div>
</template>

<script>
export default {
    name:"buyTicket"
}
</script>
<style>
    .choose-head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  box-shadow: 0 0.02rem 0.06rem 0 rgba(0, 0, 0, 0.15);
  background-color: #fff; }
  .choose-head .nav {
    height: .88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .28rem;
    box-sizing: border-box; }
    .choose-head .nav .nav-back {
      font-size: .32rem; }
    .choose-head .nav .nav-content {
      justify-content: center;
      line-height: .88rem;
      display: flex; }
      .choose-head .nav .nav-content .sp-seat {
        font-size: .32rem;
        height: .88rem;
        color: #999;
        margin: 0 .32rem;
        border-bottom: .04rem solid #fff;
        box-sizing: border-box; }
      .choose-head .nav .nav-content .cs-seat {
        color: #333;
        border-color: #ff6d95; }
    .choose-head .nav .nav-right {
      display: flex;
      align-items: center; }
      .choose-head .nav .nav-right img {
        height: .4rem;
        width: .4rem; }

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
          text-align: left; }
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
        color: #999; }
        .buy-page .page-content .body li .body-tp span {
          margin-right: .1rem;
          font-size: .28rem; }
          .buy-page .page-content .body li .body-tp span:last-child {
            font-size: .24rem; }
        .buy-page .page-content .body li .type-tp {
          width: 100%;
          font-size: 10px; }
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
  box-shadow: 0px -1px 3px rgba(0, 0, 38, 0.2); }
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
        margin: 0px .3rem 0 .3rem;
        height: .88rem;
        line-height: .88rem;
        background-color: #ff2661;
        border-radius: .06rem;
        text-align: center;
        font-size: .32rem;
        color: #fff;
        width: 2rem; }

/*# sourceMappingURL=buyTicket.css.map */

</style>