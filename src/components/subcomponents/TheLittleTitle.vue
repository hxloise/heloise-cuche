<script setup>
const props = defineProps({
  date: String,
  titre: String,
});
</script>

<template>
  <div id="littleTitle">
    <p class="grayP">{{ date }}</p>
    <h2 class="orangeH">{{ titre }}</h2>
  </div>
</template>

<style scoped>
#littleTitle {
    margin-bottom: 2%;
}
.grayP {
  color: gray;
  font-size: 0.9rem;
}
.orangeH {
  color: var(--pt-c-orange);
}
</style>