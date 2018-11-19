<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'


  export default {

    mounted () {
      this.$store.dispatch('getAddress')
    },

    components: {
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>