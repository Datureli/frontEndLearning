<template>
  <v-card
    class="mt-12 mx-auto justify-center d-grid"
    outlined
    width="300"
    height="420"
    color="transparent"
  >
    <h3 class="mx-auto mr-16">Test your knowledge</h3>
    <v-form>
      <v-select
        v-model="select"
        :rules="categoryRules"
        class="pa-5 mt-0 mr-16 mx-auto"
        :items="firstColumn"
        item-text="title"
        label="Category"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        class="pa-5 mt-0 pt-0 mr-16 mx-auto"
        :items="numberOfQuestions"
        label="Number of questions"
      ></v-select>
      <v-select
        v-model="select"
        class="pa-5 mt-0 pt-0 mr-16 mx-auto"
        :items="difficulty"
        item-text="name"
        label="difficulty level"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        v-model="select"
        color="red"
        class="pa-5 mt-0 pt-0 mr-16 mx-auto"
        :items="time"
        item-text="state"
        item-value="abbr"
        label="Time"
        persistent-hint
        return-object
        single-line
      ></v-select>
    </v-form>
    <v-btn :to="'/about/test-knowledge'" class="mr-16">start</v-btn>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      categoryRules: [(value) => !!value || "login is required"],
      numberOfQuestionsRules: [(value) => !!value || "login is required"],
      difficultyRules: [(value) => !!value || "login is required"],
      timeRules: [(value) => !!value || "login is required"],
      numberOfQuestions: [10, 15, 20, 25],
      difficulty: [{ name: "easy" }, { name: "medium" }, { name: "hard" }],
      time: [10, 20, 30, 40],
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
  },
};
</script>
