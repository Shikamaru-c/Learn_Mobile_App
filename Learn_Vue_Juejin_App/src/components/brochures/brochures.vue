<template>
  <div class="brochures">
    <router-view/>
    <brochure-footer></brochure-footer>
  </div>
</template>

<script>
import BrochureFooter from 'base/brochure-footer/brochure-footer'

export default {
  components: {
    BrochureFooter
  }
}
</script>

<style lang="scss">

</style>
