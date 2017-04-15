// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import MultiSelect from 'vue-multiselect'
import App from './App'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ChatPage from './pages/ChatPage'

import PrivateMessageInbox from './components/private-message/PrivateMessageInbox'
import PrivateMessageSent from './components/private-message/PrivateMessageSent'
import PrivateMessageView from './components/private-message/PrivateMessageView'
import PrivateMessageCompose from './components/private-message/PrivateMessageCompose'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('multiselect', MultiSelect)
Vue.component('app', App)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

const routes = [
  {
    path: '/', component: LoginPage, name: 'home'
  },
  { path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { requiresAuth: true } },
  { path: '/chat', component: ChatPage, name: 'chat', meta: { requiresAuth: true } },
  { path: '/inbox-pms', component: PrivateMessageInbox, name: 'inbox-pms', meta: { requiresAuth: true } },
  { path: '/new-pm', component: PrivateMessageCompose, name: 'new-pm', meta: { requiresAuth: true } },
  { path: '/pms/:id', component: PrivateMessageView, name: 'pm-view', meta: { requiresAuth: true } },
  { path: '/sent-pms', component: PrivateMessageSent, name: 'my-sent-pms', meta: { requiresAuth: true } }
]

const router = new VueRouter({
  mode: 'history', // vital so as to have cleaner urls
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
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
