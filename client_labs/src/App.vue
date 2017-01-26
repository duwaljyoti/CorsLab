<script>
  import {mapState} from 'vuex'
  import TopMenu from './components/TopMenu'
  export default {
    components: {
      TopMenu
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    created () {
      // const userObect = window.storage(JSON.parse())
      console.log('test')
    }
  }
</script>

<template>
<div>
  <pre>{{ userStore }}</pre>
  <top-menu></top-menu>
  <router-view></router-view>
</div>

</template>

<style lang = 'sass'>
  @import './assets/css/bootstrap.css'
</style>