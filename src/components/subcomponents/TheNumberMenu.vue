<script setup>
import { ref } from "vue";

const props = defineProps({
  number: String,
  content: String,
});

let id = props.number - 1;

const isHover = ref(false);

function showName() {
  isHover.value = !isHover.value;
  let contentBox = document.getElementsByClassName("content-box");
  if (isHover.value) {
    contentBox[id].style.boxShadow = "var(--ombre)";
    contentBox[id].style.cursor = "pointer";
    contentBox[id].style.width = "45%";
  }
  if (!isHover.value) {
    contentBox[id].style.background = "rgba(255, 255, 255, 0.3)";
    contentBox[id].style.boxShadow = "none";
    contentBox[id].style.width = "5%";
  }
}

</script>

<template>
  <div
    class="content-box"
    :class="number"
    @mouseover="showName()"
    @mouseleave="showName()"
  >
    <p class="number">{{ number }}</p>
    <p v-if="isHover">{{ content }}</p>
  </div>
</template>

<style scoped>
.content-box {
  display: flex;
  flex-direction: row;
  padding: 3% 3% 3% 3.4%;
  background-color: rgba(255, 255, 255, 0.3);
  width: 5%;
  height: 3%;
  justify-content: flex-start;
  margin-bottom: 1%;
}
.number {
  margin-right: 2rem;
  margin-left: 0.2rem;
}
</style>