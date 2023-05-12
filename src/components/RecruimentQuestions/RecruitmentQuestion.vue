<template>
  <v-carousel hide-delimiters v-if="questions">
    <v-carousel-item v-for="(question, index) in questions" :key="index" max-width="700" class="mx-auto">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-black text-h4 text-wrap" v-text="question.question"></v-list-item-title>

          <v-list-item-subtitle class="white--text text-justify text-h6 text-wrap" v-show="disable" v-text="question.answer"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("htmlQuestions", ["htmlQuestions"]),
    ...mapState("cssQuestions", ["cssQuestions"]),
    ...mapState("javascriptQuestions", ["javascriptQuestions"]),
    ...mapState("vueQuestions", ["vueQuestions"]),
    ...mapState("reactQuestions", ["reactQuestions"]),
    ...mapState("typescriptQuestions", ["typescriptQuestions"]),
    ...mapState("gitQuestions", ["gitQuestions"]),
    ...mapState("generalQuestions", ["generalQuestions"]),
    ...mapState("testQuestions", ["testQuestions"]),
    ...mapState(["disable"]),
    
    questions() {
      const path = this.$route.path;
      switch (path) {
        case "/about/htmlquestions":
          return this.htmlQuestions;
        case "/about/cssquestions":
          return this.cssQuestions;
        case "/about/javascript":
          return this.javascriptQuestions;
        case "/about/vue":
          return this.vueQuestions;
        case "/about/react":
          return this.reactQuestions;
        case "/about/typescript":
          return this.typescriptQuestions;
        case "/about/gitquestions":
          return this.gitQuestions;
        case "/about/general":
          return this.generalQuestions;
        case "/about/test":
          return this.testQuestions;
        default:
          return null;
      }
    },
  },
};
</script>
