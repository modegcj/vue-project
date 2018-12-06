<template>
    <div class="app-practice">
        
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'AppPractice',
    data(){
        return{
            isShow: true,
            a: '123'
        }
    },
    components:{
        
    },
    mounted(){
        console.log(this.$isServer);
    }
}
</script>
<style lang="scss" scoped>
.app-practice{
    width: 100%;
    overflow-y: auto;
}
</style>
