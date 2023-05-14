<template>
  <v-row
    justify="space-around"
    class="hidden-sm-and-down mt-5 mx-auto pl-10 pr-10 pa-1"
  >
    <RandomQuestion />
    <RandomQuestionLoop />
    <MusicComponent />
    <HeartIcon />
    <DisableComponent />
  </v-row>
</template>

<script>
import {
  RandomQuestion,
  RandomQuestionLoop,
  MusicComponent,
  HeartIcon,
  DisableComponent,
} from "../Icons";

export default {
  components: {
    MusicComponent,
    RandomQuestion,
    RandomQuestionLoop,
    HeartIcon,
    DisableComponent,
  },
};
</script>
