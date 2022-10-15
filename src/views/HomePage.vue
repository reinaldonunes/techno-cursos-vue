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
            <ul class="reviews">
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome" class="align-items-center">
                <figure><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopenclipart.org%2Fimage%2F2400px%2Fsvg_to_png%2F215819%2FLinux-Avatar.png&f=1&nofb=1&ipt=51c053eb3eb84ef101cb763b51b0a8a24d05bd8592eac4d86aeae1032cbbc762&ipo=images" class="img-fluid"/></figure>
                <article>
                  <h5><strong>{{ avaliacao.nome }}</strong></h5>
                  <span>{{ avaliacao.descricao }}</span>
                </article>
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

<style scoped>
  .reviews li{
    box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    background:#fff;
    border-radius:8px;
    padding:20px 20px 14px 20px;
    margin-bottom:12px;
    border-left:4px solid transparent;
    display:flex;
  }
  .reviews figure{
    max-width:56px;
    max-height:56px;
    overflow:hidden;
    border-radius:50%;
    margin-right:12px;
  }
</style>