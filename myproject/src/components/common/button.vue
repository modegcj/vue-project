<template>
    <div class="app-button">
        <button v-once ref="btn" type="button" @click="btnClick">自定义按钮</button>
        <transition name="fade">
            <div v-show="ok">toggle content</div>
        </transition>
    </div>
</template>
<script>
export default {
    name:'AppButton',
    data(){
        return{
            num: 3,
            ok: true
        }
    },
    mounted(){
        
    },
    methods:{
        btnClick(){
            this.ok = !this.ok
            console.log(this.ok);
        }
    }
}
</script>
<style lang="scss" scoped>
.app-button{
    margin-top: 20px;
    button{
        height: 30px;
        width: 112px;
        border-radius: 30px;
        border: none;
        color: #FFFFFF;
        background: #FCB05A;
    }
    .fade-enter-active{
        transition: all .3s ease;
    }
    .fade-leave-active{
        transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0)
    }
    .fade-enter,.fade-leave-to{
        transform: translateY(10px);
        opacity: 0;
    }
}
</style>
