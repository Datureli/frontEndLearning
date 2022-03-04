<template>
  <v-row class="hidden-sm-and-down mt-1 mx-auto pa-1">
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
    DisableComponent
  },
};
</script>
