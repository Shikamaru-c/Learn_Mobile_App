<template>
  <div class="home-page">
    <v-header></v-header>
    <tag leftContent="热门文章" rightContent="查看更多"></tag>
    <posts></posts>
  </div>
</template>

<script>
import VHeader from 'components/header/header'
import Tag from 'base/tag/tag'
import Posts from 'base/posts/posts'

export default {
  components: {
    VHeader,
    Tag,
    Posts
  }
}
</script>

<style lang="scss">

</style>
