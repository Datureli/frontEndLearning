<template>
  <v-row class="hidden-sm-and-down">
<RandomQuestion />

    <v-icon
      x-large
      @click="randomLoop"
      style="position: absolute; bottom:3%; right:70%;"
      >mdi-autorenew</v-icon
    >

    <v-icon
      large
      @click="disableAnswers"
      style="position: absolute; bottom:3%; right:20%;"
      >mdi-comment-off-outline</v-icon
    >
    >
   <MusicComponent />

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="position: absolute; bottom:3%; right:22%;"
          color="transparent"
          outlined
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            :disabled="!isHeartActive"
            x-large
            @click="addToFavorite(htmlQuestions)"
            >mdi-heart</v-icon
          >
        </v-btn>
      </template>
      <span>You need to be logged in</span>
    </v-tooltip>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MusicComponent from './MusicComponent.vue'
import RandomQuestion from './RandomQuestion.vue'
export default {
  components: {
    MusicComponent,
    RandomQuestion
  },
  data() {
    return {
      disableLoop: false,
    };
  },

  computed: {
    ...mapState(["disable", "favorite", "isHeartActive"]),
  },
  methods: {
   
    randomLoop() {
      switch (this.$route.path) {
        case "/about/htmlquestions":
          return this.htmlQuestionLoop();
        case "/about/cssquestions":
          return this.cssQuestionLoop();
        case "/about/javascript":
          return this.questionLoop();
        case "/about/vue":
          return this.vueQuestionLoop();
        case "/about/react":
          return this.reactQuestionLoop();
        case "/about/typescript":
          return this.typescriptQuestionLoop();
        case "/about/gitQuestions":
          return this.gitQuestionLoop();
        case "/about/general":
          return this.generalQuestionLoop();
        case "/about/bootstrap":
          return this.GeneralQuestion();
      }
    },


  },
};
</script>
