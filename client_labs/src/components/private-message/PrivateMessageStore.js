import Vue from 'vue'
import {
  getHeader,
  getUserPrivateMessages,
  getUserPrivateMessagesSent,
  getPrivateMessageById,
  sendPrivateMessage
} from './../../config'

const state = {
  notifications: [],
  messageRec: [],
  messagesSent: [],
  message: {
    subject: '',
    message: '',
    sender: ''
  }
}

const mutations = {
  SET_MESSAGES_REC (state, messagesReceived) {
    state.messageRec = messagesReceived
  },
  SET_MESSAGES_SENT (state, messages) {
    state.messagesSent = messages
  },
  SET_MESSAGE_VIEW (state, message) {
    state.message = message
  },
  CLEAR_MESSAGE_VIEW (state) {
    state.message = {
      subject: '',
      message: '',
      sender: ''
    }
  },
  SEND_PRIVATE_MESSAGE (state, message) {
    state.messagesSent.push(message)
  }
}

const actions = {
  setUserMessagesRec: ({commit}) => {
    let postData = {}
    return Vue.http.post(getUserPrivateMessages, postData, {headers: getHeader()})
    .then(response => {
      console.log(response)
      // Vue.$logger('info', 'setUserMessageRec response', response)
      commit('SET_MESSAGES_REC', response.body.data)
    })
  },
  setUserMessagesSent: ({commit}) => {
    let postData = {}
    return Vue.http.post(getUserPrivateMessagesSent, postData, {headers: getHeader()})
    .then(response => {
      console.log(response)
      commit('SET_MESSAGES_SENT', response.body.data)
    })
  },
  getPrivateMessageById: ({commit}, id) => {
    let postData = { 'id': id }

    return Vue.http.post(getPrivateMessageById, postData, {headers: getHeader()})
    .then(response => {
      console.log(response)
      commit('SET_MESSAGE_VIEW', response.body.data)
    })
  },
  clearMessageView: ({commit}) => {
    commit('CLEAR_MESSAGE_VIEW')
  },
  sendPrivateMessage: ({commit}, postData) => {
    return Vue.http.post(sendPrivateMessage, postData, {headers: getHeader()})
    .then(response => {
      console.log(response)
      commit('SEND_PRIVATE_MESSAGE', response.body.data)
      return response.body.data
    })
  }
}

export default{
  state, mutations, actions
}
