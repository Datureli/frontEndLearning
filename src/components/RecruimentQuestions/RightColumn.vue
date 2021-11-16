<template>
  <v-card class="mt-10 d-grid" width="310" outlined color="transparent">
    <div
 
      style="font-size: 2px;"
      v-for="(javascriptQuestion, index) in favorite.slice(0, 1)"
      :key="index"
    >
      dsadas {{ favorite }}
    </div>


    <v-icon @click="randomQuestion" style="font-size: 125px;"
      >mdi-dice-multiple</v-icon
    >

    <v-spacer></v-spacer>
    <v-icon
      @click="questionLoop"
      class="mx-auto mt-5 mb-5"
      style="font-size: 125px;"
      >mdi-autorenew</v-icon
    >
    <v-icon class="mx-auto mt-5 mb-5" style="font-size: 125px;"
      >mdi-share</v-icon
    >
    <v-spacer></v-spacer>
    <v-icon class="mx-auto" style="font-size: 125px;">mdi-download</v-icon>
    <v-icon @click="disableAnswers" class="mx-auto" style="font-size: 125px;"
      >mdi-comment-off-outline</v-icon
    >
  </v-card>
</template>

<script>
export default {
  computed: {
    disable() {
      return this.$store.state.disable;
    },
    favorite() {
      return this.$store.state.favorite;
    },
    javascriptQuestions() {
      return this.$store.state.questions.javascriptQuestions;
    },
  },
  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    questionLoop() {
      this.$store.dispatch("questions/questionLoop");
    },
    randomQuestion() {
      this.$store.dispatch("questions/randomQuestion");
    },
    addToFavorite(javascriptQuestions) {
      this.$store.state.favorite.push(javascriptQuestions);
    },
  },
};
</script>
