import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogInShow: false,
    isSignInShow: false
  },
  mutations: {
    openLogIn (state) {
      state.isSignInShow = false
      state.isLogInShow = true
    },
    openSignIn (state) {
      state.isLogInShow = false
      state.isSignInShow = true
    },
    closeAll (state) {
      state.isLogInShow = false
      state.isSignInShow = false
    }
  }
})
