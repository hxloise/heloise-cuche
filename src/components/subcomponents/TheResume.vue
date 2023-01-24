<script setup>


const props = defineProps({
 date : String,
 titre : String,
 description : String,
 url : String,
});

function move() {
  // window.location.href = props.url;
}

</script>

<template>
      <router-link id="res" to="/organiz">
    <div id="rect-description">
      <div id="date-description">
        <p class="date"> {{ date }}</p>
      </div>
      <div id="titre-description">
        <h1 class="orange">{{ titre }}</h1>
      </div>
      <div id="description">
        <p>
          {{ description }}
        </p>
      </div>
      <div id="CTAProjet">
        <p class="cta">Découvrir le projet</p>
        <span class="material-icons">trending_flat</span>
      </div>
    </div>
      </router-link>
</template>

<style scoped>
#rect-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 15%;
  height: 30vh;
}
#res {
  width: 24%;
  height: 100%;
  margin: 1% 1% 0% 1%;
  align-self: flex-end;
}
#res :hover {
  box-shadow: var(--ombre);
  cursor: pointer;
}
#rect-description :hover {
  box-shadow: none;
}
#CTAProjet {
  display: flex;
  flex-direction: row;
}
.orange {
  color: var(--pt-c-orange);
}
.date {
  color: gray;
}
.cta {
  margin-right: 5%;
}
</style>