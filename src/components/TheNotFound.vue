<script setup>
import TheNext from "./subcomponents/TheNext.vue";

window.top.document.title = "Héloïse Cuche - Woopsi";

function home(){
      window.location.href = "https://heloise-cuche.onrender.com";
}


</script>

<template>
  <div class="main">
    <div class="thisContent">
      <img src="/img/00_404.png" alt="Oops pas de pages trouvées!" />
    </div>
    <p class="thisContent">Woopsi, cette page est <b>introuvable</b>. Souhaitez-vous retourner à l'accueil ?</p>
      <the-next @click="home()">Accueil</the-next>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.thisContent{
    align-self: center;
    margin-bottom: 2%;
}
</style>