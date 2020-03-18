import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from 'views/login/Login'
import home from 'views/home/Home'
import userList from 'views/user/UserList'
import oprationLog from 'views/system/OprationLog'
import loginLog from 'views/system/LoginLog'

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
    component: home,
    children: [
      {
        path: 'user/userList',
        component: userList
      }, {
        path: 'system/loginLog',
        component: loginLog
      }, {
        path: 'system/oprationLog',
        component: oprationLog
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
