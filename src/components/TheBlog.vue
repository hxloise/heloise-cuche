<script setup>
import TheMenuDesktop from "./subcomponents/TheMenuDesktop.vue";
import TheMenuMobile from "./subcomponents/TheMenuMobile.vue";
import TheFooter from "./subcomponents/TheFooter.vue";
import { isBurger, isMobile } from "../stores.js";
import menuContent from "../content/blogMenu.json";
import TheNumberMenu from "./subcomponents/TheNumberMenu.vue";
import content from "../content/blogContent.json";
import { ref } from "vue";
import TheMobileWait from "./TheMobileWait.vue";

window.top.document.title = "Héloïse Cuche - Blog";

const i = ref(0);
const isShow = ref([false, false, false, false, false, false]);

console.log(isShow.value.length);

function getArticle(number) {
  i.value = number - 1;

  for (let n = 0; n < isShow.value.length; n++) {
    console.log(isShow.value[n]);
    console.log(n);
    if (n == number) {
      isShow.value[number] = !isShow.value[number];
    } else if (n != number) {
      isShow.value[n] = false;
    }
  }

  let icone = document.getElementById(number);
  if (isShow.value[number]) {
    icone.textContent = "expand_less";
  }
  if (!isShow.value[number]) {
    icone.textContent = "expand_more";
  }
}
</script>

<template>
<the-mobile-wait v-if="isMobile"></the-mobile-wait> 

  <div v-if="!isBurger" id="header">
    <the-menu-desktop></the-menu-desktop>
  </div>
  <div v-if="!isMobile" id="boxe-menu-content">
     <div v-if="isBurger" id="header-mobile">
    <the-menu-mobile></the-menu-mobile>
  </div>
    <div
      v-for="c in menuContent"
      :key="c.number"
      class="boxe-titre"
      @click="getArticle(c.number)"
    >
      <div class="titre-top">
        <div class="simple-info">
          <p class="blog-date titre-simple">{{ c.date }}</p>
          <p class="titre-simple dot">·</p>
          <p class="titre-simple category">{{ c.categorie }}</p>
          <p class="titre-simple dot">·</p>
          <p class="titre-simple">{{ c.titre }}</p>
        </div>
        <div>
          <span
            :id="c.number"
            class="material-icons btn-boxe-showMore iconeToMove"
            @click="getArticle(c.number)"
          >
            expand_more
          </span>
        </div>
      </div>
      <div id="imageContent" v-if="isShow[c.number]">
        <div id="section-blog-all-content">
          <div class="blog-article">
            <div class="blog-all-content">
              <p class="blog-content-resume">
                {{ content[i].chapeau }}
              </p>
              <p class="bold">{{ content[i].introSectionA }}</p>
              <p>{{ content[i].txtSectionA }}</p>
              <p class="bold">{{ content[i].introSectionB }}</p>
              <p>{{ content[i].txtSectionB }}</p>
              <p class="bold">{{ content[i].introSectionC }}</p>
              <p>{{ content[i].txtSectionC }}</p>
              <p class="citation">{{ content[i].citation }}</p>
              <div class="blog-double-img">
                <img :src="`${content[i].contentImg}`" class="content-img" />
              </div>
              <p class="pToGray">{{ content[i].legendImg }}</p>
              <p class="bold">{{ content[i].introSectionD }}</p>
              <p>{{ content[i].txtSectionD }}</p>
              <p class="blog-content-resume">
                {{ content[i].txtEnd }}
              </p>
              <p class="auteur">{{ content[i].auteurs }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <the-footer v-if="!isMobile"></the-footer>
</template>

<style scoped>
#boxe-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% 0% 10% 0%;
}
.titre-top {
  display: flex;
  justify-content: space-between;
}
.titre-simple {
  display: inline-block;
}
.boxe-titre {
  /* width: 90%; */
  width: 80%;
  /* padding: 3%; */
  padding: 1% 1% 1% 0%;
  margin-bottom: 1%;
  cursor: pointer;
  /* background: rgba(255, 255, 255, 0.09); */
  border-bottom-style: solid;
  border-width: .1rem;
  border-color: gray;
}
/* .boxe-titre:hover {
  box-shadow: var(--ombre);
} */
#imageContent {
  margin-top: 3%;
}
#section-blog-all-content {
  display: flex;
  flex-direction: column;
}
.blog-title {
  font-size: 1.5rem;
  margin-bottom: 1%;
}
.blog-date {
  color: gray;
}
.content-img {
  margin-top: 4%;
  max-width: 100%;
}
.bold {
  font-weight: bold;
  margin: 4% 0% 0% 0%;
}
.pToGray {
  color: gray;
  font-style: italic;
}
.auteur {
  margin-top: 4%;
}
.citation {
  margin-top: 4%;
  font-style: italic;
}
.btn-boxe-showMore {
  cursor: pointer;
}
.dot {
  margin: 0% 0.5% 0% 0.5%;
}
.simple-info {
  width: 100%;
}
.material-icons {
  font-size: 3rem;
  line-height: 0;
}
/* .material-icons:hover {
  box-shadow: var(--ombre);
} */
.category {
  color: var(--pt-c-orange);
}
</style>