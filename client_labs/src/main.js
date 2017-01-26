// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('app', App)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

const routes = [
  {
    path: '/',
    component: LoginPage,
    name: 'home'
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    name: 'dashboard',
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const AuthUser = JSON.parse(window.localStorage.getItem('AuthUser'))
    if (AuthUser && AuthUser.access_token) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})
new Vue({
  router, store
}).$mount('#app')
