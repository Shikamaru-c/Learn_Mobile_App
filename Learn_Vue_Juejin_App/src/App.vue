<template>
  <div id="app">
    <log-and-sign></log-and-sign>
    <router-view/>
  </div>
</template>

<script>
import LogAndSign from 'components/log-and-sign/log-and-sign'

export default {
  name: 'App',
  components: {
    LogAndSign
  }
}
</script>

<style>
</style>
