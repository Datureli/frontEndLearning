<template>
  <div>
    <v-sheet
      class="mx-auto mt-xm-5 mt-lg-12"
      :height="height"
      :width="width"
      color="darkGradient"
      tile
      :elevation="elevation"
    >
      <div v-if="this.$route.path === '/about'" class="pa-15">
        <p class="text-h5">
          Hello, this section is dedicated to studying recruitment questions.on
          your left hand side are the categories for each question
        </p>
        <div class="d-flex justify-center">
          <v-icon x-large class="mr-3">mdi-arrow-left-bold</v-icon>
          <h1 class="text-h2 font-weight-black">
            Choose Category
          </h1>
        </div>
      </div>

      <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
      <JavascriptQuestions v-if="this.$route.path === '/about/javascript'" />
      <HtmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />
      <VueQuestions v-if="this.$route.path === '/about/vue'" />
      <GitQuestions v-if="this.$route.path === '/about/gitquestions'" />
      <ReactQuestions v-if="this.$route.path === '/about/react'" />
      <GeneralQuestions v-if="this.$route.path === '/about/general'" />
      <TestQuestions v-if="this.$route.path === '/about/test'" />
      <TypeScriptQuestions v-if="this.$route.path === '/about/typescript'" />
      <TestYourKnowledge v-if="this.$route.path === '/about/test-knowledge'" />
    </v-sheet>
    <IconComponent v-if="this.$route.path != '/about'" />
  </div>
</template>

<script>
import {
  HtmlQuestions,
  CssQuestions,
  JavascriptQuestions,
  VueQuestions,
  GitQuestions,
  TestQuestions,
  TypeScriptQuestions,
  ReactQuestions,
  GeneralQuestions,
  QuestionPagination,
  TestYourKnowledge
} from "../RecruimentQuestions";
import IconComponent from "../Icons/IconComponent";
export default {
  components: {
    HtmlQuestions,
    CssQuestions,
    JavascriptQuestions,
    VueQuestions,
    GitQuestions,
    TestQuestions,
    TypeScriptQuestions,
    ReactQuestions,
    GeneralQuestions,
    IconComponent,
    QuestionPagination,
    TestYourKnowledge
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 480;
        case "sm":
          return 720;
        case "md":
          return 500;
        case "lg":
          return 790;
        case "xl":
          return 900;
      }
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 400;
        case "sm":
          return 350;
        case "md":
          return 400;
        case "lg":
          return 415;
        case "xl":
          return 400;
      }
    },
    elevation() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0;
        case "sm":
          return 0;
        case "md":
          return 10;
        case "lg":
          return 10;
        case "xl":
          return 10;
      }
    },
  },
};
</script>
