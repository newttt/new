<template>
    <div>
        <div class="detail-title">
            <span class="back-arrows"></span>
            <span>{{title}}</span>
            <span></span>
        </div>
    </div>
</template>
<script>
    export default {
        name:"detailHead",
        
        props:{
            title:{
                type:String,
                default:"演出详情"
            }
        }
    }
</script>

<style lang="scss">
.detail-title {
  background: #fff;
  height: .88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .34rem;
  color: #525252;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500; }

.back-arrows {
  margin-left: .28rem;
  width: .22rem;
  height: .38rem;
  background-size: 100%;
  /* background-image: url(../img/left-arrows.png);*/ 
  } 


</style>