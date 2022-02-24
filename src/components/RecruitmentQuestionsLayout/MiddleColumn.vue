<template>
  <v-sheet
    class="mx-auto mt-xm-5 mb-15 mt-lg-12"
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
    <BootstrapQuestions v-if="this.$route.path === '/about/bootstrap'" />
    <TypeScriptQuestions v-if="this.$route.path === '/about/typescript'" />
    <IconComponent />
    
  </v-sheet>
</template>

<script>
import HtmlQuestions from "../RecruimentQuestions/HtmlQuestions.vue";
import CssQuestions from "../RecruimentQuestions/CssQuestions.vue";
import JavascriptQuestions from "../RecruimentQuestions/JavascriptQuestions.vue";
import VueQuestions from "../RecruimentQuestions/VueQuestions.vue";
import GitQuestions from "../RecruimentQuestions/GitQuestions.vue";
import BootstrapQuestions from "../RecruimentQuestions/TestQuestions.vue";
import TypeScriptQuestions from "../RecruimentQuestions/TypeScriptQuestions.vue"
import ReactQuestions from "../RecruimentQuestions/ReactQuestions.vue"
import GeneralQuestions from "../RecruimentQuestions/GeneralQuestions.vue"
import IconComponent from '../RecruimentQuestions/IconComponent.vue'
import QuestionPagination from '../RecruimentQuestions/QuestionPagination.vue'
export default {
  components: {
    HtmlQuestions,
    CssQuestions,
    JavascriptQuestions,
    VueQuestions,
    GitQuestions,
    BootstrapQuestions,
    TypeScriptQuestions,
    ReactQuestions,
    GeneralQuestions,
    IconComponent,
    QuestionPagination
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
