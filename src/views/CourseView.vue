<template>
  <div>
    <LoadingStatus />
    <transition appear>
      <div class="row">
        <div class="col-12">
          <h1><strong>{{ curso }}</strong></h1>
          <p>
            {{ api.descricao }}
          </p>
          <span class="badge bg-secondary" style="width:fit-content;">Duração: {{ api.horas }} horas</span>
          <br />
          <span class="badge bg-secondary" style="width:fit-content;">Quantidade: {{ api.totalAulas }} aulas</span>
        </div>
        <div class="col-md-6 col-12 mt-4">
          <h3>Conteúdo programático</h3>
          <ul class="list-lessons">
            <li v-for="aula in api.aulas" :key="aula.id">
              <router-link :to="{name: 'lesson', params:{ aula: aula.id }}"><h6>{{ aula.nome }}</h6></router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-12 mt-4">
          <router-view></router-view>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import fetchData from '@/services/fetchData.js';
  import LoadingStatus from '@/components/LoadingStatus.vue';

  export default {
    name: "CourseView",
    props: ["curso"],
    mixins: [fetchData],
    created() {
        this.fetchData(`/curso/${this.curso}`);
    },
    components: { LoadingStatus }
}
</script>

<style scoped>
  h1{
    text-transform: capitalize;
  }
  .list-lessons li a{
    box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    background:#fff;
    border-radius:8px;
    padding:20px 20px 14px 20px;
    margin-bottom:12px;
    border-left:4px solid transparent;
    display:flex;

    transition-duration:0.2s;
  }
  .list-lessons li:hover a{
    color:#333;
    border-left:4px solid #1DE9B6;
  }

  .list-lessons li a.router-link-active{
    background:#1DE9B6;
    color:#333;
  }
</style>