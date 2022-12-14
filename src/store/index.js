import { createStore} from 'vuex'

import laboratoriosModule, {  } from "../modules/Laboratorios/store/Laboratorios/index";

const store= createStore({
  modules: {
    laboratoriosModule
  }
})

export default store

