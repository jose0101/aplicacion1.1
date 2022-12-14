import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import laboratoriosRouter from "../modules/Laboratorios/router/index.js";
import formularioRouter from "../modules/Formulario/router/index";
import vistaRouter from "../modules/Vista/router/index";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Laboratorios',
    ...laboratoriosRouter
  },
  {
    path: '/Formulario',
    ...formularioRouter
  },
  {
    path: '/Vista',
    ...vistaRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
