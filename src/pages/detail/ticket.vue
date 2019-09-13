<template>
    <div>
        <div class="choose-head">
            <div class="nav">
                <div class="nav-back" @click="ckBack()">返回</div>
                <div class="nav-content">
                    <router-link to="/ticket/chooseSeat" tag="div" class="cs-seat sp-seat">选座购票
                    </router-link>
                    <router-link to="/ticket/buyticket" tag="div" class="sp-seat">直接购票</router-link>
                </div>
                <div class="nav-right">
                    <img src="https://static.piaoniu.com/m/static/img/hint.958a721.png">
                </div>
            </div>
        </div>





        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"ticket",
    methods:{
        ckBack() {
            this.$router.back();
        }
    }
    
}
</script>


<style>
    .choose-head {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 12;
        width: 100%;
        box-shadow: 0 0.02rem 0.06rem 0 rgba(0, 0, 0, 0.15);
        background-color: #fff;
    }

    .choose-head .nav {
        height: .88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .28rem;
        box-sizing: border-box;
    }

    .choose-head .nav .nav-back {
        font-size: .32rem;
    }

    .choose-head .nav .nav-content {
        justify-content: center;
        line-height: .88rem;
        display: flex;
    }

    .choose-head .nav .nav-content .sp-seat {
        font-size: .32rem;
        height: .88rem;
        color: #999;
        margin: 0 .32rem;
        border-bottom: .04rem solid #fff;
        box-sizing: border-box;
    }

    .choose-head .nav .nav-content .router-link-active {
        color: #333;
        border-color: #ff6d95;
    }

    .choose-head .nav .nav-right {
        display: flex;
        align-items: center;
    }

    .choose-head .nav .nav-right img {
        height: .4rem;
        width: .4rem;
    }
</style>