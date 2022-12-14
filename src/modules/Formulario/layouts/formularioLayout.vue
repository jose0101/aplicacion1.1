<template>
  <Navbar/>
     <div>
       <Form/>
     </div>
  <Footer/>
</template>

<script>

import { defineAsyncComponent } from "vue";

export default {
  components: {
    Form: defineAsyncComponent(() => import("../components/Form.vue")),
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
  },
  data() {
    return {
      nombre: ''
    }
  },
}
</script>