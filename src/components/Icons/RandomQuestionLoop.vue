<template>
  <div>
    <v-btn
      elevation="0"
      v-shortkey="['2']"
      @shortkey="toggleLoop"
      v-if="disableLoop"
      @click="toggleLoop"
      color="transparent"
    >
      <v-icon x-large>mdi-autorenew</v-icon>
    </v-btn>
    <v-btn v-else @click="resetInterval" color="transparent">
      <v-icon x-large color="green">mdi-autorenew</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      disableLoop: true,
      categoryMap: {
        "html": "html",
        "css": "css",
        "javascript": "javascript",
        "vue": "vue",
        "react": "react",
        "typescript": "typescript",
        "git": "git",
        "general": "general",
        "bootstrap": "general", // Mapowanie na tę samą akcję
      },
    };
  },
  methods: {
    resetInterval() {
      this.toggleLoop();
    },
    toggleLoop() {
      this.disableLoop = !this.disableLoop;
      if (!this.disableLoop) {
        this.randomLoop();
      } else {
        this.stopLoop();
      }
    },
    randomLoop() {
      const path = this.$route.path;
      const category = path.substring(path.lastIndexOf("/") + 1);
      const action = this.categoryMap[category] + "QuestionLoop";
      if (action && this[action]) {
        this[action]();
      }
    },
    stopLoop() {
      const path = this.$route.path;
      const category = path.substring(path.lastIndexOf("/") + 1);
      const action = this.categoryMap[category] + "QuestionStop";
      if (action && this[action]) {
        this[action]();
      }
    },
    ...mapActions({
      htmlQuestionLoop: "htmlQuestions/htmlQuestionLoop",
      cssQuestionLoop: "cssQuestions/cssQuestionLoop",
      generalQuestionLoop: "generalQuestions/generalQuestionLoop",
      generalQuestionStop: "generalQuestions/generalQuestionStop", // Akcja do zatrzymania pętli
      gitQuestionLoop: "gitQuestions/gitQuestionLoop",
      javascriptQuestionLoop: "javascriptQuestions/javascriptQuestionLoop",
      reactQuestionLoop: "reactQuestions/reactQuestionLoop",
      typescriptQuestionLoop: "typescriptQuestions/typescriptQuestionLoop",
      vueQuestionLoop: "vueQuestions/vueQuestionLoop",
    }),
  },
};
</script>
