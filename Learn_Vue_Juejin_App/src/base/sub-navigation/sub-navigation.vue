<template>
  <div class="sub-navigation">
    <ul>
      <li><a>热门活动</a></li>
      <li><a>北京</a></li>
      <li><a>上海</a></li>
      <li><a>广州</a></li>
      <li><a>深圳</a></li>
      <li><a>杭州</a></li>
      <li><a>其他城市</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .sub-navigation {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    ul {
      white-space: nowrap;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        display: inline-block;
        a {
          display: block;
          padding: 14px;
          font-size: 14px;
        }
      }
    }
  }
</style>
