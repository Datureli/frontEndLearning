<template>
  <div class="mx-auto" >
    <v-sheet
      class="mx-auto mt-md-10"
      :height="height"
      color="red"
      :elevation="elevation"
    >
      <div v-if="$route.path === '/about'" class="pa-5">
        <div class="d-grid justify-center mt-15">
          <h1 class="text-h2 font-weight-black">
            Choose Category
          </h1>
        </div>
      </div>
      <RecruitmentQuestion />

    </v-sheet>
    <IconComponent v-if="$route.path !== '/about'" class="mt-5" />
  </div>
</template>
<script>
import IconComponent from "../Icons/IconComponent";
import RecruitmentQuestion from '../RecruimentQuestions/RecruitmentQuestion'

export default {
  components: {
    IconComponent,
    RecruitmentQuestion
  },
  computed: {
    /*
    width() {
      return this.$vuetify.breakpoint.mdAndUp ? 800 : "100%";
    },
    */
    height() {
      return this.$vuetify.breakpoint.mdAndUp ? 390 : 410;
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
