<template>
  <v-container fluid>
    <v-row>
      <v-sheet
        height="540"
        width="auto"
        class="darkGradient d-md-flex d-lg-flex d-grid"
      >
        <FirstColumn v-if="$vuetify.breakpoint.mdAndUp" />
        <middle-column />
        <first-column-mobile v-if="$vuetify.breakpoint.smAndDown" />
        <right-column v-if="$vuetify.breakpoint.mdAndUp" />
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
