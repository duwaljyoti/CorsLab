<script>
  import {mapState} from 'vuex'
  import PrivateMessageSidebar from './PrivateMessageSidebar'

  export default {
    components: {
      'private-message-sidebar': PrivateMessageSidebar
    },
    computed: {
      ...mapState({
        pmStore: state => state.privateMessageStore
      })
    },
    created () {
      this.$store.dispatch('setUserMessagesSent')
    }
  }
</script>

<template>
  <div class="PrivateMessage PrivateMessage-Inbox">
      <section class = 'heading'>
        <h1 class='page-title'>Sent Messages
        <small>All Private Messages</small>
        </h1>
      </section> 
      <section class="content">
        <div class="row">
          <div class="col-sm-2 col-with-right-border">
            <private-message-sidebar></private-message-sidebar>
          </div>
          <div class="col-sm-8">
            <table class="table table-striped table-hover table-bordered table-condensed message-table">
              <thead>
                <tr>
                  <th>Sent To</th>
                  <th>Subject</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="message in pmStore.messagesSent">
                  <td class="col-sm-3">{{ message.receiver.name }}</td>
                  <td class="col-sm-7">
                    <router-link :to="{ name: 'pm-view', params: { id: message.id } }" :class="[message.read == 0 ? 'unread' : 'read']">{{ message.subject }}</router-link>
                  </td>
                  <td class="col-sm-2">{{message.created_at}}</td>
                </tr>
              </tbody>
            </table>  
          </div>
        </div>

      </section>         
  </div>
</template>