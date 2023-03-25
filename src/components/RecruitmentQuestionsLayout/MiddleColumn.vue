<template>
  <div class="mx-auto">
    <v-sheet
      class="mx-auto mt-md-13"
      :height="height"
      width="100%"
      :min-width="width"
      color="darkGradient"
      :elevation="elevation"
    >
      <div v-if="$route.path === '/about'" class="pa-5">
        <div class="d-grid justify-center mt-15">
          <h1 class="text-h2 font-weight-black">
            Choose Category
          </h1>
        </div>
      </div>
      <component :is="currentComponent" />
    </v-sheet>
    <IconComponent v-if="$route.path !== '/about'" class="mt-3" />
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
  data() {
    return {
      componentsTable: {
        "/about/cssquestions": CssQuestions,
        "/about/javascript": JavascriptQuestions,
        "/about/htmlquestions": HtmlQuestions,
        "/about/vue": VueQuestions,
        "/about/gitquestions": GitQuestions,
        "/about/react": ReactQuestions,
        "/about/general": GeneralQuestions,
        "/about/test": TestQuestions,
        "/about/typescript": TypeScriptQuestions,
        "/about/test-knowledge": TestYourKnowledge,
      },
    };
  },
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
      return this.$vuetify.breakpoint.mdAndUp ? 800 : "100%";
    },
    height() {
      return this.$vuetify.breakpoint.mdAndUp ? 410 : 410;
    },
    elevation() {
      return this.$vuetify.breakpoint.smAndDown ? 0 : 3;
    },
    currentComponent() {
      const path = this.$route.path;
      return this.componentsTable[path] || null;
    },
  },
};
</script>
