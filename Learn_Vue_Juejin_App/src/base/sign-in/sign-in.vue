<template>
  <div class="sign-in">
    <div class="inner">
      <div class="header">
        <h2>注册</h2>
        <span @click="closeAll">关闭</span>
      </div>
      <label for="nick-name">
        <input id="nick-name" type="text" placeholder="请输入用户名">
      </label>
      <label for="sign-account">
        <input id="sign-account" type="text" placeholder="请填写手机号或邮箱">
      </label>
      <label for="sign-password">
        <input id="sign-password" type="password" placeholder="请输入密码">
      </label>
      <button>登录</button>
      <div class="message">
        <a @click="openLogIn">已有账号登录</a>
      </div>
      <div class="third-party">
        <span>第三方账号登录:</span>
        <ul>
          <li>微博</li>
          <li>微信</li>
          <li>GITHUB</li>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: mapMutations(['openLogIn', 'closeAll'])
}
</script>

<style lang="scss" scoped>
  .sign-in {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .3);
    .inner {
      padding: 30px 24px;
      background: #fff;
      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        h2 {
          font-size: 18px;
          font-weight: 700;
        }
      }
      label {
        display: block;
        margin-bottom: 12px;
        input {
          height: 36px;
          width: 280px;
          box-sizing: border-box;
          padding: 10px;
          border: 1px solid rgba(7, 17, 27, .1);
          border-radius: 3px;
          &:focus {
            border-color: #007fff;
          }
        }
      }
      button {
        height: 38px;
        width: 100%;
        margin-bottom: 12px;
        border: none;
        border-radius: 3px;
        font-size: 14px;
        background: #007fff;
        color: #fff;
      }
      .message {
        margin-bottom: 16px;
        text-align: center;
        font-size: 14px;
        a {
          color: #007fff;
        }
      }
      .third-party {
        span {
          display: inline-block;
          font-size: 14px;
          color: #999;
          margin-bottom: 18px;
        }
        ul {
          display: flex;
          text-align: center;
          li {
            flex: 1;
          }
        }
      }
    }
  }
</style>
