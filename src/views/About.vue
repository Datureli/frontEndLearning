<template>
  <v-container fluid width="100%" class="mx-auto d-flex justify-center">
    <v-sheet height="660" width="100%" class="darkGradient d-md-flex d-grid">
      <div>
        <FirstColumn v-if="$vuetify.breakpoint.mdAndUp" />
        <HotkeyTips v-if="$vuetify.breakpoint.mdAndUp" />
      </div>

      <MiddleColumn />

      <RightColumn v-if="$vuetify.breakpoint.mdAndUp" />
      <div class="d-flex mx-auto justify-center">
        <FirstColumnMobile v-if="$vuetify.breakpoint.smAndDown" />
        <RightColumnMobile v-if="$vuetify.breakpoint.smAndDown" />
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
import {
  FirstColumn,
  MiddleColumn,
  RightColumn,
  FirstColumnMobile,
  RightColumnMobile,
} from "../components/RecruitmentQuestionsLayout";
import HotkeyTips from "../components/RecruimentQuestions/HotkeyTips";
export default {
  components: {
    FirstColumn,
    MiddleColumn,
    RightColumn,
    FirstColumnMobile,
    RightColumnMobile,
    HotkeyTips,
  },
};
</script>

<style>
.container {
  padding: 0;
}
</style>
