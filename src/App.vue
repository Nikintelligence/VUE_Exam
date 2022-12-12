<template>
  <apple-header background="black" :tabs="tabs"></apple-header>
  <div>
    <router-view></router-view>
  </div>
  <apple-footer background="black"></apple-footer>
</template>

<script>
import AppleHeader from "@/components/AppleHeader"
import AppleFooter from "@/components/AppleFooter"

export default {
components: {AppleHeader, AppleFooter},
data () {
  return {
    tabs: [
      {name: '\uD83C\uDF4C', path:'/'},
      {name: 'Catalogue', path: '/catalog'},
      {name: 'Autorization', path: '/autorization'},
      {name: 'Cart', path: '/order'}
    ]
  }
}
}
</script>

<style>


</style>