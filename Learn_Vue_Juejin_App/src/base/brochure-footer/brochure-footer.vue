<template>
  <div class="brochure-footer">
    <ul class="footer-navigation">
      <li><router-link to="/brochures/all">全部小册</router-link></li>
      <li><router-link to="/brochures/bought">已购</router-link></li>
      <li><router-link to="/brochures/myself">我</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .brochure-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 44px;
    border-top: 1px solid rgba(7, 17, 27, .1);
    background: #fff;
    .footer-navigation {
      display: flex;
      align-items: center;
      text-align: center;
      li {
        flex: 1;
        height: 100%;
        line-height: 44px;
        a {
          display: block;
          font-size: 12px;
          &.router-link-active {
            color: #007fff;
          }
        }
      }
    }
  }
</style>
