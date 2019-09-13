<template>
  <div id="swiperSlide">
    <swiper :options="swiperOption" @click="bannerHandler()"> 
      <swiper-slide>
        <img src="https://img.piaoniu.com/misc/b1361232dc15f5f9d34cdfd5046213985666adeb.png?imageView2/2/w/750/h/350/format/jpg/q/80" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piaoniu.com/misc/d9d854ee688bc762eded2fc05133c72dd778b7a9.png?imageView2/2/w/750/h/350/format/jpg/q/80" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piaoniu.com/misc/0cbe527f53fdb44e38b821f7a2bd0bef74569b06.jpg?imageView2/2/w/750/h/350/format/jpg/q/80" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piaoniu.com/misc/68d057f2b11552b6f7f8808d983abdef2ad8d552.jpg?imageView2/2/w/750/h/350/format/jpg/q/80" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piaoniu.com/misc/45ec13b6f3be27f9ba3ea9f524e18c831225c73d.png?imageView2/2/w/750/h/350/format/jpg/q/80" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piaoniu.com/misc/7a7e8c55286fa8ddac63208d749a2c57dec2581a.png?imageView2/2/w/750/h/350/format/jpg/q/80" />
      </swiper-slide>
    </swiper>
    
  </div>

  <!--以下看需要添加-->
  <!-- <div class="swiper-scrollbar"></div>  -->
  <!-- <div class="swiper-button-next"></div>  -->
  <!-- <div class="swiper-button-prev"></div>  -->
  <!-- <div class="swiper-pagination"></div>  -->
</template>



<script>
 import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    
export default {
  name: "SwiperSlide",
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        speed: 1000,
        loop: true
      }
    };
  },
  methods:{
    bannerHandler(){
      this.$router.push("/alList");
    }
  },
  components: {
    swiperSlide,
    swiper
  }
};
</script>



<style>
</style>