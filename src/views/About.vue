<template>
  <v-row justify="center">
      <v-sheet elevation="0" height="560" class="darkGradient d-flex">
      <first-column />
      <middle-column />
      <right-column />
    </v-sheet>
  </v-row>
</template>

<script>
import firstColumn from "../components/RecruimentQuestions/FirstColumn.vue";
import MiddleColumn from "../components/RecruimentQuestions/MiddleColumn.vue";
import RightColumn from "../components/RecruimentQuestions/RightColumn.vue";
export default {
  components: {
    firstColumn,
    MiddleColumn,
    RightColumn,
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
  },
};
</script>
