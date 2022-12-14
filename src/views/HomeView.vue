<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1> Hola Mundo</h1>

    <button @click="goToLaboratorios" class="btn btn-primary">Laboratorios</button>
    <button  @click="goToFormulario" class="btn btn-secondary">Formulario</button>
    <button  @click="goToVista" class="btn btn-success">Vista</button>


  </div>
</template>

<script>
export default {
  methods: {
    goToLaboratorios(){
      this.$router.push({name: 'Laboratorios'})
    },
    goToFormulario(){
      this.$router.push({name: 'Formulario'})
    },
    goToVista(){
      this.$router.push({name: 'Vista'})
    },



  }
}
</script>
