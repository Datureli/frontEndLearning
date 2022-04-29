<template>
  <v-container fluid style="background: orange; height: 521px;">
    dsa{{select}}
    <v-select
      v-model="select"
      class="pa-5 mt-0 mr-16 mx-auto"
      :items="englishSection"
      item-text="name"
      label="Choose category"
      persistent-hint
      return-object
      single-line
      :to="englishSection.link"
      @change="select"
    ></v-select>
    <ItWordsCollection v-if="select.name === 'angielski2'" />
  </v-container>
</template>

<script>
import ItWordsCollection from "./ItWordsCollection.vue";
export default {
  
  data() {
    
    return {
      select: '',

      englishSection:  [
        {
          name: 'angielski',
          link: ''
        },
            {
          name: 'angielski2',
          link: '/words'
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
