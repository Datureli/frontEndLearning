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
      :to="englishSection.link"
      @change="select"
    ></v-select>
    <ItWordsCollection v-if="select.name === 'nauka słów'" />
    <DescribeYourself v-if="select.name === 'opisz siebie'" />
  </v-container>
</template>

<script>
import ItWordsCollection from "./ItWordsCollection.vue";
import DescribeYourself from './DescribeYourself.vue'
export default {
  
  data() {
    
    return {
      select: '',

      englishSection:  [
        {
          name: 'opisz siebie',
        },
            {
          name: 'nauka słów',
        },
            {
          name: 'angielski3',
        }
      ]
    }
  },
  name: "Home",
  components: {
    ItWordsCollection,
    DescribeYourself
  },
}
</script>

<style scoped>

</style>
