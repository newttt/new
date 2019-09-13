<template>
     
        <div class="activity-floor">
            <div class="header1">
                <div class="remen">近期热门</div>
                <a class="more" @click="alListHandler()">全部</a>
            </div>
            <div class="activities">
                <div class="wrap">
                    <div class="activity-floor-item">
                        <a href="">
                            <div class="poster2">
                                <img src="https://img.piaoniu.com/poster/464fc5d2171cd7519777fd6b937d9acf58de105c.jpg?imageView2/2/w/220/h/164/format/jpg/q/60" alt="">
                                <div class="want-watch">
                                    <div class="num">
                                            18
                                        <small>万</small>
                                    </div>
                                    <div class="like"></div>
                                </div>
                            </div>
                            <div class="name1">陈奕迅香港演唱會</div>
                            <div class="price">
                                <span class="price-num">1229</span>
                                <span class="price-desc">起</span>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    

    
</template>





<script>

import {TabBarApi} from "@api";

export default {
    name:"xiao-TabBar",
    async created() {
        let data = await TabBarApi();
        // console.log(data);
        this.TabBarApis = data.data;
        // console.log( this.TabBarApis);
    },
    data(){
        return {
            gao:[]
        }
    },
    methods:{
        alListHandler(){
            this.$router.push("/alList");
        }
    }

}
</script>



<style>
    .hot-activities{
    width: 7.5rem;
    height: 5.14rem;
    background: sandybrown;
}
.activity-floor{
    background-color: #fff;
    padding-bottom: 0.16rem;
    padding-top: 0.64rem;
}
.header1{
    overflow: hidden;
    padding: 0 0.28rem 0.32rem;
}
.remen{
    font-weight: 700;
    color: #565656;
    font-size: 0.36rem;
    float: left;
}
.more{
    float: right;
    font-size: 0.28rem;
    color: #999;
    height: 0.34rem;
    line-height: 0.34rem;
    padding-right: 0.20rem;
    background-image: url(https://static.piaoniu.com/nuxt-static/img/arr-right.1655c6a.png);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 0.10rem 0.18rem;
}
.activities{
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
}
.wrap{
    padding-left: 0.28rem;
    display: flex;
    flex-wrap: nowrap;
}
.activity-floor-item{
    width: 2.04rem;
    margin-right: 0.2rem;
    flex-shrink: 0;
}
.poster2 img{
    background-image: url(https://img.piaoniu.com/poster/6dfcda603e8aff7e861579ad5b7202123a074412.jpg?imageView2/2/w/220/h/164/format/jpg/q/60);
    width: 2.04rem;
    height: 2.74rem;
}
.want-watch{
    position: relative;
    background-color: rgba(0,0,0,.55);
    width: 0.8rem;
    height: 0.64rem;
    top:-2.8rem;

}
.num{
    line-height: 1.1;
    font-weight: 500;
    font-size: 0.24rem;
    height: 0.28rem;
    color: #fff;
    margin-top: 0.06rem;
    text-align: center;
}
.num small{
    font-size: 0.24rem
}
.like{
    margin: 0.04rem auto;
    width: 0.2rem;
    height: 0.18rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAvlJREFUOBGdVF1Ik2EUPuf9vq2Zorm5aVFE1kVYEPSDriwqWF1oFKQXESGV5NSSiijIG2+8NIqYPxB0IRWkXmTRRX+KpGxBP0Z2UYFE0I9zzpU53fZ9p/PmvrVySnUudr5zzvM+55z3vGcIcQkUVhXohPUEsBOBrAA4TALa7Za8JuxtmJIwcp5K81P4NBIcJKAV7AohYI+iQKN1oPWVxKD88TvdpaBRF5OZpZ0siPjUZEIXqQsoFp56QEQbkuPym0kiIJQyu7f5NgYKTyzVITrEwEyOXDUr5sYsUj+O6ZPFGkEL41dyFXc4WZhrLOcEb7lCt81m6g8FaElUaPWk60cR4ZsAc4GqQ6SOCJgMOx2+1iNJ2e8HttXs0Ke0l9xe6U8/4oSqKK7sAc/7OG6YdeVIoTuLCyrTMVInuOASGVQAm+KghLL1NX8AISo4+xi3FUKBVUlkCdyvs1iicvZ8GbGm5b5IIJI+7N6WbjZtXAF3y82mEKuwDPq1SZBcgu+H7wYgGAs6UmATrrnIJGBMj9mkllyC769XGlp0ukLq/xEe6uH4uT4BqnJRGtzSuZCzZtW/EgY31y7nezg7c05cEo4BTx+Xeo0d6dO63km7zqT/LSltb7DEYloHV5PBDXfYfc09PGUAgaYanuIbDqzzj090UXnDrAf+ZxIqv6mMhj/d4EFs4ssbNpuxSmKYZ0Zku1xhP5M6eAB3c9Ly9hsrZ2AMTcfaTP7B59cZW8bYoAAqtvnaXst4glAacp81gEc8/1yOPLZkqPsyH3oCMmYIb1amBtFOJnPJ9wmouuxezzMj/huhdI46j68mLXaPW1nG2/NOAdprZB8vrs6PROgWj3AtJ/xiItid/aRt0CCTehahdPq3nlwM0+Funt5GJp0AFJWI+nf+A2ln3yI+NKSqakmqrUlJKElpT8PC0ZHPV/g5HZC2IXxn3QJMh2y+y18NX7Kek9AAjRa5q3WiC7x0vLJwPsfb2jTf1hjn5tWBLbVr/EW16+cFxYM/AF7oK0vkxaJRAAAAAElFTkSuQmCC);

}

.name1{
    white-space: nowrap;
    margin-top: -0.5rem;
    margin-bottom: 0.06rem;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.28rem;
}
.price{
    height: 0.34rem;
}
.price-num{
    color: #ff2661;
    font-size: 0.24rem;
}
.price-desc{
    font-size: 0.24rem;
    transform: scale(.8);
    transform-origin: left bottom;
    display: inline-block;
    margin-left: 0.04rem;
    color: #999;
}
</style>