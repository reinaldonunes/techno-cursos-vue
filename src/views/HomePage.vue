<template>
  <div>
    <LoadingStatus />
    <transition appear>
      <div class="row">
        <div class="col-md-6 col-12">
          <h1><strong>Sobre a {{ api.titulo }}</strong></h1>
          <p>{{ api.descricao }}</p>
          <router-link to="/cursos" tag="button" class="btn btn-info">Quer escolher meu curso agora!</router-link>
          <aside class="mt-4">
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </aside>
        </div>
        <div class="col-md-6 col-12">
          <figure><img src="@/assets/aprender.png" alt="Aprenda tudo sobre tecnologia" class="img-fluid" /></figure>
        </div>
      </div>
    </transition>
    </div>
</template>

<script>
  import fetchData from '@/services/fetchData.js';
  import LoadingStatus from '@/components/LoadingStatus.vue';

  export default {
    name: "HomePage",
    mixins: [fetchData],
    created() {
        this.fetchData("/home");
    },
    components: { LoadingStatus }
}
</script>

<style>

</style>