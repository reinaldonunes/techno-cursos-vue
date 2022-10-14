<template>
  <div>
    <LoadingStatus />
    <transition appear>
      <div class="row">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li v-for="curso in api.cursos" :key="curso.id" class="mb-4">
            <router-link
              :to="{name: 'course', params: { curso: curso.id }}"
              >
              <h4>
                {{ curso.nome }}
                <br />
                <span class="badge badge-pill bg-info">{{ curso.totalAulas }} aulas | {{ curso.horas }} horas</span>
              </h4>
              <span class="lead">{{ curso.descricao }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
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

<style scoped>
  .badge{
    font-size:0.8rem;
  }

  ul{
    display:grid;
    grid-template-columns: 2fr minmax(200px, 50%);
    gap:52px;
  }
  ul li{
    border-left:4px solid transparent;
    padding:12px 24px 12px 0px;
    border-radius:6px;

    transition-duration:0.2s;
  }
  ul li:hover{
    border-left:4px solid #1DE9B6;
    background:#f5f5f5;
    padding-left:18px;
  }
  .lead{
    font-size:1rem;
  }
  
  @media screen and (max-width:750px){
    ul{
    display:flex;
    flex-direction: column;
    gap:0px;
  }
  }
</style>