<template>
  <v-btn
    color="transparent"
    elevation="0"
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
      const path = this.$route.path;
      const categoryMap = {
        "html": "html",
        "css": "css",
        "javascript": "javascript",
        "vue": "vue",
        "react": "react",
        "typescript": "typescript",
        "git": "git",
        "general": "general",
        "test": "test",
        "cypress": "cypress",
        "postman": "postman",
        "sql": "sql",
        "wordpress": "wordpress",
        "cybersecurity": "cybersecurity"
      };
      const category = path.substring(path.lastIndexOf("/") + 1);
      const action = categoryMap[category] + "Questions/random" + category.charAt(0).toUpperCase() + category.slice(1) + "Question";

      if (action) {
        this.$store.dispatch(action);
      }
    },
    ...mapActions([
      "htmlQuestions/randomHtmlQuestion",
      "cssQuestions/randomCssQuestion",
      "javascriptQuestions/randomJavascriptQuestion",
      "vueQuestions/randomVueQuestion",
      "reactQuestions/randomReactQuestion",
      "typescriptQuestions/randomTypescriptQuestion",
      "gitQuestions/randomGitQuestion",
      "generalQuestions/randomGeneralQuestion",
      "testQuestions/randomTestQuestion",
      "cypressQuestions/randomCypressQuestion",
      "postmanQuestions/randomPostmanQuestion",
      "sqlQuestions/randomSqlQuestion",
      "wordpressQuestions/randomWordpressQuestion",
      "cybersecurityQuestions/randomCybersecurityQuestion"
    ]),
  },
};
</script>
