<template>
  <v-card class="mt-10 d-grid" width="310" outlined color="transparent">
    <v-icon style="font-size: 125px;">mdi-heart</v-icon>
    <v-icon style="font-size: 125px;">mdi-dice-multiple</v-icon>

    <v-spacer></v-spacer>
    <v-icon class="mx-auto mt-5 mb-5" style="font-size: 125px;">mdi-autorenew</v-icon>
    <v-icon class="mx-auto mt-5 mb-5" style="font-size: 125px;">mdi-share</v-icon>
    <v-spacer></v-spacer>
    <v-icon class="mx-auto" style="font-size: 125px;">mdi-download</v-icon>
    <v-icon @click="disableAnswers" class="mx-auto" style="font-size: 125px;">mdi-comment-off-outline</v-icon>
  </v-card>
</template>


<script>
export default {
  computed: {
    disable() {
      return this.$store.state.disable;
    },
  },
  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
  },
}
</script>