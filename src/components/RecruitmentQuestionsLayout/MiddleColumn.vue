<template>
  <div>
    <v-sheet class="mt-md-10" :height="height" color="darkGradient">
      <div
        style="width: 700px"
        v-if="$route.path === '/recruitment-questions'"
        class="pa-5 mt-15 mx-auto"
      >
        <h1 class="text-h3 font-weight-black mt-15 mb-5">Wybierz kategorię</h1>
        <span class="text-h3 font-weight-black mt-15 mb-5">lub</span>
        <h1 class="text-h3 font-weight-black mt-5">
          rozpocznij test wiedzy
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
