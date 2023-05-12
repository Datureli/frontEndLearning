<template>
  <v-container fluid class="mx-auto">
    <v-sheet class="darkGradient mx-auto">
      <v-row justify="center">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" sm="6" md="2">
          <FirstColumn />
        </v-col>
        <v-col cols="12" sm="6" md="7">
          <MiddleColumn />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" sm="6" md="2">
          <RightColumn />
        </v-col>
        <v-col class="d-flex justify-center" v-if="$vuetify.breakpoint.smAndDown" cols="12">
          <FirstColumnMobile />
        </v-col>
        <v-col class="d-flex justify-center" v-if="$vuetify.breakpoint.smAndDown" cols="12">
          <RightColumnMobile />
        </v-col>
      </v-row>
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

<style scoped>
.container {
  padding: 0;
}
</style>
