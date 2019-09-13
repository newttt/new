<template>
    <div class="loading" >
        <van-Loading  color="#1989fa" size="1.5rem"></van-Loading>
    </div>
</template>


<script>
    import Vue from 'vue';
    import { Loading } from 'vant';
    import 'vant/lib/loading/style';

    Vue.use(Loading);
export default {
    name: "Loading",

}

</script>

<style>
    .loading {
        position: absolute;
        top: 0;
        background:rgba(33,33,33,.5);
        height:100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 110;
    }
</style>

