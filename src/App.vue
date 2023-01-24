<script setup>
import { watchEffect } from "vue";
import { isMobile, isBurger } from "./stores.js";
import router from "./router/index.js";
import { useWindowSize } from "vue-window-size";

const { width, height } = useWindowSize();
console.log("Screen size", width.value, "ScreenHeight", height.value)


watchEffect(() => {
  if(width.value < 1506 || height.value < 600){
    isBurger.value = true;
  }else{
    isBurger.value = false;
  }
  
  if (width.value < 992) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});


</script>

<template>
   <Suspense><router-view></router-view></Suspense>
</template>

<style scoped>
</style>
