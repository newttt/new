<template>
  <div class="lotteryFreeBox">
    <div class="lotteryFreeHeader">
      <img
        src="data:image/png;base64,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"
      />
    </div>
    <div class="lotteryFreeGohome">
      <img src="https://static.piaoniu.com/taro_static/static/images/icon-home.png" @click="goHomeHandler()"/>
    </div>
    <div class="lotteryFreeBody">
      <div class="lotteryFreeBody1" v-for="(item,index) in botteryFreeList" :key="index">
        <div class="lotteryFreeBody11">
          <img :src="item.showImage" />
          <p>{{item.name}}</p>
        </div>
        <div class="lotteryFreeBody12">
          <span>{{new Date(item.lotteryTime).getMonth() + 1}}月{{new Date(item.lotteryTime).getDate()}}日 {{new Date(item.lotteryTime).getHours()}}:{{new Date(item.lotteryTime).getMinutes()}} 开奖</span>
          <input type="button" value="免费抽奖" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { lotteryFreeApi } from "@api";
import { create } from "domain";
export default {
  name: "LotteryFree",
  data() {
    return {
      botteryFreeList: [],
    };
  },
  async created() {
    let data = await lotteryFreeApi();
    this.botteryFreeList = data.data;
    console.log(this.botteryFreeList);
  },
  methods:{
    goHomeHandler(){
      this.$router.push("/home");
    }
  }
};
</script>

<style>
.lotteryFreeBox {
  width: 100%;
  height: 100%;
  padding: 0.32rem 0.28rem;
}
.lotteryFreeBox .lotteryFreeHeader {
  margin-bottom: 0.32rem;
  width: 100%;
  height: 1.08rem;
}
.lotteryFreeBox .lotteryFreeHeader img {
  width: 100%;
  height: 1.08rem;
}
.lotteryFreeBox .lotteryFreeGohome {
  position: fixed;
  z-index: 1;
  width: 1rem;
  height: 1rem;
  bottom: 1.9rem;
  left: 0.22rem;
}
.lotteryFreeBox .lotteryFreeGohome img {
  width: 1rem;
  height: 1rem;
}
.lotteryFreeBox .lotteryFreeBody {
  width: 100%;
}
.lotteryFreeBox .lotteryFreeBody .lotteryFreeBody1 {
  width: 100%;
  height: 4.94rem;
  box-shadow: 0 0.05533rem 0.10133rem 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 0.4rem;
}
.lotteryFreeBox .lotteryFreeBody .lotteryFreeBody1 .lotteryFreeBody11 {
  width: 100%;
  height: 3.9rem;
  position: relative;
}
.lotteryFreeBox .lotteryFreeBody .lotteryFreeBody1 .lotteryFreeBody11 img {
  width: 100%;
  height: 100%;
}
.lotteryFreeBox .lotteryFreeBody .lotteryFreeBody1 .lotteryFreeBody11 p {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 500;
  color: #fff;
  padding: 0 0.32rem 0.32rem 0.32rem;
  font-size: 0.32rem;
  font-family: -apple-system-font, "Helvetica Neue", sans-serif;
}
.lotteryFreeBox .lotteryFreeBody .lotteryFreeBody1 .lotteryFreeBody12 {
  padding: 0 0.32rem;
  width: 100%;
  height: 1.04rem;
  line-height: 1.04rem;
}
.lotteryFreeBox .lotteryFreeBody .lotteryFreeBody1 .lotteryFreeBody12 span {
  float: left;
  font-weight: 500;
  color: #262626;
  font-size: 0.28rem;
  font-family: -apple-system-font, "Helvetica Neue", sans-serif;
}
.lotteryFreeBox .lotteryFreeBody .lotteryFreeBody1 .lotteryFreeBody12 input {
  float: right;
  color: #fff;
  padding: 0 0.24rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border: 0;
  border-radius: 0.64rem;
  font-size: 0.28rem;
  margin-top: 0.22rem;
  background: linear-gradient(90deg, #ff2a5f 0%, #ff564d 100%);
}
</style>