<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
// import { component } from 'vue/types/umd';

  export default {
    name: 'App',
    provide(){
      return{
        reload:this.reload
      }
    },
    data(){
      return{
        isRouterAlive:true
      }
    },
    methods:{
      reload(){
        this.isRouterAlive=false;
        this.$nextTick(function(){
          this.isRouterAlive=true;
        })
      }
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
