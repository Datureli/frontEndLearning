<template>
  <v-row class="darkGradient full-height" >
    <v-col class="mx-auto"  cols="12" md="8">
      <MiddleColumn  />
    </v-col>
  </v-row>
</template>

<script>
import MiddleColumn from "../components/RecruitmentQuestionsLayout/MiddleColumn.vue";

export default {
  components: {
    MiddleColumn,
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
