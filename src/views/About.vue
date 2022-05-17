<template>
  <v-row>
    <v-sheet width="auto" color="#00008B" class="darkGradient pa-5 d-md-flex d-lg-flex d-grid">
      <FirstColumn v-if="$vuetify.breakpoint.mdAndUp" />
      <middle-column />
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
