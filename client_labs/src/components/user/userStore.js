const state = {
  authUser: null
}

const mutations = {
  SET_AUTH_USER (state, userObj) {
    state.authUser = userObj
  },
  CLEAR_Auth_USER (state) {
    state.authUser = null
  }
}

const actions = {
  setUserObject ({commit}, userObj) { // notice the different way of doing it in the following action
    commit('SET_AUTH_USER', userObj)
  },
  clearUserObject: ({commit}) => {
    commit('CLEAR_Auth_USER')
  }
}

export default {
  state, mutations, actions
}
