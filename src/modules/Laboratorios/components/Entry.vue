<template>
  <tbody>
            <tr class="entry-container mb-3 pointer p-2"
            @click="$router.push({name:'entry', params: {id:entry.id}})">
              <th scope="row">{{entry.id }}</th>
              <td>{{exntry.nombre}}</td>    
              <td>{{entry.institución}}</td>
              <td>{{entry.niveldeatencion}}</td>
              <td>{{entry.establecimiento}}</td>
              <td>{{entry.instituciónadministrativa}}</td>
              <td>{{entry.tipologia}}</td>
              <div>
                <button class="btn btn-danger mx-1"
                    @click="onDeleteEntry"> 
               Borrar
                    <i class="fa fa-trash-alt"></i>
              </button> 
              </div>
            </tr>
            
        </tbody>
</template>

<script>


import { mapActions, mapGetters } from "vuex";
import Swal from 'sweetalert2'

export default {
  props:{
    
    id:{
      type:String,
      requiered: true
    },    
    entry: {
      type: Object,
      required: true
    },
  },
    computed: {
      
        ...mapGetters('laboratoriosModule', ['getEntryById'])
    },
    methods: {
      ...mapActions('laboratoriosModule', ['deleteEntry']),
      async onDeleteEntry() {
        const { isConfirmed } = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una vez borrado, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })


            if ( isConfirmed ) {
                Swal.fire({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                
                await this.deleteEntry( this.entry.id )
                this.$router.push({ name: 'no-entry' })

                Swal.fire('Eliminado','','success')
            }
      }
      
  },

  }

</script>

<style>

</style> 