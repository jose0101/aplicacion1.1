<template>
    <div>
        <h1>Agregar Institución</h1>
        <form>
            <p>
                Nombre de la institución:       <input type="text" 
                                                 name="nombre" 
                                                 placeholder="Nombre" 
                                                 class="form-control">
            </p>
            <p>
                Identificador de la institución: <input type="text" 
                                                 name="Identificador" 
                                                 placeholder="Identificador" 
                                                 class="form-control">
            </p>
            <p>
                Descripción de la Institución:   <input type="text" 
                                                 name="Descripción" 
                                                 placeholder="Descripción" 
                                                 class="form-control">
            </p>
            <p>
                Logotipo de la Institución:      <input type="file"
                                                 @change="onSelectedImage"
                                                 ref="imageSelector"
                                                 v-show="false"
                                                 accept="image/png, image/jpeg"
                >
            </p>
            
               
    </form>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'

    export default {
        methods: {
            onSelectedImage( event ) {
            const file = event.target.files[0]
            if ( !file ) {
                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )

        },
        onSelectImage() {
            this.$refs.imageSelector.click()
        }
    },
        }
    
</script>
<!--
    Nombre de la institución
    Identificador
    Descripción 
    Logo
    Agregar Institución
-->
