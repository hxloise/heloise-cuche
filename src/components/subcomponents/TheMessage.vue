<script setup>
import { ref } from "vue";

const props = defineProps({
  content: String,
});
</script>

<template>
  <div>
    <!-- <div id="message"> -->
      <p class="contentMessage">
        {{ content }}
      </p>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.contentMessage {
  background-color: var(--pt-c-orange);
  padding: 0.8rem;
  color: white;
  /* dépend de la taille du message souhaité.. */
  width: 20%;
  text-align: left;
  border-radius: 1rem 1rem 0% 1rem;
}
</style>