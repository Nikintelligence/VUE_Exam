<template>
<div class="line"></div>
<apple-header :tabs="tabs" background="dimgrey" color="red">
</apple-header>
<router-view></router-view>

<div class="catalog" v-if="$route.path.endsWith('catalog')">
<div class="col-6">
  <h2>iBanana</h2>
  <router-link to="/catalog/phone">
  <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png">
  </router-link>
</div>
<div class="col-6">
  <h2>iPad</h2>
  <router-link to="/catalog/pad">
  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-202109_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1631751019000">
  </router-link>
</div>
<div class="col-6">
  <h2>Mac</h2>
  <router-link to="/catalog/mac">
  <img src="https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/en_US/7d204cd60ff1fce24cf6d11f24cd210a.png">
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