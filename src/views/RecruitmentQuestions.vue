<template>
  <v-row class="darkGradient full-height">
    <v-col class="mx-auto" cols="12" md="10">
      <MiddleColumn />
    </v-col>
    <FullscreenButton />
  </v-row>
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
  height: 100dvh;
}
</style>
