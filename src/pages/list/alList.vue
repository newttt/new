<template>
  <div class="allListBox">
    <div class="allListBoxHeader">
      <span @click="goHomeHandler()">&lt;</span>
      <p>抢手票</p>
    </div>
    <div class="allListBoxHeader1">
      <listComponents :navIds="navId" />
    </div>
  </div>
</template>

<script>
import listComponents from "@lib/listComponents";
export default {
  name: "AllList",
  data(){
    return {
      navId:"",
    }
  },
  components: {
    listComponents
  },
  mounted() {
    this.navId = false;
  },
  methods:{
    goHomeHandler(){
      this.$router.push("/home");
    }
  }
};
</script>
<style scoped>
.allListBox {
  width: 100%;
  height: 100%;
}
.allListBox .allListBoxHeader1{
  padding-top: .88rem;
  height: 100%
}
.allListBox .allListBoxHeader {
  width: 100%;
  height: 0.88rem;
  position: fixed;
  border-bottom: 2px solid #ccc;
  background-color: #fff;
  z-index: 4;
}
.allListBox .allListBoxHeader span {
  position: absolute;
  left: 0.3rem;
  top: 0.14rem;
  font-size: 0.48rem;
  font-weight: 600;
}
.allListBox .allListBoxHeader p {
  text-align: center;
  line-height: 0.88rem;
  width: 100%;
  font-size: 0.34rem;
  font-weight: 500;
  font-family: PingFang SC, Lantinghei SC, Roboto, Helvetica Neue,
    Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei,
    sans;
}
</style>