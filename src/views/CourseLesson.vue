<template>
  <div>
    <LoadingStatus />
    <transition appear>
      <div class="row">
        <div class="col-12">
          <h2>
            {{ api.nome }}
          </h2>
          <div class="video">
            <iframe
              width=100%;
              :src="`https://www.youtube.com/embed/${api.youtube}`"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/services/fetchData.js';

export default {
    name: 'CourseLesson',
    mixins: [fetchData],
    props: ["aula"],

    created(){
      this.fetchData(`/aula/${ this.aula }`);
    },
    beforeRouteUpdate(to, from, next){
      this.fetchData(`/aula/${ to.params.aula }`);
      next();
    }
}
</script>

<style scoped>
  .video{
    position:relative;
    width:100%;
    padding-bottom:56.25%;
  }
  .video iframe{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    border-radius:6px;
  }
</style>