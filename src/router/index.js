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
    path: '/phone-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/phonePage.vue')
  },
  {
    path: '/service-network',
    component: () => import(/* webpackChunkName: "about" */ '../views/serviceNetwork.vue')
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
  },
  {
    path: '/notice',
    component: () => import(/* webpackChunkName: "about" */ '../views/notice.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
