<script setup>
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: var(--pt-c-blue);
  color: white;
  font-size: 2rem;
  border: none;
  border-radius: var(--big-radius);
  flex-wrap: wrap;
  box-shadow: var(--shadow);
  width: 100%;
  height: 12rem;
  margin: 2% 0% 2% 0%;
}
</style>