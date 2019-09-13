<template>
    <div>
        <div class="choose-seat">
        <!-- 头部固定 选项卡 -->
        <div class="choose-head">
            <div class="nav">
                <div class="nav-back">返回</div>
                <div class="nav-content">
                    <router-link
                      to="/buyTicket"
                      tag="div"
                     class="cs-seat sp-seat">选座购票
                     </router-link>
                    <div class="sp-seat">直接购票</div>
                </div>
                <div class="nav-right">
                    <img src="https://static.piaoniu.com/m/static/img/hint.958a721.png">
                </div>
            </div>
        </div>
        <!-- 演出日期信息 -->
        <div class="choose-info">
            <div class="show">
                <div class="text">2019年09月08日 周日 20:00 伊朗 VS 菲律宾</div>
                <span></span>
            </div>
            <div class="drap-show">

            </div>
        </div>
        <!-- 演出地图 -->
        <div class="map-seat">
            <div class="map-content">
                <div class="map-img">
                    <img src="https://static.piaoniu.com/m/static/img/loading.2734a67.png">
                </div>
            </div>
        </div>
        <!--  -->
        <div class="choose-num">
            <div class="text">数量</div>
            <ul>
                <li class="num-select">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
        <!-- 选座位 -->
        <div class="ticket-list">
            <div class="outer">
                <ul>
                    <li class="ticket-list-select">
                        <div class="list-left">
                            <div class="ticket-list-row">
                                317A 11排 20座以内
                            </div>
                            <div class="ticket-list-tm">
                                票档：180
                            </div>
                        </div>
                        <div class="list-discount">
                            <div class="list-discount-icons list-discount-icon">折扣</div>
                        </div>
                        <div class="list-discount">
                            <div class="list-discount-icon list-discount-ic">连座</div>
                        </div>
                        <div class="list-right">
                            <div class="ticket-list-price">
                                ￥537
                            </div>
                            <div class="ticket-list-sy">
                                剩余1张
                            </div>
                        </div>
                        <div class="ticket-list-checked ticket-list-checked-selected">

                        </div>
                    </li>
                    <li>
                        <div class="list-left">
                            <div class="ticket-list-row">
                                317A 11排 20座以内
                            </div>
                            <div class="ticket-list-tm">
                                票档：180
                            </div>
                        </div>
                        <div class="list-discount">
                            <div class="list-discount-icons list-discount-icon">折扣</div>
                        </div>
                        <div class="list-discount">
                            <div class="list-discount-icon list-discount-ic">连座</div>
                        </div>
                        <div class="list-right">
                            <div class="ticket-list-price">
                                ￥537
                            </div>
                            <div class="ticket-list-sy">
                                剩余1张
                            </div>
                        </div>
                        <div class="ticket-list-checked">

                        </div>
                    </li>
                </ul>
            </div>
            <div class="no-ticket">
                <div class="icon"></div>
                <div class="no-ticket-text">
                    暂时售空
                </div>
            </div>

        </div>
        <!-- 底部结算 -->
        <div class="gotobuy">
            <div class="content-buy">
                <div class="total-price">
                    总价:
                    <i>238元</i>
                </div>
                <div class="gotobuy-right">
                    <div class="price-lower">
                        <img src="https://static.piaoniu.com/m/static/img/no-set.cac6248.png">
                        <div class="price-lower-notice">降价通知</div>
                    </div>
                    <div class="gotobuy-barsum">
                        结算
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  name:"chooseSeat"  
}
</script>

<style>
    .choose-seat {
  background: white;
  padding-top: .88rem; }
  .choose-seat .choose-head {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 12;
    width: 100%;
    box-shadow: 0 0.02rem 0.06rem 0 rgba(0, 0, 0, 0.15);
    background-color: #fff; }
    .choose-seat .choose-head .nav {
      height: .88rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .28rem;
      box-sizing: border-box; }
      .choose-seat .choose-head .nav .nav-back {
        font-size: .32rem; }
      .choose-seat .choose-head .nav .nav-content {
        justify-content: center;
        line-height: .88rem;
        display: flex; }
        .choose-seat .choose-head .nav .nav-content .sp-seat {
          font-size: .32rem;
          height: .88rem;
          color: #999;
          margin: 0 .32rem;
          border-bottom: .04rem solid #fff;
          box-sizing: border-box; }
        .choose-seat .choose-head .nav .nav-content .cs-seat {
          color: #333;
          border-color: #ff6d95; }
      .choose-seat .choose-head .nav .nav-right {
        display: flex;
        align-items: center; }
        .choose-seat .choose-head .nav .nav-right img {
          height: .4rem;
          width: .4rem; }
  .choose-seat .choose-info .show {
    height: .88rem;
    width: 100%;
    border-bottom: .02rem solid #e6e6e6;
    line-height: .88rem;
    position: relative;
    text-align: center; }
    .choose-seat .choose-info .show .text {
      font-size: .28rem;
      height: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; }
    .choose-seat .choose-info .show .drap-show {
      border-width: 0.08rem;
      border-style: solid;
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: #666;
      border-bottom-color: transparent;
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      margin-top: -.04rem;
      right: 18%; }
  .choose-seat .map-seat {
    height: 6.6rem;
    overflow: hidden;
    position: relative;
    z-index: 9;
    width: 100%;
    background-color: #E8E9EA; }
    .choose-seat .map-seat .map-content {
      visibility: visible;
      width: 100%;
      height: 100%; }
      .choose-seat .map-seat .map-content .map-img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
       /* img {
      }  */ }
  .choose-seat .choose-num {
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
    box-shadow: 0px .02rem .06rem #a7a7a7; }
    .choose-seat .choose-num .text {
      font-size: .24rem;
      width: .48rem;
      margin-right: .28rem; }
    .choose-seat .choose-num ul {
      display: flex;
      align-items: center;
      flex: 1;
      overflow: scroll; }
      .choose-seat .choose-num ul li {
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
      .choose-seat .choose-num ul .num-select {
        border-color: #ff2661;
        color: #ff2661; }
        .choose-seat .choose-num ul .num-select::after {
          position: absolute;
          content: "";
          width: .3rem;
          height: .2rem;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-image: url(https://static.piaoniu.com/m/static/img/selected-tag.9a607f3.png); }
  .choose-seat .ticket-list {
    height: 3.66rem;
    display: flex;
    justify-content: center;
    align-items: center; }
    .choose-seat .ticket-list .outer {
      overflow: scroll;
      background-color: #fff;
      width: 100%;
      height: 100%; }
      .choose-seat .ticket-list .outer ul {
        padding-bottom: 2.56rem; }
        .choose-seat .ticket-list .outer ul li {
          display: flex;
          align-items: center;
          background-color: #fff;
          padding: 0 .3rem;
          height: 1.08rem;
          border-bottom: .02rem solid #e6e6e6;
          position: relative;
          overflow: hidden; }
          .choose-seat .ticket-list .outer ul li .list-left {
            flex: 1;
            display: flex;
            flex-direction: column; }
            .choose-seat .ticket-list .outer ul li .list-left .ticket-list-row {
              font-size: .28rem; }
            .choose-seat .ticket-list .outer ul li .list-left .ticket-list-tm {
              color: #666; }
          .choose-seat .ticket-list .outer ul li .list-discount {
            min-width: .88rem; }
          .choose-seat .ticket-list .outer ul li .list-discount-icons {
            width: .6rem;
            background-color: #b5dc76; }
          .choose-seat .ticket-list .outer ul li .list-discount-icon {
            color: #fff;
            text-align: center;
            font-size: .24rem;
            padding: 0.02rem .06rem;
            border-radius: .06rem; }
          .choose-seat .ticket-list .outer ul li .list-discount-ic {
            color: #666;
            border: .02rem solid #e6e6e6;
            background-color: #fff; }
          .choose-seat .ticket-list .outer ul li .list-right {
            min-width: 0.1rem;
            display: flex;
            flex-direction: column;
            margin-left: .28rem; }
            .choose-seat .ticket-list .outer ul li .list-right .ticket-list-price {
              font-size: .36rem; }
            .choose-seat .ticket-list .outer ul li .list-right .ticket-list-sy {
              font-size: .24rem;
              color: #666;
              text-align: center; }
          .choose-seat .ticket-list .outer ul li .ticket-list-checked {
            width: .44rem;
            height: .44rem;
            margin-left: .34rem;
            background-size: contain;
            background-image: url(https://static.piaoniu.com/m/static/img/checkbox.6bfc87e.png); }
          .choose-seat .ticket-list .outer ul li .ticket-list-checked-selected {
            background-image: url(https://static.piaoniu.com/m/static/img/checkbox-select.82cea7c.png); }
        .choose-seat .ticket-list .outer ul .ticket-list-select {
          background-color: #f2f8ff; }
    .choose-seat .ticket-list .no-ticket {
      display: flex;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center; }
      .choose-seat .ticket-list .no-ticket .icon {
        background-image: url(https://static.piaoniu.com/m/static/img/noTickets.c8b7325.png);
        width: 1rem;
        height: 1rem;
        background-size: 1rem 1rem;
        margin: 0 auto; }
      .choose-seat .ticket-list .no-ticket .no-ticket-text {
        font-size: .3rem;
        color: #999;
        text-align: center;
        margin-top: .4rem; }
  .choose-seat .gotobuy {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.3rem;
    background-color: #fff;
    padding: .2rem 0;
    border-top: .02rem solid #e5e5e5;
    box-sizing: border-box;
    z-index: 10; }
    .choose-seat .gotobuy .content-buy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 100%; }
      .choose-seat .gotobuy .content-buy .total-price {
        padding-left: .3rem;
        font-size: .28rem; }
        .choose-seat .gotobuy .content-buy .total-price i {
          font-style: normal;
          color: #ff2661; }
      .choose-seat .gotobuy .content-buy .gotobuy-right {
        display: flex;
        justify-content: space-between;
        align-items: center; }
        .choose-seat .gotobuy .content-buy .gotobuy-right .price-lower {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          /* .price-lower-notice {
              // color: #666;
          } */ }
          .choose-seat .gotobuy .content-buy .gotobuy-right .price-lower img {
            width: .44rem;
            height: .44rem; }
        .choose-seat .gotobuy .content-buy .gotobuy-right .gotobuy-barsum {
          margin: 0px .3rem 0 .3rem;
          height: .88rem;
          line-height: .88rem;
          background-color: #ff2661;
          border-radius: .06rem;
          text-align: center;
          font-size: .32rem;
          color: #fff;
          width: 2rem; }

/*# sourceMappingURL=chooseSeat.css.map */

</style>