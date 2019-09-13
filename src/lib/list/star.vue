<template>
    <div>
        <div class="stars">
            <div class="starsone">
                <div class="stars-title">
                    <span>艺人明星</span>
                    <span>详情 &gt;</span>
                </div>
                <div class="stars-detail">
                    <div class="stars-item">
                        <!-- <img src="../img/item-stars.png"> -->
                        <div>
                            <h4>篮球世界杯</h4>
                            <div>
                                <div class="stars-img">
                                    <!-- <img src="../img/132">
                                        <img src="../img/132"> -->
                                    <div>
                                        <span>380</span>
                                        人关注
                                    </div>
                                </div>
                                <div class="stars-attaction">
                                    <!-- <img src="../img/add-att.png"> -->
                                    <div>关注</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"stars"
    }
</script>

<style>
    .stars {
        margin-top: .2rem;
        padding: .4rem .28rem;
        background-color: #fff;
    }

    .stars .starsone .stars-title {
        align-items: center;
        margin-bottom: .38rem;
        display: flex;
        justify-content: space-between;
    }

    .stars .starsone .stars-title span {
        font-size: .24rem;
        color: #888;
    }

    .stars .starsone .stars-title span:first-child {
        font-size: .3rem;
        font-weight: 700;
        color: #333;
    }

    .stars .starsone .stars-detail {
        display: flex;
        overflow: hidden;
    }

    .stars .starsone .stars-detail .stars-item {
        display: flex;
        width: 100%;
    }

    .stars .starsone .stars-detail .stars-item img {
        width: 1.34rem;
        height: 1.34rem;
        margin-right: .24rem;
    }

    .stars .starsone .stars-detail .stars-item>div {
        flex: 1;
        width: 100%;
    }

    .stars .starsone .stars-detail .stars-item>div h4 {
        font-size: .36rem;
        color: #333;
        font-weight: 300;
    }

    .stars .starsone .stars-detail .stars-item>div>div {
        display: flex;
        justify-content: space-between;
        margin-top: .24rem;
    }

    .stars .starsone .stars-detail .stars-item>div>div .stars-img {
        display: flex;
        align-items: center;
    }

    .stars .starsone .stars-detail .stars-item>div>div .stars-img img {
        width: .56rem;
        height: .56rem;
        border-radius: 50%;
        margin-right: .1rem;
    }

    .stars .starsone .stars-detail .stars-item>div>div .stars-img div {
        font-size: .22rem;
        color: #999;
        margin-left: .22rem;
    }

    .stars .starsone .stars-detail .stars-item>div>div .stars-img div span {
        font-size: .28rem;
        font-weight: 700;
        color: #ffb200;
    }

    .stars .starsone .stars-detail .stars-item>div>div .stars-attaction {
        align-items: center;
        color: #4b8feb;
        width: 1.34rem;
        height: .56rem;
        text-align: center;
        border: .02rem solid #4b8feb;
        border-radius: .28rem;
        background-color: #fff;
        box-sizing: border-box;
        justify-content: center;
        display: flex;
    }

    .stars .starsone .stars-detail .stars-item>div>div .stars-attaction img {
        height: .16rem;
        width: .16rem;
        margin-right: .12rem;
    }
</style>