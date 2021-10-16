const Module = () => import('./Module.vue')
const Main = () => import('./views/Main/index.vue')

const moduleRoute = [
  {
    path: '/',
    component: Module,
    children: [
      {
        path: '/pokemon',
        component: Main
      }
    ]
  }
]

export default moduleRoute
