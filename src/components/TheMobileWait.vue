<script setup>
import TheNext from "./subcomponents/TheNext.vue";

window.top.document.title = "Héloïse Cuche - Portfolio";

function home() {
  window.location.href = "https://heloise-cuche.onrender.com";
}
</script>

<template>
  <div id="main-noMob">
  </div>
</template>

<style scoped>
#main-noMob {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
  background-color: white;
  height: 100vh;
  width: 100vw;
  color: #3e403f;
  background-image: url(https://media2.giphy.com/media/cXblnKXr2BQOaYnTni/giphy.gif);
}

</style>