<template>
  <div class="posts">
    <ul class="posts-wrapper">
      <li class="post">
        <div class="title">iOS 程序员的自我修养 —— 读 《程序员的自我修养》后感</div>
        <div class="footer">
          <a>阅读</a>
          <span class="author">李剑飞</span>
          <span class="time">2月前</span>
          <span class="pv">135 次阅读</span>
        </div>
      </li>
      <li class="post">
        <div class="title">iOS 程序员的自我修养 —— 读 《程序员的自我修养》后感</div>
        <div class="footer">
          <a>阅读</a>
          <span class="author">李剑飞</span>
          <span class="time">2月前</span>
          <span class="pv">135 次阅读</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .posts {
    background: #fff;
    .post {
      padding: 30px 20px 20px;
      border-bottom: 1px solid rgba(7, 17, 27, .1);
      .title {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
      }
      .footer {
        a {
          display: inline-block;
          padding: 6px 14px;
          margin-right: 12px;
          border-radius: 2px;
          font-size: 12px;
          color: #fff;
          background: #abbb79;
        }
        span {
          font-size: 12px;
          color: #999;
          &:not(:last-child)::after {
            content: '·';
            margin-left: 5px;
          }
        }
      }
    }
  }
</style>
