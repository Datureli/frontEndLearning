<template>
  <v-btn
    color="transparent"
    v-shortkey="['1']"
    @shortkey="globalRandomQuestion"
    @click="globalRandomQuestion"
  >
    <v-icon x-large>mdi-dice-multiple</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    globalRandomQuestion() {
      switch (this.$route.path) {
        case "/recruitment-questions/htmlquestions":
          return this.randomHtmlQuestion();
        case "/recruitment-questions/cssquestions":
          return this.randomCssQuestion();
        case "/recruitment-questions/javascript":
          return this.randomJavascriptQuestion();
        case "/recruitment-questions/vue":
          return this.randomVueQuestion();
        case "/recruitment-questions/react":
          return this.randomReactQuestion();
        case "/recruitment-questions/typescript":
          return this.randomTypescriptQuestion();
        case "/recruitment-questions/gitquestions":
          return this.randomGitQuestion();
        case "/recruitment-questions/general":
          return this.randomGeneralQuestion();
        case "/recruitment-questions/test":
          return this.randomTestQuestion();
        case "/recruitment-questions/cypress":
          return this.randomCypressQuestion();
        case "/recruitment-questions/postman":
          return this.randomPostmanQuestion();
        case "/recruitment-questions/sql":
          return this.randomSqlQuestion();
        case "/recruitment-questions/Wordpress":
          return this.randomWordpressQuestion();
        case "/recruitment-questions/cybersecurity":
          return this.randomCyberSecurityQuestion();
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
    ...mapActions("cypressQuestions", ["randomCypressQuestion"]),
    ...mapActions("postmanQuestions", ["randomPostmanQuestion"]),
    ...mapActions("sqlQuestions", ["randomSqlQuestion"]),
    ...mapActions("wordpressQuestions", ["randomWordpressQuestion"]),
    ...mapActions("cybersecurityQuestions", ["randomCybersecurityQuestion"]),
  },
};
</script>
