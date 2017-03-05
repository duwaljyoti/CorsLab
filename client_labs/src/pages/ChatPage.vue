<script>
  import {mapState} from 'vuex'
  import ChatUserList from './../components/chat/ChatUserList'
  export default({
    components: {
      'user-list': ChatUserList
    },
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
      })
    },
    created () {
      this.$store.dispatch('setUserList')
    }
  })
</script>

<template>
  <div class="wrapper" id="chat-wraper"> 
  	<section class = 'heading'>
  	  <h1 class='page-title'>Chat</h1>
  	</section>
  	<section class='content'>
	  <div class="col-md-2" id='user-list-col'>
	  	<user-list></user-list>
	  </div>
	  <div class="col-md-2" id='user-list-col'>
	  	Chat List
	  </div>
  	</section>
  </div>
</template>