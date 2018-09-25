<template>
  <div id="app">
    <app-header></app-header>
    <div class="view">
      <router-view></router-view>
    </div>
    <app-footer v-if="$store.state.footerShow"></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/common/Header'
import AppFooter from './components/common/Footer'
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components:{
    AppHeader,AppFooter
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
#app{
  display: flex;
  flex-direction: column;
  .view{
    display: flex;
    flex: 1;
    width: 100%;
  }
}
</style>
