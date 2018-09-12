<template>
  <div class="activity">
    <v-header></v-header>
    <sub-navigation></sub-navigation>
    <activity-items></activity-items>
  </div>
</template>

<script>
import VHeader from 'components/header/header'
import SubNavigation from 'base/sub-navigation/sub-navigation'
import ActivityItems from 'base/activity-items/activity-items'

export default {
  components: {
    VHeader,
    SubNavigation,
    ActivityItems
  }
}
</script>

<style lang="scss">

</style>
