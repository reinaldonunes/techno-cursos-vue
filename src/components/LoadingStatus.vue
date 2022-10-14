<template>
  <div class="progress-bar">
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'LoadingStatus'
}
</script>

<style scoped>
.progress-bar{
  position:absolute;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:10px;
}
  .progress-bar span{
    width:100%;
    position:absolute;
    top:0;
    left:0;
    height:4px;
    display:flex;
    background:#1DE9B6;
    width:0%;
    animation: growing-bar 0.6s;
    animation-timing-function: cubic-bezier(1, 0, 1, 1);
  }

  @keyframes growing-bar {
  0% {
    width:0%;
  }
  50%{
    width:50%;
  }
  100% {
    width:100%;
  }
}

</style>