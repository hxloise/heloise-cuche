<script setup>

//-----------------------------------------------------------------------------------------------------------
//if sense = true, so icone first. Else it's content. Note that's bolean between getSomething or not
//-----------------------------------------------------------------------------------------------------------

const props = defineProps({
  icone: String,
  sense: Boolean
})

</script>

<template>
  <div id="OB">
    <div class="backBox">
      <slot v-if="props.sense" class="btn"></slot>
      <span class="material-icons noShadow"> {{ props.icone }}</span>
      <slot v-if="!props.sense" class="btn"></slot>
    </div>
  </div>
</template>

<style scoped>
#OB {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2%;
}
.backBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.3);
  width: 6rem;
  padding: .5rem 1rem .5rem 1rem;
  cursor: pointer;
}
#OB :hover {
  box-shadow: var(--ombre);
  background-color: white;
}
.backBox :hover {
  box-shadow: none;
}
.btn {
  color: black;
}
</style>