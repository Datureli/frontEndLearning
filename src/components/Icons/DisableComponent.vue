<template>
  <v-btn
    color="transparent"
    @click="
      disableAnswers();
      changeIcon();
    "
  >
    <v-icon v-if="disableStatus" x-large>mdi-comment-off-outline</v-icon>
    <v-icon v-else x-large>mdi-comment-outline</v-icon>
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
