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
<<<<<<< HEAD
        
=======
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
        props:{
            title:{
                type:String,
                default:"演出详情"
<<<<<<< HEAD
            }
        }
=======
            },
        },
    methods:{
                  // 滚动到指定的位置
            handleScrollTop(t){
            this.scroll.scrollTo(0,-t,300)
        }
      }
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
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