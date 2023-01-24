<script setup>
import router from "../../router/index.js";

function back() {
  // router.go(-1);
   window.location.href = "https://heloise-cuche.onrender.com";
}
</script>

<template>
  <div id="OB">
    <div id="backBox" @click="back()">
      <span class="material-icons"> arrow_back</span>
      <p class="btn">Retour</p>
    </div>
  </div>
</template>

<style scoped>
#OB {
  width: 100%;

}
#backBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  border-radius: 0 0 1rem 0rem;
  width: 7%;
  padding: 0% 1% 0% 1%;
  height: 7%;
  box-shadow: var(--ombre);
  cursor: pointer;
  position: fixed;
}
.material-icons {
  color: white;
}
.btn{
    color: white;
}
</style>