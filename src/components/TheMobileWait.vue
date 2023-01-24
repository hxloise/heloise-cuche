<script setup>

window.top.document.title = "Héloïse Cuche - Portfolio";

function home() {
  window.location.href = "https://heloise-cuche.onrender.com";
}
</script>

<template>
  <div id="main-noMob">
    <div class="info-top">
      <p class="txt">Héloïse Cuche · Ingénieure des médias</p>
    </div>
    <div class="top">
      <h3>
        La version mobile arrive bientôt, en attendant, visitez la version
        <span style="font-style: italic">desktop</span> :)
      </h3>
    </div>
    <div>
      <img src="https://media0.giphy.com/media/cXblnKXr2BQOaYnTni/giphy.gif" />
    </div>
  </div>
</template>

<style scoped>
#main-noMob {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  background-color: #1a1d31;
  height: 100vh;
  width: 100vw;
  color: white;
}
.info-top {
  height: 2vh;
  text-align: left;
  margin: 2rem 1rem 0rem 1rem;
}
.top {
  text-align: left;
  margin: 0rem 1rem 0rem 1rem;
}

img {
  max-width: 100%;
  max-height: 100%;
}
h3 {
  font-weight: lighter;
}

/* Tout ce qui est plus grand que 350 passe dans ses propriétés*/
@media (min-width: 350px) {
  h3 {
    font-size: 2.5rem;
  }
  p{
    font-size: 1rem;
  }
}
</style>