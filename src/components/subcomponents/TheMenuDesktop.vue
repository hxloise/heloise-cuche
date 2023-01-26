<script setup>
</script>

<template>
  <div id="menuBox">
    <div class="linkMenuBox">
      <router-link to="/">
        <p class="router">Accueil</p>
      </router-link>
    </div>
    <div class="linkMenuBox">
      <router-link to="/a-propos">
        <p class="router">À propos</p>
      </router-link>
    </div>
    <div class="linkMenuBox">
      <router-link to="/blog">
        <p class="router">Blog</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#menuBox {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 0 0 0 1rem;
    height: 7%; 
    width: 21%;
    position: fixed;
    box-shadow: var(--ombre);
    
}
.linkMenuBox{
    padding: 1rem;
}
.router-link-exact-active{
    text-decoration: underline white;
}
p{
    color:white;

}
a{
  text-decoration: none;
}
</style>