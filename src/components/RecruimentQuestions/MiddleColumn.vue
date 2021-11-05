<template>
  <v-card class="mx-auto mt-13" height="80" color="#0C2136" width="750">
    <v-toolbar color="transparent" elevation="0" class="text--primary mx auto">
    </v-toolbar>
    <v-sheet
      height="350"
      style="box-shadow: inset 1px 0px 47px 3px rgba(66, 68, 90, 1);"
      tile
    >
      <router-view></router-view>
      <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
      <JavascriptQuestions v-if="this.$route.path === '/about/javascript'" />
    </v-sheet>

    <HtmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />
    <VueQuestions v-if="this.$route.path === '/about/vuequestions'" />
  </v-card>
</template>

<script>
import htmlQuestions from "./htmlQuestions.vue";
import CssQuestions from "./CssQuestions.vue";
export default {
  data: () => ({
    page: 1,
    components: {
      htmlQuestions,
      CssQuestions,
    },
  }),
};
</script>
