<template>
    <div class="app-form">
        <button type="button" @click="shuchu">点击输出</button>
    </div>
</template>
<script>
export default {
    name:'AppForm',
    data(){
        return{
            shuch:'OK'
        }
    },
    methods:{
        shuchu(){
            this.$emit('consol',this.shuch)
        }
    }
}
</script>
<style lang="scss" scoped>
button{
    height: 30px;
    width: 112px;
    border-radius: 30px;
    border: none;
    color: #FFFFFF;
    background: #04A8F2;
}
</style>
