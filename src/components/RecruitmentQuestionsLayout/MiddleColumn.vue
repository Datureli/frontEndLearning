<template>
  <div>
    <v-sheet
      class="mx-auto mt-xm-5 mt-lg-12"
      :height="height"
      :width="width"
      color="transparent"
      tile
      :elevation="elevation"
    >
      <h1 class="mt-15" v-if="this.$route.path === '/about'">Choose Category</h1>

      <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
      <JavascriptQuestions v-if="this.$route.path === '/about/javascript'" />
      <HtmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />
      <VueQuestions v-if="this.$route.path === '/about/vue'" />
      <GitQuestions v-if="this.$route.path === '/about/gitquestions'" />
      <ReactQuestions v-if="this.$route.path === '/about/react'" />
      <GeneralQuestions v-if="this.$route.path === '/about/general'" />
      <TestQuestions v-if="this.$route.path === '/about/test'" />
      <TypeScriptQuestions v-if="this.$route.path === '/about/typescript'" />
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
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 580;
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
          return 350;
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
