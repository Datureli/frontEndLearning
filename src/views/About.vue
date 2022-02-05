<template>
  <v-row justify="center">
    <v-sheet elevation="0" height="560" class="darkGradient pa-5 d-lg-flex d-grid">
      <first-column v-if="$vuetify.breakpoint.mdAndUp" />
      <middle-column />
      <first-column-mobile v-if="$vuetify.breakpoint.smAndDown" />
      <right-column v-if="$vuetify.breakpoint.mdAndUp" />
    </v-sheet>
  </v-row>
</template>

<script>
import {VRow, VSheet} from 'vuetify/lib'
import firstColumn from "../components/RecruimentQuestions/FirstColumn.vue";
import MiddleColumn from "../components/RecruimentQuestions/MiddleColumn.vue";
import RightColumn from "../components/RecruimentQuestions/RightColumn.vue";
import FirstColumnMobile from "../components/RecruimentQuestions/FirstColumnMobile.vue";
export default {
  components: {
    VRow,
    VSheet,
    
    firstColumn,
    MiddleColumn,
    RightColumn,
    FirstColumnMobile,
  },
};
</script>
