<script setup>
import { ref } from "vue";

const props = defineProps({
  domaine: String,
  outils: String,
});

const isAboveTools = ref(false);

function bigBoxe() {
  isAboveTools.value = !isAboveTools.value;
}
</script>

<template>
  <div id="ombre">
    <div id="allBoxe" @click="bigBoxe()">
      <div id="all">
        <div class="contentThis">
          <p class="contentThis">{{ domaine }}</p>
        </div>
        <div class="contentThis" v-show="!isAboveTools">
          <span class="material-icons contentThis moreIcone">
            expand_more
          </span>
        </div>
        <div class="contentThis" v-show="isAboveTools">
          <span class="material-icons contentThis moreIcone">
            expand_less
          </span>
        </div>
      </div>
      <div class="contentThis">
        <p v-show="isAboveTools" class="tools">
          {{ outils }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#allBoxe {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  width: 30%;
  margin: 0.5% 0% 0.5% 0%;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
}
#all {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#ombre :hover {
  box-shadow: var(--ombre);
}
#allBoxe :hover {
  box-shadow: none;
}
.material-icons {
  font-size: 2rem;
}
.tools {
  font-size: 0.9rem;
}
</style>