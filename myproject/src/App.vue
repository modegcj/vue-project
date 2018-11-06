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
    if(/Android/.test(navigator.appVersion)){
      document.ontouchstart = function(){
        document.ontouchmove = function(){
          return false;
        }
      };
      window.addEventListener("resize", function() {
          if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
              window.setTimeout(function() {
                  document.activeElement.scrollIntoViewIfNeeded();
              },0);
          }
      })
    }
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
