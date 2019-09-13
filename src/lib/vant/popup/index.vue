<template>
  <div>
    <van-popup v-model="show">
    <slot></slot>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup} from 'vant';
Vue.use(Popup);

  export default {
      name:"Popup",
      props:{
        toggle:{
          type:Boolean,
          default: false
        }
      },
     created() {
      this.show = this.toggle
     },
     data() {
       return {
         show:""
       }
     },
  }
</script>


<style>
  .van-overflow-hidden {
    overflow: hidden !important
  }

  .van-popup {
    position: fixed;
    max-height: 100%;
    overflow-y: auto;
    background-color: #fff;
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
    -webkit-overflow-scrolling: touch
  }

  .van-popup--center {
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    width: 4rem;
    height: 3rem;
    padding: .2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .5rem;
    border: .1rem solid skyblue;
    
  }

  .van-popup--center.van-popup--round {
    border-radius: .24rem
  }

  .van-popup--top {
    top: 0;
    left: 0;
    width: 100%
  }

  .van-popup--top.van-popup--round {
    border-radius: 0 0 .24rem .24rem
  }

  .van-popup--right {
    top: 50%;
    right: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
  }

  .van-popup--right.van-popup--round {
    border-radius: .24rem 0 0 .24rem
  }

  .van-popup--bottom {
    bottom: 0;
    left: 0;
    width: 100%
  }

  .van-popup--bottom.van-popup--round {
    border-radius: .24rem .24rem 0 0
  }

  .van-popup--left {
    top: 50%;
    left: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
  }

  .van-popup--left.van-popup--round {
    border-radius: 0 .24rem .24rem 0
  }

  .van-popup-slide-top-enter,
  .van-popup-slide-top-leave-active {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0)
  }

  .van-popup-slide-right-enter,
  .van-popup-slide-right-leave-active {
    -webkit-transform: translate3d(100%, -50%, 0);
    transform: translate3d(100%, -50%, 0)
  }

  .van-popup-slide-bottom-enter,
  .van-popup-slide-bottom-leave-active {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
  }

  .van-popup-slide-left-enter,
  .van-popup-slide-left-leave-active {
    -webkit-transform: translate3d(-100%, -50%, 0);
    transform: translate3d(-100%, -50%, 0)
  }

  .van-popup__close-icon {
    position: absolute;
    top: .32rem;
    right: .32rem;
    z-index: 1;
    color: #969799;
    font-size: .5rem
  }

  .van-popup__close-icon:active {
    opacity: .6
  }
</style>