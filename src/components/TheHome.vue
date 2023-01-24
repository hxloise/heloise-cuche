<script setup>
import TheMenuDesktop from "./subcomponents/TheMenuDesktop.vue";
import TheMenuMobile from "./subcomponents/TheMenuMobile.vue";
import TheFooter from "./subcomponents/TheFooter.vue";
import TheResume from "./subcomponents/TheResume.vue";
import TheMessage from "./subcomponents/TheMessage.vue";
import { isBurger, isAbove } from "../stores.js";
import content from "../content/resume.json";
import TheMobileWait from "./TheMobileWait.vue";

window.top.document.title = "Héloïse Cuche - Portfolio";

function toggle() {
  let background = document.getElementById("backgroundBlack");
  isAbove.value = !isAbove.value;
  if (isAbove.value == true) {
    background.style.opacity = "80%";
  } else {
    background.style.opacity = "100%";
  }
}

function goTo() {
  window.open(
    "https://www.behance.net/hlosecuche?tracking_source=search_users|H%C3%A9lo%C3%AFse%20Cuche"
  );
}
</script>


<template>
<the-mobile-wait v-if="isBurger"></the-mobile-wait>
  <div v-if="!isBurger" id="theHome">
    <div v-if="!isBurger" id="header">
      <the-menu-desktop></the-menu-desktop>
    </div>
    <div v-if="isBurger" id="header-mobile">
      <the-menu-mobile></the-menu-mobile>
    </div>
    <div id="noMenu">
      <div id="boxe-degraded-top">
        <div id="boxe-txt-card">
          <h1>Héloïse Cuche</h1>
          <p>
            Ingénieure des médias |
            <a href="mailto:cuchehel@hotmail.com">cuchehel@hotmail.com </a>
          </p>
        </div>
        <div id="boxe-popUp">
          <the-message
            class="message"
            content="Ciao! Combinant des compétences 360° dans le digital, je souhaite me spécialiser dans l'UX Design. Si mon profil t'intéresse, n'hésite pas à me faire signe !"
          ></the-message>
          <img src="01_profil.png" alt="Heloise Cuche" class="profil" />
        </div>
      </div>
      <div id="projPres">
        <div
          v-for="(projet, i) in content"
          :key="i"
          :class="[`proj`, { imgleft: i % 2 == 0, imgright: i % 2 != 0 }]"
          :id="`proj0${i + 1}`"
        >
          <img
            v-if="i % 2 == 0"
            :src="`0${i + 1}_projet.png`"
            :alt="projet.alt"
          />
          <the-resume
            :date="projet.date"
            :titre="projet.titre"
            :description="projet.description"
            :url="projet.url"
          />
          <img
            v-if="i % 2 != 0"
            :src="`0${i + 1}_projet.png`"
            :alt="projet.alt"
          />
        </div>
      </div>
      <div></div>
      <!-- <div id="benevole">
        <hr />
        <h2>Tchoukball Club La Chaux-de-Fonds</h2>
        <p class="gray">/2022-23 · Activité bénévole</p>
        <div
          id="backgroundBlack"
          @mouseover="toggle()"
          @mouseleave="toggle()"
          @click="goTo()"
        >
          <p v-show="isAbove" class="outlink">Voir sur Behance</p>
        </div>
      </div> -->
    </div>
    <the-footer></the-footer>
  </div>
</template>

<style scoped>
#theHome {
  background-image: url(..\img\texture.png);
}
#boxe-degraded-top {
  height: 110vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    109deg,
    rgba(250, 177, 177, 1) 0%,
    rgba(242, 106, 104, 1) 80%
  );
}
#boxe-txt-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 50vh;
}
#boxe-popUp {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 100vw;
  height: 50vh;
  padding: 0% 2% 8% 0%;
}
.message {
  display: flex;
  justify-content: right;
  padding-right: 5%;
}
.profil {
  max-width: 5rem;
  max-height: 5rem;
}
#projPres {
  display: flex;
  flex-direction: column;
  margin: -13% 2% 2% 2%;
}
.proj {
  display: flex;
  flex-direction: row;
  margin: 2% 0% 10% 0%;
}
.imgright {
  justify-content: flex-end;
}
#benevole {
  margin: 5% 2% 5% 2%;
}
#backgroundBlack {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80vh;
  background-color: black;
  cursor: pointer;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/5c900a160600027.63b7076939559.png");
  background-position: 50%;
}
hr {
  margin-bottom: 3%;
}
.gray {
  color: gray;
  margin-bottom: 1%;
}
.outlink {
  color: white;
  text-decoration: underline;
  margin: 2%;
}
a {
  color: black;
}
</style>