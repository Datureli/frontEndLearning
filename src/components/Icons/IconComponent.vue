<template>
  <v-row class="hidden-sm-and-down" style="border: 21px solid red;">
    <RandomQuestion />
    <RandomQuestionLoop />
    <MusicComponent />
    <HeartIcon />
    <DisableComponent />
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MusicComponent from "./MusicComponent.vue";
import RandomQuestion from "./RandomQuestion.vue";
import RandomQuestionLoop from "./RandomQuestionLoop.vue";
export default {
  components: {
    MusicComponent,
    RandomQuestion,
    RandomQuestionLoop,
  },

  computed: {
    ...mapState(["disable", "favorite", "isHeartActive"]),
  },
};
</script>
