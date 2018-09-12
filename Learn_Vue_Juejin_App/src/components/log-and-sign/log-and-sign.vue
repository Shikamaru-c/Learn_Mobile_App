<template>
  <div class="log-and-sign">
    <log-in v-show="isLogInShow"></log-in>
    <sign-in v-show="isSignInShow"></sign-in>
  </div>  
</template>

<script>
import LogIn from 'base/log-in/log-in'
import SignIn from 'base/sign-in/sign-in'
import { mapState } from 'vuex'

export default {
  components: {
    LogIn,
    SignIn
  },
  computed: mapState(['isLogInShow', 'isSignInShow'])
}
</script>

<style lang="scss">
</style>
