import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPageComponent from '@/components/MainPageComponent.vue'
import App from '@/App.vue'
import FilmListComponent from '@/components/FilmListComponent.vue'

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
    component: () => import('@/components/FilmDetailsComponent.vue')
  },
  {
    path: '*',
    name: 'page404',
    component: () => import('@/components/Page404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
