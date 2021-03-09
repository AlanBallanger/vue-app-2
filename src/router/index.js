import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AudioVisual from 'vue-audio-visual'

Vue.use(VueRouter)
Vue.use(AudioVisual)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/appli',
    name: 'Appli',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Appli.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
