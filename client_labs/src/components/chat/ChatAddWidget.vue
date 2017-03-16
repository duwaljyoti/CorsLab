<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
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
          console.log(postData)
          this.$store.dispatch('addNewChatToConversation', postData)
            .then(response => {
              this.message = null
            })
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