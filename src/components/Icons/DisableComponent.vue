<template>
  <v-icon x-large @click="disableAnswers">mdi-comment-off-outline</v-icon>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["disableAnswers"]),
  },
  computed: {
    ...mapState(["disable"]),
  },
};
</script>
