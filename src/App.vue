<template>
  <div id="app">
      <TheHeader></TheHeader>
      <router-view class="container py-5 px-2"></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
  body{
    margin:0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #234;
  }

  ul{
    list-style:none;
    padding:0;
    margin:0;
  }

  a{
    text-decoration: none;
    font-weight:bold;
    color:#234;
  }

  a.router-link-exact-active{
    color:#1DE9B6;
  }

  .v-enter{
    opacity:0;
    transform: translate3d(-20px, 0, 0);
  }
  .v-enter-active{
    transition:all .3s;
  }

  .btn-info{
    border-color:#1DE9B6;
    background:#1DE9B6;
  }
  .btn-info:hover{
    background:#14b18a;
    border-color:#14b18a;
  }
</style>
