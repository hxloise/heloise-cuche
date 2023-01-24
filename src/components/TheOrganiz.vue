<script setup>
import { isBurger } from "../stores.js";
import TheBack from "./subcomponents/TheBack.vue";
import TheMenuDesktop from "./subcomponents/TheMenuDesktop.vue";
import TheNext from "./subcomponents/TheNext.vue";
import TheFooter from "./subcomponents/TheFooter.vue";
import TheNumberMenu from "./subcomponents/TheNumberMenu.vue";
import theLittleTitle from "./subcomponents/TheLittleTitle.vue";
import menuContent from "../content/menuNumber.json";
import titleInfo from "../content/resume.json";

window.top.document.title = "Héloïse Cuche - Organiz";

function goSection(anchor) {
  window.location.href = "#" + anchor;
}

function home(){
      window.location.href = "http://localhost:5173/";
}
</script>

<template>
  <div v-if="!isBurger" id="headerProj">
    <!-- <the-back></the-back> -->
    <the-menu-desktop></the-menu-desktop>
  </div>
  <div v-if="isBurger" id="header-mobile">
    <the-menu-mobile></the-menu-mobile>
  </div>
  <div id="noMenu">
    <div id="boxe-Organiz">
      <div id="boxe-menu-title">
        <div id="main-informations">
          <h1 class="title-organiz main">{{ titleInfo[0].titre }}</h1>
          <h2 class="title-organiz">Système de gestion d'horaires</h2>
        </div>
        <div id="boxe-menu-content">
          <div class="menuNumber">
            <div
              v-for="c in menuContent"
              :key="c.number"
              @click="goSection(c.number)"
              class="menuNumber-section"
            >
              <the-number-menu
                :number="c.number"
                :content="c.content"
              ></the-number-menu>
            </div>
          </div>
          <div id="imageContent">
            <img src="src\img\01_Organiz.png" alt="Mockup Figma Organiz" />
          </div>
        </div>
      </div>
    </div>
    <div id="body-content-projet">
      <div class="two-colonnes">
        <div class="rows">
          <p><b>Année · </b>2022</p>
          <p><b>Rôle · </b>Idéation, développement backend et frontend</p>
          <p><b>Produit par · </b>8 étudiant·e·s de la HEIG-VD</p>
        </div>
        <div class="rows">
          <p>
            Réunis par groupe pendant 1 mois, nous avons été amené à repenser un
            système de gestion d’horaire. L’objectif étant de lier toutes nos
            compétences afin de réaliser comment elles se combinent autour d’un
            projet digital.
          </p>
        </div>
      </div>
      <div class="video-pres">
        <video class="vd" controls autoplay>
          <source src="src\vid\VD_OZ.mp4" />
          type=video/mp4>
        </video>
        <video class="vd bottom" controls autoplay>
          <source src="src\vid\VD_OZ.mp4" />
          type=video/mp4>
        </video>
      </div>
      <div class="p-b">
        <h1 id="1">{{ menuContent[0].content }}</h1>
        <p>
          GAPS (la plateforme utilisée par la HEIG-VD pour donner accès aux
          horaires et informations personnelles) est bien souvent critiqué par
          ses utilisateur.trice.s. Entre le fait qu’il faut passer 6 étapes pour
          enfin réussir à voir ses horaires ou que des clicks se font seuls
          lorsqu’un zoom est fait sur la version mobile, nombreux sont les
          points amenant une expérience frustrante. Repenser cette expérience et
          proposer notre solution a été un beau challenge a réaliser.<br /><br />
          Suite de nos premières idées, l’équipe UX a poussé ses recherches afin
          de comprendre les principaux composants liés à une expérience : les
          utilisateurs, le dispositif, le logiciel et l’interaction. Grâce aux
          persona et Jobs To Be Done qu’ils ont réalisés, ils ont pu préparer
          des questionnaires qualitatifs et quantitatifs et ainsi chercher à
          comprendre au mieux les besoins des utilisateur.trice.s. Suite de ces
          recherches, ils ont prototypé et testé des maquettes, avant d’intégrer
          l’UI final. Cette phase d’analyse et de recherche était nécessaire
          afin de pouvoir créer et proposer une nouvelle interface cohérente à
          son contexte d’utilisation et innovante pour les utilisateur.trice.s.
        </p>
      </div>
      <div class="p-b">
        <h1 id="2">{{ menuContent[1].content }}</h1>
        <p>
          Pour les trois persona, des besoins ont été identifiés. Ainsi, nous
          avons estimé qu’il serait pertinent de proposer une plateforme
          “tout-en-un”. De plus, les persona avaient clairement exprimé le
          besoin de simplifier leur parcours utilisateur, afin de leur permettre
          de gagner en efficacité. Nous avons imaginé une plateforme où il
          serait possible d’intégrer directement ses tâches, de consulter son
          horaire, de voir ses notes et pouvoir tester ses moyennes. Un exemple
          ici, des bénéfices pour l'étudiant.
        </p>
      </div>
      <img src="src/img/ROJ.png" />
      <div class="p-b">
        <h1 id="3">{{ menuContent[2].content }}</h1>
        <p>
          À terme de ce projet, la dimension d’Ingénieure des médias prend tout son sens. 
          De plus, ce projet m’a permis de me rendre compte de la complexité lié à ce type 
          de projet et de l’importance d’une approche centré sur l’utilisateur. Cette dernière 
          permet de rapidement ce rendre compte des principaux problèmes liés à une expérience 
          et une interface et également de pouvoir envisager des nouvelles solutions.
        </p>
      </div>
    </div>
    <h1 class="h-end">Merci pour la lecture! <br/>
      Découvres mes autres projets par ici...</h1>
      <the-next icone="arrow_forward_ios" sense="change" @click="home()">Accueil</the-next>
  </div>

  <the-footer></the-footer>
</template>

<style scoped>
#boxe-Organiz {
  display: flex;
  flex-direction: column;
  margin: 1%;
}
#boxe-menu-title {
  margin: 4% 0% 2% 0%;
}
#main-informations {
  text-align: center;
}
h1 {
  font-weight: bold;
  font-size: 6rem;
}
#body-content-projet {
  display: flex;
  flex-direction: column;
  background-color: #1a1d31;
  color: white;
  padding: 8rem 0rem 10rem 0rem;
}
.two-colonnes {
  display: flex;
  flex-direction: row;
  width: 80%;
  align-self: center;
}
.rows {
  width: 50%;
}
#boxe-menu-content {
  display: flex;
  flex-direction: row;
}
.video-pres {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3rem 0rem 2rem 0rem;
}
#imageContent {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.menuNumber {
  width: 30%;
}
.menuNumber-section {
  width: 100%;
}
.material-icons {
  font-size: 3rem;
}
.vd {
  margin-right: 3%;
  max-width: 20%;
}
.bottom {
  margin-top: 30%;
}
.p-b {
  margin: 15% 0% 13% 10%;
  width: 50%;
}
.h-end{
  margin : 5% 0% 5% 8%; 
}
</style>