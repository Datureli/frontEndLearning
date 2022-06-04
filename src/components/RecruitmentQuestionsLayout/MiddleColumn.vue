<template>
  <div>
    <v-sheet
      class="mx-auto mt-12"
      :height="height"
      :width="width"
      color="darkGradient"
      :elevation="elevation"
    >
      <div v-if="this.$route.path === '/about'" class="pa-5">
        <div class="d-grid justify-center mt-15">
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
    <IconComponent v-if="this.$route.path != '/about'" class="mt-3" />
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
  TestYourKnowledge,
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
    TestYourKnowledge,
  },
  computed: {
    width() {
      return this.$vuetify.breakpoint.lg  ? 800 : 900
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return 350;
        case "lg":
          return 415;
        default:
          return 400;
      }
    },
    elevation() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0;
        case "sm":
          return 0;
        default:
          return 3;
      }
    },
  },
};
</script>
