import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FlashCards from '../views/FlashCards.vue'
import IntoFlashCards from '../components/IntoFlashCards.vue'
import Materials from '../views/Materials.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/flashcards',
    name: 'FlashCards',
    component: FlashCards
  },
  {
    path: '/intoflashcards',
    name: 'IntoFlashCards',
    component: IntoFlashCards
  },
  {
    path: '/materials',
    name: 'Materials',
    component: Materials
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
