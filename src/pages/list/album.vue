<template>
  <div class="albumBox" ref="albumBox">
    <div class="albumHeader">
      <img :src="headImg" />
    </div>
    <div class="albumBody" ref="albumBody">
      <div class="albumBody1">
        <img :src="shareImg" />
      </div>
      <div class="albumBody2">
        <div class="albumBody21" v-for="(item,index) in albumList" :key="index">
          <div class="albumBody21l">
            <p class="albumBody21l1">{{item.activity.properName}}</p>
            <p class="albumBody21l2">{{item.activity.timeRange}} | {{item.venue.name}}</p>
            <p class="albumBody21l3">
              <span>{{item.lowPrice?item.lowPrice:"暂时售空"}}</span>&nbsp;元起
            </p>
          </div>
          <div class="albumBody21r">
            <img :src="item.activity.poster" />
          </div>
        </div>
      </div>
    </div>
    <div class="albumFooter" ref="albumFooter">
      <div class="albumFooter1" ref="albumFooter1" @click="goHomeHandler()">点击票牛发现更多精彩</div>
    </div>
  </div>
</template>

<script>
import { albumApi } from "@api";
export default {
  name: "Album",
  data() {
    return {
      albumList: [],
      bgcolor: "",
      headImg: "",
      id: "",
      shareImg: ""
    };
  },
  async created() {
    let data = await albumApi();
    this.bgcolor = data.bgcolor;
    this.headImg = data.headImg;
    this.id = data.id;
    this.shareImg = data.floors[4].headImg;
    this.albumList = data.floors[4].contents;
    this.$refs.albumBox.style.background = this.bgcolor;
    this.$refs.albumBody.style.background = this.bgcolor;
    this.$refs.albumFooter.style.background = this.bgcolor;
    this.$refs.albumFooter1.style.color = this.bgcolor;
  },
  methods:{
    goHomeHandler(){
      this.$router.push("/home");
    }
  }
};
</script>

<style>
.albumBox {
  width: 100%;
  height: 100%;
}
.albumBox .albumHeader {
  width: 100%;
  height: 4.92rem;
}
.albumBox .albumHeader img {
  width: 100%;
  height: 100%;
}
.albumBox .albumBody {
  margin-top: 0.768rem;
  padding: 0 0.384rem;
}
.albumBox .albumBody .albumBody1 {
  width: 100%;
  height: 1.68rem;
  margin-bottom: 0.15rem;
}
.albumBox .albumBody .albumBody1 img {
  width: 100%;
  height: 100%;
}
.albumBox .albumBody .albumBody2 {
  width: 100%;
}
.albumBox .albumBody .albumBody2 .albumBody21 {
  padding: 0.384rem;
  width: 100%;
  height: 3.2rem;
  background-color: #fff;
  border-radius: 0.12rem;
  margin-bottom: 0.144rem;
}
.albumBox .albumBody .albumBody2 .albumBody21 .albumBody21l {
  position: relative;
  float: left;
  max-width: 4rem;
  height: 2.2rem;
  font-family: PingFang SC, Lantinghei SC, Roboto, Helvetica Neue,
    Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei,
    sans;
}
.albumBox .albumBody .albumBody2 .albumBody21 .albumBody21l .albumBody21l1 {
  font-size: 0.32rem;
  margin-bottom: 0.144rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.albumBox .albumBody .albumBody2 .albumBody21 .albumBody21l .albumBody21l2 {
  font-size: 0.24rem;
}
.albumBox .albumBody .albumBody2 .albumBody21 .albumBody21l .albumBody21l3 {
  position: absolute;
  left: 0;
  bottom: 0;
}
.albumBox
  .albumBody
  .albumBody2
  .albumBody21
  .albumBody21l
  .albumBody21l3
  span {
  color: #ff2661;
  font-weight: 500;
  font-size: 0.36rem;
  margin-right: 0.15rem;
}
.albumBox .albumBody .albumBody2 .albumBody21 .albumBody21r {
  float: right;
  height: 2.4rem;
  width: 1.84rem;
}
.albumBox .albumBody .albumBody2 .albumBody21 .albumBody21r img {
  width: 100%;
  height: 100%;
}
.albumBox .albumFooter {
  padding: 2rem 0.38rem 0.86rem;
  margin-top: -0.1534rem;
}
.albumBox .albumFooter .albumFooter1 {
  width: 100%;
  height: 1.03rem;
  background-color: #fff;
  color: #180501;
  border-radius: 22px;
  text-align: center;
  line-height: 1.03rem;
  font-size: 0.32rem;
  font-family: PingFang SC, Lantinghei SC, Roboto, Helvetica Neue,
    Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei,
    sans;
}
</style>