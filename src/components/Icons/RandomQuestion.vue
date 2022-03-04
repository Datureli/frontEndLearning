<template>
  <v-icon
    large
    @click="globalRandomQuestion"
    @keydown.esc="globalRandomQuestion"
    style="position: absolute; bottom:3%; right:73%;"
    >mdi-dice-multiple</v-icon
  >
</template>

<script>
import { mapActions } from "vuex";
export default {
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
    ...mapActions("htmlQuestions", ["htmlQuestionLoop", "randomHtmlQuestion"]),
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

<style></style>
