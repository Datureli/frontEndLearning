<template>
  <v-container fluid style="background: orange; height: 521px;">
    <v-select
      v-model="select"
      class="pa-5 mt-0 mr-16 mx-auto"
      :items="englishSection"
      item-text="name"
      label="Choose category"
      persistent-hint
      return-object
      single-line
    ></v-select>
    <ItWordsCollection />
  </v-container>
</template>

<script>
import ItWordsCollection from "./ItWordsCollection.vue";
export default {
  data() {
    return {
      englishSection:  [
        {
          name: 'angielski',
          link: ''
        },
            {
          name: 'angielski2',
          link: ''
        },
            {
          name: 'angielski3',
          link: ''
        }
      ]
    }
  },
  name: "Home",
  components: {
    ItWordsCollection,
  },
}
</script>

<style scoped>

</style>
