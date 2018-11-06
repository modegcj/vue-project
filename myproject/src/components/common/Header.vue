<template>
    <div class="app-header">
        <a href="JavaScript:history.go(-1)" @click='$store.commit("footerShow")'>返回</a>
        <div class="logo"><img src="@/assets/images/dingzuo.png" alt="盯座">盯座</div>
        <span>...</span>
    </div>
</template>
<script>
import bus from '../../event.js'
export default {
    name: "AppHeader",
    mounted(){
        this.receive();
        const user = {name:'lili',age:'2'};
        const {name,age} = user;
        const add = (state,{payload}) => {
            return state.concat(name);
        }
        console.log(add([1,2],{name:'lihua',age:'2'}));
    },
    methods:{
        receive(){
            bus.$on('nowHref',(data)=>{
                if(/index/g.test(data)){
                    console.log("这是首页");
                }else if(/orderlist/g.test(data)){
                    console.log("这是订单列表页");
                }else if(/reversedetails/g.test(data)){
                    console.log("这是预定详情页");
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.app-header{
    width: 100%;
    height: 40px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    a{
        color: #666666;
        margin-left: 15px;
    }
    .logo{
        display: flex;
        align-items: center;
        img{
            width: 26px;
            height: 26px;
            border-radius: 13px;
            overflow: hidden;
            border: 1px solid #E0E0EB;
            margin-right: 5px;
        }
    }
    span{
        margin-right: 15px;
    }
}
.app-header::after{
    content: "";
    background:  #E0E0EB;
    width: 200%;
    height: 1px;
    position: absolute;
    bottom: 0;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
}
</style>
