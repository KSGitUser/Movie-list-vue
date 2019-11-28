import Vue, { VNode } from 'vue'
import VueRouter from 'vue-router'
import MainPageComponent from '../components/MainPageComponent.vue'
import FilmListComponent from '../components/FilmDetailsComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPageComponent
  },
  {
    path: '/filmslist',
    name: 'filmList',
    component: FilmListComponent
  },
  {
    path: '/movie/:id',
    name: 'movieDetails',
    component: (): Promise<any> => import('../components/FilmDetailsComponent.vue')
  },
  {
    path: '/*',
    name: 'page404',
    component: (): Promise<any> => import('../components/Page404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
