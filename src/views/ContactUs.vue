<template>
  <div>
    <LoadingStatus />
    <transition appear>
      <div class="row">
        <h1 class="mb-4">{{ api.titulo }}</h1>
        <div class="col-md-4 col-12 mb-5">
          <p>{{ api.descricao }}</p>
          <ul>
            <li>
              <strong>Email:</strong>
              <br />
              {{ api.contato.email }}
            </li>
            <li>
              <strong>Telefone:</strong>
              <br />
              {{ api.contato.telefone }}
            </li>
            <li>
              <strong>Endereço:</strong>
              <br />
              {{ api.contato.endereco }}
            </li>
          </ul>
        </div>
        <div class="col-md-8 col-12">
          <form action="/sucesso">
            <div class="form-group mb-2">
              <label for="exampleInputName">Nome</label>
              <input type="text" class="form-control" placeholder="Nome completo">
            </div>
            <div class="form-group mb-2">
              <label for="exampleInputEmail1">E-mail</label>
              <input type="text" class="form-control" placeholder="Seu melhor e-mail">
            </div>
            <div class="form-group mb-2">
              <label for="exampleInputPhone">Telefone</label>
              <input type="text" class="form-control" placeholder="Telefone (ddd)">
            </div>
            <div class="form-group mb-2">
              <label for="exampleInputMessage">Mensagem</label>
              <textarea class="form-control" placeholder="Sua mensagem"></textarea>
            </div>
            <button type="submit" class="btn btn-info">Enviar</button>
          </form>
        </div>
      </div>
    </transition> 
  </div>
</template>

<script>
import fetchData from '@/services/fetchData.js';
  
  export default {
    name: 'ContactUs',
    mixins: [fetchData],
    created(){
      this.fetchData("/contato");
    }
  }
</script>
<style>

</style>