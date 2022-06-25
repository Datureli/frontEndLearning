<template>
  <v-card class="mt-12 d-grid" outlined color="transparent">
    <h3 class="text-md-h6">Test your knowledge</h3>
    <v-form class="pa-4" ref="form" v-model="isFilled">
      <v-select
        v-model="category"
        :rules="categoryRules"
        class="mt-5"
        :items="firstColumn"
        item-text="title"
        label="Category"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        class="mt-5 pt-0"
        :rules="numberOfQuestionsRules"
        :items="numberOfQuestions"
        label="Number of questions"
      ></v-select>
      <v-select
        :rules="difficultyRules"
        class="mt-5 pt-0"
        :items="difficulty"
        item-text="name"
        label="difficulty level"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        :rules="timeRules"
        class="mt-5 pt-0"
        :items="time"
        label="Time"
        persistent-hint
        return-object
        single-line
      ></v-select>
    </v-form>
    <v-btn :disabled="!isFilled" :to="'/about/test-knowledge'">start</v-btn>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      category: "",
      isFilled: false,
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
    ...mapState("rightColumn", ["categoryRules","numberOfQuestionsRules","difficultyRules","timeRules","numberOfQuestions","difficulty","time"])
  },
};
</script>
