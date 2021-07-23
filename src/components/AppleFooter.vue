<template>
<footer :style="{backgroundColor: background}">
<div class="support">
    <p><b>Help: </b><a href="tel:8(800)535-35-35">8(800)535-35-35</a></p>
    <p><b>     </b></p>
    <p><b>Chat us: </b><a href="mailto:example@gmail.com">example@gmail.com</a></p>
</div>    
</footer>
  
</template>

<script>
export default {
    name: "AppleFooter",
    props: {
    background: String,
}
}
</script>

<style scoped>
 footer {
    position: fixed; 
    left: 0; 
    bottom: 0; 
    padding: 10px; 
    color: #fff; 
    width: 100%; 
   }

   .support {
       display: flex;
       justify-content: center;
   }

   a {
       text-decoration: none;
       color: white;
   }
</style>