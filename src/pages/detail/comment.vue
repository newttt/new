<template>
  <div class="content-whole">
 
    <!--页面-->
    <div class="comment-page">
      <div class="comment-title">
        <span class="back-arrows" @click="ckBack()">
          <span>

          </span>
        </span>
        <div class="center-tit">
          <span>
            全部评论
          </span>
        </div>
        <a class="eval-comment">我要评论</a>
      </div>
      <!-- 内容 -->
      <BScroll ref="scroll">
      <div class="content-list">
        <div class="active-card">
          <div class="comment-tit-img" :style="'background-image:url('+ imgSrc + ')'">
          </div>
          <div class="active-right">
            <div class="active-right-name">
              {{name}}
            </div>
            <div class="active-right-timer">
              {{time}}
            </div>
          </div>
        </div>
        <ul>
          <li class="comment-item" v-for="(item,index) in comList" :key="index">
            <div class="feed-head">
              <div class="head-icon">
                <img :src="item.content.user.avatar">
              </div>
              <div class="head-info">
                <div class="use-info">
                  <div class="username">{{item.content.user.userName}}</div>
                </div>
                <div class="level">
                  <span>
                    LV{{item.content.user.level}}

                  </span>
                </div>
              </div>
            </div>
            <div class="feed-content">
              <div class="feed-content-top">
                <div class="rank-row">
                  <div class="text">我评论: </div>
                  <ul>
                    <li>
                      <img src="https://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png">
                    </li>
                    <li>
                      <img src="https://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png">
                    </li>
                    <li>
                      <img src="https://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png">
                    </li>
                    <li>
                      <img src="https://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png">
                    </li>
                    <li>
                      <img src="https://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png">
                    </li>
                  </ul>
                </div>
                <div class="content-row">
                  <div class="content">
                    <span>
                      {{item.content.content}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="feed-bot">
              <div class="feed-bot-content">
                <div class="time">
                  8月9日 11:20
                </div>
                <div class="feed-bot-rgt">
                  <div class="goodnum">
                    <img src="https://static.piaoniu.com/m/static/img/icon-like-white.15350f3.png">
                    <span>{{item.content.likes}}</span>
                  </div>
                  <div class="goodnum">
                    <img src="../../../public/img/com.png">
                    <span>回复</span>
                  </div>
                </div>

              </div>
            </div>
          </li>

        </ul>
      </div>
    </BScroll>
    </div>
     <!--弹出层-->
    <Popup :toggle="flag">
      <template>
        <p>无人进行评论</p>
      </template>
    </Popup>
  
  </div>
</template>

<script>

 import Popup from "@lib/vant/popup/index.vue";
  import {
    getListApi
  } from "@api/detail";
  export default {
    name: "comment",
    components:{
      Popup
    },
    data() {
      return {
        name: "",
        time: "",
        imgSrc: "",
        comList: [],
        pageIndex:1,
        _id:"",
        flag:false
      }
    },
    async created() {
      let goodsItem = JSON.parse(sessionStorage.getItem("goodsItem"))
      this._id = goodsItem.id;
      this.name = goodsItem.properName;
      this.flag = !Boolean(goodsItem.totalNum)
      this.time = goodsItem.timeRange;
      this.imgSrc = goodsItem.poster;
      let data = await getListApi(this._id);
      this.comList = data.data;
      // console.log(this.flag)
      // console.log(goodsItem);
      // console.log(data);
    },
    methods: {
      ckBack() {
        this.$router.back();
      },

    },
    mounted() {
      this.$refs.scroll.handlerPullDown(async ()=>{
        this.$router.go(0);
        // this.$refs.scroll.handlefinishPullDown();
      }) 
     this.$refs.scroll.handlerPullUp(async ()=>{
      this.pageIndex++;
        let data = await getListApi(this._id,this.pageIndex);
        this.comList = [...this.comList,...data.data];
    });
      
    },
    updated() {
      this.$refs.scroll.handlerFinishPullUp();
    },

  }
</script>

<style>
  .comment-page {
    padding-top: .88rem;
  }
  .content-whole, .comment-page{
    height: 100%;
  }
  .comment-title {
    z-index: 9;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: .88rem;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }

  .comment-title .center-tit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: .88rem;
    max-width: 4rem;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .comment-title .center-tit span {
    color: #525252;
    font-size: .34rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
  }

  .comment-title .back-arrows {
    width: .88rem;
    height: 100%;
    display: flex;
    align-items: center;
    top: initial;
    bottom: 0;
  }

  .comment-title .back-arrows span {
    background-image: url(https://static.piaoniu.com/nuxt-static/img/back-grey.b0b2b3e.png);
    width: .22rem;
    height: .38rem;
    margin-left: .28rem;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .comment-title .eval-comment {
    color: #5fb7fc;
    height: .88rem;
    font-size: .32rem;
    line-height: .88rem;
    position: absolute;
    right: .28rem;
    top: 0;
  }
  .content-list {
    height:auto;
  }
  .content-list .active-card {
    min-height: 1.2rem;
    background: #F3F5F5;
    padding-bottom: .1rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  .content-list .active-card .comment-tit-img {
    background-size: cover;
    background-position: center;
    width: .76rem;
    min-height: 1rem;
    margin: .1rem;
    /* background-image: url(../img/basketball.jpg); */
  }

  .content-list .active-card .active-right {
    margin-top: .1rem;
    margin-right: .1rem;
    min-height: 1rem;
  }

  .content-list .active-card .active-right .active-right-name {
    font-size: .28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .content-list .active-card .active-right .active-right-timer {
    color: #999;
    margin-top: .1rem;
  }

  .content-list ul .comment-item {
    margin-bottom: .2rem;
    padding: .3rem .3rem .2rem .3rem;
    background-color: #fff;
  }

  .content-list ul .comment-item .feed-head {
    margin-bottom: .24rem;
    position: relative;
    height: .72rem;
    display: flex;
    align-items: center;
  }

  .content-list ul .comment-item .feed-head .head-icon {
    width: .72rem;
    height: .72rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: .04rem solid #fff;
    box-sizing: border-box;
    border-radius: 50%;
    overflow: hidden;
  }

  .content-list ul .comment-item .feed-head .head-info {
    display: flex;
    height: .84rem;
    align-items: center;
  }

  .content-list ul .comment-item .feed-head .head-info .use-info {
    display: flex;
    align-items: center;
  }

  .content-list ul .comment-item .feed-head .head-info .use-info .username {
    font-size: .3rem;
    margin-right: .08rem;
    color: #262626;
    display: inline-block;
    max-width: 4rem;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content-list ul .comment-item .feed-head .head-info .level {
    background-color: #FDBF38;
    border: 0;
    height: .28rem;
    padding: 0 .06rem;
    border-radius: .2rem;
    color: #fff;
  }

  .content-list ul .comment-item .feed-head .head-info .level span {
    transform: scale(0.75);
    display: inline-block;
    transform-origin: center;
  }

  .content-list ul .comment-item .feed-content .rank-row {
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .content-list ul .comment-item .feed-content .rank-row .text {
    color: #999;
  }

  .content-list ul .comment-item .feed-content .rank-row ul {
    display: flex;
    align-items: center;
  }

  .content-list ul .comment-item .feed-content .rank-row ul li img {
    width: .26rem;
    height: .26rem;
    margin-bottom: .02rem;
  }

  .content-list ul .comment-item .feed-content .content-row {
    margin: .12rem 0 .16rem;
  }

  .content-list ul .comment-item .feed-content .content-row .content {
    word-break: break-all;
    line-height: 1.4;
    font-size: .3rem;
  }

  .content-list ul .comment-item .feed-bot {
    margin-top: .3rem;
    overflow: hidden;
    padding-top: .2rem;
    position: relative;
  }

  .content-list ul .comment-item .feed-bot::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: .02rem;
    border-top: .02rem solid #E6E6E6;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    z-index: 1;
    display: block;
    width: auto;
  }

  .content-list ul .comment-item .feed-bot .feed-bot-content {
    display: flex;
    justify-content: space-between;
  }

  .content-list ul .comment-item .feed-bot .feed-bot-content .time {
    float: left;
    color: #999;
    margin-top: .14rem;
  }

  .content-list ul .comment-item .feed-bot .feed-bot-content .feed-bot-rgt {
    display: flex;
    align-items: center;
  }

  .content-list ul .comment-item .feed-bot .feed-bot-content .feed-bot-rgt .goodnum {
    padding: 0 0 0 .22rem;
    border-radius: .28rem;
    width: 1.4rem;
    box-sizing: border-box;
    height: .56rem;
    display: flex;
    align-items: center;
  }

  .content-list ul .comment-item .feed-bot .feed-bot-content .feed-bot-rgt .goodnum img {
    width: .48rem;
    height: .56rem;
  }

  .content-list ul .comment-item .feed-bot .feed-bot-content .feed-bot-rgt .goodnum span {
    margin-left: .04rem;
    color: #999999;
    text-align: left;
    height: .52rem;
    line-height: .52rem;
  }

  /*# sourceMappingURL=comment.css.map */
</style>