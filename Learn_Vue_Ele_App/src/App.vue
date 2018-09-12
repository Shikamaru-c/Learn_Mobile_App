<template>
  <div id="app">
    <v-header :seller="seller">>
    </v-header>
    <v-tab>
    </v-tab>
    <div id="content">
      <keep-alive>
      <router-view :seller="seller"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import {urlParse} from './common/js/util.js'
import header from './components/header/header.vue'
import tab from './components/tab/tab.vue'

const ERR_OK = 0

export default {
  name: 'app',
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
      }
    })
  },
  components: {
    'v-header': header,
    'v-tab': tab
  }
}
</script>

<style>

</style>
