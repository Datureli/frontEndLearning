<template>
  <v-btn color="transparent">
    <v-icon
      v-if="disableStatus"
      x-large
      @click="
        disableAnswers();
        changeIcon();
      "
      >mdi-comment-off-outline</v-icon
    >
    <v-icon
      v-else
      x-large
      @click="
        disableAnswers();
        changeIcon();
      "
      >mdi-comment-outline</v-icon
    >
  </v-btn>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
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
  computed: {
    ...mapState(["disable"]),
  },
};
</script>
