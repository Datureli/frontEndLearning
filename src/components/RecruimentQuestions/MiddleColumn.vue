<template>
  <v-card class="mx-auto mt-13" height="80" color="blue" width="750">
    <v-toolbar color="transparent" elevation="0" class="text--primary mx auto">
    </v-toolbar>
    <router-view></router-view>

 
    <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
    <htmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />
  
  </v-card>
</template>

<script>
import htmlQuestions from './htmlQuestions.vue'
import CssQuestions from "./CssQuestions.vue";
export default {
  data: () => ({
    components: {
      htmlQuestions,
      CssQuestions,
    },
  }),
};
</script>
