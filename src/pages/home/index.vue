<template>
  <div id="Home">
    <header class="header">
      <div class="topbar">
        <router-link to="/City" tag="div" class="city-picker">{{$store.state.city.nm}}</router-link>
        <div class="searchbox">
          <div class="ui-inner">
            <router-link to="search" class="searchInput">
              <span class="searchSou">搜索明星、演出、场馆</span>
              <i class="searchDa"></i>
            </router-link>
          </div>
        </div>
        <div class="person-wrap">
          <a class="person-icon" href="#"></a>
        </div>
      </div>
    </header>

    <div class="banner">
      <SwiperSlide />
    </div>

    <div class="home-entries">
      <div class="main-categories">
        <a v-for="(item,index) in nav1List" :key="index" class="entry" @click="navHandler(index)">
          <img :src="item.img" alt />
          <div class="title">{{item.icon}}</div>
        </a>
      </div>
      <div class="main-categories1">
        <a
          v-for="(item,index) in nav2List"
          :key="index"
          class="entry1"
          @click="navHandler(index+5)"
        >
          <img :src="item.img" alt />
          <div class="title">{{item.icon}}</div>
        </a>
      </div>
    </div>

    <div class="operating">
      <div class="operating-1" @click="lotteryFreeHandler()">
        <div class="title-wrap">
          <div class="main-title"></div>
          <div class="sub-title">0元看周杰伦</div>
        </div>
      </div>
      <div class="poster-wrap">
        <div class="poster"></div>
      </div>
      <div class="operating-1" @click="navHandler()">
        <div class="title-wrap">
          <div class="main-title1"></div>
          <div class="sub-title">限时限量抢</div>
        </div>
      </div>
      <div class="poster-wrap">
        <div class="poster1"></div>
      </div>
    </div>

    <div class="service-entry" @click="baozhangHandler()">
      <div class="fuwu">服务保障</div>
      <div class="services">
        <div class="service-item">
          <span>无票赔付</span>
          <span class="line"></span>
        </div>
        <div class="service-item">
          <span>出票保真</span>
          <span class="line"></span>
        </div>
        <div class="service-item">
          <span>配送保障</span>
          <span class="line1"></span>
        </div>
      </div>
    </div>

    <div class="middle-banner">
      <img
        src="https://img.piaoniu.com/misc/7474f011614735be1bb44c9d8164fb5edb1f7cd7.jpg"
        alt
        @click="albumHandler()"
      />
    </div>

    <div class="hot-activities">
      <xiao-TabBar />
    </div>

    <a class="piaoquan">
      <span @click="alListHandler()">更多精彩内容待你发现</span>
      <span class="arrow"></span>
    </a>

    <div class="guess-like">
      <div class="guess-cai">猜你喜欢</div>
      <Related />
    </div>
  </div>
</template>

<script>
// import { baozhangApi } from "@api";
import TabBar from "@components/tabBar";
import Related from "@components/Related";
import SwiperSlide from "@components/slideshow";
// import async from "q"
export default {
  name: "Home",
  data() {
    return {
      nav1List: [
        {
          img: "http://assets.piaoniu.com/home/icons/category-live-large.png",
          icon: "更多精彩"
        },
        {
          img: "http://assets.piaoniu.com/home/icons/category-drama-large.png",
          icon: "演唱会"
        },
        {
          img:
            "http://assets.piaoniu.com/home/icons/category-concert-large.png",
          icon: "话剧歌剧"
        },
        {
          img:
            "http://assets.piaoniu.com/home/icons/category-exibition-large.png",
          icon: "音乐会"
        },
        {
          img: "http://assets.piaoniu.com/home/icons/category-sports-large.png",
          icon: "儿童亲子"
        }
      ],
      nav2List: [
        {
          img:
            "http://assets.piaoniu.com/home/icons/category-child-small-v2.png",
          icon: "休闲展览"
        },
        {
          img:
            "http://assets.piaoniu.com/home/icons/category-xiqu-small-v2.png",
          icon: "舞蹈芭蕾"
        },
        {
          img: "http://assets.piaoniu.com/home/icons/category-dance-small.png",
          icon: "戏曲综艺"
        },
        {
          img: "http://assets.piaoniu.com/home/icons/category-travel-small.png",
          icon: "体育赛事"
        },
        {
          img:
            "http://assets.piaoniu.com/home/icons/category-play-small-v2.png",
          icon: "旅游玩乐"
        }
      ]
    };
  },

  components: {
    [TabBar.name]: TabBar,
    [Related.name]: Related,
    [SwiperSlide.name]: SwiperSlide
  },
  methods: {
    navHandler(index) {
      this.$router.push({ path: "/navList", query: { navId: index } });
    },
    lotteryFreeHandler() {
      this.$router.push("/lotteryFree");
    },
    albumHandler() {
      this.$router.push("/album");
    },
    alListHandler() {
      this.$router.push("/alList");
    }
  }

};
</script>


<style>
body {
  background-color: #fff;
  overflow-x: hidden;
}

.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  margin-bottom: 0.3rem;
}

.topbar {
  display: -webkit-box;
  -webkit-box-align: center;
  top: 0;
  width: 100%;
  -webkit-box-align: center;
  line-height: 0.88rem;
}
.city-picker {
  color: #262626;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAiUlEQVQYV32OsQ0CMRAE9ywCp9+AMx8uAfJPoBRo56EUSD6HEsw5cwOfOrLRoQcBEmxyu6vR6oiZBwB7/NeBACyY+Qyg/8GOIrJREM65zlp7AbD8gm+llHXOeXqAqhAC11qvALq5mowxqxijaH6BGrz3PRGd1LfWtiml8Tn0AWrJzDu9InJ8f+MOa9AlEd8hxgYAAAAASUVORK5CYII=);
  background-size: 0.1rem 0.06rem;
  font-weight: 500;
  font-size: 0.28rem;
  padding-left: 0.3rem;
  padding-right: 0.24rem;
  margin-right: 0.18rem;
  background-repeat: no-repeat;
  background-position: 100%;
}

.searchbox {
  width: 4.9rem;
  height: 0.8rem;
  border-radius: 0.06rem;
}
.ui-inner {
  height: 0.68rem;
  line-height: 0.68rem;
  margin: 0.04rem 0.16rem;
  border-radius: 0.08rem;
}
.ui-wrap {
  border-radius: 0.34rem;
  display: block;
  margin: 0 auto;
  z-index: 1;
}

.searchInput {
  height: 0.7rem;
  line-height: 0.48rem;
  padding: 0.04rem 0.1rem;
  border-radius: 0.3rem;
  background-color: #f5f5f5;
  color: #666;
  font-size: 0.3rem;
  -webkit-box-flex: 1;
  flex: 1;
  box-sizing: border-box;
  position: relative;
}
.searchSou {
  padding-left: 0.6rem;
  line-height: 0.64rem;
  color: #666;
}
.searchDa {
  width: 0.32rem;
  height: 0.3rem;
  background-size: 0.32rem 0.3rem;
  background-image: url(https://static.piaoniu.com/nuxt-static/img/search-dark.8a69379.png);
  display: block;
  position: absolute;
  left: 0.25rem;
  top: 50%;
  margin-top: -0.16rem;
}
.person-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 0.88rem;
}
.person-icon {
  width: 0.34rem;
  height: 0.38rem;
  background-size: 0.34rem 0.38rem;
  background-image: url(https://static.piaoniu.com/nuxt-static/img/personIcon-dark.6093e97.png);
  margin-right: 0;
  display: block;
}

.banner {
  width: 6.86rem;
  height: 1.92rem;
  background: salmon;
  margin: 0 auto;
}

.hot-activities {
  width: 7.5rem;
  height: 5.14rem;
  background: sandybrown;
}

.home-entries {
  width: 100%;
  height: 3.65rem;
  padding: 0.04rem 0.32rem 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.main-categories {
  display: flex;
  justify-content: space-between;
}

.entry {
  width: 1.37rem;
  display: inline-block;
  margin-top: 0.5rem;
}
.entry1 {
  width: 1.37rem;
  display: inline-block;
}
.main-categories img {
  display: block;
  width: 0.84rem;
  height: 0.84rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}
.title {
  text-align: center;
  font-size: 0.26rem;
  line-height: 0.32rem;
  color: #444;
}
.main-categories1 {
  display: flex;
  justify-content: space-between;
}

.main-categories1 img {
  display: block;
  width: 0.52rem;
  height: 0.52rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}

.operating {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 4.4vw 4.26666667vw 0;
}
.operating-1 {
  width: 44vw;
  height: 18.13333333vw;
  box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 1.6vw;
  overflow: hidden;
}
.title-wrap {
  width: 21.33333333vw;
  padding-top: 4.26666667vw;
  padding-left: 3.2vw;
}
.main-title {
  background-image: url(https://assets.piaoniu.com/home/op1-title-v2@3x.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 3.73333333vw;
  width: 100%;
  margin-bottom: 1.86666667vw;
}
.sub-title {
  font-weight: 400;
  color: #666;
  font-size: 3.2vw;
  max-width: 1.4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.poster-wrap {
  position: absolute;
  width: 22.93333333vw;
  top: 0;
  bottom: 0;
  right: 0;
}
.poster {
  background-image: url(https://img.piaoniu.com/misc/3638eb89605a99ba3e11d1dd4e5d0b37ec286cea.png);
  width: 21.33333333vw;
  height: 15.73333333vw;
  position: absolute;
  right: 48vw;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 2.4vw;
}
.poster1 {
  background-image: url(https://img.piaoniu.com/misc/1cca4af4f80feda66133b40c8ce0c196dbb1f9f2.png);
  width: 21.33333333vw;
  height: 15.73333333vw;
  position: absolute;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 2.4vw;
}
.main-title1 {
  background-image: url(https://assets.piaoniu.com/home/op2-title@3x.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 3.73333333vw;
  width: 100%;
  margin-bottom: 1.86666667vw;
}

.service-entry {
  margin: 0.4rem 0.32rem;
  margin-bottom: 0;
  padding: 0 0.16rem;
  height: 0.64rem;
  line-height: 0.64rem;
  background: hsla(0, 0%, 96%, 0.53);
  border-radius: 0.04rem;
  display: flex;
  justify-content: space-between;
}
.fuwu {
  font-size: 0.24rem;
  font-weight: 500;
  color: #666;
}
.services {
  display: flex;
}
.service-item {
  color: #999;
  font-size: 0.24rem;
  align-items: center;
}
.line {
  height: 0.24rem;
  width: 0.02rem;
  background-color: #e6e6e6;
  margin: 0 0.24rem;
  display: inline-block;
}
.lin1 {
  height: 0.24rem;
  width: 0.02rem;
  background-color: #e6e6e6;
  display: inline-block;
}

.middle-banner {
  margin: 0.4rem 0.32rem 0;
}
.middle-banner img {
  height: 1.88rem;
  width: 100%;
  height: auto;
}

.piaoquan {
  margin: 0.48rem 0.28rem;
  border-radius: 0.08rem;
  border: 1px solid #f5f5f5;
  color: #262626;
  justify-content: center;
  align-items: center;
  line-height: 0.8rem;
  display: flex;
  box-sizing: border-box;
  font-size: 0.28rem;
}
.arrow {
  height: 0.2rem;
  width: 0.14rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAABWklEQVQ4T63Tv0sCYRgH8O/zGvYDiYMaaqmlW1qE7vF0aMvSQWgIXBr7w5rdAgkaCskK9Hp0ipYLpJZaHG5wiLh74oYgSy8T3/3D87zP830IUz6a0mE2UERuVHVRVSuu674ldTNU0fO8eyJiIvIBFJn5ZRwegu12e8UYcwEgxs9EVHQc52kU/vXHVqu1nEqlzgHsAngFcJDL5R5+4pHDEZElVT0DsA+gb4wpOY7T+Y7HTtX3/fkgCGqqegggIKIKM99+4cR1NBqNuUwmUwdQBjAIw9AtFAqPMU6EIrKjqlcALACnzHxCRJoIu93udhiG1wBWAdR6vd5xtVoNE1vtdDpbURQ1AawDqBPRETN/JA5HRDZUNUabAC4ty6rYtv2euA7P89aMMU1VtQHcpdPpUjabHfwZABERVXWIKN7ZHjMHE0UuDnkURQuqWs7n8/2JQ/6f25zNPf6n4idVCH8VpPxxiAAAAABJRU5ErkJggg==)
    no-repeat;
  margin-left: 0.16rem;
  background-size: cover;
}

.guess-like {
  margin-top: 0.76rem;
}
.guess-cai {
  font-size: 0.36rem;
  color: #565656;
  padding: 0 0.28rem;
}
</style>