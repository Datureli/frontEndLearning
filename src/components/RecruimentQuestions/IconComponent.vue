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
      @click="randomLoop"
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
  data() {
    return {
      disableLoop: false,
    };
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
    ...mapActions({
      htmlQuestions: ["randomHtmlQuestion"],
    }),
    ...mapActions("htmlQuestions", ["htmlQuestionLoop", "randomHtmlQuestion"]),
    ...mapActions("cssQuestions", ["cssQuestionLoop", "randomCssQuestion"]),
    ...mapActions("generalQuestions", [
      "generalQuestionLoop",
      "randomGeneralQuestion",
    ]),
    ...mapActions("gitQuestions", ["gitQuestionLoop", "randomGitQuestion"]),
    ...mapActions("questions", ["questionLoop", "randomQuestion"]),
    ...mapActions("reactQuestions", [
      "reactQuestionLoop",
      "randomReactQuestion",
    ]),
    ...mapActions("typescriptQuestions", [
      "typescriptQuestionLoop",
      "randomTypescriptQuestion",
    ]),
    ...mapActions("vueQuestions", ["vueQuestionLoop", "randomVueQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
  },
};
</script>
