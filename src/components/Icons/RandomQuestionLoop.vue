<template>
  <div>
    <v-btn
      v-if="disableLoop"
      @click="
        randomLoop();
        changeStatus();
      "
      color="transparent"
    >
      <v-icon x-large>mdi-autorenew</v-icon>
    </v-btn>
    <v-btn v-else @click="clearInterval" color="transparent"
      ><v-icon x-large color="red" >mdi-autorenew</v-icon></v-btn
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      disableLoop: true,
    };
  },
  methods: {
    clearInterval() {
      this.disableLoop = true;
      clearInterval(this.randomLoop());
    },
    changeStatus() {
      this.disableLoop = !this.disableLoop;
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
    ...mapActions("htmlQuestions", ["htmlQuestionLoop"]),
    ...mapActions("cssQuestions", ["cssQuestionLoop"]),
    ...mapActions("generalQuestions", ["generalQuestionLoop"]),
    ...mapActions("gitQuestions", ["gitQuestionLoop"]),
    ...mapActions("questions", ["questionLoop"]),
    ...mapActions("reactQuestions", ["reactQuestionLoop"]),
    ...mapActions("typescriptQuestions", ["typescriptQuestionLoop"]),
    ...mapActions("vueQuestions", ["vueQuestionLoop"]),
  },
};
</script>
