import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './components/user/userStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    UserStore
  },
  strict: debug
})
