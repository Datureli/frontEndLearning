<template>
  <v-container fluid>
    <v-row>
      <v-sheet
        height="540"
        width="1500"
        class="darkGradient justify-center d-md-flex d-lg-flex d-grid"
      >
        <FirstColumn v-if="$vuetify.breakpoint.mdAndUp" />
        <MiddleColumn />

        <RightColumn v-if="$vuetify.breakpoint.mdAndUp" />
        <div class="d-flex mx-auto justify-center">
          <FirstColumnMobile v-if="$vuetify.breakpoint.smAndDown" />
          <RightColumnMobile v-if="$vuetify.breakpoint.smAndDown" />
        </div>
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
  RightColumnMobile,
} from "../components/RecruitmentQuestionsLayout";

export default {
  components: {
    FirstColumn,
    MiddleColumn,
    RightColumn,
    FirstColumnMobile,
    RightColumnMobile,
  },
};
</script>
