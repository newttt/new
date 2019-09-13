<template>
  <div>
    <div class="listBox">
      <div class="listHead">
        <span class="fanhui" @click="goHomeHandler()">返回</span>
        <div class="listSearch">
          <div class="listSearch1"></div>
          <span class="listSearch2">搜索明星、演出、场馆</span>
        </div>
      </div>
      <div class="listCategory">
        <div class="listCategory1">
          <a v-for="(item,index) in nav" :key="index" @click="navClickHandler(index)">{{item}}</a>
        </div>
      </div>
      <div class="listFilter">
        <p class="listFilter1">
          综合排序
          <span></span>
        </p>
        <p>
          全部时间
          <span></span>
        </p>
        <p>在线选座</p>
        <ul class="listFiltershow">
          <li>综合排序</li>
          <li>最新优先</li>
          <li>低价优先</li>
          <li>好评优先</li>
        </ul>
      </div>
    </div>
    <div class="listBody">
      <listComponents :navIds="navId" />
    </div>
  </div>
</template>
<script>
// import { mapActions, mapState, mapMutations } from "vuex";
import listComponents from "@lib/listComponents";
import { navListApi } from "@api";
export default {
  name: "NavList",
  components: {
    listComponents
  },
  data() {
    return {
      nav: [
        "全部分类",
        "演唱会",
        "话剧歌剧",
        "音乐会",
        "儿童亲子",
        "休闲展览",
        "舞蹈芭蕾",
        "戏曲综艺",
        "体育赛事",
        "旅游玩乐"
      ],
      navId: "",
      id: ""
    };
  },
  computed: {},
  //根据首页点击不同的导航，进而改变首次加载的页面（根据id）
  mounted() {
    this.navClickHandler(this.id);
  },
  methods: {
    navClickHandler(index) {
      this.navId = index;
      //, console.log(this.$refs.ul);
    },
    goHomeHandler(){
      this.$router.push("/home");
    }
  },
  created() {
    this.id = this.$route.query.navId;
  }
};
</script>
<style>
.listBody {
  padding-top: 2.4rem;
  height: 100%;
}
.listBox {
  width: 100%;
  z-index: 3;
  position: fixed;
}
.listBox .listHead {
  height: 0.92rem;
  width: 100%;
  background: #fcfcfc;
}
.listBox .listHead .fanhui {
  height: 0.92rem;
  min-width: 0.56rem;
  font-size: 0.32rem;
  padding: 0 0.4rem 0 0.2rem;
  display: inline-block;
  line-height: 0.92rem;
}
.listBox .listHead .listSearch {
  height: 0.68rem;
  width: 5.94rem;
  margin: 0.1rem 0.16rem;
  float: right;
  background-color: #f2f2f2;
  border-radius: 0.06rem;
  position: relative;
  line-height: 0.68rem;
}
.listBox .listHead .listSearch .listSearch1 {
  background-image: url(https://static.piaoniu.com/nuxt-static/img/search.0622317.png);
  background-size: 0.3rem 0.34rem;
  width: 0.3rem;
  height: 0.34rem;
  position: absolute;
  left: 0.28rem;
  top: 28%;
}
.listBox .listHead .listSearch .listSearch2 {
  font-size: 0.24rem;
  color: #666;
  margin-left: 0.74rem;
}
.listBox .listCategory {
  height: 0.78rem;
  width: 100%;
  background: #fcfcfc;
  box-shadow: 0 0.01rem 0 0 #e6e6e6;
}
.listBox .listCategory .listCategory1 {
  height: 0.78rem;
  white-space: nowrap;
  overflow-x: auto;
  /* margin-left: -1.8rem; */
}
.listBox .listCategory .listCategory1 a {
  height: 0.78rem;
  margin: 0 0.3rem;
  line-height: 0.78rem;
  font-size: 0.28rem;
  color: #333;
  display: inline-block;
}
/* .active {
  border-bottom: 0.06rem solid #ff2661;
  color: #ff2661;
} */
.listBox .listCategory .listCategory1 a:hover {
  border-bottom: 0.06rem solid #ff2661;
  color: #ff2661;
}
.listBox .listFilter {
  height: 0.7rem;
  width: 100%;
  border-bottom: 0.02rem solid #ccc;
  position: relative;
  background-color: #fff;
}
.listBox .listFilter .listFiltershow {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0.8rem;
  background-color: #fff;
  padding-left: 0.3rem;
  z-index: 2;
  display: none;
}
.listBox .listFilter .listFiltershow li {
  width: 100%;
  font-size: 0.24rem;
  color: #333;
  border-bottom: 0.02rem solid #f5f5f5;
  padding: 0.28rem 0.6rem 0.28rem 0.18rem;
}
.listBox .listFilter p {
  float: left;
  width: 33.3%;
  height: 100%;
  line-height: 0.7rem;
  font-size: 0.24rem;
  text-align: center;
}
.listBox .listFilter p span {
  position: relative;
  top: 0.15rem;
  left: 0.06rem;
  width: 0;
  height: 0;
  border: 0.06rem solid transparent;
  border-top-color: #666;
}
</style>