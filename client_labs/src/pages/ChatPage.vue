<script>
  import {mapState} from 'vuex'
  import ChatUserList from './../components/chat/ChatUserList'
  import ChatWidget from './../components/chat/ChatWidget'
  export default({
    components: {
      'user-list': ChatUserList,
      'chat-block': ChatWidget
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
	  	<chat-block></chat-block>
	  </div>
  	</section>
  </div>
</template>