import { createRouter, createWebHistory } from 'vue-router'
// import homeRouter from '@/modules/home/router'
import pokemonRouter from '@/modules/pokemon/router'

const routes = [
  ...pokemonRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
