<template>
  <div>
    <LoadingStatus />
    <h1>Lista de Cursos</h1>
    <pre>{{ api }}</pre>
  </div>
</template>

<script>
  import fetchData from '@/services/fetchData.js';
  
  export default {
    name: 'CoursesList',
    mixins: [fetchData],
    created(){
      this.fetchData("/cursos");
    }
  }
</script>

<style>

</style>