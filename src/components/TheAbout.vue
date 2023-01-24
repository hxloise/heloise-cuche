<script setup>
import TheMenuDesktop from "./subcomponents/TheMenuDesktop.vue";
import TheMenuMobile from "./subcomponents/TheMenuMobile.vue";
import TheSection from "./subcomponents/TheSection.vue";
import TheFooter from "./subcomponents/TheFooter.vue";
import TheNext from "./subcomponents/TheNext.vue";
import { isBurger } from "../stores.js";
import { ref } from "vue";
import content from "../content/about.json";
import legend from "../content/legend.json";

const i = ref(1);
const showImage = ref(false);
const showALegend = ref(false);
const sig = ref();

function next() {
  if (i.value == 3) {
    i.value = 0;
  }
  if (i.value == 2) {
    showImage.value = true;
  }
  if (i.value != 2) {
    showImage.value = false;
  }
  if (i.value != 3) {
    i.value = i.value + 1;
  }
}

function previous() {
  if (i.value != 0) {
    i.value = i.value - 1;
  }
  if (i.value == 2) {
    showImage.value = false;
  }
  if (i.value == 0) {
    i.value = 3;
    showImage.value = true;
  }
}

function showLegend(n) {
  showALegend.value = true;
  sig.value = n;
}

window.top.document.title = "Héloïse Cuche - À propos";
</script>

<template>
  <div id="theAbout">
    <div v-if="!isBurger" id="header">
      <the-menu-desktop></the-menu-desktop>
    </div>
    <div v-if="isBurger" id="header-mobile">
      <the-menu-mobile></the-menu-mobile>
    </div>
    <div id="noMenu">
      <div class="content-boxe-about">
        <div class="content-boxe-txt">
          <h2 class="title-about">{{ content[i].titre }}</h2>
          <p class="description-about">{{ content[i].txt }}</p>
        </div>
        <div class="boxe-timer">
          <the-next icone="arrow_back_ios" @click="previous()"
            >Précédant</the-next
          >
          <p class="number-timer">
            <b>{{ i }}</b
            >/3
          </p>
          <the-next icone="arrow_forward_ios" sense="change" @click="next()"
            >Suivant</the-next
          >
        </div>
      </div>
    </div>
    <div id="gallerie-description-boxe">
      <div class="galerie-boxe" v-if="showImage">
        <div v-for="n in 9" :key="n" class="little-img">
          <img
            :src="'/img/0' + n + '_album.png'"
            :id=n
            class="img-gallerie"
            alt="Gallerie personnelle Héloïse Cuche"
            @click="showLegend(n)"
          />
        </div>
      </div>
      <div id="legend-boxe" v-if="showImage">
        <p v-if="showALegend">
          {{ legend[sig].titre }} <br />
          Photo par {{ legend[sig].photographe }}
        </p>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<style scoped>
#noMenu {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
}
#gallerie-description-boxe {
  display: flex;
  flex-direction: row;
  margin: -1% 2% 10% 2%;
}
#legend-boxe {
  padding-left: 3rem;
  display: flex;
  align-items: center;
}
.content-boxe-about {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  text-align: center;
}
.content-boxe-txt {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.description-about {
  padding-top: 1rem;
  width: 70%;
}
.boxe-timer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5rem;
  align-self: center;
  width: 70%;
}
.little-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.galerie-boxe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
}
.img-gallerie {
  max-width: 100%;
  max-height: 100%;
  filter: grayscale(100%);
  cursor: pointer;
}
.img-gallerie:hover {
  box-shadow: var(--ombre);
}
#legend-boxe {
  width: 100%;
}
hr {
  width: 100%;
}
</style>