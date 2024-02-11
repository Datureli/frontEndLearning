<template>
  <div>
    <v-sheet class="mt-md-10" :height="height" color="darkGradient">
      <RecruitmentQuestion />
      <div v-if="$route.path === '/recruitment-questions/test-knowledge'">
        <TestYourKnowledge />
      </div>
    </v-sheet>
    <IconComponent
      v-if="$route.path !== '/recruitment-questions'"
      class="mt-5"
    />
  </div>
</template>

<script>
import IconComponent from "../Icons/IconComponent";
import TestYourKnowledge from "../RecruimentQuestions/TestYourKnowledge"
import RecruitmentQuestion from "../RecruimentQuestions/RecruitmentQuestion";

export default {
  components: {
    IconComponent,
    RecruitmentQuestion,
    TestYourKnowledge
  },
  computed: {
    height() {
      return this.$vuetify.breakpoint.mdAndUp ? 390 : 410;
    },

    currentComponent() {
      const path = this.$route.path;
      return this.componentsTable[path] || null;
    },
  },
};
</script>
