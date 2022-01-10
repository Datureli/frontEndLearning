<template>
  <v-sheet
    class="mx-auto mb-10"
    style="margin-top: 80px;"
    height="415"
    :width="width"
    color="transparent"
    tile
    elevation="10"
  >
    <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
    <JavascriptQuestions v-if="this.$route.path === '/about/javascript'" />
    <HtmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />
    <VueQuestions v-if="this.$route.path === '/about/vue'" />
    <GitQuestions v-if="this.$route.path === '/about/gitquestions'" />
  </v-sheet>
</template>

<script>
import HtmlQuestions from "./HtmlQuestions.vue";
import CssQuestions from "./CssQuestions.vue";
import JavascriptQuestions from "./JavascriptQuestions.vue";
import VueQuestions from "./VueQuestions.vue";
import GitQuestions from "./GitQuestions.vue";
export default {
  components: {
    HtmlQuestions,
    CssQuestions,
    JavascriptQuestions,
    VueQuestions,
    GitQuestions,
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
           case 'xs': return 550
          case 'sm': return 700
          case 'md': return 500
          case 'lg': return 850
          case 'xl': return 900
      }
    }
  }
};
</script>
