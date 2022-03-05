<template>
  <v-row justify="center">
    <v-sheet height="560" class="darkGradient pa-5 d-lg-flex d-grid">
      <FirstColumn v-if="$vuetify.breakpoint.mdAndUp" />
      <MiddleColumn />
      <first-column-mobile v-if="$vuetify.breakpoint.smAndDown" />
      <right-column v-if="$vuetify.breakpoint.mdAndUp" />
    </v-sheet>
    
  </v-row>
</template>

<script>
import { FirstColumn, MiddleColumn, RightColumn, FirstColumnMobile, } from "../components/RecruitmentQuestionsLayout";

export default {
  components: {
    FirstColumn,
    MiddleColumn,
    RightColumn,
    FirstColumnMobile,
  },
};
</script>
