<template>
  <Navbar/>

    <div>
      <div>
        <EntryList/>
      </div>
    </div>

    <Footer/>
  
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from "vuex";

export default {
  components: {
    EntryList: defineAsyncComponent(() => import ("../components/EntryList.vue")),
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
  },
  methods: {
        ...mapActions('laboratoriosModule', ['loadEntries'])
    },
  
    created() {
        this.loadEntries()
    }
}
</script>

<style>

</style>