<template>
  <v-row
    justify="space-around"
    class="hidden-sm-and-down mt-1 mx-auto pl-4 pa-1"
  >
    <RandomQuestion />
    <RandomQuestionLoop />
    <ChangeTheme />
    <MusicComponent />
    <TranslateIcon />
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
  ChangeTheme,
  TranslateIcon,
} from "../Icons";

export default {
  components: {
    MusicComponent,
    RandomQuestion,
    RandomQuestionLoop,
    HeartIcon,
    DisableComponent,
    ChangeTheme,
    TranslateIcon,
  },
};
</script>
