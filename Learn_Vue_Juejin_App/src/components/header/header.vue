<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">
        <a href="/">
          <img src="https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg">
        </a>
      </div>
      <div class="navigation" @click="isShowNav = !isShowNav">
        <span>{{ $route.name }}</span>
        <ul v-show="isShowNav">
          <li><router-link to="/homePage">首页</router-link></li>
          <li><router-link to="/brochures">小册</router-link></li>
          <li><router-link to="/openSourceLibrary">开源库</router-link></li>
          <li><router-link to="/activity">活动</router-link></li>
        </ul>
      </div>
    </div>
    <div class="header-right">
      <span class="log-in" @click="openLogIn">登录</span>
      <span class="sign-in" @click="openSignIn">注册</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      isShowNav: false
    }
  },
  methods: mapMutations(['openLogIn', 'openSignIn'])
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    padding: 0 10px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    color: #007fff;
    background: #fff;
    .header-left {
      display: flex;
      align-items: center;
      .logo {
        display: inline-block;
      }
      .navigation {
        display: inline-block;
        position: relative;
        height: 100%;
        width: 80px;
        line-height: 60px;
        text-align: center;
        span {
          display: block;
        }
        ul {
          position: absolute;
          width: 100%;
          line-height: 45px;
          margin-top: -1px;
          border: 1px solid #ccc;
          box-shadow: 0 0 1px #ccc;
          border-radius: 5px;
          background: #fff;
          li a {
            display: block;
            color: #333;
            &.router-link-active {
              color: #007fff;
            }
          }
        }
      }
    }
    .header-right {
      span:not(:last-child)::after {
        content: '·';
        margin-left: 5px;
      }
    }
  }
</style>
