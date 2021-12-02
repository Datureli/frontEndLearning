<template>
  <v-sheet
    class="mx-auto mt-8 "
    height="400"
    width="900"
    color="transparent"
    tile
  >
    <router-view></router-view>
    <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
    <JavascriptQuestions v-if="this.$route.path === '/about/javascript'" />
    <HtmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />
    <VueQuestions v-if="this.$route.path === '/about/vuequestions'" />
  </v-sheet>
</template>

<script>
import HtmlQuestions from "./HtmlQuestions.vue";
import CssQuestions from "./CssQuestions.vue"; 
import JavascriptQuestions from "./JavascriptQuestions.vue"
export default {
 components: {
      HtmlQuestions,
      CssQuestions,
      JavascriptQuestions
    },
};
</script>
