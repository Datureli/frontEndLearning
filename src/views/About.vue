<template>
  <v-container fluid>
    <v-sheet class="darkGradient full-height">
      <v-row>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" sm="6" md="2">
          <FirstColumn />
        </v-col>
        <v-col justify="center" cols="12" md="8">
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

.full-height {
  height: 100vh;

}
</style>
