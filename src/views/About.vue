<template>
  <v-container fluid>
    <v-row>
      <v-sheet
        height="540"
        width="1500"
        class="darkGradient d-md-flex d-lg-flex d-grid"
      >
        <FirstColumn v-if="$vuetify.breakpoint.mdAndUp" />
        <MiddleColumn />
        <FirstColumnMobile v-if="$vuetify.breakpoint.smAndDown" />
        <RightColumn v-if="$vuetify.breakpoint.mdAndUp" />
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
import {
  FirstColumn,
  MiddleColumn,
  RightColumn,
  FirstColumnMobile,
} from "../components/RecruitmentQuestionsLayout";

export default {
  components: {
    FirstColumn,
    MiddleColumn,
    RightColumn,
    FirstColumnMobile,
  },
};
</script>
