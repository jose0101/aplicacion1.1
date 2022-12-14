

export  default {
    name: 'Laboratorios',
    component: () => import(/* webpackChunkName: "Laboratorios" */ '../layouts/laboratoriosLayout.vue'),
    children: [
      {
          path: '',   //Este path vacío es para buscar rutas
          name: 'no-entry',
          component: () => import(/* webpackChunkName: "Laboratorios-no-entry" */ '../views/noEntry.vue')
      },
         {
           path: ':id',   
           name: 'entry',
           component: () => import(/* webpackChunkName: "Laboratorios-entry" */ '../layouts/laboratoriosLayout.vue'),
           props: (route) => {
               return {
                   id: route.params.id
               }
           }
        },
        {
            path: ':NewEntry',
            name: 'NewEntry',
            component: () => import (/* webpackChunkName: "Laboratorios-no-entry" */ '../../Formulario/layouts/formularioLayout.vue')
        }
    ]
}