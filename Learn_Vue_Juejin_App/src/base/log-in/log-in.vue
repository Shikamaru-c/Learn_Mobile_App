<template>
  <div class="log-in">
    <div class="inner">
      <div class="info-image">
        <img :src="infoImage">
      </div>
      <div class="header">
        <h2>登录</h2>
        <span @click="closeAll">关闭</span>
      </div>
      <label for="log-account">
        <input id="log-account" type="text"
          placeholder="请填写手机号或邮箱"
          @focusin="infoImage = infoImages.account"
          @focusout="infoImage = infoImages.default">
      </label>
      <label for="log-password">
        <input id="log-password" type="password"
        placeholder="请输入密码"
        @focusin="infoImage = infoImages.password"
        @focusout="infoImage = infoImages.default">
      </label>
      <button>登录</button>
      <div class="message">
        <span class="not-account">没有帐号? <a @click="openSignIn">注册</a></span>
        <span class="forget-password">忘记密码</span>
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

const infoImages = {
  default: 'https://gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png',
  account: 'https://gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png',
  password: 'https://gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png'
}

export default {
  data () {
    return {
      infoImage: infoImages.default,
      infoImages: infoImages
    }
  },
  methods: mapMutations(['openSignIn', 'closeAll']) 
}
</script>

<style lang="scss" scoped>
  .log-in {
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
      position: relative;
      padding: 30px 24px;
      background: #fff;
      .info-image {
        position: absolute;
        height: 110px;
        top: 0;
        left: 50%;
        transform: translate(-50%, -76%);
        img {
          height: 100%;
        }
      }
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
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        font-size: 14px;
        .not-account {
          color: #999;
          a {
            color: #007fff;
          }
        }
        .forget-password {
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
