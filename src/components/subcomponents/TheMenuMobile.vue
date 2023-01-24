<script setup>
import { ref, computed } from "vue";

const isOpen = ref(false);
let screen = document.documentElement.clientHeight;
console.log(screen);

function burger() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    let burger = document.getElementById("burger");
    let links = document.getElementById("links");
    burger.style.padding = "16px 16px 200vw 200vw";
    burger.style.position = "fixed";
    links.style.display = "flex";
    burger.textContent = "clear";

    let TheHome = document.getElementById("noMenu");
    TheHome.style.display = "none";;
  }
  if (!isOpen.value) {
    let burger = document.getElementById("burger");
    let links = document.getElementById("links");
    burger.style.padding = "16px 16px 32px 32px";
    links.style.display = "none";
    burger.textContent = "menu";

    let TheHome = document.getElementById("noMenu");
    TheHome.style.display = "flex";
  }
}
</script>

<template>
  <span id="burger" class="material-icons" @click="burger()">menu</span>
  <div id="links">
    <p class="router">
      <router-link to="/">Accueil</router-link>
    </p>
    <p class="router">
      <router-link to="/a-propos">À propos</router-link>
    </p>
    <p class="router">
      <router-link to="/Blog">Blog</router-link>
    </p>
  </div>
</template>

<style scoped>
#burger {
  position: fixed;
  right: 0;
  top: 0;
  color: white;
  background: black;
  padding: 16px 16px 32px 32px;
  border-radius: 0% 0% 0% 100%;
  transition: 1s;
  box-shadow: var(--ombre);
  cursor: pointer; 
}

#links {
  display: none;
  flex-direction: column;
  width: 100vw;
  height: 50vh;
  padding: 25vh 0;
  justify-content: space-around;
}

#links p {
  text-align: center;
  font-size: 2rem;
  color: white;
  z-index: 10;
}
a {
  text-decoration: none;
  color: white;
}
.router-link-exact-active {
  text-decoration: underline white;
}
</style>