<template>
  <div>
    <v-sheet
      class="mt-md-10"
      :height="height"
      color="darkGradient"
    >
      <div v-if="$route.path === '/recruitment-questions'" class="pa-5">
        <h1 class="text-h2 font-weight-black justify-center mt-15">
          Choose Category
        </h1>
      </div>
      <RecruitmentQuestion />
    </v-sheet>
    <IconComponent
      v-if="$route.path !== '/recruitment-questions'"
      class="mt-5"
    />
  </div>
</template>

<script>
import IconComponent from "../Icons/IconComponent";
import RecruitmentQuestion from "../RecruimentQuestions/RecruitmentQuestion";

export default {
  components: {
    IconComponent,
    RecruitmentQuestion,
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
