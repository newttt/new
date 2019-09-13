<template>
  <div class="city-list" ref="container">
    <div class="city-list__wrap" ref="scroll">
      <div class="city-index">
        <div class="city-index__wrap">
          <div class="city-index__item">历史</div>
          <div class="city-index__item">热门</div>
          <div class="city-index__divide"></div>
          <!-- 下标 -->
          <v-touch 
          tag="div"
          class="city-index__item" 
          v-for="(item,index) in cityList" 
          :key="index"
           @tap="handleTo(index)"
           >{{item.index}}</v-touch>
        </div>
      </div>

      <div class="current-city">
        <router-link to="/home">
          <span class="current-city__name">{{nm}}</span>
        </router-link>
        <span class="current-city__desc">当前城市</span>
      </div>

      <!-- <div class="city-chunks">
        <div class="city-chunks__title">历史访问城市</div>
        <div class="city-chunks__wrap">
          <div class="city-chunks__chunk">北京</div>
          <div class="city-chunks__chunk">郑州</div>
        </div>
      </div>-->

      <div class="city-chunks">
        <div class="city-chunks__title">热门城市</div>
        <div class="city-chunks__wrap">
          <div class="city-chunks__chunk" v-for="(item,index) in hotCity" :key="index">{{item.nm}}</div>
        </div>
      </div>

      <!-- 城市列表 -->
        <div  ref="list">
          <div class="city-letter-list" v-for="(item,index) in cityList" :key="index">
            <div class="city-letter-list__letter">{{item.index}}</div>
            <div class="city-letter-list__wrap">
              <v-touch 
              tag="div" 
              @tap="handleHome(child)"
                class="city-letter-list__item"
                v-for="(child,index) in item.list"
                :key="index" 
                
              >{{child.nm}}</v-touch>
            </div>
          </div>
        </div>


    </div>
  </div>
</template>



<script>
import { mapActions, mapState,mapMutations } from "vuex";
export default {
  name: "City",
  data(){
      return {
        cityId:"",

      }
  },
  created() {
    // 优化只要有一个不存在就重新获取
    if(!sessionStorage.getItem("hotCity") || !sessionStorage.getItem("cityList")){
        this.handleGetCity();
    };

  },

  computed: {
    ...mapState({
      cityList: state => state.city.cityList,
      hotCity: state => state.city.hotCity,
      nm: state=> state.city.nm
    })
  },

  methods: {
    ...mapActions({
      handleGetCity: "city/handleGetCity"
    }),
    ...mapMutations({
      handleHomecityNameInfo:"city/handleHomecityNameInfo"
    }),
    handleTo(index){
      var IndexList =   this.$refs.list.querySelectorAll(".city-letter-list__letter");
      // console.log(IndexList[index].offsetTop);

      this.$refs.container.scrollTop = IndexList[index].offsetTop;

      // 动画 BUG
      // this.$refs.scroll.handleScrollTop(IndexList[index].offsetTop);
    },
    handleHome(info){
      this.$router.push("/home");
      this.handleHomecityNameInfo(info);
    }
  },

};
</script>



<style>
.city-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #f2f2f2;
  overflow: auto;
}
.city-index {
  position: fixed;
  top: 0;
  right: 0;
  width: 0.6rem;
  height: 100%;
  background-color: hsla(0, 0%, 98%, 0.8);
  z-index: 99;
}
.city-index__wrap {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.city-index__item {
  font-size: 0.22rem;
  color: #1c70fe;
  width: 0.6rem;
  text-align: center;
  line-height: 0.28rem;
}
.city-index__divide {
  height: 0.2rem;
}
.current-city {
  position: relative;
  z-index: 100;
  line-height: 0.42rem;
  padding: 0.24rem 0.26rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
}
.current-city__name {
  font-size: 0.3rem;
  margin-right: 0.22rem;
  font-family: "黑体";
}
.current-city__desc {
  font-size: 0.24rem;
  color: #999;
}

.city-chunks {
  margin: 0.4rem 0.28rem;
}
.city-chunks__title {
  color: #999;
  margin-bottom: 0.4rem;
  font-size: 0.28rem;
}
.city-chunks__wrap {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.city-chunks__chunk {
  width: 2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 0.06rem;
  margin-right: 0.2rem;
  margin-bottom: 0.18rem;
  box-sizing: border-box;
  font-family: "黑体";
  font-size: 0.28rem;
}

.city-letter-list__letter {
  color: #999;
  margin: 0.12rem 0.28rem;
  font-size: 0.28rem;
}
.city-letter-list__wrap {
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  padding-left: 0.34rem;
}
.city-letter-list__item {
  height: 0.86rem;
  line-height: 0.86rem;
  border-bottom: 1px solid #e6e6e6;
  font-size: 0.28rem;
}
</style>