<template>
  <v-container fluid class="mx-auto" >
    <v-sheet class="darkGradient mx-auto d-md-flex d-grid">
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
