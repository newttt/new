<template>
  <div class="wrapper" ref="wrapper">
    <div class="allListBox">
      <div class="allListBoxBody">
        <ul>
          <li v-for="(item,index) in navList" :key="index" @click="listComponentsHandler(index)">
            <div class="listliImg">
              <img :src="item.poster" />
            </div>
            <div class="listliText">
              <p class="listliText1">
                <span>[北京]</span>
                {{item.name}}
              </p>
              <p class="listliText2">
                <span>{{item.timeRange}}</span> |
                <span>{{item.venueName}}</span>
              </p>
              <p class="listliText3">
                评分
                <span>{{item.rank?item.rank:"暂无"}}</span>
              </p>
              <p class="listliText4">
                <span>{{item.lowPrice}}</span> 元起
              </p>
              <p class="listliText5">{{item.desc}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { navListApi } from "@api";
import { mapActions } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "ListComponents",
  props: ["navIds"],
  data() {
    return {
      navList: [],
      navListId: 0,
      pageIndex:2
    };
  },
  created() {
    this.$watch("navIds", async function(newVal, oldVal) {
      this.navListId = newVal;
      if (newVal === "false") {
        let data = await allListApi();
        // console.log(data);
        this.navList = data.data;
      } else {
        let data = await navListApi(this.navListId,this.pageIndex);
        this.navList = data.data;
      }
    });
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true
    });
    this.scroll.on("pullingUp", async () => {
      this.pageIndex++;
      let data = await navListApi(this.navListId,this.pageIndex);
      this.navList = [...this.navList,...data.data];
      this.scroll.finishPullUp();
    });
  },
  methods: {
    listComponentsHandler(index) {
      console.log(this.navList[index]);
    }
  }
};
</script>

<style>
.wrapper{
  height: 100%;
}
.allListBox {
  width: 100%;
  background-color: #fff;
}
.allListBox .allListBoxBody {
  width: 100%;
}
.allListBox .allListBoxBody ul {
  width: 100%;
}
.allListBox .allListBoxBody ul li {
  width: 100%;
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}
.allListBox .allListBoxBody ul li .listliImg {
  width: 1.84rem;
  display: inline-block;
  background: #333;
  position: relative;
}
.allListBox .allListBoxBody ul li .listliImg img {
  width: 1.5rem;
  height: 2rem;
  position: absolute;
  left: 0;
  top: -2.36rem;
}
.allListBox .allListBoxBody ul li .listliText {
  display: inline-block;
  width: 5.06rem;
}
.allListBox .allListBoxBody ul li .listliText .listliText1 {
  font-size: 0.3rem;
  color: #333;
  max-height: 0.88rem;
  line-height: 0.44rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.allListBox .allListBoxBody ul li .listliText .listliText2 {
  font-size: 0.24rem;
  color: #999;
  margin-top: 0.18rem;
  overflow: hidden;
}
.allListBox .allListBoxBody ul li .listliText .listliText3 {
  font-size: 0.2rem;
  color: #999;
  margin-top: 0.04rem;
  margin-bottom: 0.32rem;
}
.allListBox .allListBoxBody ul li .listliText .listliText3 span {
  font-weight: 700;
  color: #ffb02e;
}
.allListBox .allListBoxBody ul li .listliText .listliText4 {
  position: relative;
  margin-bottom: 10px;
}
.allListBox .allListBoxBody ul li .listliText .listliText4 span {
  color: #ff2661;
  font-size: .36rem;
  font-weight: 700;
}
.allListBox .allListBoxBody ul li .listliText .listliText5 {
  font-size: 0.24rem;
  color: #999;
  padding: 0.28rem 0;
  border-top: 0.02rem solid rgba(230, 230, 230, 0.5);
  border-bottom: 0.02rem solid rgba(230, 230, 230, 0.5);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>