<template>
  <v-container fluid class="mx-auto full-height">
    <v-select
      v-model="select"
      class="pa-5 mt-0 mx-auto"
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
    <ItDictionary v-if="select.name === 'słowniczek branżowy'" />
    <FlashCards v-if="select.name === 'fiszki'" />
  </v-container>
</template>

<script>
import ItWordsCollection from "../components/EnglishSection/ItWordsCollection";
import DescribeYourself from "../components/EnglishSection/DescribeYourself";
import ItDictionary from "../components/EnglishSection/ItDictionary";
import FlashCards from "../components/EnglishSection/FlashCards";

export default {
  data: () => ({
    select: "",
    englishSection: [
      {
        name: "opisz siebie",
      },
      {
        name: "nauka słów",
      },
      {
        name: "słowniczek branżowy",
      },
      {
        name: "fiszki",
      },
    ],
  }),
  components: {
    ItWordsCollection,
    DescribeYourself,
    ItDictionary,
    FlashCards,
  },
};
</script>

<style>
.full-height {
  height: 100vh;
  width: 100%;
  background-color: orange;
}
</style>
