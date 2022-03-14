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
      ><v-icon x-large color="red">mdi-autorenew</v-icon></v-btn
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
          this.htmlQuestionLoop();
          break;
        case "/about/cssquestions":
          this.cssQuestionLoop();
          break;
        case "/about/javascript":
          this.javascriptQuestionLoop();
          break;
        case "/about/vue":
          this.vueQuestionLoop();
          break;
        case "/about/react":
          this.reactQuestionLoop();
          break;
        case "/about/typescript":
          this.typescriptQuestionLoop();
          break;
        case "/about/gitQuestions":
          this.gitQuestionLoop();
          break;
        case "/about/general":
          this.generalQuestionLoop();
          break;
        case "/about/bootstrap":
          this.GeneralQuestion();
          break;
      }
    },
    ...mapActions("htmlQuestions", ["htmlQuestionLoop"]),
    ...mapActions("cssQuestions", ["cssQuestionLoop", "resetLoop"]),
    ...mapActions("generalQuestions", ["generalQuestionLoop"]),
    ...mapActions("gitQuestions", ["gitQuestionLoop"]),
    ...mapActions("javascriptQuestions", ["javascriptQuestionLoop"]),
    ...mapActions("reactQuestions", ["reactQuestionLoop"]),
    ...mapActions("typescriptQuestions", ["typescriptQuestionLoop"]),
    ...mapActions("vueQuestions", ["vueQuestionLoop"]),
  },
};
</script>
