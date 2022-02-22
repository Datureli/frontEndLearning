<template>
  <v-container fluid style="background: orange; height: 521px;">
    <v-select label="Standard"></v-select>
    <ItWordsCollection />
  </v-container>
</template>

<script>
import ItWordsCollection from "./ItWordsCollection.vue";
export default {
  name: "Home",
  components: {
    ItWordsCollection,
  },
}
</script>

<style scoped>

</style>
