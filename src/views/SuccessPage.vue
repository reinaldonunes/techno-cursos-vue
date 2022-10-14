<template>
  <div>
      <LoadingStatus />
      <transition appear>
        <div class="row">
          <i class="bi bi-check-lg"></i>
          <h1>Obrigado por nos contactar.</h1>
          <p>Entraremos em contato em breve.</p>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: "SuccessPage"
}
</script>

<style scoped>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
  .bi{
    font-size:8rem;
    margin:0 auto;
    margin-bottom:15px;
    display:flex;
    width:fit-content;
    color:#1DE9B6;
  }
  *{
    text-align:center;
  }
</style>