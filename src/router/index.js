import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/aftersale',
    component: () => import(/* webpackChunkName: "about" */ '../views/aftersale.vue')
  },
  {
    path: '/serviceNetwork',
    component: () => import(/* webpackChunkName: "about" */ '../views/serviceNetwork.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
