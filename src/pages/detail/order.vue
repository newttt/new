<template>
    <div>
            <div class="order">
        <div class="order-page">
            <!-- 头 -->
            <div class="order-title">
                <span class="back-arrows"></span>
                <span>确认订单</span>
                <span></span>
            </div>
        </div>
        <div class="goods-card">
            <div class="goods-card-content">
                <div class="card-head">
                    <div class="card-head-left">
                        <span>商品提供: &nbsp;</span>
                        <div>喜洋洋票务 </div>
                        <a></a>
                    </div>
                    <div class="card-head-rig">
                        预计9月10日前发货
                    </div>
                </div>
                <div class="card-main">
                    <div class="card-main-left">
                        <h3>
                            篮球世界杯第87场半决赛1
                        </h3>
                        <div class="card-lf-time">
                            2019年09月13日 第87场_半决赛1(第81场胜方VS第83场胜方) 16:00或20:00
                        </div>
                        <div class="card-lf-add">
                            凯迪拉克中心（原五棵松体育馆）
                        </div>
                        <div class="card-poster">
                            <div class="name">票档770</div>
                            <div class="num">x1</div>
                        </div>
                    </div>
                    <div class="card-main-right">
                        <div class="card-rgt-img"></div>
                    </div>

                </div>

                <div class="card-tip">
                    <div>不支持退换</div>
                    <div>无票赔付最高780元</div>
                </div>
            </div>
        </div>
        <!-- 取票 -->
        <div class="goods-block">
            <div class="send-content">
                <div class="send-top">
                    <div class="methods">取票方式</div>
                    <div class="address">
                        <div class="type-get type-item-select">快递寄送</div>
                        <div class="type-get">上门自取</div>
                    </div>
                </div>
                <div class="send-bot">
                    <div class="address-bot">
                        <div class="address-tit">收货地址</div>
                        <div class="address-right">
                            <div class="address-add">
                                新增
                            </div>
                            <div class="arrows-add">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-block">
            <div class="realname">
                <div class="realname-title">
                    填写实名信息
                </div>
                <div class="realname-content">
                    <div class="realname-content-inner">
                        <div class="real-item">
                            <div class="real-item-label">
                                姓名:
                            </div>
                            <div class="real-item-info">
                                <input type="text" placeholder="输入中文姓名">
                            </div>
                        </div>
                        <div class="real-item">
                            <div class="real-item-label">
                                证件类型:
                            </div>
                            <div class="real-item-info">
                                <div class="select-value">身份证</div>
                            </div>
                        </div>
                        <div class="real-item">
                            <div class="real-item-label">
                                证件号:
                            </div>
                            <div class="real-item-info">
                                <input type="text" placeholder="输入证件号">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-block">
            <div class="discount">
                <div class="discount-line">
                    <div class="discount-line-item">
                        优惠券
                    </div>
                    <div class="discount-icon">

                    </div>
                    <div class="discount-money discount-nomoney">
                        无可用优惠券
                    </div>
                    <div class="discount-arrows">

                    </div>
                </div>
            </div>
            <div class="discount">
                <div class="discount-line">
                    <div class="discount-line-item">
                        礼品卡
                    </div>
                    <div class="discount-icon">

                    </div>
                    <div class="discount-money discount-nomoney">
                        无可用礼品卡
                    </div>
                    <div class="discount-arrows">

                    </div>
                </div>
            </div>






        </div>
        <div class="goods-desc">
            <div class="goods-desc-block">
                <div class="checkbox"></div>
                <span>已阅读并同意</span>
                <a>[交易服务协议]</a>
            </div>
        </div>
    </div>
    <div class="gotobuy">
        <div class="content-buy">
            <div class="total-price">

                <span>
                    <span>
                        <i>238</i>
                        <strong>元</strong>
                    </span>
                </span>

            </div>
            <div class="gotobuy-right">
                <div class="price-lower">
                    <div class="price-lower-notice">明细</div>
                    <span class="arrows-up"></span>
                </div>
            </div>
        </div>
        <div class="gotobuy-buy">
            确定下单
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:"order"
}
</script>

<style>
    .order-page {
  padding-top: .88rem; }

.order-title {
  background: #fff;
  width: 100%;
  position: fixed;
  top: 0;
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
  /* background-image: url(../img/left-arrows.png);  */
  }

.goods-card {
  margin: .2rem .16rem;
  overflow: hidden; }
  .goods-card .goods-card-content {
    padding: .32rem;
    background-color: #fff;
    border-radius: .12rem; }
    .goods-card .goods-card-content .card-head {
      display: flex;
      justify-content: space-between;
      margin-bottom: .28rem;
      font-size: .22rem;
      color: #999;
      align-items: center; }
      .goods-card .goods-card-content .card-head .card-head-left {
        display: flex;
        align-items: center;
                /* span {

                } */ }
        .goods-card .goods-card-content .card-head .card-head-left div {
          max-width: 1.14rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #4b8feb; }
        .goods-card .goods-card-content .card-head .card-head-left a {
          display: block;
          margin-left: .1rem;
          width: 1.12rem;
          height: .28rem;
          background: url(https://static.piaoniu.com/m/static/img/zizi-icon.4a4d070.png);
          background-size: 100%; }
      .goods-card .goods-card-content .card-head .card-head-rig {
        margin-right: .12rem; }
    .goods-card .goods-card-content .card-main {
      display: flex; }
      .goods-card .goods-card-content .card-main .card-main-left {
        flex: 1; }
        .goods-card .goods-card-content .card-main .card-main-left h3 {
          font-size: .34rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis; }
        .goods-card .goods-card-content .card-main .card-main-left .card-lf-time {
          color: #999;
          margin-top: .2rem;
          overflow: hidden;
          text-overflow: ellipsis; }
        .goods-card .goods-card-content .card-main .card-main-left .card-lf-add {
          color: #999;
          margin-top: .12rem;
          overflow: hidden;
          text-overflow: ellipsis; }
        .goods-card .goods-card-content .card-main .card-main-left .card-poster {
          display: flex;
          align-items: flex-start;
          color: #999;
          margin-top: .12rem; }
          .goods-card .goods-card-content .card-main .card-main-left .card-poster .name {
            margin-right: .16rem; }
          .goods-card .goods-card-content .card-main .card-main-left .card-poster .num {
            flex-shrink: 0;
            margin-right: .08rem; }
      .goods-card .goods-card-content .card-main .card-main-right .card-rgt-img {
        width: .8rem;
        height: 1.08rem;
        /* background-image: url(../img/basketball.jpg); */
        background-size: 100%; }
    .goods-card .goods-card-content .card-tip {
      display: flex;
      flex-wrap: wrap;
      margin-top: .28rem; }
      .goods-card .goods-card-content .card-tip div {
        color: #4b8feb;
        margin-right: .16rem;
        padding-left: .3rem;
        /* background-image: url(../img/bluetrue.png); */
        background-size: .24rem .24rem;
        background-repeat: no-repeat; }

.goods-block {
  margin-bottom: .2rem; }

.send-content {
  background-color: #fff; }
  .send-content .send-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: .32rem;
    border-bottom: .02rem solid #F5F5F5; }
    .send-content .send-top .methods {
      font-size: .3rem;
      font-weight: bold; }
    .send-content .send-top .address {
      padding: .32rem 0;
      padding-right: .28rem;
      display: flex; }
      .send-content .send-top .address .type-get {
        font-size: .26rem;
        width: 1.44rem;
        line-height: .6rem;
        text-align: center;
        border-radius: .06rem;
        border: .02rem solid #E6E6E6;
        margin: .04rem 0;
        margin-left: .16rem; }
      .send-content .send-top .address .type-item-select {
        color: #FF2661;
        border-color: #FF2661; }
  .send-content .send-bot {
    padding: .32rem .28rem .32rem .32rem; }
    .send-content .send-bot .address-bot {
      display: flex;
      justify-content: space-between; }
      .send-content .send-bot .address-bot .address-tit {
        font-size: .3rem;
        font-weight: bold; }
      .send-content .send-bot .address-bot .address-right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center; }
        .send-content .send-bot .address-bot .address-right .address-add {
          color: #FF2661;
          margin-right: .32rem; }
        .send-content .send-bot .address-bot .address-right .arrows-add {
          width: .12rem;
          height: .2rem;
          background-image: url(https://static.piaoniu.com/m/static/img/arr-right.1655c6a.png);
          background-size: 100%; }

.realname {
  padding: .32rem 0 .32rem .32rem;
  background-color: #fff;
  overflow: hidden;
  border-top: .02rem solid #e6e6e6; }
  .realname .realname-title {
    font-size: .3rem;
    font-weight: bold;
    margin-bottom: .16rem; }
  .realname .realname-content .realname-content-inner .real-item {
    display: flex;
    align-items: center;
    border-bottom: .02rem solid #f5f5f5;
    position: relative; }
    .realname .realname-content .realname-content-inner .real-item .real-item-label {
      width: 1.2rem;
      font-size: .28rem;
      font-weight: 400; }
    .realname .realname-content .realname-content-inner .real-item .real-item-info {
      position: relative;
      flex: 1;
      display: flex;
      padding: 0 .32rem;
      box-sizing: border-box;
      height: .9rem; }
      .realname .realname-content .realname-content-inner .real-item .real-item-info .select-value {
        position: absolute;
        left: 16px;
        right: 16px;
        top: 0;
        height: 0;
        bottom: 0;
        line-height: 45px;
        font-size: 0.28rem; }
      .realname .realname-content .realname-content-inner .real-item .real-item-info input {
        display: block;
        width: 100%;
        height: .9rem;
        font-size: .28rem;
        text-align: left;
        color: #333;
        border: 0;
        outline: 0;
        box-sizing: border-box; }

.discount {
  background-color: #fff;
  position: relative;
  padding-left: .32rem; }
  .discount .discount-line {
    display: flex;
    align-items: center;
    border-bottom: .02rem solid #f5f5f5;
    padding: .24rem .24rem .24rem 0; }
    .discount .discount-line .discount-line-item {
      font-size: .3rem;
      font-weight: bold; }
    .discount .discount-line .discount-icon {
      width: .24rem;
      height: .24rem;
      background-image: url(https://static.piaoniu.com/m/static/img/hint.5fa9e18.png);
      background-size: 100%;
      margin-left: .16rem; }
    .discount .discount-line .discount-money {
      flex: 1;
      color: #ea3667;
      text-align: right;
      padding: 4px;
      margin-right: 16px; }
    .discount .discount-line .discount-havemoney {
      color: #ea3667; }
    .discount .discount-line .discount-nomoney {
      color: #999; }
    .discount .discount-line .discount-arrows {
      background-image: url(https://static.piaoniu.com/m/static/img/arr-right.1655c6a.png);
      background-size: 100%;
      width: .12rem;
      height: .2rem; }

.goods-desc {
  font-size: .22rem;
  line-height: .36rem;
  color: #999;
  margin-left: .22rem; }
  .goods-desc .goods-desc-block {
    display: flex;
    align-items: center; }
    .goods-desc .goods-desc-block:last-child {
      margin-bottom: 0; }
    .goods-desc .goods-desc-block .checkbox {
      display: inline-block;
      width: .22rem;
      height: .22rem;
      margin-right: .08rem;
      /* background-image: url(../img/bluetrue.png); */
      background-size: cover; }
    .goods-desc .goods-desc-block a {
      font-size: .22rem;
      color: #4b8feb; }

body {
  background-color: #f2f2f2;
  margin-bottom: 90px; }

.gotobuy {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 1rem;
  background-color: #fff;
  border-top: .02rem solid #e5e5e5;
  box-sizing: border-box;
  z-index: 10;
  justify-content: space-between; }
  .gotobuy .content-buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    flex: 1;
    padding: 0 .26rem 0 .3rem; }
    .gotobuy .content-buy .total-price {
      font-size: .28rem;
      display: flex;
      align-items: center; }
      .gotobuy .content-buy .total-price > span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; }
        .gotobuy .content-buy .total-price > span span i {
          font-style: normal;
          color: #ff2661;
          font-size: .4rem;
          font-weight: 700; }
        .gotobuy .content-buy .total-price > span span strong {
          display: inline-block;
          font-size: .2rem;
          color: #999;
          font-weight: 300;
          margin: 0 .04rem; }
        .gotobuy .content-buy .total-price > span b {
          bottom: .04rem;
          line-height: .2rem;
          white-space: nowrap;
          transform: scale(0.8);
          color: #999;
          font-weight: 200; }
    .gotobuy .content-buy .gotobuy-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* .gotobuy-barsum {
          margin: 0px .3rem 0 .3rem;
          height: .88rem;
          line-height: .88rem;
          background-color: #ff2661;
          border-radius: .06rem;
          text-align: center;
          font-size: .32rem;
          color: #fff;
          width: 2rem;
      } */ }
      .gotobuy .content-buy .gotobuy-right .price-lower {
        display: flex;
        justify-content: center;
        align-items: center;
        /*  img {
             width: .44rem;
             height: .44rem;
             // margin-bott
         } */
        /* .price-lower-notice {
               // color: #666;
           } */ }
        .gotobuy .content-buy .gotobuy-right .price-lower .arrows-up {
          display: block;
          width: .16rem;
          height: .08rem;
          background-size: 100%;
          margin-left: .08rem;
          background-image: url(https://static.piaoniu.com/m/static/img/arrowUp.86811d4.png); }
  .gotobuy .gotobuy-buy {
    width: 152px;
    font-size: 17px;
    line-height: 50px;
    background-color: #ff2661;
    color: #fff;
    text-align: center; }

/*# sourceMappingURL=order.css.map */

</style>