<template>
  <div>
    <LoadingStatus />
    <h1>Contato</h1>
    <pre>{{ api }}</pre>
  </div>
</template>

<script>
import fetchData from '@/services/fetchData.js';
  
  export default {
    name: 'ContactUs',
    mixins: [fetchData],
    created(){
      this.fetchData("/contato");
    }
  }
</script>
<style>

</style>