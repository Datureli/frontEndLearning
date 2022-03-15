<template>
    <v-btn color="transparent">
      <v-icon x-large v-shortkey="['1']" @shortkey="globalRandomQuestion" @click="globalRandomQuestion">mdi-dice-multiple</v-icon>
    </v-btn>
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
          return this.randomJavascriptQuestion();
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
        case "/about/test":
          return this.randomTestQuestion();
      }
    },
    ...mapActions("htmlQuestions", ["randomHtmlQuestion"]),
    ...mapActions("cssQuestions", ["randomCssQuestion"]),
    ...mapActions("generalQuestions", ["randomGeneralQuestion"]),
    ...mapActions("gitQuestions", ["randomGitQuestion"]),
    ...mapActions("javascriptQuestions", ["randomJavascriptQuestion"]),
    ...mapActions("reactQuestions", ["randomReactQuestion"]),
    ...mapActions("typescriptQuestions", ["randomTypescriptQuestion"]),
    ...mapActions("vueQuestions", ["randomVueQuestion"]),
    ...mapActions("testQuestions", ["randomTestQuestion"]),
  },
};
</script>

<style></style>
