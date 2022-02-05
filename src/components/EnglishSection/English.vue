<template>
  <div>
    <v-select label="Standard"></v-select>
    <ItWordsCollection />
  </div>
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
