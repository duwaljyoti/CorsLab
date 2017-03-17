<script>
  import {mapState} from 'vuex'
  import Pusher from 'pusher-js'
  export default {
    created () {
      // Pusher.logToConsole = true
      this.pusher = new Pusher('50fb70fb79d6c4446cfc', { // establishing a connection to pusher
        encrypted: true,
        cluster: 'mt1'
      })
      let that = this
      this.channel = this.pusher.subscribe('chat_channel') // subscribing to the channel
      this.channel.bind('chat_saved', function (data) {
        that.$emit('incoming_chat', data)
      })

      this.$on('incoming_chat', function (chatMessage) {
        this.incomingChat(chatMessage)
      })
    },
    computed: {
      ...mapState({
        chatStore: state => state.chatStore,
        userStore: state => state.userStore
      })
    },
    data () {
      return {
        message: null
      }
    },
    methods: {
      handleAddChat () {
        if (this.message !== null) {
          let postData = {
            'receiver_id': this.chatStore.currentChatUser.id,
            'chat': this.message
          }

          this.$store.dispatch('addNewChatToConversation', postData)
            .then(response => {
              this.message = null
              let element = document.getElementById('chat-widget-wrapper')
              element.scrollIntoView(false)
            })
        }
      },
      incomingChat (chatMessage) {
        if (this.chatStore.currentChatUser.id === chatMessage.message.sender_id) {
          if (chatMessage.message.receiver.email === this.userStore.authUser.email) {
            this.$store.dispatch('newIncomingChat', chatMessage.message)
              .then(response => {
                let element = document.getElementById('chat-widget-wrapper')
                element.scrollIntoView(false)
              })
          } else {
            console.log('No Need to Worry')
          }
        }
      }
    }
  }
</script>

<template>
 <div id='chat-add-widget'>
   <form v-on:submit.prevent='handleAddChat()'>
     <div class="form-group">
       <input type = 'text' v-model='message' placeholder='Enter your text' class='form-control'>
     </div>
   </form>
 </div>
</template>

<style lang='scss'>

</style>