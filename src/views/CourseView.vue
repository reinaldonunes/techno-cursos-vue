<template>
  <div>
    <LoadingStatus />
    <transition appear>
      <div class="row">
        {{ curso }}
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
        this.fetchData("/home");
    },
    components: { LoadingStatus }
}
</script>

<style>

</style>