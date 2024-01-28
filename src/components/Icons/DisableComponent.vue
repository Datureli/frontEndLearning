<template>
  <v-btn
    elevation="0"
    color="transparent"
    @click="
      disableAnswers();
      changeIcon();
    "
  >
    <v-icon x-large>{{
      disableStatus ? "mdi-comment-off-outline" : "mdi-comment-outline"
    }}</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      disableStatus: true,
    };
  },
  methods: {
    changeIcon() {
      this.disableStatus = !this.disableStatus;
    },
    ...mapActions(["disableAnswers"]),
  },
};
</script>
