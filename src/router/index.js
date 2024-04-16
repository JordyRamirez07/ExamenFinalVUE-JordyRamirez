import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteNew from '../views/EstudianteNew.vue'
import EstudianteEdit from '../views/EstudianteEdit.vue'
import EstudianteView from '../views/EstudianteView.vue'
import EstudianteList from '../views/EstudianteList.vue'

import CursoEdit from '../views/CursoEdit.vue'
import CursoList from '../views/CursoList.vue'
import CursoNew from '../views/CursoNew.vue'
import CursoView from '../views/CursoView.vue'

import UsuarioEdit from '../views/UsuarioEdit'
import UsuarioList from '../views/UsuarioList'
import UsuarioNew from '../views/UsuarioNew'
import UsuarioView from '../views/UsuarioView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 {
    path: '/listarE',
    name: 'listarE',
    component: 
    EstudianteList
  },
  {
    path: '/createE',
    name: 'createE',
    component: EstudianteNew
  },
  {
    path: '/editE/:id',
    name: 'editE',
    component: EstudianteEdit
  },
  {
    path: '/viewE/:id',
    name: 'viewE',
    component: EstudianteView
  },

  //Cursos
  {
    path: '/listarC',
    name: 'listarC',
    component: CursoList
  },
  {
    path: '/createC',
    name: 'createC',
    component: CursoNew
  },
  {
    path: '/editC/:id',
    name: 'editC',
    component: CursoEdit
  },
  {
    path: '/viewC/:id',
    name: 'viewC',
    component: CursoView
  },

  //Usuario
  {
    path: '/listarU',
    name: 'listarU',
    component: UsuarioList
  },
  {
    path: '/createU',
    name: 'createU',
    component: UsuarioNew
  },
  {
    path: '/editU/:id',
    name: 'editU',
    component: UsuarioEdit
  },
  {
    path: '/viewU/:id',
    name: 'viewU',
    component: UsuarioView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
