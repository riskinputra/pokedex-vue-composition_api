const Module = () => import('./Module.vue')
const Home = () => import('./views/Home/index.vue')

const moduleRoute = {
  path: '/',
  component: Module,
  children: [
    {
      path: '/',
      component: Home
    }
  ]
}

export default router => {
  router.addRoutes([moduleRoute])
}
