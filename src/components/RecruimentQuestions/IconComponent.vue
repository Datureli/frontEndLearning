<template>
  <v-row class="hidden-sm-and-down">
    <v-icon
      large
      @click="globalRandomQuestion"
      style="position: absolute; bottom: 20%; right:73%;"
      >mdi-dice-multiple</v-icon
    >

    <v-icon
      x-large
      @click="htmlQuestionLoop"
      style="position: absolute; bottom: 20%; right:70%;"
      >mdi-autorenew</v-icon
    >

    <v-icon
      large
      @click="disableAnswers"
      style="position: absolute; bottom: 20%; right:20%;"
      >mdi-comment-off-outline</v-icon
    >
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="position: absolute; bottom: 20%; right:22%;"
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
export default {
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState(["disable", "favorite", "isHeartActive"]),
  },
  methods: {
    globalRandomQuestion() {
      switch (this.$route.path) {
        case "/about/htmlquestions":
          return this.randomHtmlQuestion();
        case "/about/cssquestions":
          return this.randomCssQuestion();
        case "/about/javascript":
          return this.randomQuestion();
        case "/about/vue":
          return this.randomVueQuestion();
        case "/about/react":
          return this.randomReactQuestion();
        case "/about/typescript":
          return this.randomTypescriptQuestion();
        case "/about/gitQuestions":
          return this.randomGitQuestion();
        case "/about/general":
          return this.randomGeneralQuestion();
        case "/about/bootstrap":
          return this.randomGeneralQuestion();
      }
    },
    randomQuestion() {
      this.$store.dispatch("questions/randomQuestion");
    },
    randomVueQuestion() {
      this.$store.dispatch("vueQuestions/randomVueQuestion");
    },
    randomHtmlQuestion() {
      this.$store.dispatch("htmlQuestions/randomHtmlQuestion");
    },
    ...mapActions("htmlQuestions", ["htmlQuestionLoop", "randomHtmlQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
        ...mapActions("cssQuestions", ["cssQuestionLoop", "randomCssQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
       ...mapActions("generalQuestions", ["generalQuestionLoop", "randomGeneralQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
        ...mapActions("gitQuestions", ["gitQuestionLoop", "randomGitQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
       ...mapActions("questions", ["questionLoop", "randomQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
       ...mapActions("reactQuestions", ["reactQuestionLoop", "randomReactQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
        ...mapActions("typescriptQuestions", ["typescriptQuestionLoop", "randomTypescriptQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
       ...mapActions("vueQuestions", ["vueQuestionLoop", "randomVueQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
  },
};
</script>
