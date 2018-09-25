<template>
    <div class="app-footer">
        <ul>
            <router-link class="select" to="/index" tag="li" @click.native="toJump">
                <img src="@/assets/images/dingzuogreen.png" alt="订座">订座
            </router-link>
            <router-link to="/orderlist" tag="li" @click.native="toJump">
                <img src="@/assets/images/dingdangray.png" alt="订单">订单
            </router-link>
            <router-link to="/reversedetails" tag="li" @click.native="toJump">
                <img src="@/assets/images/wodegray.png" alt="我的">我的
            </router-link>
        </ul>
    </div>
</template>
<script>
import bus from '../../event.js'
export default {
    name: "AppFooter",
    mounted(){

    },
    methods:{
        toJump(){
            this.$store.commit("footerShow");
            bus.$emit('nowHref',window.location.href)
        }
    }
}
</script>
<style lang="scss" scoped>
.app-footer{
    width: 100%;
    height: 50px;
    background:#FFFFFF;
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 22px;
                height: 22px;
                margin-bottom: 3px;
            }
        }
        .select{
            color: #00C093;
        }
    }
}
.app-footer::before{
    content: "";
    position: absolute;
    width: 200%;
    height: 1px;
    background: #E0E0EB;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin:  0 0;
    -webkit-transform: scale(0.5,0.5);
    -moz-transform: scale(0.5,0.5);
    -ms-transform: scale(0.5,0.5);
    -o-transform: scale(0.5,0.5);
    transform: scale(0.5,0.5);
}
</style>
