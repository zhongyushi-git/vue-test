import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../views/login/Login'
import home from '../views/home/Home'

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
