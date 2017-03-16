<script>
  import {mapState} from 'vuex'
  import ChatUserList from './../components/chat/ChatUserList'
  import ChatWidget from './../components/chat/ChatWidget'
  import ChatAddWidget from './../components/chat/ChatAddWidget'

  export default({
    components: {
      'user-list': ChatUserList,
      'chat-block': ChatWidget,
      'add-chat': ChatAddWidget
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
      <add-chat></add-chat>
	  </div>
  	</section>
  </div>
</template>