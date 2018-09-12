<template>
  <div class="tag">
    <div class="tag-left">
      <h3>{{ leftContent }}</h3>
    </div>
    <div class="tag-right">
      <a>{{ rightContent }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftContent: '',
    rightContent: ''
  }
}
</script>

<style lang="scss">
  .tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-top: 80px;
    background: #fff;
    border-top: 1px solid rgba(7, 17, 27, .1);
    border-bottom: 1px solid rgba(7, 17, 27, .1);    
    .tag-left h3 {
      font-weight: 500;
    }
    .tag-right a {
      font-size: 12px;
    }
  }
</style>
