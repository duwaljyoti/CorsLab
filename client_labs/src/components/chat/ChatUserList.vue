<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        chatStore: state => state.chatStore,
        userStore: state => state.userStore// by mapstating userStore can now be available below with the keyword
      })
    },
    methods: {
      userActiveStyle (user) {
        if (this.chatStore.currentChatUser === null) {
          return false
        }
        if (this.chatStore.currentChatUser.id === user.id) {
          return true
        }

        return false
      },
      changeChatUser (user) {
        console.log(user)
        this.$store.dispatch('setCurrentChatUser', user)
      }
    }
  }
</script>

<template>
  <div class="wrapper" id="chat-user-list-wrapper">
    <ul>
    	<li
       class = 'list-group-item'
       :class = '[{ active: userActiveStyle(user) }]'
       v-if = 'user.name !== userStore.authUser.name'
       @click = 'changeChatUser(user)'
       v-for = 'user in chatStore.userList'>
         {{ user.name }}
       </li>
    </ul>
  </div>
</template>