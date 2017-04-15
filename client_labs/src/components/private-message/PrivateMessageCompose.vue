<script>
  import PrivateMessageSidebar from './PrivateMessageSidebar'
  import {mapState} from 'vuex'

  export default {
    components: {
      'private-message-sidebar': PrivateMessageSidebar
    },
    computed: {
      ...mapState({
        pmStore: state => state.privateMessageStore,
        userStore: state => state.userStore
      })
    },
    created () {
      this.$store.dispatch('getUserList')
    },
    data () {
      return {
        pm: {
          userSelected: null,
          subject: '',
          message: ''
        }
      }
    },
    methods: {
      handleFormSubmit () {
        let postData = {
          'receiver_id': this.pm.userSelected.id,
          'subject': this.pm.subject,
          'message': this.pm.message
        }
        this.$store.dispatch('sendPrivateMessage', postData)
          .then(response => {
            this.$router.push({ name: 'my-sent-pms' })
          })
      }
    }
  }
</script>

<template>
  <div class="PrivateMessage PrivateMessage-Inbox">
      <section class = 'heading'>
        <h1 class='page-title'>Compose Message
        <small>Send a Private Message</small>
        </h1>
      </section> 
      <section class="content">
        <div class="row">
          <div class="col-sm-2 col-with-right-border">
            <private-message-sidebar></private-message-sidebar>
          </div>
          <div class="col-sm-8">
            <form v-on:submit.prevent='handleFormSubmit()'>
              <div class="form-group">
                <label>Select a user</label>
                <multiselect
                  v-model='pm.userSelected'
                  :options = 'userStore.users'
                  :searchable = 'true'
                  :close-on-select = 'true'
                  :show-labels = 'false'
                  track-by = 'id'
                  label = 'name'
                  placeholder = 'Select A user'
                ></multiselect>
              </div>
              <div class="form-group">
                <label>Subject</label>
                <input type = 'text' v-model = 'pm.subject' class = 'form-control' placeholder = 'Enter Subject'>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea name = 'message' v-model = 'pm.message' class = 'form-control'></textarea>
              </div>
              <button class="btn btn-primary">
                <i class="fa fa-save">
                  Send
                </i>
              </button>           
            </form>
          </div>
        </div>

      </section>         
  </div>
</template>