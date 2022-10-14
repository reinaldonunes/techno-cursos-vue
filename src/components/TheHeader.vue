<template>
  <header class="container-fluid py-4">
    <nav class="container">
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li><router-link to="/cursos">Cursos</router-link></li>
        <li><router-link to="/contato">Fale Conosco</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
  header{
    background:#234;
  }
  header > a{
    color:#fff !important;
    font-size:1.1rem;
  }
  nav{
    margin:0 auto;
    display:flex;
    align-content: space-between;
  }
  .logo{ flex:1; }
  .logo a{
    color:#fff;
  }
  ul li{
    display:inline-block; 
  }
  li a{
    padding:0 10px;
    margin-left:10px;
    font-size:0.9rem;
    color:#fff;
  }
  li:hover a{
    color:#1DE9B6;
  }
  li a.router-link-exact-active{
    color:#1DE9B6;
  }
</style>