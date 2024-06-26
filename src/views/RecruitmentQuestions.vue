<template>
  <v-container fluid class="darkGradient full-height">
    <v-row class="d-flex justify-center align-center full-height">
      <v-col cols="12" md="10" class="text-center">
        <MiddleColumn />
      </v-col>
      <v-col cols="12" class="text-center">
        <FullscreenButton />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MiddleColumn from "../components/RecruitmentQuestionsLayout/MiddleColumn.vue";
import FullscreenButton from '../components/Icons/FullScreenButton.vue';

export default {
  components: {
    MiddleColumn,
    FullscreenButton
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
