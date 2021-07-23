<template>
<div class="line"></div>
<apple-header :tabs="tabs" background="dimgrey" color="red">
</apple-header>
<router-view></router-view>

<div class="catalog" v-if="$route.path.endsWith('catalog')">
<div class="col-6">
  <h2>iBanana</h2>
  <router-link to="/catalog/phone">
  <img src="https://static.re-store.ru/upload/iblock/173/173800b9e25921b885bd9cd2d5a490b8.jpg">
  </router-link>
</div>
<div class="col-6">
  <h2>iPad</h2>
  <router-link to="/catalog/pad">
  <img src="https://static.re-store.ru/upload/iblock/fe8/fe830a5d098b37db06ab59a58ae064e9.jpg">
  </router-link>
</div>
<div class="col-6">
  <h2>Mac</h2>
  <router-link to="/catalog/mac">
  <img src="https://static.re-store.ru/upload/iblock/496/4969b55cc78f99275364bad33d7e04c2.jpg">
  </router-link>
</div>
<div class="col-6">
  <h2>Accessory</h2>
  <router-link to="/catalog/accses">
  <img src="https://static.re-store.ru/upload/iblock/502/502f3aee2d79b5e365d77520e79e7773.jpg">
  </router-link>
</div>
</div>

</template>

<script>
import AppleHeader from '@/components/AppleHeader'
export default {
    name: "Catalog",
    components: {AppleHeader},
    data(){
      return {
        tabs: [
          {name: "iPhone", path: "/catalog/phone"},
          {name: "iPad", path: "/catalog/pad"},
          {name: "iMac", path: "/catalog/mac"},
          {name: "Accessory", path: "/catalog/accses"}
        ]
      }
    }
}
</script>

<style scoped>
.line{
margin-top: 4px;}

.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
} 

img {
  height: 300px;
  width: auto;
}

.col-6 {
  margin-top: 20px;
}

.apple {
  display: none;
}

</style>