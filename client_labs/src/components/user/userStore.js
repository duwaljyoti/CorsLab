import Vue from 'vue'
import {
  userListUrl,
  getHeader
   } from './../../config'

const state = {
  authUser: null,
  users: []
}

const mutations = {
  SET_AUTH_USER (state, userObj) {
    state.authUser = userObj
  },
  CLEAR_Auth_USER (state) {
    state.authUser = null
  },
  SET_USER_LIST (state, users) {
    state.users = users
  }
}

const actions = {
  setUserObject ({commit}, userObj) { // notice the different way of doing it in the following action
    commit('SET_AUTH_USER', userObj)
  },
  clearUserObject: ({commit}) => {
    commit('CLEAR_Auth_USER')
  },
  getUserList: ({commit}) => {
    return Vue.http.get(userListUrl, {headers: getHeader()})
      .then(response => {
        commit('SET_USER_LIST', response.data.data)
        return response.data.data
      })
  }
}

export default {
  state, mutations, actions
}
