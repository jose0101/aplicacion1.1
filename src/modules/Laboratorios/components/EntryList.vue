<template>
    <div class="container izquierda">

    <button class="btn btn-primary" @:click="goToFormulario" >Nueva Institución</button>
    <button class="derecha btn btn-tertiary" > 
    <input 
      type="text"
      class="form-control"
      placeholder="Buscar"
      v-model="term"
    /></button> 

    </div>
    <div class="container centro">
     <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Institución</th>
          <th scope="col">Nivel de Atención</th>
          <th scope="col">Establecimiento</th>
          <th scope="col">Institución administrativa</th>
          <th scope="col">Tipología</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
        
      <Entry
            v-for="entry in 100"
            :key="entry.id"
            :entry="entry"
            />
     
    </table>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("../components/Entry.vue")),
  },
    computed: {
        ...mapGetters('laboratoriosModule',['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm(this.term)
        }
  },
  methods: {
    goToFormulario(){
      this.$router.push({name: 'Formulario'})
    },
  },
  data(){
    return{
        term:'',
        type: String
    }
  }
    
}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50 ;
    transition: .2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
    }
}

.entry-scrollArea{
    height: calc(100% );
    overflow: scroll;
}

</style>