<template>
  <v-sheet
    class="mx-auto mt-xm-5 mb-15 mt-lg-16"
    height="415"
    :width="width"
    color="transparent"
    tile
    :elevation="elevation"
  >
    <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
    <JavascriptQuestions v-if="this.$route.path === '/about/javascript'" />
    <HtmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />
    <VueQuestions v-if="this.$route.path === '/about/vue'" />
    <GitQuestions v-if="this.$route.path === '/about/gitquestions'" />
    <BootstrapQuestions v-if="this.$route.path === '/about/bootstrap'" />
    <TypeScriptQuestions v-if="this.$route.path === '/about/typescript'" />
  </v-sheet>
</template>

<script>
import HtmlQuestions from "./HtmlQuestions.vue";
import CssQuestions from "./CssQuestions.vue";
import JavascriptQuestions from "./JavascriptQuestions.vue";
import VueQuestions from "./VueQuestions.vue";
import GitQuestions from "./GitQuestions.vue";
import BootstrapQuestions from "./BootstrapQuestions.vue";
import TypeScriptQuestions from "./TypeScriptQuestions.vue"
export default {
  components: {
    HtmlQuestions,
    CssQuestions,
    JavascriptQuestions,
    VueQuestions,
    GitQuestions,
    BootstrapQuestions,
    TypeScriptQuestions
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
          return 850;
        case "xl":
          return 900;
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
