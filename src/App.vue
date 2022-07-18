<script setup>
import Header from './components/Header.vue'
import Gallery from './components/Gallery.vue'

</script>

<template>
  <header>
    <Header></Header>
  </header>
  <body>
  
  <router-view></router-view>
    
  </body>


</template>



<style scoped>
body{
  background-color: white;
}
</style>
