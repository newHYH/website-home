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
    path: '/serve-home',
    component: () => import(/* webpackChunkName: "about" */ '../views/SeverHome.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
