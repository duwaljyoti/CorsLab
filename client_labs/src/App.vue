<script>
  import {mapState} from 'vuex'
  import TopMenu from './components/TopMenu'
  export default {
    components: {
      TopMenu
    },
    computed: { // in vue 2 every vuex component is a computed property
      ...mapState({
        userStore: state => state.userStore
      })
    },
    created () {
      // const userObect = window.storage(JSON.parse())
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      // console.log(userObj)
      this.$store.dispatch('setUserObject', userObj)
    }
  }
</script>

<template>
  <div>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<style lang = 'sass'>
  @import './assets/css/bootstrap.css'
</style>