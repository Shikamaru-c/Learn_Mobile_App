<template>
  <div class="activity-items">
    <ul>
      <li class="activity-item">
        <div class="post">
          <img src="https://user-gold-cdn.xitu.io/151669439860094f6207b0966ca8ce0e3330ca607936c.jpg?imageView2/1/w/460/h/270/q/85/format/webp/interlace/1">
        </div>
        <h3 class="title">Artificial Intelligence Conference Beijing 2018</h3>
        <div class="activity-footer">
          <div class="footer-left">
            <span class="time">04-10 周二</span>
            <span class="site">北京</span>
          </div>
          <div class="footer-right">
            <a>报名参加</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .activity-items {
    margin-top: 123px;
    ul li {
      box-shadow: 0 0 20px #aaa;
      margin-bottom: 30px;
      &:not(:last-child) {
        margin-bottom: 0;
      }
      .post {
        width: 100%;
        img {
          width: 100%;
        }
      }
      h3 {
        line-height: 70px;
        font-size: 14px;
        padding-left: 14px;
      }
      .activity-footer {
        display: flex;
        justify-content: space-between;
        padding: 0 14px 14px;
        align-items: flex-end;
        font-size: 12px;
        .footer-left span {
          display: block;
          line-height: 20px;
        }
        .footer-right {
          a {
            display: inline-block;
            height: 24px;
            padding: 0 20px;
            line-height: 24px;
            border-radius: 12px;
            background: #4d91fd;
            color: #fff;
          }
        }
      }
    }
  }
</style>
