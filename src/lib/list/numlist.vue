<template>
    <div>
        <div class="choose-num">
        <div class="text">数量</div>
        <ul>
          <!-- class="num-select" -->
          <li 
          v-for="(item,index) in list" 
          :key="index"
          @click="ckHandler(item,index)"
          :class="classIndex == index ? 'num-select' : ''"
          >{{item}}</li>

        </ul>
      </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    name:"numList",
    data() {
      return {
        list:[1,2,3,4,5,6],
        classIndex:0
      }
    },
    computed: {
      ...mapState({
        num:state=>state.goodsList.numListIndex,

      })
    },
    methods:{
      ckHandler(item,index) {
        // console.log(index);
        this.classIndex = index;
        this.getNumIndex(item);
      },
      ...mapMutations({
          getNumIndex:"goodsList/getNumIndex"
        })
    }
}
</script>

<style>
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
    box-shadow: 0px .02rem .06rem #a7a7a7;
  }

.choose-num .text {
    font-size: .24rem;
    width: .48rem;
    margin-right: .28rem;
  }

.choose-num ul {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: scroll;
  }

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
    flex-shrink: 0;
  }

.choose-num ul .num-select {
    border-color: #ff2661;
    color: #ff2661;
  }

.choose-num ul .num-select::after {
    position: absolute;
    content: "";
    width: .3rem;
    height: .2rem;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-image: url(https://static.piaoniu.com/m/static/img/selected-tag.9a607f3.png);
  }

</style>