<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(cssQuestions, index) in cssQuestions.slice(0, 3)"
        :key="index"
        max-width="700"
        class="mx-auto"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text--primary font-weight-black text-h4 text-wrap "
              v-text="cssQuestions.question"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list color="transparent" class="d-grid">
          <v-list-item class="answerDesign">{{
            "A)" + cssQuestions.trueAnswer
          }}</v-list-item>
          <v-list-item class="answerDesign">{{
            "B)" + cssQuestions.firstFakeAnswer
          }}</v-list-item>
          <v-list-item class="answerDesign">
            {{ "C)" + cssQuestions.secondFakeAnswer }}</v-list-item
          >
          <v-list-item class="answerDesign">
            {{ "D)" + cssQuestions.thirdFakeAnswer }}</v-list-item
          >
        </v-list>
      </v-carousel-item>
    </v-carousel>
  </div>
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
  },
};
</script>
<style>
.answerDesign {
  border: 1px solid black;
}
</style>
