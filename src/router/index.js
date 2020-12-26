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
    path: '/query-price',
    component: () => import(/* webpackChunkName: "about" */ '../views/query-price.vue')
  },
  {
    path: '/serve-home',
    component: () => import(/* webpackChunkName: "about" */ '../views/SeverHome.vue')
  },
  {
    path: '/price-detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/price-detail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
