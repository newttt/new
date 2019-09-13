<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:"BScroll",
    mounted() {
        //  实例化要在挂载后进行, 此时可以获取真实的DOM元素
        this.scroll = new BScroll(this.$refs.wrapper,{
            // 开启下拉刷新
            pullDownRefresh:true,
            /* pullDownRefresh:{
                stop: 0
            }, */
            // 开启上拉刷新
            pullUpLoad:true,
           
            //  better-scroll 会阻止原生的事件, 因此用tap为true 可以
            tap:true,
            // 会阻止点击事件, 要设置为true
            click:true,
            // scrollX 设置为true, 可以横向滚动
            scrollX:true,
           
        });
    },
    methods:{

        handlerPullDown(cb) {
            //  下拉刷新,加载, 触发pullingDown事件
            this.scroll.on("pullingDown",()=>{
                cb();
            });
        },
        handlerPullUp(cb) {
            this.scroll.on("pullingUp",()=>{
                cb();
            })
        },
        handlerFinishPullDown() {
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        handlerFinishPullUp() {
            //  通知 BS 加载完成
            this.scroll.finishPullUp();
            //  重新计算高度
            this.scroll.refresh();
        }
    }
}
</script>

<style>
    .wrapper {
        height:100%
    }
</style>